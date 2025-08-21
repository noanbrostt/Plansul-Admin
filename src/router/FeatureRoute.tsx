// src/router/FeatureRoute.tsx
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { canViewFeature } from "@/acl/normalizePermissions";

export default function FeatureRoute({
  children,
  featureKey,
}: {
  children: JSX.Element;
  featureKey: string; // ex.: "admin.gestao-perfis"
}) {
  const user = useSelector((state: RootState) => state.user.data);

  if (!user) return <Navigate to="/login" replace />;

  const ok = canViewFeature(user.permissionsMap, featureKey);
  if (!ok) return <Navigate to="/negado" replace />;

  return children;
}
