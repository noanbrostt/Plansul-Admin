import { useState } from "react";
import {
  FiHome,
  FiUsers,
  FiSettings,
  FiCreditCard,
  FiUser,
  FiLogIn,
} from "react-icons/fi";
import { MdScreenshotMonitor } from "react-icons/md";

// Importe dos componentes e do Context Provider
import SidebarHeader from "./components/Sidebar/SidebarHeader";
import SidebarSectionTitle from "./components/Sidebar/SidebarSectionTitle";
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

  return (
    <SidebarProvider
      collapsed={collapsed}
      hovering={hovering}
      openDropdown={openDropdown}
      handleDropdownToggle={handleDropdownToggle}
    >
      <aside
        className={`
          bg-base-200 p-4 min-h-screen flex flex-col transition-[width,opacity,transform] duration-300 ease-in-out overflow-hidden ${
            collapsed && !hovering ? "w-20" : "w-64"
          }
        `}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {/* Logo */}
        <SidebarHeader currentTheme={currentTheme} />

        {/* Lista de navegação */}
        <ul className="menu space-y-2 w-full">

          <SidebarSectionTitle title="Menu" />
          <SidebarLink label="Home" to="/" icon={<FiHome />} />
          <SidebarLink label="Usuários" to="/users" icon={<FiUsers />} />
          <SidebarDropdown
            label="Configurações"
            icon={<FiSettings />}
            subItems={[
              { label: "Perfil", to: "/settings/profile", icon: <FiUser /> },
              {
                label: "Faturamento",
                to: "/",
                icon: <FiCreditCard />,
              },
            ]}
          />

          <SidebarSectionTitle title="Devs" />
          <SidebarDropdown
            label="Telas"
            icon={<MdScreenshotMonitor />}
            subItems={[{ label: "Login", to: "/", icon: <FiLogIn /> }]}
          />

        </ul>
      </aside>
    </SidebarProvider>
  );
}
