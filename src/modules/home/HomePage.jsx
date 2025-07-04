import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Badge from "@/modules/ui/components/Badge";

export default function HomePage() {
  const user = useSelector((state) => state.user.data);
  const favoritos = JSON.parse(
    localStorage.getItem(`favoritos_${user.matricula}`) || "[]"
  );

  return (
    <div className="space-y-6">
      {/* Boas-vindas */}
      <div>
        <h1 className="text-3xl font-bold">
          Bem-vindo,{" "}
          {user?.nome
            ? user.nome
                .split(" ")[0]
                .toLowerCase()
                .replace(/^./, (c) => c.toUpperCase())
            : "usuário"}
          !
        </h1>
        <small className="text-base-content/70">
          Use o menu lateral para navegar pelos módulos do sistema.
        </small>
      </div>

      {/* Resumo rápido */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-200 shadow">
          <div className="card-body">
            <h2 className="card-title">Permissões</h2>
            <div className="flex flex-wrap gap-2">
              {user?.permissoes?.map((p) => (
                <Badge key={p} outline>
                  {p}
                </Badge>
              )) || (
                <span className="text-sm text-base-content/50">
                  Sem permissões registradas
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Ações rápidas (pode virar links futuramente) */}
      {Array.isArray(favoritos) && favoritos.length > 0 && (
        <div>
          <h1 className="text-3xl font-bold text-base-content mb-6 mt-12">
            Favoritos
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[...favoritos]
              .sort((a, b) => a.nome.localeCompare(b.nome))
              .map((fav) => (
                <Link
                  to={`/${fav.url}`}
                  key={fav.url}
                  className="card bg-base-200 hover:bg-base-300 shadow hover:shadow-lg transition-all"
                >
                  <div className="card-body">
                    <h2 className="card-title">{fav.nome}</h2>
                    <p className="text-sm text-base-content/60">{fav.url}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
