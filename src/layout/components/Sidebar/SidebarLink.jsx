import { Link, useLocation } from "react-router-dom";
import { useSidebarContext } from "./SidebarContext";

// Recebe props individuais em vez de um objeto 'item'
export default function SidebarLink({ label, to, icon }) {
  const { collapsed, hovering } = useSidebarContext();
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className={!collapsed || hovering ? "" : "w-fit"}>
      <Link
        to={to} // Usar 'to' diretamente
        className={`flex items-center gap-3 p-2 rounded-lg hover:bg-base-300 w-full 
          ${isActive ? "bg-primary text-primary-content" : ""}
        `}
      >
        <span className="text-lg">{icon}</span>
        {(!collapsed || hovering) && <span>{label}</span>}{" "}
      </Link>
    </li>
  );
}
