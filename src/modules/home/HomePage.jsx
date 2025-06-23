export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Painel</h1>
      <p className="mb-6">Use a navegação lateral para acessar os módulos.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-base-200 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Usuários</h2>
            <p>Gerencie os usuários do sistema</p>
          </div>
        </div>

        <div className="card bg-base-200 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Relatórios</h2>
            <p>Visualize dados e estatísticas</p>
          </div>
        </div>

        <div className="card bg-base-200 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Configurações</h2>
            <p>Parâmetros e preferências do sistema</p>
          </div>
        </div>
      </div>
    </div>
  );
}
