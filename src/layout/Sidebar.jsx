import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

// Ícones
import { FiHome } from "react-icons/fi";
import { RiInputField, RiUserForbidLine } from "react-icons/ri";
import { CgPlayButtonR, CgFileDocument } from "react-icons/cg";
import {
  MdScreenshotMonitor,
  MdRadioButtonChecked,
  MdScreenSearchDesktop,
  MdOutlineDesignServices,
  MdOutlineFitScreen,
} from "react-icons/md";
import { IoCubeOutline } from "react-icons/io5";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { RxBadge } from "react-icons/rx";
import {
  FaTable,
  FaChartArea,
  FaChartPie,
  FaChartBar,
  FaChartLine,
  FaRegCalendar,
} from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { TbCheckbox, TbCreditCard, TbIcons } from "react-icons/tb";
import { GoMultiSelect } from "react-icons/go";
import { BsTextareaResize } from "react-icons/bs";
import { AiOutlineRadarChart } from "react-icons/ai";

// Componentes locais
import { SidebarProvider } from "./components/Sidebar/SidebarContext";
import SidebarHeader from "./components/Sidebar/SidebarHeader";
import SidebarSection from "./components/Sidebar/SidebarSection";
import SidebarLink from "./components/Sidebar/SidebarLink";
import SidebarDropdown from "./components/Sidebar/SidebarDropdown";

// Configuração do menu
const menuConfig = {
  mainSection: {
    title: "Menu",
    items: [
      {
        label: "Home",
        to: "/",
        icon: <FiHome />
      },
    ]
  },
  adminSection: {
    title: "Admin",
    items: [
      {
        label: "Gestão de Usuários",
        to: "/admin/usuarios",
        icon: <FaUserGear />
      },
    ]
  },
  devsSection: {
    title: "Devs",
    items: [
      {
        label: "Documentação",
        icon: <CgFileDocument />,
        subItems: [
          {
            label: "Ícones",
            to: "https://react-icons.github.io/react-icons/search/#q=",
            icon: <TbIcons />,
            targetBlank: true
          },
          {
            label: "DaisyUI",
            to: "https://daisyui.com/components/",
            icon: <MdOutlineDesignServices />,
            targetBlank: true
          },
          {
            label: "Recharts",
            to: "https://recharts.org/en-US/examples/",
            icon: <FaChartBar />,
            targetBlank: true
          },
        ]
      },
      {
        label: "Telas",
        icon: <MdScreenshotMonitor />,
        subItems: [
          {
            label: "Tela de Exemplo",
            to: "/devs/telas/exemplo",
            icon: <MdOutlineFitScreen />
          },
          {
            label: "Calendário",
            to: "/devs/telas/calendario",
            icon: <FaRegCalendar />
          },
          {
            label: "Not Found",
            to: "*",
            icon: <MdScreenSearchDesktop />
          },
          {
            label: "Forbidden",
            to: "/negado",
            icon: <RiUserForbidLine />
          },
        ]
      },
      {
        label: "Elementos UI",
        icon: <IoCubeOutline />,
        subItems: [
          {
            label: "Blocos",
            to: "/devs/ui/blocos",
            icon: <TbCreditCard />
          },
          {
            label: "Botões",
            to: "/devs/ui/botoes",
            icon: <CgPlayButtonR />
          },
          {
            label: "Checkboxes e Toggles",
            to: "/devs/ui/checkboxes",
            icon: <TbCheckbox />
          },
          {
            label: "Etiquetas",
            to: "/devs/ui/etiquetas",
            icon: <RxBadge />
          },
          {
            label: "Inputs",
            to: "/devs/ui/inputs",
            icon: <RiInputField />
          },
          {
            label: "Radios",
            to: "/devs/ui/radios",
            icon: <MdRadioButtonChecked />
          },
          {
            label: "Selects",
            to: "/devs/ui/selects",
            icon: <GoMultiSelect strokeWidth="1px" />
          },
          {
            label: "Tabelas",
            to: "/devs/ui/tabelas",
            icon: <FaTable />
          },
          {
            label: "Textareas",
            to: "/devs/ui/textareas",
            icon: <BsTextareaResize />
          }
        ]
      },
      {
        label: "Gráficos",
        icon: <FaChartBar />,
        subItems: [
          {
            label: "De Área",
            to: "/devs/graficos/area",
            icon: <FaChartArea />
          },
          {
            label: "De Barra",
            to: "/devs/graficos/barra",
            icon: <FaChartBar />
          },
          {
            label: "De Linha",
            to: "/devs/graficos/linha",
            icon: <FaChartLine />
          },
          {
            label: "De Pizza",
            to: "/devs/graficos/pizza",
            icon: <FaChartPie />
          },
          {
            label: "De Radar",
            to: "/devs/graficos/radar",
            icon: <AiOutlineRadarChart />
          },
          {
            label: "Compostos",
            to: "/devs/graficos/compostos",
            icon: <LuChartNoAxesCombined strokeWidth="2.5px" />
          }
        ]
      }
    ]
  }
};

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