import { useState, useEffect, Children, isValidElement } from "react";
import { useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { useSidebarContext } from "./SidebarContext";

// Função recursiva para verificar se algum item está ativo
const hasActiveChild = (children, currentPath) => {
  let isActive = false;

  Children.forEach(children, (child) => {
    if (isActive) return;

    if (isValidElement(child)) {
      // Verifica SidebarLink
      if (child.props.to) {
        // Caso especial para a raiz ("/")
        if (child.props.to === "/") {
          if (currentPath === "/") {
            isActive = true;
            return;
          }
        }
        // Para outras rotas
        else if (currentPath.startsWith(child.props.to)) {
          isActive = true;
          return;
        }
      }

      // Verifica SidebarDropdown
      if (child.props.subItems) {
        const hasActiveSubItem = child.props.subItems.some((subItem) => {
          // Caso especial para a raiz
          if (subItem.to === "/") {
            return currentPath === "/";
          }
          // Para outras rotas
          return currentPath.startsWith(subItem.to);
        });
        if (hasActiveSubItem) {
          isActive = true;
          return;
        }
      }

      // Verifica filhos recursivamente
      if (child.props.children) {
        isActive = hasActiveChild(child.props.children, currentPath);
        if (isActive) return;
      }
    }
  });

  return isActive;
};

const SidebarSection = ({ title, sectionKey, children }) => {
  const { collapsed, hovering } = useSidebarContext();
  const location = useLocation();

  // Estado para controlar a expansão da seção
  const [isExpanded, setIsExpanded] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`sidebarSection_${sectionKey}`);
      return saved !== null ? JSON.parse(saved) : true;
    }
    return true;
  });

  // Verificar se algum filho está ativo
  const isChildActive = hasActiveChild(children, location.pathname);

  // Salvar estado no localStorage
  useEffect(() => {
    localStorage.setItem(
      `sidebarSection_${sectionKey}`,
      JSON.stringify(isExpanded)
    );
  }, [isExpanded, sectionKey]);

  const toggleSection = () => {
    setIsExpanded((prev) => !prev);
  };

  // Determinar o texto a ser exibido com base no estado do sidebar
  const displayText = !collapsed || hovering ? title : "...";

  return (
    <>
      <li className={`mt-0 mb-0 ${collapsed && !hovering && "pl-2"}`}>
        <div
          className={`flex items-center justify-between cursor-pointer px-2 py-3 my-1 hover:bg-base-300 rounded-lg transition-colors
            ${
              isChildActive && !isExpanded
                ? "bg-primary hover:bg-secondary"
                : ""
            }
            ${!collapsed || hovering ? "w-full" : "w-[37px] justify-center"}
          `}
          onClick={toggleSection}
        >
          <span
            className={`text-xs font-semibold uppercase tracking-wider ${
              isChildActive && !isExpanded
                ? "text-primary-content"
                : "text-gray-500"
            }`}
          >
            {displayText}
          </span>

          {(!collapsed || hovering) && (
            <span
              className={`transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }
              ${
                isChildActive && !isExpanded
                  ? "text-primary-content"
                  : "text-gray-500"
              }`}
            >
              <FiChevronDown />
            </span>
          )}
        </div>
      </li>
      <div
        className={`flex flex-col gap-1 pl-[9.5px] [&>:last-child]:mb-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default SidebarSection;
