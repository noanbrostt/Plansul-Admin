import { useSelector } from "react-redux";

export default function HomePage() {
  const user = useSelector((state) => state.user.data);

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
        <p className="text-base-content/70">
          Use o menu lateral para navegar pelos módulos do sistema.
        </p>
      </div>

      {/* Resumo rápido */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-200 shadow">
          <div className="card-body">
            <h2 className="card-title">Módulos Disponíveis</h2>
            <p>15 sistemas integrados</p>
          </div>
        </div>

        <div className="card bg-base-200 shadow">
          <div className="card-body">
            <h2 className="card-title">Último acesso</h2>
            <p>02/07/2025 às 08:15</p>
          </div>
        </div>

        <div className="card bg-base-200 shadow">
          <div className="card-body">
            <h2 className="card-title">Permissões</h2>
            <div className="flex flex-wrap gap-2">
              {user?.permissoes?.map((p) => (
                <span key={p} className="badge badge-outline">
                  {p}
                </span>
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
      <div>
        <h2 className="text-xl font-semibold mb-2">Favoritos</h2>
        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary">Inputs</button>
          <button className="btn btn-secondary">Botões</button>
          <button className="btn btn-accent">Parâmetros Gerais</button>
        </div>
      </div>
    </div>
  );
}
