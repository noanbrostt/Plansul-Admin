import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/layout/DashboardLayout";
import LoginPage from "@/layout/LoginPage";
import NotFoundPage from "@/layout/NotFoundPage";
import ForbiddenPage from "@/layout/ForbiddenPage";

// Home
const HomePage = lazy(() => (import("@/modules/home/HomePage")));

// Ambulatório
const CadastroAtestadosPage = lazy(() =>
  import("@/modules/ambulatorio/CadastroAtestadosPage")
);
const GestaoAtestadosPage = lazy(() =>
  import("@/modules/ambulatorio/GestaoAtestadosPage")
);

// Admin
const GestaoAcessosPage = lazy(() =>
  import("@/modules/admin/GestaoAcessosPage")
);
const GestaoPerfisPage = lazy(() => import("@/modules/admin/GestaoPerfisPage"));

// Telas
const ExemploPage = lazy(() => import("@/modules/devs/telas/ExemploPage"));
const CalendarioPage = lazy(() =>
  import("@/modules/devs/telas/CalendarioPage/CalendarioPage")
);

// Páginas de UI
const InputsPage = lazy(() => import("@/modules/devs/ui/InputsPage"));
const BlocosPage = lazy(() => import("@/modules/devs/ui/BlocosPage"));
const BotoesPage = lazy(() => import("@/modules/devs/ui/BotoesPage"));
const SelectsPage = lazy(() => import("@/modules/devs/ui/SelectsPage"));
const CheckboxesPage = lazy(() => import("@/modules/devs/ui/CheckboxesPage"));
const EtiquetasPage = lazy(() => import("@/modules/devs/ui/EtiquetasPage"));
const RadiosPage = lazy(() => import("@/modules/devs/ui/RadiosPage"));
const TabelasPage = lazy(() => import("@/modules/devs/ui/TabelasPage"));
const TextareasPage = lazy(() => import("@/modules/devs/ui/TextareasPage"));

// Páginas de gráficos
const AreasPage = lazy(() => import("@/modules/devs/graficos/AreasPage"));
const BarrasPage = lazy(() => import("@/modules/devs/graficos/BarrasPage"));
const LinhasPage = lazy(() => import("@/modules/devs/graficos/LinhasPage"));
const PizzasPage = lazy(() => import("@/modules/devs/graficos/PizzasPage"));
const RadarsPage = lazy(() => import("@/modules/devs/graficos/RadarsPage"));
const CompostosPage = lazy(() =>
  import("@/modules/devs/graficos/CompostosPage")
);

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
      wrapper: PublicRoute,
    },
  ],

  // Rotas abertas (requerem login)
  LOGGED: [
    {
      path: "/",
      element: <HomePage />,
    },
  ],

  // Rotas protegidas (requerem permissão específica)
  AMBULATORIO_ROUTES: [
    {
      path: "/ambulatorio/cadastro-atestados",
      element: <CadastroAtestadosPage />,
      permission: "DEV_Teste_User",
    },
    {
      path: "/ambulatorio/gestao-atestados",
      element: <GestaoAtestadosPage />,
      permission: "DEV_Teste_User",
    },
  ],

  ADMIN_ROUTES: [
    {
      path: "/admin/acessos",
      element: <GestaoAcessosPage />,
      permission: "DEV_Teste_User",
    },
    {
      path: "/admin/perfis",
      element: <GestaoPerfisPage />,
      permission: "DEV_Teste_User",
    },
  ],

  DEVS_ROUTES: [
    {
      path: "/devs/telas/exemplo",
      element: <ExemploPage />,
      permission: "DEV_Teste_User",
    },
    {
      path: "/devs/telas/calendario",
      element: <CalendarioPage />,
      permission: "DEV_Teste_User",
    },
    {
      path: "/devs/ui/blocos",
      element: <BlocosPage />,
      permission: "DEV_Teste_User",
    },
    {
      path: "/devs/ui/botoes",
      element: <BotoesPage />,
      permission: "DEV_Teste_User",
    },
    {
      path: "/devs/ui/checkboxes",
      element: <CheckboxesPage />,
      permission: "DEV_Teste_User",
    },
    {
      path: "/devs/ui/etiquetas",
      element: <EtiquetasPage />,
      permission: "DEV_Teste_User",
    },
    {
      path: "/devs/ui/inputs",
      element: <InputsPage />,
      permission: "DEV_Teste_User",
    },
    {
      path: "/devs/ui/selects",
      element: <SelectsPage />,
      permission: "DEV_Teste_User",
    },
    {
      path: "/devs/ui/radios",
      element: <RadiosPage />,
      permission: "DEV_Teste_User",
    },
    {
      path: "/devs/ui/tabelas",
      element: <TabelasPage />,
      permission: "DEV_Teste_User",
    },
    {
      path: "/devs/ui/textareas",
      element: <TextareasPage />,
      permission: "DEV_Teste_User",
    },
    {
      path: "/devs/graficos/area",
      element: <AreasPage />,
      permission: "DEV_Teste_User",
    },
    {
      path: "/devs/graficos/barra",
      element: <BarrasPage />,
      permission: "DEV_Teste_User",
    },
    {
      path: "/devs/graficos/linha",
      element: <LinhasPage />,
      permission: "DEV_Teste_User",
    },
    {
      path: "/devs/graficos/pizza",
      element: <PizzasPage />,
      permission: "DEV_Teste_User",
    },
    {
      path: "/devs/graficos/radar",
      element: <RadarsPage />,
      permission: "DEV_Teste_User",
    },
    {
      path: "/devs/graficos/compostos",
      element: <CompostosPage />,
      permission: "DEV_Teste_User",
    },
  ],

  // Rotas de erro
  ERROR: [
    {
      path: "*",
      element: <NotFoundPage />,
    },
    {
      path: "/negado",
      element: <ForbiddenPage />,
    },
  ],
};

// Helper para rotas com permissão
const withPermission = (element, permission) => (
  <PermissionRoute requiredPermissao={permission}>{element}</PermissionRoute>
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

  return (
    <Route
      key={route.path}
      path={route.path}
      element={content}
    />
  );
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
        {ROUTE_CONFIG.AMBULATORIO_ROUTES.map(renderRoute)}
        {ROUTE_CONFIG.ADMIN_ROUTES.map(renderRoute)}
        {ROUTE_CONFIG.DEVS_ROUTES.map(renderRoute)}
      </Route>

      {/* Rotas de Erro */}
      {ROUTE_CONFIG.ERROR.map(renderRoute)}
    </Routes>
  );
}
