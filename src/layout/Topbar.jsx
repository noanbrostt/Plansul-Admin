import { useState, useEffect, useRef, useMemo } from "react";
import { FiAlignLeft, FiMenu, FiSun, FiMoon } from "react-icons/fi";
import { FaShare } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "@/store/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { getSearchableRoutes } from "@/acl/acl";

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

  // páginas vindas do ACL (apenas o que o usuário pode ver)
  const user = useSelector((state) => state.user.data);
  const pages = useMemo(
    () => getSearchableRoutes(user?.permissionsMap) ?? [],
    [user?.permissionsMap]
  );

  // resultados filtrados
  const results = useMemo(() => {
    const q = normalizeString(query);
    if (!q) return [];
    return pages.filter((p) => normalizeString(p.label).includes(q));
  }, [pages, query]);

  // atalhos
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
      const idx = selectedIndex >= 0 ? selectedIndex : 0;
      const target = results[idx];
      if (target) {
        if (target.targetBlank) {
          window.open(target.to, "_blank", "noopener,noreferrer");
        } else {
          navigate(target.to);
        }
      }
      setOpen(false);
      setQuery("");
      setSelectedIndex(-1);
    }
  };

  const logout = () => {
    dispatch(clearUser());
    navigate("/login");
  };

  const formatInitials = (nome = "") => {
    const partes = nome.trim().split(" ").filter(Boolean);
    const primeira = partes[0]?.[0] || "";
    const ultima = partes.at(-1)?.[0] || "";
    return (primeira + ultima).toUpperCase();
  };

  const formatNome = (nome = "") =>
    nome
      .toLowerCase()
      .split(" ")
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join(" ");

  const userNome = user?.nome || "";
  const initials = formatInitials(userNome);
  const nomeFormatado = formatNome(userNome);

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        {/* Botão colapsar/expandir */}
        <div className="flex items-center">
          <button
            onClick={() => {
              onToggleSidebar();
            }}
            className="btn btn-sm btn-ghost py-5.5"
          >
            {collapsed ? <FiMenu size={24} /> : <FiAlignLeft size={24} />}
          </button>

          {/* Busca */}
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
              type="text"
              className="grow"
              placeholder="Buscar telas (Ctrl+K)"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (!open) setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              onBlur={() => setTimeout(() => setOpen(false), 150)}
              onKeyDown={onInputKeyDown}
            />
            {query.length == 0 && (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-base-content/60">
                <kbd className="kbd kbd-sm">Ctrl</kbd>+
                <kbd className="kbd kbd-sm">K</kbd>
              </span>
            )}
          </label>

          {/* Dropdown resultados */}
          {open && results.length > 0 && (
            <ul className="absolute z-50 left-[326px] top-[56px] w-86 bg-base-100 shadow-lg rounded-md overflow-auto">
              {results.map(({ label, to, icon, targetBlank }, idx) => (
                <li key={`${to}-${idx}`}>
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
                      {icon && <span className="text-lg">{icon}</span>}
                      <span>{label}</span>
                      <FaShare className="ml-auto opacity-70" />
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
                      {icon && <span className="text-lg">{icon}</span>}
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
        {/* Tema */}
        <label className="swap swap-rotate h-12 w-12 bg-base-content btn btn-circle grid">
          <input
            type="checkbox"
            className="theme-controller"
            onChange={onToggleTheme}
            checked={currentTheme === "myDarkTheme"}
          />
          <FiSun className="swap-on text-base-100 h-6 w-6" />
          <FiMoon className="swap-off text-base-100 h-6 w-6" />
        </label>

        {/* Usuário */}
        <div className="dropdown dropdown-end tooltip">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar w-full"
          >
            <div className="w-12 h-12 rounded-full flex content-center bg-base-content text-base-100">
              <span className="text-md font-semibold">{initials}</span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1001] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li className="menu-title px-3 pt-2 pb-1 opacity-60">
              {nomeFormatado || "Usuário"}
            </li>
            <li>
              <a
                className="justify-between"
                onClick={() => navigator.clipboard.writeText(location.href)}
              >
                Compartilhar link
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block h-4 w-4 opacity-60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h6m0 0v6m0-6L10 16m-4 4h6a2 2 0 002-2v-6"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a className="justify-between text-error" onClick={logout}>
                Sair
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block h-4 w-4 opacity-60"
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
