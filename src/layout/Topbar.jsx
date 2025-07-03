import { FiAlignLeft, FiMenu, FiSun, FiMoon } from "react-icons/fi";
import { useSelector } from "react-redux";

export default function Topbar({
  collapsed,
  onToggleSidebar,
  currentTheme,
  onToggleTheme,
  setOpenDropdown,
}) {
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
              if (!collapsed) setOpenDropdown(null); // Fecha dropdowns ao colapsar
            }}
            className="btn btn-sm btn-ghost py-5.5"
          >
            {collapsed ? <FiMenu size={24} /> : <FiAlignLeft size={24} />}
          </button>
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
        <div className="dropdown dropdown-end tooltip tooltip-left" data-tip={nomeFormatado}>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar w-full"
          >
            <div
              className="w-12 h-12 rounded-full flex content-center bg-base-content text-base-100"
            >
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
              <a className="text-xs pointer-events-none">
                {userMatricula}
              </a>
            </li>
            <li>
              <a className="text-sm pointer-events-none">
                Administrador
              </a>
            </li>
            <li>
              <a className="text-error hover:text-error flex items-center gap-1">
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
