import { useState } from 'react';
import FavoriteButton from "@/components/FavoriteButton";
import { FiFileText, FiCalendar, FiUser, FiSearch, FiFilter, FiDownload, FiPlus } from 'react-icons/fi';
import Tabela from "@/components/Tabela";

const GestaoAtestadosPage = () => {
  // Estados para controles de UI
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('todos');
  
  // Dados fictícios para demonstração (seriam buscados da API)
  const atestados = [
    {
      id: 1,
      matricula: "653123",
      nome: "Carlos Silva",
      tipo: "Médico",
      dataInicio: "2023-10-15",
      dataFim: "2023-10-18",
      periodo: "Manhã",
      crmMedico: "CRM/SP 123456",
      nomeMedico: "Dr. Roberto Mendes",
      cid: "J00",
      nomeAcompanhado: "",
      parentesco: "",
      observacao: "Resfriado comum",
      arquivo: "atestado_123.pdf",
      status: "aprovado"
    },
    {
      id: 2,
      matricula: "523456",
      nome: "Ana Paula Oliveira",
      tipo: "Acompanhamento",
      dataInicio: "2023-10-20",
      dataFim: "2023-10-22",
      periodo: "Dia Todo",
      crmMedico: "CRM/RJ 789012",
      nomeMedico: "Dra. Fernanda Costa",
      cid: "Z76.2",
      nomeAcompanhado: "Pedro Oliveira",
      parentesco: "Filho",
      observacao: "Consulta pediátrica",
      arquivo: "atestado_456.pdf",
      status: "pendente"
    },
    {
      id: 3,
      matricula: "123789",
      nome: "Roberto Almeida",
      tipo: "Médico",
      dataInicio: "2023-10-05",
      dataFim: "2023-10-07",
      periodo: "Tarde",
      crmMedico: "CRM/MG 345678",
      nomeMedico: "Dr. Marcelo Santos",
      cid: "M54.5",
      nomeAcompanhado: "",
      parentesco: "",
      observacao: "Dor lombar",
      arquivo: "atestado_789.pdf",
      status: "aprovado"
    },
    {
      id: 4,
      matricula: "409234",
      nome: "Juliana Mendes",
      tipo: "Acompanhamento",
      dataInicio: "2023-10-25",
      dataFim: "2023-10-26",
      periodo: "Manhã",
      crmMedico: "CRM/SP 901234",
      nomeMedico: "Dra. Patrícia Lima",
      cid: "Z00.1",
      nomeAcompanhado: "Maria Mendes",
      parentesco: "Mãe",
      observacao: "Exame de rotina",
      arquivo: "atestado_234.pdf",
      status: "rejeitado"
    },
    {
      id: 5,
      matricula: "653567",
      nome: "Fernando Costa",
      tipo: "Óbito",
      dataInicio: "2023-10-10",
      dataFim: "2023-10-15",
      periodo: "Dia Todo",
      crmMedico: "CRM/RS 567890",
      nomeMedico: "Dr. Antônio Pereira",
      cid: "Z76.2",
      nomeAcompanhado: "José Costa",
      parentesco: "Pai",
      observacao: "Falecimento do pai",
      arquivo: "atestado_567.pdf",
      status: "aprovado"
    }
  ];

  // Estatísticas calculadas
  const stats = {
    totalAtestados: atestados.length,
    atestadosMes: atestados.filter(a => new Date(a.dataInicio).getMonth() === new Date().getMonth()).length,
    acompanhamentos: atestados.filter(a => a.tipo === "Acompanhamento").length,
    pendentes: atestados.filter(a => a.status === "pendente").length
  };

  // Colunas para a tabela
  const atestadoColumns = [
    {
      accessorKey: "matricula",
      header: "Matrícula",
      size: 120
    },
    {
      accessorKey: "nome",
      header: "Nome",
      size: 180
    },
    {
      accessorKey: "tipo",
      header: "Tipo",
      size: 120,
      cell: ({ getValue }) => {
        const tipo = getValue();
        let color = "bg-blue-500";
        if (tipo === "Acompanhamento") color = "bg-purple-500";
        if (tipo === "Óbito") color = "bg-gray-500";
        
        return (
          <span className={`px-2 py-1 rounded-full text-xs text-white ${color}`}>
            {tipo}
          </span>
        );
      }
    },
    {
      accessorKey: "dataInicio",
      header: "Início",
      size: 120,
      cell: ({ getValue }) => new Date(getValue()).toLocaleDateString()
    },
    {
      accessorKey: "dataFim",
      header: "Fim",
      size: 120,
      cell: ({ getValue }) => new Date(getValue()).toLocaleDateString()
    },
    {
      accessorKey: "periodo",
      header: "Período",
      size: 100
    },
    {
      accessorKey: "nomeMedico",
      header: "Médico",
      size: 180
    },
    {
      accessorKey: "cid",
      header: "CID",
      size: 80
    },
    {
      accessorKey: "status",
      header: "Status",
      size: 120,
      cell: ({ getValue }) => {
        const status = getValue();
        let color = "bg-gray-500";
        if (status === "aprovado") color = "bg-success";
        if (status === "pendente") color = "bg-warning";
        if (status === "rejeitado") color = "bg-error";
        
        return (
          <span className={`px-2 py-1 rounded-full text-xs text-white ${color}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        );
      }
    },
    {
      accessorKey: "arquivo",
      header: "Arquivo",
      size: 120,
      cell: ({ getValue }) => (
        <a 
          href="#" 
          className="text-primary hover:underline flex items-center"
          onClick={(e) => {
            e.preventDefault();
            // Simulação de download
            alert(`Download do arquivo: ${getValue()}`);
          }}
        >
          <FiDownload className="mr-1" /> Baixar
        </a>
      )
    }
  ];

  return (
    <div className="bg-base-100 space-y-6">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-base-content flex items-center gap-2">
            Gestão de Atestados
          </h1>
          <p className="text-base-content/70 mt-1">
            Visualize e gerencie todos os atestados registrados no sistema
          </p>
        </div>
        <div className="text-sm breadcrumbs text-base-content/70">
          <ul className="pointer-events-none">
            <li>Enfermaria</li>
            <li>Atestados</li>
            <li className="text-primary font-medium">Gestão</li>
          </ul>
        </div>
      </div>

      {/* Ações e Filtros */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary">
            <FiPlus className="mr-2" /> Novo Atestado
          </button>
          
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-outline">
              <FiFilter className="mr-2" /> Status
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
              <li><a onClick={() => setFilterStatus('todos')} className={filterStatus === 'todos' ? 'active' : ''}>Todos</a></li>
              <li><a onClick={() => setFilterStatus('aprovado')} className={filterStatus === 'aprovado' ? 'active' : ''}>Aprovados</a></li>
              <li><a onClick={() => setFilterStatus('pendente')} className={filterStatus === 'pendente' ? 'active' : ''}>Pendentes</a></li>
              <li><a onClick={() => setFilterStatus('rejeitado')} className={filterStatus === 'rejeitado' ? 'active' : ''}>Rejeitados</a></li>
            </ul>
          </div>
        </div>
        
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Buscar atestados..."
            className="input input-bordered w-full md:w-80 pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-3 text-base-content/70" />
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="stats bg-base-200 shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <FiFileText className="text-2xl" />
            </div>
            <div className="stat-title">Total de Atestados</div>
            <div className="stat-value">{stats.totalAtestados}</div>
            <div className="stat-desc">Registros no sistema</div>
          </div>
        </div>

        <div className="stats bg-base-200 shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FiCalendar className="text-2xl" />
            </div>
            <div className="stat-title">Este Mês</div>
            <div className="stat-value">{stats.atestadosMes}</div>
            <div className="stat-desc">Atestados cadastrados</div>
          </div>
        </div>

        <div className="stats bg-base-200 shadow">
          <div className="stat">
            <div className="stat-figure text-accent">
              <FiUser className="text-2xl" />
            </div>
            <div className="stat-title">Acompanhamentos</div>
            <div className="stat-value">{stats.acompanhamentos}</div>
            <div className="stat-desc">Atestados familiares</div>
          </div>
        </div>

        <div className="stats bg-base-200 shadow">
          <div className="stat">
            <div className="stat-figure text-info">
              <FiFileText className="text-2xl" />
            </div>
            <div className="stat-title">Pendentes</div>
            <div className="stat-value">{stats.pendentes}</div>
            <div className="stat-desc">Aguardando análise</div>
          </div>
        </div>
      </div>

      {/* Tabela de Atestados */}
      <div className="bg-base-200 rounded-xl shadow-lg p-6">
        <Tabela
          data={atestados.filter(a => 
            (filterStatus === 'todos' || a.status === filterStatus) &&
            (searchTerm === '' || 
              a.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
              a.matricula.toLowerCase().includes(searchTerm.toLowerCase()) ||
              a.nomeMedico.toLowerCase().includes(searchTerm.toLowerCase()))
          )}
          columns={atestadoColumns}
          exportFileName="gestao_atestados"
          initialSorting={[
            { id: "dataInicio", desc: true },
            { id: "nome", desc: false },
          ]}
          columnVisibility
          storageKey="tabela-gestao-atestados"
        />
      </div>
      
      {/* Rodapé informativo */}
      <div className="text-center text-sm text-base-content/70">
        <p>© {new Date().getFullYear()} Sistema de Saúde Corporativa. Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

export default GestaoAtestadosPage;