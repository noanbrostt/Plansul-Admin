import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import PermissionRoute from "./PermissionRoute";

import DashboardLayout from "@/layout/DashboardLayout";
import LoginPage from "@/layout/LoginPage";
import NotFoundPage from "@/layout/NotFoundPage";
import ForbiddenPage from "@/layout/ForbiddenPage";

import { lazy } from "react";
import { Suspense } from "react";
import LoadingPage from "@/layout/LoadingPage";

// 👉 Componente para envolver lazy com Suspense
const LazyWrapper = (Component) => (
  <Suspense fallback={<LoadingPage />}>
    <Component />
  </Suspense>
);

// 🧱 Páginas lazy carregadas dinamicamente
const HomePage = lazy(() => import("@/modules/home/HomePage"));
const CadastroAtestadosPage = lazy(() =>
  import("@/modules/ambulatorio/CadastroAtestadosPage")
);
const GestaoAtestadosPage = lazy(() =>
  import("@/modules/ambulatorio/GestaoAtestadosPage")
);
const gestaoAtestadosLoader = async () => {
  // Simulando delay de API
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Dados carregados do loader.");
      resolve({ status: "ok" });
    }, 2000);
  });
};

const GestaoAcessosPage = lazy(() =>
  import("@/modules/admin/GestaoAcessosPage")
);
const GestaoPerfisPage = lazy(() => import("@/modules/admin/GestaoPerfisPage"));

const CalendarioPage = lazy(() =>
  import("@/modules/devs/telas/CalendarioPage/CalendarioPage")
);
const ExemploPage = lazy(() => import("@/modules/devs/telas/ExemploPage"));

const InputsPage = lazy(() => import("@/modules/devs/ui/InputsPage"));
const BlocosPage = lazy(() => import("@/modules/devs/ui/BlocosPage"));
const BotoesPage = lazy(() => import("@/modules/devs/ui/BotoesPage"));
const SelectsPage = lazy(() => import("@/modules/devs/ui/SelectsPage"));
const CheckboxesPage = lazy(() => import("@/modules/devs/ui/CheckboxesPage"));
const EtiquetasPage = lazy(() => import("@/modules/devs/ui/EtiquetasPage"));
const RadiosPage = lazy(() => import("@/modules/devs/ui/RadiosPage"));
const TabelasPage = lazy(() => import("@/modules/devs/ui/TabelasPage"));
const TextareasPage = lazy(() => import("@/modules/devs/ui/TextareasPage"));

const AreasPage = lazy(() => import("@/modules/devs/graficos/AreasPage"));
const BarrasPage = lazy(() => import("@/modules/devs/graficos/BarrasPage"));
const LinhasPage = lazy(() => import("@/modules/devs/graficos/LinhasPage"));
const PizzasPage = lazy(() => import("@/modules/devs/graficos/PizzasPage"));
const RadarsPage = lazy(() => import("@/modules/devs/graficos/RadarsPage"));
const CompostosPage = lazy(() =>
  import("@/modules/devs/graficos/CompostosPage")
);

// 🔒 Função para proteger rota com permissão
const withPermission = (element, permission) => (
  <PermissionRoute requiredPermissao={permission}>{element}</PermissionRoute>
);

// 🎯 Helper para criar rotas com lazy e wrappers
const createRoute = ({ path, element, permission, wrapper }) => {
  let content = LazyWrapper(element);

  if (permission) {
    content = withPermission(content, permission);
  }

  if (wrapper) {
    const Wrapper = wrapper;
    content = <Wrapper>{content}</Wrapper>;
  }

  return {
    path,
    element: content,
  };
};

// ✳️ Estrutura de rotas
export const router = createBrowserRouter([
  // Rota pública
  {
    path: "/login",
    element: <PublicRoute>{<LoginPage />}</PublicRoute>,
  },

  // Rota protegida com layout fixo
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      // Rotas abertas (usuário logado)
      createRoute({ path: "", element: HomePage }),

      // Ambulatorio
      createRoute({
        path: "ambulatorio/cadastro-atestados",
        element: CadastroAtestadosPage,
        permission: "DEV_Teste_User",
      }),
      {
        path: "ambulatorio/gestao-atestados",
        loader: gestaoAtestadosLoader,
        hydrateFallbackElement: <LoadingPage />,
        element: withPermission(LazyWrapper(GestaoAtestadosPage), "DEV_Teste_User"),
      },

      // Admin
      createRoute({
        path: "admin/acessos",
        element: GestaoAcessosPage,
        permission: "DEV_Teste_User",
      }),
      createRoute({
        path: "admin/perfis",
        element: GestaoPerfisPage,
        permission: "DEV_Teste_User",
      }),

      // Devs - Telas
      createRoute({
        path: "devs/telas/calendario",
        element: CalendarioPage,
        permission: "DEV_Teste_User",
      }),
      createRoute({
        path: "devs/telas/exemplo",
        element: ExemploPage,
        permission: "DEV_Teste_User",
      }),
      createRoute({
        path: "devs/telas/loading",
        element: LoadingPage,
        permission: "DEV_Teste_User",
      }),

      // Devs - UI
      createRoute({
        path: "devs/ui/blocos",
        element: BlocosPage,
        permission: "DEV_Teste_User",
      }),
      createRoute({
        path: "devs/ui/botoes",
        element: BotoesPage,
        permission: "DEV_Teste_User",
      }),
      createRoute({
        path: "devs/ui/checkboxes",
        element: CheckboxesPage,
        permission: "DEV_Teste_User",
      }),
      createRoute({
        path: "devs/ui/etiquetas",
        element: EtiquetasPage,
        permission: "DEV_Teste_User",
      }),
      createRoute({
        path: "devs/ui/inputs",
        element: InputsPage,
        permission: "DEV_Teste_User",
      }),
      createRoute({
        path: "devs/ui/selects",
        element: SelectsPage,
        permission: "DEV_Teste_User",
      }),
      createRoute({
        path: "devs/ui/radios",
        element: RadiosPage,
        permission: "DEV_Teste_User",
      }),
      createRoute({
        path: "devs/ui/tabelas",
        element: TabelasPage,
        permission: "DEV_Teste_User",
      }),
      createRoute({
        path: "devs/ui/textareas",
        element: TextareasPage,
        permission: "DEV_Teste_User",
      }),

      // Devs - Gráficos
      createRoute({
        path: "devs/graficos/area",
        element: AreasPage,
        permission: "DEV_Teste_User",
      }),
      createRoute({
        path: "devs/graficos/barra",
        element: BarrasPage,
        permission: "DEV_Teste_User",
      }),
      createRoute({
        path: "devs/graficos/linha",
        element: LinhasPage,
        permission: "DEV_Teste_User",
      }),
      createRoute({
        path: "devs/graficos/pizza",
        element: PizzasPage,
        permission: "DEV_Teste_User",
      }),
      createRoute({
        path: "devs/graficos/radar",
        element: RadarsPage,
        permission: "DEV_Teste_User",
      }),
      createRoute({
        path: "devs/graficos/compostos",
        element: CompostosPage,
        permission: "DEV_Teste_User",
      }),
    ],
  },

  // Rotas de erro
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/negado",
    element: <ForbiddenPage />,
  },
]);
