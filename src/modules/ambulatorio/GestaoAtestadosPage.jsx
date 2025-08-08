import FavoriteButton from "@/components/FavoriteButton";
import { useLoaderData } from "react-router-dom";
import {
  FiFileText,
  FiCalendar,
  FiUser,
  FiDownload,
} from "react-icons/fi";
import Tabela from "@/components/Tabela";

const GestaoAtestadosPage = () => {
  const data = useLoaderData();
  console.log("Dados da simulação de API: "+JSON.stringify(data));
  

  // Dados fictícios para demonstração (seriam buscados da API)
  const atestados = [
    {
      id: 1,
      matricula: "653123",
      nome: "Carlos Silva",
      tipo: "Médico",
      dataCadastro: "2023-10-13",
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
    },
    {
      id: 2,
      matricula: "523456",
      nome: "Ana Paula Oliveira",
      tipo: "Acompanhamento",
      dataCadastro: "2023-10-26",
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
    },
    {
      id: 3,
      matricula: "123789",
      nome: "Roberto Almeida",
      tipo: "Médico",
      dataCadastro: "2023-10-07",
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
    },
    {
      id: 4,
      matricula: "409234",
      nome: "Juliana Mendes",
      tipo: "Acompanhamento",
      dataCadastro: "2023-10-26",
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
    },
    {
      id: 5,
      matricula: "653567",
      nome: "Fernando Costa",
      tipo: "Óbito",
      dataCadastro: "2023-10-11",
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
      header: () => <div className="w-full text-center">Matrícula</div>,
      cell: ({ getValue }) => <div className="text-center">{getValue()}</div>,
      size: 120,
    },
    {
      accessorKey: "nome",
      header: "Nome",
      size: 180,
    },
    {
      accessorKey: "tipo",
      header: () => <div className="w-full text-center">Tipo</div>,
      size: 120,
      cell: ({ getValue }) => {
        let tipo = getValue();
        let color = "bg-blue-500";
        if (tipo === "Acompanhamento") {color = "bg-purple-500"; tipo = "Acompan.";}
        if (tipo === "Óbito") color = "bg-gray-500";

        return (
          <div
            className={`px-2 py-1 rounded-full text-xs text-white text-center ${color}`}
          >
            {tipo}
          </div>
        );
      },
    },
    {
      accessorKey: "dataCadastro",
      header: () => <div className="w-full text-center">Cadastrado</div>,
      size: 120,
      cell: ({ getValue }) => <div className="text-center">{new Date(getValue()).toLocaleDateString()}</div>,
    },
    {
      accessorKey: "dataInicio",
      header: () => <div className="w-full text-center">Início</div>,
      size: 120,
      cell: ({ getValue }) => <div className="text-center">{new Date(getValue()).toLocaleDateString()}</div>,
    },
    {
      accessorKey: "dataFim",
      header: () => <div className="w-full text-center">Fim</div>,
      size: 120,
      cell: ({ getValue }) => <div className="text-center">{new Date(getValue()).toLocaleDateString()}</div>,
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
      accessorKey: "arquivo",
      header: () => <div className="w-full text-center">Arquivo</div>,
      size: 120,
      cell: ({ getValue }) => (
        <a
          href="#"
          className="text-primary hover:underline flex items-center justify-center"
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
            { id: "dataCadastro", desc: true },
            { id: "nome", desc: false },
          ]}
          columnVisibility
          storageKey="tabela-gestao-atestados"
        />
    </div>
  );
};

export default GestaoAtestadosPage;
