import { useState, useMemo } from "react";
import {
  FiHome,
  FiUsers,
  FiSettings,
  FiCreditCard,
  FiUser,
  FiLogIn,
} from "react-icons/fi";
import { RiInputField } from "react-icons/ri";
import { CgPlayButtonR } from "react-icons/cg";
import { MdScreenshotMonitor } from "react-icons/md";
import { IoCubeOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

// Importe dos componentes e do Context Provider
import SidebarHeader from "./components/Sidebar/SidebarHeader";
import SidebarSection from "./components/Sidebar/SidebarSection";
import SidebarLink from "./components/Sidebar/SidebarLink";
import SidebarDropdown from "./components/Sidebar/SidebarDropdown";
import { SidebarProvider } from "./components/Sidebar/SidebarContext";

export default function Sidebar({
  collapsed,
  openDropdown,
  handleDropdownToggle,
  currentTheme,
}) {
  const [hovering, setHovering] = useState(false);

  const permissions = useMemo(() => {
    return {
      menu: true,
      devs: true,
    };
  }, []); // Array vazio = só calcula uma vez na montagem

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
        <SidebarHeader currentTheme={currentTheme} /> {/* Logo */}
        <SimpleBar
          style={{ maxHeight: "calc(100vh - 64px)" }}
          className="menu -ml-0.5 p-3 pl-3.5 w-full"
          forceVisible="y"
          // autoHide={false}
        >
          {/* Seção Menu */}
          {permissions.menu && (
              <SidebarSection title="Menu" sectionKey="menu">
                  <SidebarLink label="Home" to="/" icon={<FiHome />} />
                  <SidebarLink
                    label="Usuários"
                    to="/users"
                    icon={<FiUsers />}
                  />
              </SidebarSection>
          )}

          {/* Seção Devs */}
          {permissions.devs && (
              <SidebarSection title="Devs" sectionKey="devs">
                  <SidebarDropdown
                    label="Telas"
                    icon={<MdScreenshotMonitor />}
                    subItems={[{ label: "Login", to: "/login", icon: <FiLogIn /> }]}
                  />
                  <SidebarDropdown
                    label="Elementos UI"
                    icon={<IoCubeOutline />}
                    subItems={[
                      {
                        label: "Botões",
                        to: "/buttons",
                        icon: <CgPlayButtonR />,
                      },
                      {
                        label: "Etiquetas",
                        to: "/badges",
                        icon: <LuBadgeCheck />,
                      },
                      {
                        label: "Inputs",
                        to: "/inputs",
                        icon: <RiInputField />,
                      },
                    ]}
                  />
              </SidebarSection>
          )}
        </SimpleBar>
      </aside>
    </SidebarProvider>
  );
}
