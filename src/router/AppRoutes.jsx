import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/layout/DashboardLayout";
import LoginPage from "@/layout/LoginPage";
import NotFoundPage from "../layout/NotFoundPage";
import ForbiddenPage from "../layout/ForbiddenPage";

import HomePage from "@/modules/home/HomePage";
import UsersPage from "@/modules/users/UsersPage";
import InputsPage from "@/modules/ui/InputsPage";
import BotoesPage from "@/modules/ui/Botao/BotoesPage"
import SelectsPage from "@/modules/ui/Select/SelectsPage"
import CheckboxesPage from "@/modules/ui/Checkbox/CheckboxesPage"
import EtiquetasPage from "@/modules/ui/Etiqueta/EtiquetasPage";
import TablesPage from "@/modules/ui/TablesPage";

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
          path="/devs/ui/tabelas"
          element={withPermission(<TablesPage />, "DEV_Teste_User")}
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
