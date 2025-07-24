import Tabela from "@/modules/devs/ui/Tabela/Tabela";
import {
  FiUser,
  FiShield,
  FiActivity,
  FiCalendar,
  FiLock,
  FiX,
} from "react-icons/fi";
import FavoriteButton from "@/components/FavoriteButton";

// Perfis disponíveis
const perfis = [
  { co_perfil: 1, nome: "Administrador" },
  { co_perfil: 2, nome: "Gestor" },
  { co_perfil: 3, nome: "Desenvolvedor" },
  { co_perfil: 4, nome: "Analista" },
  { co_perfil: 5, nome: "Usuário" },
];

export default function GestaoAcessosPage() {
  const users = [
    {
      id: 1,
      name: "Ana Silva",
      co_matricula: "123456",
      co_perfil: 1,
      perfilNome: "Administrador",
      statusTexto: "Ativo",
    },
    {
      id: 2,
      name: "Carlos Mendes",
      co_matricula: "123463",
      co_perfil: 2,
      perfilNome: "Gestor",
      statusTexto: "Ativo",
    },
    {
      id: 3,
      name: "Beatriz Costa",
      co_matricula: "123477",
      co_perfil: 3,
      perfilNome: "Desenvolvedor",
      statusTexto: "Ativo",
    },
    {
      id: 4,
      name: "Daniel Oliveira",
      co_matricula: "123486",
      co_perfil: 4,
      perfilNome: "Analista",
      statusTexto: "Inativo",
    },
    {
      id: 5,
      name: "Eduarda Santos",
      co_matricula: "123491",
      co_perfil: 5,
      perfilNome: "Usuário",
      statusTexto: "Ativo",
    },
    {
      id: 6,
      name: "Fernando Almeida",
      co_matricula: "123504",
      co_perfil: 3,
      perfilNome: "Desenvolvedor",
      statusTexto: "Ativo",
    },
  ];

  // Obter nome do perfil pelo ID
  const getPerfilNome = (co_perfil) => {
    const perfil = perfis.find((p) => p.co_perfil === co_perfil);
    return perfil ? perfil.nome : "Desconhecido";
  };

  // Colunas para a tabela (com campos virtuais para busca)
  const userColumns = [
    {
      accessorKey: "co_matricula",
      header: "Matrícula",
      size: 60,
    },
    {
      accessorKey: "name",
      header: "Nome",
      cell: ({ row }) => <div className="font-bold">{row.original.name}</div>,
    },
    {
      accessorKey: "perfilNome",
      header: "Perfil",
      cell: ({ row }) => {
        const perfilNome = getPerfilNome(row.original.co_perfil);
        return (
          <span
            className={`badge badge-${
              perfilNome === "Administrador"
                ? "primary"
                : perfilNome === "Gestor"
                ? "secondary"
                : perfilNome === "Desenvolvedor"
                ? "accent"
                : "outline"
            }`}
          >
            {perfilNome}
          </span>
        );
      },
    },
    {
      accessorKey: "statusTexto",
      header: "Status",
      cell: ({ row }) => (
        <span
          className={`badge badge-${
            row.original.statusTexto == "Ativo" ? "success" : "error"
          }`}
        >
          {row.original.statusTexto}
        </span>
      ),
    },
  ];

  return (
    <div className="bg-base-100 space-y-6">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center">
        <h1 className="flex text-3xl font-bold text-base-content">
          Gestão de Acessos{" "}
          <FavoriteButton
            tela={{ nome: "Gestão de Acessos", url: "admin/acessos" }}
          />
        </h1>
        <div className="text-sm breadcrumbs text-gray-500">
          <ul className="pointer-events-none">
            <li>Admin</li>
            <li>Gestão de Acessos</li>
          </ul>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="stats shadow bg-base-200">
          <div className="stat">
            <div className="stat-figure text-primary">
              <FiUser className="text-2xl" />
            </div>
            <div className="stat-title">Total de Usuários</div>
            <div className="stat-value">{users.length}</div>
            <div className="stat-desc">
              {users.filter((u) => u.ic_situacao_ativo).length} ativos
            </div>
          </div>
        </div>

        <div className="stats shadow bg-base-200">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FiActivity className="text-2xl" />
            </div>
            <div className="stat-title">Acessos Recentes</div>
            <div className="stat-value">
              {
                users.filter(
                  (u) =>
                    new Date(u.ultimo_acesso) >
                    new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                ).length
              }
            </div>
            <div className="stat-desc">últimos 7 dias</div>
          </div>
        </div>

        <div className="stats shadow bg-base-200">
          <div className="stat">
            <div className="stat-figure text-accent">
              <FiShield className="text-2xl" />
            </div>
            <div className="stat-title">Administradores</div>
            <div className="stat-value">
              {users.filter((u) => u.co_perfil === 1).length}
            </div>
            <div className="stat-desc">Acesso total</div>
          </div>
        </div>

        <div className="stats shadow bg-base-200">
          <div className="stat">
            <div className="stat-figure text-info">
              <FiLock className="text-2xl" />
            </div>
            <div className="stat-title">Contas Inativas</div>
            <div className="stat-value">
              {users.filter((u) => !u.ic_situacao_ativo).length}
            </div>
            <div className="stat-desc">Sem acesso</div>
          </div>
        </div>
      </div>

      <Tabela
        data={users}
        columns={userColumns}
        exportFileName="gestao_acessos"
        initialSorting={[
          { id: "statusTexto", desc: false },
          { id: "name", desc: false },
        ]}
      />
    </div>
  );
}
