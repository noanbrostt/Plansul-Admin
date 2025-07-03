import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function PublicRoute({ children }) {
  const user = useSelector((state: RootState) => state.user.data);

  if (user) return <Navigate to="/" replace />;
  return children;
}
