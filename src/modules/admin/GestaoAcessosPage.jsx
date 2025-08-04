import { useState } from "react";
import Tabela from "@/components/Tabela";
import {
  FiUser,
  FiShield,
  FiActivity,
  FiLock,
  FiX,
  FiEdit,
} from "react-icons/fi";
import FavoriteButton from "@/components/FavoriteButton";
import Select from "@/components/Select";

// Perfis disponíveis
const perfis = [
  { co_perfil: 1, nome: "Administrador" },
  { co_perfil: 2, nome: "Gestor" },
  { co_perfil: 3, nome: "Desenvolvedor" },
  { co_perfil: 4, nome: "Analista" },
  { co_perfil: 5, nome: "Usuário" },
];
const optionsPerfis = perfis.map((perfil) => ({
  value: perfil.co_perfil,
  label: perfil.nome,
}));

const PerfilCell = ({
  user,
  editingId,
  optionsPerfis,
  saveProfile,
  cancelEditing,
  startEditing,
}) => {
  if (editingId === user.id) {
    return (
      <div className="flex items-center gap-2">
        <Select
          variant="primary"
          className="w-full max-w-xs"
          options={optionsPerfis}
          value={optionsPerfis.find((opt) => opt.value === user.co_perfil)}
          autoFocus
          onChange={(selectedOption) => {
            if (selectedOption) {
              saveProfile(user.id, selectedOption.value);
            }
          }}
        />

        <div className="flex space-x-2">
          <button
            className="btn btn-ghost btn-sm text-error p-2"
            onClick={cancelEditing}
          >
            <FiX className="text-xl" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span
        className={`badge badge-${
          user.perfilNome === "Administrador"
            ? "primary"
            : user.perfilNome === "Gestor"
            ? "secondary"
            : user.perfilNome === "Desenvolvedor"
            ? "accent"
            : "outline"
        }`}
      >
        {user.perfilNome}
      </span>

      <button
        className="btn btn-ghost btn-sm text-primary p-2 tooltip tooltip-right"
        data-tip={"Editar Perfil"}
        onClick={() => startEditing(user.id)}
      >
        <FiEdit className="text-xl" />
      </button>
    </div>
  );
};

export default function GestaoAcessosPage() {
  // Estado para controle de edição
  const [editingId, setEditingId] = useState(null);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ana Silva",
      co_matricula: "123456",
      co_perfil: 1,
      perfilNome: "Administrador",
      statusTexto: "Habilidato",
    },
    {
      id: 2,
      name: "Carlos Mendes",
      co_matricula: "123463",
      co_perfil: 2,
      perfilNome: "Gestor",
      statusTexto: "Habilidato",
    },
    {
      id: 3,
      name: "Beatriz Costa",
      co_matricula: "123477",
      co_perfil: 3,
      perfilNome: "Desenvolvedor",
      statusTexto: "Habilidato",
    },
    {
      id: 4,
      name: "Daniel Oliveira",
      co_matricula: "123486",
      co_perfil: 4,
      perfilNome: "Analista",
      statusTexto: "Desabilitado",
    },
    {
      id: 5,
      name: "Eduarda Santos",
      co_matricula: "123491",
      co_perfil: 5,
      perfilNome: "Usuário",
      statusTexto: "Habilidato",
    },
    {
      id: 6,
      name: "Fernando Almeida",
      co_matricula: "123504",
      co_perfil: 3,
      perfilNome: "Desenvolvedor",
      statusTexto: "Habilidato",
    },
  ]);

  // Função para iniciar edição
  const startEditing = (id) => {
    setEditingId(id);
  };

  // Função para salvar alterações
  const saveProfile = (id, newProfileId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        const newProfile = perfis.find((p) => p.co_perfil === newProfileId);
        return {
          ...user,
          co_perfil: newProfileId,
          perfilNome: newProfile.nome,
        };
      }
      return user;
    });
    setUsers(updatedUsers);
    setEditingId(null);
  };

  // Função para cancelar edição
  const cancelEditing = () => {
    setEditingId(null);
  };

  // Colunas para a tabela
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
      cell: ({ row }) => (
        <PerfilCell
          user={row.original}
          editingId={editingId}
          optionsPerfis={optionsPerfis}
          saveProfile={saveProfile}
          cancelEditing={cancelEditing}
          startEditing={startEditing}
        />
      ),
    },
    {
      accessorKey: "statusTexto",
      header: () => <div className="w-full text-center">Status</div>,
      cell: ({ row }) => (
        <div className="text-center">
          <span
            className={`badge badge-${
              row.original.statusTexto == "Habilidato" ? "success" : "error"
            }`}
          >
            {row.original.statusTexto}
          </span>
        </div>
      ),
      size: 60,
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
            <li className="text-primary font-medium">Gestão de Acessos</li>
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
              {users.filter((u) => u.statusTexto === "Habilidato").length} Habilidatos
            </div>
          </div>
        </div>

        <div className="stats shadow bg-base-200">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FiActivity className="text-2xl" />
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
            <div className="stat-figure text-accent">
              <FiShield className="text-2xl" />
            </div>
            <div className="stat-title">Desenvolvedores</div>
            <div className="stat-value">
              {users.filter((u) => u.co_perfil === 3).length}
            </div>
            <div className="stat-desc">Habilidatos</div>
          </div>
        </div>

        <div className="stats shadow bg-base-200">
          <div className="stat">
            <div className="stat-figure text-info">
              <FiLock className="text-2xl" />
            </div>
            <div className="stat-title">Contas Desabilitadas</div>
            <div className="stat-value">
              {users.filter((u) => u.statusTexto === "Desabilitado").length}
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
          { id: "statusTexto", desc: true },
          { id: "name", desc: false },
        ]}
      />
    </div>
  );
}
