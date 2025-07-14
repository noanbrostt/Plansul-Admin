import { Link, useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { useSidebarContext } from "./SidebarContext";

// Recebe props individuais em vez de um objeto 'item'
export default function SidebarDropdown({
  label,
  icon,
  subItems,
  targetBlank = false,
}) {
  const { collapsed, hovering, openDropdown, handleDropdownToggle } =
    useSidebarContext();
  const location = useLocation();
  const isParentActive = subItems.some((sub) => location.pathname === sub.to);
  const isOpen = openDropdown === label;

  return (
    <li className={`overflow-hidden ${!collapsed || hovering ? "" : "w-fit"}`}>
      <div
        onClick={() => handleDropdownToggle(label)}
        className={`h-[37px] flex items-center justify-between p-2 rounded-lg hover:bg-base-300 cursor-pointer w-full 
          ${
            (isParentActive && !isOpen) ||
            (isParentActive && collapsed && !hovering)
              ? "bg-primary hover:bg-secondary text-primary-content"
              : ""
          }
          ${!collapsed || hovering ? "" : " -mr-[11px]"}
        `}
      >
        <div className="flex items-center gap-3">
          <span className="text-lg">{icon}</span>
          <span className="truncate max-w-[140px]">
            {(!collapsed || hovering) && label}
          </span>
        </div>
        {(!collapsed || hovering) && (
          <span
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <FiChevronDown />
          </span>
        )}
      </div>
      {(!collapsed || hovering) && (
        <ul
          className={`pl-4 pt-2 gap-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out [&>:last-child]:mb-4 ${
            isOpen ? "max-h-[1000px]" : "max-h-0 -mt-2"
          }`}
        >
          {subItems.map((subItem) => (
            <li key={subItem.to}>
              <Link
                to={subItem.to}
                className={`flex items-center gap-3 p-2 rounded-lg hover:bg-base-300 w-full 
                  ${
                    location.pathname === subItem.to
                      ? "bg-primary hover:bg-secondary text-primary-content"
                      : ""
                  }
                `}
  {...(subItem.targetBlank ? { 
    target: "_blank", 
    rel: "noopener noreferrer" 
  } : {})}              >
                <span className="text-lg">{subItem.icon}</span>
                <span className="truncate max-w-[140px]">{subItem.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
