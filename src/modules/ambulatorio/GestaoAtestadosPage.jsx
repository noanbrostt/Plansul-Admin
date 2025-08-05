import FavoriteButton from "@/components/FavoriteButton";
import {
  FiFileText,
  FiCalendar,
  FiUser,
  FiDownload,
} from "react-icons/fi";
import Tabela from "@/components/Tabela";

const GestaoAtestadosPage = () => {

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
      status: "aprovado",
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
      status: "pendente",
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
      status: "aprovado",
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
      status: "rejeitado",
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
      status: "aprovado",
    },
  ];

  // Estatísticas calculadas
  const stats = {
    totalAtestados: atestados.length,
    atestadosMes: atestados.filter(
      (a) => new Date(a.dataInicio).getMonth() === new Date().getMonth()
    ).length,
    acompanhamentos: atestados.filter((a) => a.tipo === "Acompanhamento")
      .length,
    pendentes: atestados.filter((a) => a.status === "pendente").length,
  };

  // Colunas para a tabela
  const atestadoColumns = [
    {
      accessorKey: "matricula",
      header: "Matrícula",
      size: 120,
    },
    {
      accessorKey: "nome",
      header: "Nome",
      size: 180,
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
          <span
            className={`px-2 py-1 rounded-full text-xs text-white ${color}`}
          >
            {tipo}
          </span>
        );
      },
    },
    {
      accessorKey: "dataInicio",
      header: "Início",
      size: 120,
      cell: ({ getValue }) => new Date(getValue()).toLocaleDateString(),
    },
    {
      accessorKey: "dataFim",
      header: "Fim",
      size: 120,
      cell: ({ getValue }) => new Date(getValue()).toLocaleDateString(),
    },
    {
      accessorKey: "periodo",
      header: "Período",
      size: 100,
    },
    {
      accessorKey: "nomeMedico",
      header: "Médico",
      size: 180,
    },
    {
      accessorKey: "cid",
      header: "CID",
      size: 80,
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
          <span
            className={`px-2 py-1 rounded-full text-xs text-white ${color}`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        );
      },
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
      ),
    },
  ];

  return (
    <div className="bg-base-100 space-y-6">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center">
        <h1 className="flex text-3xl font-bold text-base-content">
          Gestão de Atestados{" "}
          <FavoriteButton
            tela={{
              nome: "Gestão de Atestados",
              url: "ambulatorio/gestao-atestados",
            }}
          />
        </h1>
        <div className="text-sm breadcrumbs text-base-content/70">
          <ul className="pointer-events-none">
            <li>Ambulatório</li>
            <li className="text-primary font-medium">Gestão de Atestados</li>
          </ul>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
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

        <Tabela
          data={atestados}
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
  );
};

export default GestaoAtestadosPage;
