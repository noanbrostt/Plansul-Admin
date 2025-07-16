import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/layout/DashboardLayout";
import LoginPage from "@/layout/LoginPage";
import NotFoundPage from "../layout/NotFoundPage";
import ForbiddenPage from "../layout/ForbiddenPage";

import HomePage from "@/modules/home/HomePage";
import UsersPage from "@/modules/users/UsersPage";
import InputsPage from "@/modules/devs/ui/Input/InputsPage";
import BotoesPage from "@/modules/devs/ui/Botao/BotoesPage"
import SelectsPage from "@/modules/devs/ui/Select/SelectsPage"
import CheckboxesPage from "@/modules/devs/ui/Checkbox/CheckboxesPage"
import EtiquetasPage from "@/modules/devs/ui/Etiqueta/EtiquetasPage";
import RadiosPage from "@/modules/devs/ui/Radio/RadiosPage";
import TabelasPage from "@/modules/devs/ui/Tabela/TabelasPage";
import TextareasPage from "@/modules/devs/ui/Textarea/TextareasPage";
import AreasPage from "@/modules/devs/graficos/AreasPage";
import BarrasPage from "@/modules/devs/graficos/BarrasPage";
import LinhasPage from "@/modules/devs/graficos/LinhasPage";
import PizzasPage from "@/modules/devs/graficos/PizzasPage";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import PermissionRoute from "./PermissionRoute";

export default function AppRoutes() {
  const withPermission = (element, requiredPermissao) => (
    <PermissionRoute requiredPermissao={requiredPermissao}>
      {element}
    </PermissionRoute>
  );

  return (
    <Routes>
      {/* Se não estiver logado, manda pra login */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />

        {/* Devs */}
        <Route
          path="/devs/ui/botoes"
          element={withPermission(<BotoesPage />, "DEV_Teste_User")}
        />
        <Route
          path="/devs/ui/checkboxes"
          element={withPermission(<CheckboxesPage />, "DEV_Teste_User")}
        />
        <Route
          path="/devs/ui/etiquetas"
          element={withPermission(<EtiquetasPage />, "DEV_Teste_User")}
        />
        <Route
          path="/devs/ui/inputs"
          element={withPermission(<InputsPage />, "DEV_Teste_User")}
        />
        <Route
          path="/devs/ui/selects"
          element={withPermission(<SelectsPage />, "DEV_Teste_User")}
        />
        <Route
          path="/devs/ui/radios"
          element={withPermission(<RadiosPage />, "DEV_Teste_User")}
        />
        <Route
          path="/devs/ui/tabelas"
          element={withPermission(<TabelasPage />, "DEV_Teste_User")}
        />
        <Route
          path="/devs/ui/textareas"
          element={withPermission(<TextareasPage />, "DEV_Teste_User")}
        />
        <Route
          path="/devs/graficos/area"
          element={withPermission(<AreasPage />, "DEV_Teste_User")}
        />
        <Route
          path="/devs/graficos/barra"
          element={withPermission(<BarrasPage />, "DEV_Teste_User")}
        />
        <Route
          path="/devs/graficos/linha"
          element={withPermission(<LinhasPage />, "DEV_Teste_User")}
        />
        <Route
          path="/devs/graficos/pizza"
          element={withPermission(<PizzasPage />, "DEV_Teste_User")}
        />
      </Route>
      {/*  */}

      {/* Se já estiver logado, manda pra home */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      {/*  */}

      {/* Telas de erro */}
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/negado" element={<ForbiddenPage />} />
      {/*  */}
    </Routes>
  );
}
