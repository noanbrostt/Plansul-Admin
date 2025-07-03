import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/layout/DashboardLayout";
import LoginPage from "@/layout/LoginPage";

import HomePage from "@/modules/home/HomePage";
import UsersPage from "@/modules/users/UsersPage";
import ButtonsPage from "@/modules/elementos ui/ButtonsPage";
import InputsPage from "@/modules/elementos ui/InputsPage";
import BadgesPage from "@/modules/elementos ui/BadgesPage";

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
        <Route path="/devs/ui/buttons" element={withPermission(<ButtonsPage />, "DEV_Teste_User")} />
        <Route path="/devs/ui/badges" element={withPermission(<BadgesPage />, "DEV_Teste_User")} />
        <Route path="/devs/ui/inputs" element={withPermission(<InputsPage />, "DEV_Teste_User")} />
      </Route>
      
      {/* Se já estiver logado, manda pra home */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
    </Routes>
  );
}
