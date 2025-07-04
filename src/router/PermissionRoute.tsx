import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface Props {
  children: JSX.Element;
  requiredPermissao: string;
}

export default function PermissionRoute({ children, requiredPermissao }: Props) {
  const user = useSelector((state: RootState) => state.user.data);

  if (!user) return <Navigate to="/login" replace />;

  const possuiPermissao = user.permissoes?.includes(requiredPermissao);

  if (!possuiPermissao) return <Navigate to="/negado" replace />; // ou uma página 403

  return children;
}
