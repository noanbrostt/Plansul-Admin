// Todas as rotas internas atuais, com ícones e metadados de grupo (para dropdowns).
import { FiHome, FiLoader } from "react-icons/fi";
import { RiInputField, RiHealthBookLine } from "react-icons/ri";
import { CgPlayButtonR, CgFileDocument } from "react-icons/cg";
import { MdRadioButtonChecked, MdOutlineFitScreen, MdManageSearch, MdOutlineDesignServices, MdSportsEsports } from "react-icons/md";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { RxBadge } from "react-icons/rx";
import { TbCreditCard, TbCheckbox, TbIcons } from "react-icons/tb";
import { GoMultiSelect } from "react-icons/go";
import {
  FaUsersCog,
  FaUserTag,
  FaRegCalendar,
  FaTable,
  FaChartArea,
  FaChartBar,
  FaChartLine,
  FaChartPie,
} from "react-icons/fa";
import { AiOutlineRadarChart } from "react-icons/ai";
import { BsTextareaResize } from "react-icons/bs";

export const SECTIONS = {
  home: { key: "home", title: "Início" },
  admin: { key: "admin", title: "Administração" },
  ambulatorio: { key: "ambulatorio", title: "Ambulatório" },
  devs: { key: "devs", title: "Dev/Playground" },
  // docs não é mais seção própria — fica dentro de "devs" como dropdown
};

export const ROUTES_REGISTRY = [
  // HOME (pós-login; sem featureKey => sempre visível)
  {
    id: "home.dashboard",
    label: "Home",
    section: "home",
    path: "/",
    icon: <FiHome />,
    featureKey: null,
  },

  // AMBULATÓRIO
  {
    id: "ambulatorio.cadastro-atestados",
    label: "Cadastro de Atestados",
    section: "ambulatorio",
    path: "/ambulatorio/cadastro-atestados",
    icon: <RiHealthBookLine />,
    featureKey: "ambulatorio.cadastro-atestados",
  },
  {
    id: "ambulatorio.gestao-atestados",
    label: "Gestão de Atestados",
    section: "ambulatorio",
    path: "/ambulatorio/gestao-atestados",
    icon: <MdManageSearch />,
    featureKey: "ambulatorio.gestao-atestados",
  },

  // ADMIN
  {
    id: "admin.gestao-acessos",
    label: "Gestão de Acessos",
    section: "admin",
    path: "/admin/acessos",
    icon: <FaUsersCog />,
    featureKey: "admin.gestao-acessos",
  },
  {
    id: "admin.gestao-perfis",
    label: "Gestão de Perfis",
    section: "admin",
    path: "/admin/perfis",
    icon: <FaUserTag />,
    featureKey: "admin.gestao-perfis",
  },

  // DEVS — TELAS (grupo: Telas)
  {
    id: "devs.telas.calendario",
    label: "Calendário",
    section: "devs",
    path: "/devs/telas/calendario",
    icon: <FaRegCalendar />,
    featureKey: "devs.telas.calendario",
    groupLabel: "Telas",
    groupIcon: <MdOutlineFitScreen />,
  },
  {
    id: "devs.telas.exemplo",
    label: "Tela de Exemplo",
    section: "devs",
    path: "/devs/telas/exemplo",
    icon: <MdOutlineFitScreen />,
    featureKey: "devs.telas.exemplo",
    groupLabel: "Telas",
    groupIcon: <MdOutlineFitScreen />,
  },
  {
    id: "devs.telas.loading",
    label: "Tela de Loading",
    section: "devs",
    path: "/devs/telas/loading",
    icon: <FiLoader />,
    featureKey: "devs.telas.loading",
    groupLabel: "Telas",
    groupIcon: <MdOutlineFitScreen />,
  },

  // DEVS — UI (grupo: UI)
  {
    id: "devs.ui.blocos",
    label: "Blocos",
    section: "devs",
    path: "/devs/ui/blocos",
    icon: <TbCreditCard />,
    featureKey: "devs.ui.blocos",
    groupLabel: "UI",
    groupIcon: <MdOutlineDesignServices />,
  },
  {
    id: "devs.ui.botoes",
    label: "Botões",
    section: "devs",
    path: "/devs/ui/botoes",
    icon: <CgPlayButtonR />,
    featureKey: "devs.ui.botoes",
    groupLabel: "UI",
    groupIcon: <MdOutlineDesignServices />,
  },
  {
    id: "devs.ui.checkboxes",
    label: "Checkboxes e Toggles",
    section: "devs",
    path: "/devs/ui/checkboxes",
    icon: <TbCheckbox />,
    featureKey: "devs.ui.checkboxes",
    groupLabel: "UI",
    groupIcon: <MdOutlineDesignServices />,
  },
  {
    id: "devs.ui.etiquetas",
    label: "Etiquetas",
    section: "devs",
    path: "/devs/ui/etiquetas",
    icon: <RxBadge />,
    featureKey: "devs.ui.etiquetas",
    groupLabel: "UI",
    groupIcon: <MdOutlineDesignServices />,
  },
  {
    id: "devs.ui.inputs",
    label: "Inputs",
    section: "devs",
    path: "/devs/ui/inputs",
    icon: <RiInputField />,
    featureKey: "devs.ui.inputs",
    groupLabel: "UI",
    groupIcon: <MdOutlineDesignServices />,
  },
  {
    id: "devs.ui.radios",
    label: "Radios",
    section: "devs",
    path: "/devs/ui/radios",
    icon: <MdRadioButtonChecked />,
    featureKey: "devs.ui.radios",
    groupLabel: "UI",
    groupIcon: <MdOutlineDesignServices />,
  },
  {
    id: "devs.ui.selects",
    label: "Selects",
    section: "devs",
    path: "/devs/ui/selects",
    icon: <GoMultiSelect />,
    featureKey: "devs.ui.selects",
    groupLabel: "UI",
    groupIcon: <MdOutlineDesignServices />,
  },
  {
    id: "devs.ui.tabelas",
    label: "Tabelas",
    section: "devs",
    path: "/devs/ui/tabelas",
    icon: <FaTable />,
    featureKey: "devs.ui.tabelas",
    groupLabel: "UI",
    groupIcon: <MdOutlineDesignServices />,
  },
  {
    id: "devs.ui.textareas",
    label: "Textareas",
    section: "devs",
    path: "/devs/ui/textareas",
    icon: <BsTextareaResize />,
    featureKey: "devs.ui.textareas",
    groupLabel: "UI",
    groupIcon: <MdOutlineDesignServices />,
  },

  // DEVS — GRÁFICOS (grupo: Gráficos)
  {
    id: "devs.graficos.area",
    label: "De Área",
    section: "devs",
    path: "/devs/graficos/area",
    icon: <FaChartArea />,
    featureKey: "devs.graficos.area",
    groupLabel: "Gráficos",
    groupIcon: <LuChartNoAxesCombined />,
  },
  {
    id: "devs.graficos.barra",
    label: "De Barra",
    section: "devs",
    path: "/devs/graficos/barra",
    icon: <FaChartBar />,
    featureKey: "devs.graficos.barra",
    groupLabel: "Gráficos",
    groupIcon: <LuChartNoAxesCombined />,
  },
  {
    id: "devs.graficos.linha",
    label: "De Linha",
    section: "devs",
    path: "/devs/graficos/linha",
    icon: <FaChartLine />,
    featureKey: "devs.graficos.linha",
    groupLabel: "Gráficos",
    groupIcon: <LuChartNoAxesCombined />,
  },
  {
    id: "devs.graficos.pizza",
    label: "De Pizza",
    section: "devs",
    path: "/devs/graficos/pizza",
    icon: <FaChartPie />,
    featureKey: "devs.graficos.pizza",
    groupLabel: "Gráficos",
    groupIcon: <LuChartNoAxesCombined />,
  },
  {
    id: "devs.graficos.radar",
    label: "De Radar",
    section: "devs",
    path: "/devs/graficos/radar",
    icon: <AiOutlineRadarChart />,
    featureKey: "devs.graficos.radar",
    groupLabel: "Gráficos",
    groupIcon: <LuChartNoAxesCombined />,
  },
  {
    id: "devs.graficos.compostos",
    label: "Compostos",
    section: "devs",
    path: "/devs/graficos/compostos",
    icon: <LuChartNoAxesCombined />,
    featureKey: "devs.graficos.compostos",
    groupLabel: "Gráficos",
    groupIcon: <LuChartNoAxesCombined />,
  },
  // DEVS - Playground
  {
    id: "devs.playground.digitacao",
    label: "Jogo de Digitação",
    section: "devs",
    path: "/devs/digitacao",
    icon: <MdSportsEsports />,
    featureKey: "devs.playground.digitacao",
  },

  // DEVS — DOCUMENTAÇÃO (links externos; dropdown "Documentação" DENTRO de Devs)
  {
    id: "devs.docs.icons",
    label: "Ícones",
    section: "devs",
    path: "https://react-icons.github.io/react-icons/search/#q=",
    icon: <TbIcons />,
    featureKey: "devs.docs",   // chave de permissão da Documentação
    targetBlank: true,
    groupLabel: "Documentação",
    groupIcon: <CgFileDocument />,
  },
  {
    id: "devs.docs.daisyui",
    label: "DaisyUI",
    section: "devs",
    path: "https://daisyui.com/components/",
    icon: <MdOutlineDesignServices />,
    featureKey: "devs.docs",
    targetBlank: true,
    groupLabel: "Documentação",
    groupIcon: <CgFileDocument />,
  },
  {
    id: "devs.docs.recharts",
    label: "Recharts",
    section: "devs",
    path: "https://recharts.org/en-US/examples/",
    icon: <FaChartBar />,
    featureKey: "devs.docs",
    targetBlank: true,
    groupLabel: "Documentação",
    groupIcon: <CgFileDocument />,
  },
];
