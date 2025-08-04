// Ícones
import { FiHome } from "react-icons/fi";
import { RiInputField, RiUserForbidLine, RiHealthBookLine } from "react-icons/ri";
import { CgPlayButtonR, CgFileDocument } from "react-icons/cg";
import {
  MdScreenshotMonitor,
  MdRadioButtonChecked,
  MdScreenSearchDesktop,
  MdOutlineDesignServices,
  MdOutlineFitScreen,
  MdManageSearch,
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
  FaUsersCog,
} from "react-icons/fa";
import { FaUserTag } from "react-icons/fa6";
import { TbCheckbox, TbCreditCard, TbIcons } from "react-icons/tb";
import { GoMultiSelect } from "react-icons/go";
import { BsTextareaResize } from "react-icons/bs";
import { AiOutlineRadarChart } from "react-icons/ai";

export const menuConfig = {
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
  ambulatorioSection: {
    title: "Ambulatório",
    items: [
      {
        label: "Cadastro de Atestados",
        to: "/ambulatorio/cadastro-atestados",
        icon: <RiHealthBookLine />
      },
      {
        label: "Gestão de Atestados",
        to: "/ambulatorio/gestao-atestados",
        icon: <MdManageSearch />
      },
    ]
  },
  adminSection: {
    title: "Admin",
    items: [
      {
        label: "Gestão de Acessos",
        to: "/admin/acessos",
        icon: <FaUsersCog />
      },
      {
        label: "Gestão de Perfis",
        to: "/admin/perfis",
        icon: <FaUserTag />
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
