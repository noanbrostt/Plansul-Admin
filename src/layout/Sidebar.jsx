import { useState } from "react";
import { FiHome, FiUsers, FiLogIn } from "react-icons/fi";
import { RiInputField } from "react-icons/ri";
import { CgPlayButtonR } from "react-icons/cg";
import { MdScreenshotMonitor } from "react-icons/md";
import { IoCubeOutline } from "react-icons/io5";
import { RxBadge } from "react-icons/rx";
import { MdScreenSearchDesktop } from "react-icons/md";
import { SiAdblock } from "react-icons/si";
import { FaTable } from "react-icons/fa";
import { TbCheckbox } from "react-icons/tb";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { SidebarProvider } from "./components/Sidebar/SidebarContext";
import { useSelector } from "react-redux";

import SidebarHeader from "./components/Sidebar/SidebarHeader";
import SidebarSection from "./components/Sidebar/SidebarSection";
import SidebarLink from "./components/Sidebar/SidebarLink";
import SidebarDropdown from "./components/Sidebar/SidebarDropdown";

export default function Sidebar({
  collapsed,
  openDropdown,
  handleDropdownToggle,
  currentTheme,
}) {
  const [hovering, setHovering] = useState(false);

  const user = useSelector((state) => state.user.data);

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
          <SidebarSection title="Menu" sectionKey="menu">
            <SidebarLink label="Home" to="/" icon={<FiHome />} />
            <SidebarLink label="Usuários" to="/users" icon={<FiUsers />} />
          </SidebarSection>

          {/* Seção Devs */}
          {user.permissoes?.includes("DEV_Teste_User") && (
            <SidebarSection title="Devs" sectionKey="devs">
              <SidebarDropdown
                label="Telas"
                icon={<MdScreenshotMonitor />}
                subItems={[
                  // { label: "Login", to: "/login", icon: <FiLogIn /> },
                  {
                    label: "Not Found",
                    to: "*",
                    icon: <MdScreenSearchDesktop />,
                  },
                  { label: "Forbidden", to: "/negado", icon: <SiAdblock /> },
                ]}
              />
              <SidebarDropdown
                label="Elementos UI"
                icon={<IoCubeOutline />}
                subItems={[
                  {
                    label: "Botões",
                    to: "/devs/ui/botoes",
                    icon: <CgPlayButtonR />,
                  },
                  {
                    label: "Checkboxes",
                    to: "/devs/ui/checkboxes",
                    icon: <TbCheckbox />,
                  },
                  {
                    label: "Etiquetas",
                    to: "/devs/ui/etiquetas",
                    icon: <RxBadge />,
                  },
                  {
                    label: "Inputs",
                    to: "/devs/ui/inputs",
                    icon: <RiInputField />,
                  },
                  {
                    label: "Tabelas",
                    to: "/devs/ui/tabelas",
                    icon: <FaTable />,
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
