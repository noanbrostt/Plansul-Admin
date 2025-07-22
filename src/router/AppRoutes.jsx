import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/layout/DashboardLayout";
import LoginPage from "@/layout/LoginPage";
import NotFoundPage from "@/layout/NotFoundPage";
import ForbiddenPage from "@/layout/ForbiddenPage";

// Importações de páginas
import HomePage from "@/modules/home/HomePage";

// Admin
import UsuariosPage from "@/modules/admin/usuarios/UsuariosPage";

// Telas
import ExemploPage from "@/modules/devs/telas/ExemploPage";
import CalendarioPage from "@/modules/devs/telas/CalendarioPage/CalendarioPage";

// Páginas de UI
import InputsPage from "@/modules/devs/ui/Input/InputsPage";
import BlocosPage from "@/modules/devs/ui/BlocosPage";
import BotoesPage from "@/modules/devs/ui/Botao/BotoesPage";
import SelectsPage from "@/modules/devs/ui/Select/SelectsPage";
import CheckboxesPage from "@/modules/devs/ui/Checkbox/CheckboxesPage";
import EtiquetasPage from "@/modules/devs/ui/Etiqueta/EtiquetasPage";
import RadiosPage from "@/modules/devs/ui/Radio/RadiosPage";
import TabelasPage from "@/modules/devs/ui/Tabela/TabelasPage";
import TextareasPage from "@/modules/devs/ui/Textarea/TextareasPage";

// Páginas de gráficos
import AreasPage from "@/modules/devs/graficos/AreasPage";
import BarrasPage from "@/modules/devs/graficos/BarrasPage";
import LinhasPage from "@/modules/devs/graficos/LinhasPage";
import PizzasPage from "@/modules/devs/graficos/PizzasPage";
import RadarsPage from "@/modules/devs/graficos/RadarsPage";
import CompostosPage from "@/modules/devs/graficos/CompostosPage";

// Componentes de roteamento
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import PermissionRoute from "./PermissionRoute";

// Configuração das rotas
const ROUTE_CONFIG = {
  // Rotas públicas
  PUBLIC: [
    {
      path: "/login",
      element: <LoginPage />,
      wrapper: PublicRoute
    }
  ],
  
  // Rotas abertas (requerem login)
  LOGGED: [
    {
      path: "/",
      element: <HomePage />
    },
  ],

  // Rotas protegidas (requerem permissão específica)
  ADMIN_ROUTES: [
    {
      path: "/admin/usuarios",
      element: <UsuariosPage />,
      permission: "DEV_Teste_User"
    },
  ],
  
  DEVS_ROUTES: [
    {
      path: "/devs/telas/exemplo",
      element: <ExemploPage />,
      permission: "DEV_Teste_User"
    },
    {
      path: "/devs/telas/calendario",
      element: <CalendarioPage />,
      permission: "DEV_Teste_User"
    },
    {
      path: "/devs/ui/blocos",
      element: <BlocosPage />,
      permission: "DEV_Teste_User"
    },
    {
      path: "/devs/ui/botoes",
      element: <BotoesPage />,
      permission: "DEV_Teste_User"
    },
    {
      path: "/devs/ui/checkboxes",
      element: <CheckboxesPage />,
      permission: "DEV_Teste_User"
    },
    {
      path: "/devs/ui/etiquetas",
      element: <EtiquetasPage />,
      permission: "DEV_Teste_User"
    },
    {
      path: "/devs/ui/inputs",
      element: <InputsPage />,
      permission: "DEV_Teste_User"
    },
    {
      path: "/devs/ui/selects",
      element: <SelectsPage />,
      permission: "DEV_Teste_User"
    },
    {
      path: "/devs/ui/radios",
      element: <RadiosPage />,
      permission: "DEV_Teste_User"
    },
    {
      path: "/devs/ui/tabelas",
      element: <TabelasPage />,
      permission: "DEV_Teste_User"
    },
    {
      path: "/devs/ui/textareas",
      element: <TextareasPage />,
      permission: "DEV_Teste_User"
    },
    {
      path: "/devs/graficos/area",
      element: <AreasPage />,
      permission: "DEV_Teste_User"
    },
    {
      path: "/devs/graficos/barra",
      element: <BarrasPage />,
      permission: "DEV_Teste_User"
    },
    {
      path: "/devs/graficos/linha",
      element: <LinhasPage />,
      permission: "DEV_Teste_User"
    },
    {
      path: "/devs/graficos/pizza",
      element: <PizzasPage />,
      permission: "DEV_Teste_User"
    },
    {
      path: "/devs/graficos/radar",
      element: <RadarsPage />,
      permission: "DEV_Teste_User"
    },
    {
      path: "/devs/graficos/compostos",
      element: <CompostosPage />,
      permission: "DEV_Teste_User"
    },
  ],
  
  // Rotas de erro
  ERROR: [
    {
      path: "*",
      element: <NotFoundPage />
    },
    {
      path: "/negado",
      element: <ForbiddenPage />
    }
  ]
};

// Helper para rotas com permissão
const withPermission = (element, permission) => (
  <PermissionRoute requiredPermissao={permission}>
    {element}
  </PermissionRoute>
);

// Helper para renderizar rotas com wrappers
const renderRoute = (route) => {
  let content = route.element;
  
  if (route.permission) {
    content = withPermission(content, route.permission);
  }
  
  if (route.wrapper) {
    const Wrapper = route.wrapper;
    content = <Wrapper>{content}</Wrapper>;
  }
  
  return <Route key={route.path} path={route.path} element={content} />;
};

export default function AppRoutes() {
  return (
    <Routes>
      {/* Rotas Públicas */}
      {ROUTE_CONFIG.PUBLIC.map(renderRoute)}
      
      {/* Rotas Protegidas dentro do DashboardLayout */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {ROUTE_CONFIG.LOGGED.map(renderRoute)}
        {ROUTE_CONFIG.ADMIN_ROUTES.map(renderRoute)}
        {ROUTE_CONFIG.DEVS_ROUTES.map(renderRoute)}
      </Route>
      
      {/* Rotas de Erro */}
      {ROUTE_CONFIG.ERROR.map(renderRoute)}
    </Routes>
  );
}