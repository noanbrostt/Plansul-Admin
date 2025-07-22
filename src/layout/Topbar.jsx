import { useState, useEffect, useRef, useMemo } from "react";
import { FiAlignLeft, FiMenu, FiSun, FiMoon } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "@/store/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { menuConfig } from "@/layout/components/Sidebar/MenuConfig";

// helper para remover acentos e normalizar
function normalizeString(str = "") {
  return str
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

export default function Topbar({
  collapsed,
  onToggleSidebar,
  currentTheme,
  onToggleTheme,
}) {
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // lista de páginas
  const pages = useMemo(() => {
    const sections = Object.values(menuConfig);
    return sections.flatMap((section) =>
      section.items.flatMap((item) => {
        const self = item.to
          ? [{ label: item.label, to: item.to, icon: item.icon }]
          : [];
        const subs = (item.subItems || []).map((sub) => ({
          label: sub.label,
          to: sub.to,
          icon: sub.icon,
          targetBlank: sub.targetBlank,
        }));
        return [...self, ...subs];
      })
    );
  }, []);

  // resultados filtrados
  const results = useMemo(() => {
    const q = normalizeString(query);
    if (!q) return [];
    return pages.filter((p) => normalizeString(p.label).includes(q));
  }, [pages, query]);

  // atalho Ctrl+K
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
        setSelectedIndex(-1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const onInputKeyDown = (e) => {
    if (!open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      // escolhe o item atual ou o primeiro
      const idx = selectedIndex >= 0 ? selectedIndex : 0;
      const target = results[idx];
      if (target) {
        if (target.targetBlank) {
          // abre nova aba
          window.open(target.to, "_blank", "noopener,noreferrer");
        } else {
          // rota interna
          navigate(target.to);
        }
      }
      // limpa e fecha
      setOpen(false);
      setQuery("");
      setSelectedIndex(-1);
    }
  };

  const logout = () => {
    dispatch(clearUser());
    navigate("/login");
  };

  const user = useSelector((state) => state.user.data);

  const formatInitials = (nome) => {
    const partes = nome.trim().split(" ");
    if (partes.length === 0) return "";
    const primeira = partes[0]?.[0] || "";
    const ultima = partes.at(-1)?.[0] || "";
    return (primeira + ultima).toUpperCase();
  };

  const formatNome = (nome) => {
    return nome
      .toLowerCase()
      .split(" ")
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join(" ");
  };
  const userNome = user?.nome || "";
  const userMatricula = user?.matricula || "";
  const initials = formatInitials(userNome);
  const nomeFormatado = formatNome(userNome);

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        {/*- botão de colapsar/expandir */}
        <div className="flex items-center">
          <button
            onClick={() => {
              onToggleSidebar();
              if (!collapsed); // Fecha dropdowns ao colapsar
            }}
            className="btn btn-sm btn-ghost py-5.5"
          >
            {collapsed ? <FiMenu size={24} /> : <FiAlignLeft size={24} />}
          </button>

          <label className="input w-86 ml-3">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 text-gray-400"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              ref={inputRef}
              placeholder="Buscar Página..."
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
                setSelectedIndex(-1);
              }}
              onFocus={() => {
                setOpen(true);
                setSelectedIndex(-1);
              }}
              onBlur={() => {
                setTimeout(() => setOpen(false), 150);
              }}
              onKeyDown={onInputKeyDown}
            />
            {query.length == 0 && (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-base-content/60">
                <kbd className="kbd kbd-sm">Ctrl</kbd>+
                <kbd className="kbd kbd-sm">K</kbd>
              </span>
            )}
          </label>
          {/* Dropdown */}
          {open && results.length > 0 && (
            <ul className="absolute z-50 left-[326px] top-[56px] w-86 bg-base-100 shadow-lg rounded-md overflow-auto">
              {results.map(({ label, to, icon, targetBlank }, idx) => (
                <li key={to}>
                  {targetBlank ? (
                    <a
                      href={to}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseDown={(e) => e.preventDefault()}
                      className={`flex items-center gap-3 px-4 py-2 hover:bg-base-200 ${
                        idx === selectedIndex ? "bg-base-200" : ""
                      }`}
                    >
                      <span className="text-lg">{icon}</span>
                      <span>{label}</span>
                    </a>
                  ) : (
                    <Link
                      to={to}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        navigate(to);
                        setOpen(false);
                        setQuery("");
                        setSelectedIndex(-1);
                      }}
                      className={`flex items-center gap-3 px-4 py-2 hover:bg-base-200 ${
                        idx === selectedIndex ? "bg-base-200" : ""
                      }`}
                    >
                      <span className="text-lg">{icon}</span>
                      <span>{label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex-none gap-3 items-center flex px-2">
        <label className="swap swap-rotate btn btn-circle h-12 w-12">
          <input
            type="checkbox"
            className="theme-controller"
            onChange={onToggleTheme}
            checked={currentTheme === "dark"}
          />
          <FiSun className="swap-on fill-current text-2xl" />
          <FiMoon className="swap-off fill-current text-2xl" />
        </label>

        {/* Info Usuário */}
        <div className="dropdown dropdown-end tooltip">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar w-full"
          >
            <div className="w-12 h-12 rounded-full flex content-center bg-base-content text-base-100">
              <span className="text-sm font-semibold">{initials}</span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="text-base pointer-events-none">{nomeFormatado}</a>
            </li>
            <li>
              <a className="text-xs pointer-events-none">{userMatricula}</a>
            </li>
            <li>
              <a
                className="text-error hover:text-error flex items-center gap-1"
                onClick={logout}
              >
                Logout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-9V5m-3 14h6a2 2 0 002-2V7a2 2 0 00-2-2h-6"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
