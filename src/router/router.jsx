import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import FeatureRoute from "./FeatureRoute";

import DashboardLayout from "@/layout/DashboardLayout";
import LoginPage from "@/layout/LoginPage";
import NotFoundPage from "@/layout/NotFoundPage";
import ForbiddenPage from "@/layout/ForbiddenPage";
import LoadingPage from "@/layout/LoadingPage";

// Páginas (lazy)
const HomePage = lazy(() => import("@/modules/home/HomePage"));

// Admin
const GestaoAcessosPage = lazy(() => import("@/modules/admin/GestaoAcessosPage.jsx"));
const GestaoPerfisPage = lazy(() => import("@/modules/admin/GestaoPerfisPage.jsx"));

// Ambulatório
const GestaoAtestadosPage = lazy(() => import("@/modules/ambulatorio/GestaoAtestadosPage.jsx"));
const CadastroAtestadosPage = lazy(() => import("@/modules/ambulatorio/CadastroAtestadosPage.jsx"));

// Devs - Telas
const CalendarioPage = lazy(() => import("@/modules/devs/telas/CalendarioPage/CalendarioPage.jsx"));
const ExemploPage = lazy(() => import("@/modules/devs/telas/ExemploPage.jsx"));
// Para a rota /devs/telas/loading vou reutilizar o LoadingPage do layout

// Devs - UI
const BlocosPage = lazy(() => import("@/modules/devs/ui/BlocosPage.jsx"));
const BotoesPage = lazy(() => import("@/modules/devs/ui/BotoesPage.jsx"));
const CheckboxesPage = lazy(() => import("@/modules/devs/ui/CheckboxesPage.jsx"));
const EtiquetasPage = lazy(() => import("@/modules/devs/ui/EtiquetasPage.jsx"));
const InputsPage = lazy(() => import("@/modules/devs/ui/InputsPage.jsx"));
const RadiosPage = lazy(() => import("@/modules/devs/ui/RadiosPage.jsx"));
const SelectsPage = lazy(() => import("@/modules/devs/ui/SelectsPage.jsx"));
const TabelasPage = lazy(() => import("@/modules/devs/ui/TabelasPage.jsx"));
const TextareasPage = lazy(() => import("@/modules/devs/ui/TextareasPage.jsx"));

// Devs - Gráficos
const AreasPage = lazy(() => import("@/modules/devs/graficos/AreasPage.jsx"));
const BarrasPage = lazy(() => import("@/modules/devs/graficos/BarrasPage.jsx"));
const LinhasPage = lazy(() => import("@/modules/devs/graficos/LinhasPage.jsx"));
const PizzasPage = lazy(() => import("@/modules/devs/graficos/PizzasPage.jsx"));
const RadarsPage = lazy(() => import("@/modules/devs/graficos/RadarsPage.jsx"));
const CompostosPage = lazy(() => import("@/modules/devs/graficos/CompostosPage.jsx"));

// Devs - Playground
const TypingGame = lazy(() => import("@/modules/devs/playground/TypingGame"));

export const router = createBrowserRouter([
  // Login
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },

  // Área logada
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      // Home (pós-login, sem featureKey)
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <HomePage />
          </Suspense>
        ),
      },

      // Admin
      {
        path: "/admin/acessos",
        element: (
          <FeatureRoute featureKey="admin.gestao-acessos">
            <Suspense fallback={<LoadingPage />}>
              <GestaoAcessosPage />
            </Suspense>
          </FeatureRoute>
        ),
      },
      {
        path: "/admin/perfis",
        element: (
          <FeatureRoute featureKey="admin.gestao-perfis">
            <Suspense fallback={<LoadingPage />}>
              <GestaoPerfisPage />
            </Suspense>
          </FeatureRoute>
        ),
      },

      // Ambulatório
      {
        path: "/ambulatorio/gestao-atestados",
        element: (
          <FeatureRoute featureKey="ambulatorio.gestao-atestados">
            <Suspense fallback={<LoadingPage />}>
              <GestaoAtestadosPage />
            </Suspense>
          </FeatureRoute>
        ),
      },
      {
        path: "/ambulatorio/cadastro-atestados",
        element: (
          <FeatureRoute featureKey="ambulatorio.cadastro-atestados">
            <Suspense fallback={<LoadingPage />}>
              <CadastroAtestadosPage />
            </Suspense>
          </FeatureRoute>
        ),
      },

      // Devs - Telas
      {
        path: "/devs/telas/calendario",
        element: (
          <FeatureRoute featureKey="devs.telas.calendario">
            <Suspense fallback={<LoadingPage />}>
              <CalendarioPage />
            </Suspense>
          </FeatureRoute>
        ),
      },
      {
        path: "/devs/telas/exemplo",
        element: (
          <FeatureRoute featureKey="devs.telas.exemplo">
            <Suspense fallback={<LoadingPage />}>
              <ExemploPage />
            </Suspense>
          </FeatureRoute>
        ),
      },
      {
        path: "/devs/telas/loading",
        element: (
          <FeatureRoute featureKey="devs.telas.loading">
            <LoadingPage />
          </FeatureRoute>
        ),
      },

      // Devs - UI
      { path: "/devs/ui/blocos", element: (
        <FeatureRoute featureKey="devs.ui.blocos">
          <Suspense fallback={<LoadingPage />}><BlocosPage /></Suspense>
        </FeatureRoute>
      )},
      { path: "/devs/ui/botoes", element: (
        <FeatureRoute featureKey="devs.ui.botoes">
          <Suspense fallback={<LoadingPage />}><BotoesPage /></Suspense>
        </FeatureRoute>
      )},
      { path: "/devs/ui/checkboxes", element: (
        <FeatureRoute featureKey="devs.ui.checkboxes">
          <Suspense fallback={<LoadingPage />}><CheckboxesPage /></Suspense>
        </FeatureRoute>
      )},
      { path: "/devs/ui/etiquetas", element: (
        <FeatureRoute featureKey="devs.ui.etiquetas">
          <Suspense fallback={<LoadingPage />}><EtiquetasPage /></Suspense>
        </FeatureRoute>
      )},
      { path: "/devs/ui/inputs", element: (
        <FeatureRoute featureKey="devs.ui.inputs">
          <Suspense fallback={<LoadingPage />}><InputsPage /></Suspense>
        </FeatureRoute>
      )},
      { path: "/devs/ui/radios", element: (
        <FeatureRoute featureKey="devs.ui.radios">
          <Suspense fallback={<LoadingPage />}><RadiosPage /></Suspense>
        </FeatureRoute>
      )},
      { path: "/devs/ui/selects", element: (
        <FeatureRoute featureKey="devs.ui.selects">
          <Suspense fallback={<LoadingPage />}><SelectsPage /></Suspense>
        </FeatureRoute>
      )},
      { path: "/devs/ui/tabelas", element: (
        <FeatureRoute featureKey="devs.ui.tabelas">
          <Suspense fallback={<LoadingPage />}><TabelasPage /></Suspense>
        </FeatureRoute>
      )},
      { path: "/devs/ui/textareas", element: (
        <FeatureRoute featureKey="devs.ui.textareas">
          <Suspense fallback={<LoadingPage />}><TextareasPage /></Suspense>
        </FeatureRoute>
      )},

      // Devs - Gráficos
      { path: "/devs/graficos/area", element: (
        <FeatureRoute featureKey="devs.graficos.area">
          <Suspense fallback={<LoadingPage />}><AreasPage /></Suspense>
        </FeatureRoute>
      )},
      { path: "/devs/graficos/barra", element: (
        <FeatureRoute featureKey="devs.graficos.barra">
          <Suspense fallback={<LoadingPage />}><BarrasPage /></Suspense>
        </FeatureRoute>
      )},
      { path: "/devs/graficos/linha", element: (
        <FeatureRoute featureKey="devs.graficos.linha">
          <Suspense fallback={<LoadingPage />}><LinhasPage /></Suspense>
        </FeatureRoute>
      )},
      { path: "/devs/graficos/pizza", element: (
        <FeatureRoute featureKey="devs.graficos.pizza">
          <Suspense fallback={<LoadingPage />}><PizzasPage /></Suspense>
        </FeatureRoute>
      )},
      { path: "/devs/graficos/radar", element: (
        <FeatureRoute featureKey="devs.graficos.radar">
          <Suspense fallback={<LoadingPage />}><RadarsPage /></Suspense>
        </FeatureRoute>
      )},
      { path: "/devs/graficos/compostos", element: (
        <FeatureRoute featureKey="devs.graficos.compostos">
          <Suspense fallback={<LoadingPage />}><CompostosPage /></Suspense>
        </FeatureRoute>
      )},

      // Devs - Playground
      { path: "/devs/digitacao", element: (
        <FeatureRoute featureKey="devs.playground.digitacao">
          <Suspense fallback={<LoadingPage />}><TypingGame /></Suspense>
        </FeatureRoute>
      )},
    ],
  },

  // Rotas de erro
  { path: "/negado", element: <ForbiddenPage /> },
  { path: "*", element: <NotFoundPage /> },
]);
