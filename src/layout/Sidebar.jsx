import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

// Componentes locais
import { SidebarProvider } from "./components/Sidebar/SidebarContext";
import SidebarHeader from "./components/Sidebar/SidebarHeader";
import SidebarSection from "./components/Sidebar/SidebarSection";
import SidebarLink from "./components/Sidebar/SidebarLink";
import SidebarDropdown from "./components/Sidebar/SidebarDropdown";

// Configuração do menu
import { menuConfig } from "@/layout/components/Sidebar/MenuConfig";

export default function Sidebar({
  collapsed,
  openDropdown,
  handleDropdownToggle,
  currentTheme,
}) {
  const [hovering, setHovering] = useState(false);
  const user = useSelector((state) => state.user.data);

  // Memoriza a configuração do menu
  const memoizedMenuConfig = useMemo(() => menuConfig, []);

  return (
    <SidebarProvider
      collapsed={collapsed}
      hovering={hovering}
      openDropdown={openDropdown}
      handleDropdownToggle={handleDropdownToggle}
    >
      <aside
        className={`
          bg-base-200 pb-0 min-h-screen flex flex-col transition-[width,opacity,transform] duration-300 ease-in-out overflow-hidden ${
            collapsed && !hovering ? "w-20" : "w-64"
          }
        `}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <SidebarHeader currentTheme={currentTheme} />

        <SimpleBar
          style={{ maxHeight: "calc(100vh - 64px)" }}
          className="menu -ml-0.5 p-3 pl-3.5 w-full"
          forceVisible="y"
        >
          {/* Seção Menu Principal */}
          <SidebarSection
            title={memoizedMenuConfig.mainSection.title}
            sectionKey="menu"
          >
            {memoizedMenuConfig.mainSection.items.map((item) => (
              <SidebarLink
                key={item.label}
                label={item.label}
                to={item.to}
                icon={item.icon}
              />
            ))}
          </SidebarSection>

          {/* Seção Ambulatório */}
          <SidebarSection
            title={memoizedMenuConfig.ambulatorioSection.title}
            sectionKey="ambulatorio"
          >
            {memoizedMenuConfig.ambulatorioSection.items.map((item) => (
              <SidebarLink
                key={item.label}
                label={item.label}
                to={item.to}
                icon={item.icon}
              />
            ))}
          </SidebarSection>

          {/* Seção Admin */}
          {user.permissoes?.includes("DEV_Teste_User") && (
            <SidebarSection
              title={memoizedMenuConfig.adminSection.title}
              sectionKey="admin"
            >
              {memoizedMenuConfig.adminSection.items.map((item) => (
                <SidebarLink
                  key={item.label}
                  label={item.label}
                  to={item.to}
                  icon={item.icon}
                />
              ))}
            </SidebarSection>
          )}

          {/* Seção Devs */}
          {user.permissoes?.includes("DEV_Teste_User") && (
            <SidebarSection
              title={memoizedMenuConfig.devsSection.title}
              sectionKey="devs"
            >
              {memoizedMenuConfig.devsSection.items.map((item) => (
                <SidebarDropdown
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  subItems={item.subItems}
                />
              ))}
            </SidebarSection>
          )}
        </SimpleBar>
      </aside>
    </SidebarProvider>
  );
}
