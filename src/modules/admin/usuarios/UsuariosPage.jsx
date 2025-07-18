import { useState } from "react";
import { 
  FiSearch, FiPlus, FiEdit, FiTrash2, FiUser, 
  FiMail, FiLock, FiCalendar, FiShield, FiCheck,
  FiX, FiFilter, FiActivity
} from "react-icons/fi";
import FavoriteButton from "@/components/FavoriteButton";

export default function UsuariosPage() {
  const [users, setUsers] = useState([
    { id: 1, name: "Ana Silva", email: "ana@empresa.com", role: "Administrador", status: "Ativo", lastLogin: "2023-08-15", permissions: ["Admin", "Gestor"] },
    { id: 2, name: "Carlos Mendes", email: "carlos@empresa.com", role: "Gestor", status: "Ativo", lastLogin: "2023-08-20", permissions: ["Gestor"] },
    { id: 3, name: "Beatriz Costa", email: "beatriz@empresa.com", role: "Desenvolvedor", status: "Ativo", lastLogin: "2023-08-18", permissions: ["Desenvolvedor", "Analista"] },
    { id: 4, name: "Daniel Oliveira", email: "daniel@empresa.com", role: "Analista", status: "Inativo", lastLogin: "2023-07-22", permissions: ["Analista"] },
    { id: 5, name: "Eduarda Santos", email: "eduarda@empresa.com", role: "Usuário", status: "Ativo", lastLogin: "2023-08-21", permissions: ["Usuário"] },
    { id: 6, name: "Fernando Almeida", email: "fernando@empresa.com", role: "Desenvolvedor", status: "Ativo", lastLogin: "2023-08-19", permissions: ["Desenvolvedor"] },
  ]);
  
  const [filter, setFilter] = useState({ 
    role: "Todos", 
    status: "Todos", 
    search: "" 
  });
  
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showUserDetails, setShowUserDetails] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // Filtrar usuários
  const filteredUsers = users.filter(user => {
    const matchesRole = filter.role === "Todos" || user.role === filter.role;
    const matchesStatus = filter.status === "Todos" || user.status === filter.status;
    const matchesSearch = 
      filter.search === "" || 
      user.name.toLowerCase().includes(filter.search.toLowerCase()) ||
      user.email.toLowerCase().includes(filter.search.toLowerCase());
    
    return matchesRole && matchesStatus && matchesSearch;
  });

  // Adicionar/Editar usuário
  const handleSaveUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    
    if (currentUser) {
      // Editar usuário existente
      setUsers(users.map(user => 
        user.id === currentUser.id ? { ...user, ...userData } : user
      ));
    } else {
      // Adicionar novo usuário
      const newUser = {
        id: users.length + 1,
        ...userData,
        status: "Ativo",
        lastLogin: new Date().toISOString().split('T')[0],
        permissions: []
      };
      setUsers([...users, newUser]);
    }
    
    setShowModal(false);
    setCurrentUser(null);
  };

  // Excluir usuário
  const handleDeleteUser = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  // Abrir modal para edição
  const openEditModal = (user) => {
    setCurrentUser(user);
    setShowModal(true);
  };

  return (
    <div className="bg-base-100 min-h-screen space-y-6">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center">
        <h1 className="flex text-3xl font-bold text-base-content">
          Gestão de Usuários{" "}
          <FavoriteButton tela={{ nome: "Gestão de Usuários", url: "admin/usuarios" }} />
        </h1>
        <div className="text-sm breadcrumbs text-gray-500">
          <ul className="pointer-events-none">
            <li>Admin</li>
            <li>Gestão de Usuários</li>
          </ul>
        </div>
      </div>

      {/* Barra de Ações */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex gap-2">
          <button 
            className="btn btn-primary"
            onClick={() => { setCurrentUser(null); setShowModal(true); }}
          >
            <FiPlus className="mr-2" /> Novo Usuário
          </button>
          
          <button 
            className={`btn ${showFilters ? 'btn-active' : 'btn-outline'}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <FiFilter className="mr-2" /> Filtros
          </button>
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar usuários..."
            className="input input-bordered pl-10 w-full md:w-80"
            value={filter.search}
            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          />
        </div>
      </div>

      {/* Filtros */}
      {showFilters && (
        <div className="rounded-box bg-base-200 p-4 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="label">
                <span className="label-text">Perfil</span>
              </label>
              <select 
                className="select select-bordered w-full"
                value={filter.role}
                onChange={(e) => setFilter({ ...filter, role: e.target.value })}
              >
                <option value="Todos">Todos os perfis</option>
                <option value="Administrador">Administrador</option>
                <option value="Gestor">Gestor</option>
                <option value="Desenvolvedor">Desenvolvedor</option>
                <option value="Analista">Analista</option>
                <option value="Usuário">Usuário</option>
              </select>
            </div>
            
            <div>
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <select 
                className="select select-bordered w-full"
                value={filter.status}
                onChange={(e) => setFilter({ ...filter, status: e.target.value })}
              >
                <option value="Todos">Todos os status</option>
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <button 
                className="btn btn-outline w-full"
                onClick={() => setFilter({ role: "Todos", status: "Todos", search: "" })}
              >
                Limpar Filtros
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="stats shadow bg-base-200">
          <div className="stat">
            <div className="stat-figure text-primary">
              <FiUser className="text-2xl" />
            </div>
            <div className="stat-title">Total de Usuários</div>
            <div className="stat-value">{users.length}</div>
            <div className="stat-desc">+2 desde julho</div>
          </div>
        </div>
        
        <div className="stats shadow bg-base-200">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FiActivity className="text-2xl" />
            </div>
            <div className="stat-title">Usuários Ativos</div>
            <div className="stat-value">{users.filter(u => u.status === 'Ativo').length}</div>
            <div className="stat-desc">80% da base</div>
          </div>
        </div>
        
        <div className="stats shadow bg-base-200">
          <div className="stat">
            <div className="stat-figure text-accent">
              <FiShield className="text-2xl" />
            </div>
            <div className="stat-title">Administradores</div>
            <div className="stat-value">{users.filter(u => u.role === 'Administrador').length}</div>
            <div className="stat-desc">Gestão completa</div>
          </div>
        </div>
        
        <div className="stats shadow bg-base-200">
          <div className="stat">
            <div className="stat-figure text-info">
              <FiCalendar className="text-2xl" />
            </div>
            <div className="stat-title">Último Acesso</div>
            <div className="stat-value">Hoje</div>
            <div className="stat-desc">5 usuários ativos</div>
          </div>
        </div>
      </div>

      {/* Tabela de Usuários */}
      <div className="rounded-box bg-base-200 p-0 w-full shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="bg-base-300">Nome</th>
                <th className="bg-base-300">Email</th>
                <th className="bg-base-300">Perfil</th>
                <th className="bg-base-300">Status</th>
                <th className="bg-base-300">Último Acesso</th>
                <th className="bg-base-300 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                  <tr key={user.id} className="hover">
                    <td>
                      <div 
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() => setShowUserDetails(showUserDetails === user.id ? null : user.id)}
                      >
                        <div className="avatar">
                          <div className="mask mask-squircle w-10 h-10 bg-primary text-primary-content !flex items-center justify-center">
                            <FiUser className="text-xl" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`badge badge-${user.role === 'Administrador' ? 'primary' : user.role === 'Gestor' ? 'secondary' : user.role === 'Desenvolvedor' ? 'accent' : 'outline'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td>
                      <span className={`badge badge-${user.status === 'Ativo' ? 'success' : 'error'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>{user.lastLogin}</td>
                    <td className="text-right">
                      <div className="flex justify-end gap-2">
                        <button 
                          className="btn btn-sm btn-outline btn-info"
                          onClick={() => setShowUserDetails(showUserDetails === user.id ? null : user.id)}
                        >
                          Detalhes
                        </button>
                        <button 
                          className="btn btn-sm btn-outline btn-warning"
                          onClick={() => openEditModal(user)}
                        >
                          <FiEdit />
                        </button>
                        <button 
                          className="btn btn-sm btn-outline btn-error"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-8">
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <FiUser className="text-4xl mb-2" />
                      <p className="text-lg">Nenhum usuário encontrado</p>
                      <p className="text-sm mt-2">Tente alterar os filtros de busca</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detalhes do Usuário */}
      {showUserDetails && (
        <div className="rounded-box bg-base-200 p-6 w-full shadow-md">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-xl font-bold">
              Detalhes do Usuário
            </h2>
            <button 
              className="btn btn-sm btn-circle btn-ghost"
              onClick={() => setShowUserDetails(null)}
            >
              <FiX className="text-xl" />
            </button>
          </div>
          
          {filteredUsers.filter(u => u.id === showUserDetails).map(user => (
            <div key={user.id} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="avatar mb-4">
                  <div className="pr-[1px] mask mask-squircle w-24 h-24 bg-primary text-primary-content !flex items-center justify-center">
                    <FiUser className="text-4xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{user.name}</h3>
                <p className="text-gray-500 mb-4">{user.email}</p>
                
                <div className="flex gap-2 mb-4">
                  <span className={`badge badge-lg ${user.role === 'Administrador' ? 'badge-primary' : user.role === 'Gestor' ? 'badge-secondary' : user.role === 'Desenvolvedor' ? 'badge-accent' : 'badge-outline'}`}>
                    {user.role}
                  </span>
                  <span className={`badge badge-lg ${user.status === 'Ativo' ? 'badge-success' : 'badge-error'}`}>
                    {user.status}
                  </span>
                </div>
                
                <div className="text-center text-gray-500">
                  <p>Último acesso: {user.lastLogin}</p>
                  <p>Membro desde: 2023-01-10</p>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h4 className="text-lg font-semibold mb-4">Permissões</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  {['Admin', 'Gestor', 'Desenvolvedor', 'Analista', 'Relatórios', 'Edição'].map(permission => (
                    <div key={permission} className="flex items-center gap-2">
                      {user.permissions.includes(permission) ? (
                        <FiCheck className="text-success" />
                      ) : (
                        <FiX className="text-error" />
                      )}
                      <span>{permission}</span>
                    </div>
                  ))}
                </div>
                
                <h4 className="text-lg font-semibold mb-4">Atividade Recente</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-base-300 rounded-full p-2">
                      <FiActivity />
                    </div>
                    <div>
                      <p className="font-medium">Acesso ao sistema</p>
                      <p className="text-sm text-gray-500">Hoje às 09:45</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-base-300 rounded-full p-2">
                      <FiShield />
                    </div>
                    <div>
                      <p className="font-medium">Permissões atualizadas</p>
                      <p className="text-sm text-gray-500">Ontem às 14:30</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-base-300 rounded-full p-2">
                      <FiEdit />
                    </div>
                    <div>
                      <p className="font-medium">Perfil atualizado</p>
                      <p className="text-sm text-gray-500">3 dias atrás</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal para Adicionar/Editar Usuário */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-base-100 rounded-box w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">
                  {currentUser ? "Editar Usuário" : "Adicionar Novo Usuário"}
                </h2>
                <button 
                  className="btn btn-sm btn-circle btn-ghost"
                  onClick={() => setShowModal(false)}
                >
                  <FiX className="text-xl" />
                </button>
              </div>
              
              <form onSubmit={handleSaveUser}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="label">
                      <span className="label-text">Nome Completo</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="input input-bordered w-full"
                      placeholder="Nome do usuário"
                      defaultValue={currentUser?.name || ""}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="input input-bordered w-full"
                      placeholder="email@empresa.com"
                      defaultValue={currentUser?.email || ""}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="label">
                      <span className="label-text">Perfil</span>
                    </label>
                    <select 
                      name="role"
                      className="select select-bordered w-full"
                      defaultValue={currentUser?.role || "Usuário"}
                      required
                    >
                      <option value="Administrador">Administrador</option>
                      <option value="Gestor">Gestor</option>
                      <option value="Desenvolvedor">Desenvolvedor</option>
                      <option value="Analista">Analista</option>
                      <option value="Usuário">Usuário</option>
                    </select>
                  </div>
                  
                  {!currentUser && (
                    <div>
                      <label className="label">
                        <span className="label-text">Senha</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="input input-bordered w-full"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  )}
                  
                  <div>
                    <label className="label">
                      <span className="label-text">Status</span>
                    </label>
                    <select 
                      name="status"
                      className="select select-bordered w-full"
                      defaultValue={currentUser?.status || "Ativo"}
                      required
                    >
                      <option value="Ativo">Ativo</option>
                      <option value="Inativo">Inativo</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-end gap-3">
                  <button 
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button 
                    type="submit"
                    className="btn btn-primary"
                  >
                    {currentUser ? "Salvar Alterações" : "Adicionar Usuário"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}