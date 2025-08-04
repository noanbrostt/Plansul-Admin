import Tabela from "@/components/Tabela";
import FavoriteButton from "@/components/FavoriteButton";
import CodeBlock from "@/components/CodeBlock";
import { showAlert } from "@/components/alerts";

import { FiUser, FiMail, FiPhone, FiDollarSign } from "react-icons/fi";
import { FaPencilAlt, FaTrashAlt, FaEye } from "react-icons/fa";

export default function TabelasPage() {
  const users = [
    {
      id: 1,
      name: "João Silva",
      email: "joao.silva@empresa.com",
      phone: "(11) 9999-8888",
      status: "Ativo",
      role: "Administrador Geral",
      salary: 8500,
      admissionDate: "2020-03-15",
    },
    {
      id: 2,
      name: "Maria Souza",
      email: "maria.souza@empresa.com",
      phone: "(21) 8888-7777",
      status: "Inativo",
      role: "Colaborador",
      salary: 6500,
      admissionDate: "2019-11-20",
    },
    {
      id: 3,
      name: "Pedro Oliveira",
      email: "pedro.oliver@empresa.com",
      phone: "(31) 7777-6666",
      status: "Pendente",
      role: "Gerente de Projeto",
      salary: 12000,
      admissionDate: "2021-01-10",
    },
    {
      id: 4,
      name: "Ana Costa",
      email: "ana.costa@empresa.com",
      phone: "(41) 6666-5555",
      status: "Ativo",
      role: "Suporte Técnico N1",
      salary: 5500,
      admissionDate: "2022-06-01",
    },
    {
      id: 5,
      name: "Carlos Pereira",
      email: "carlos.pereira@empresa.com",
      phone: "(51) 5555-4444",
      status: "Ativo",
      role: "Desenvolvedor Backend Sênior",
      salary: 9500,
      admissionDate: "2018-09-01",
    },
    {
      id: 6,
      name: "Juliana Santos",
      email: "juliana.santos@empresa.com",
      phone: "(61) 4444-3333",
      status: "Inativo",
      role: "Designer UX/UI",
      salary: 7200,
      admissionDate: "2020-07-25",
    },
    {
      id: 7,
      name: "Roberto Almeida",
      email: "roberto.almeida@empresa.com",
      phone: "(71) 3333-2222",
      status: "Ativo",
      role: "Analista de Dados Júnior",
      salary: 7800,
      admissionDate: "2023-02-14",
    },
    {
      id: 8,
      name: "Fernanda Lima",
      email: "fernanda.lima@empresa.com",
      phone: "(81) 2222-1111",
      status: "Pendente",
      role: "Especialista em RH",
      salary: 6800,
      admissionDate: "2021-04-05",
    },
    {
      id: 9,
      name: "Gabriel Martins",
      email: "gabriel.martins@empresa.com",
      phone: "(11) 1111-2222",
      status: "Ativo",
      role: "Desenvolvedor Frontend Pleno",
      salary: 8000,
      admissionDate: "2022-09-10",
    },
    {
      id: 10,
      name: "Laura Rodrigues",
      email: "laura.rodrigues@empresa.com",
      phone: "(21) 2222-3333",
      status: "Ativo",
      role: "Marketing Digital",
      salary: 6000,
      admissionDate: "2023-01-20",
    },
    {
      id: 11,
      name: "Ricardo Mendes",
      email: "ricardo.mendes@empresa.com",
      phone: "(31) 3333-4444",
      status: "Inativo",
      role: "Contador",
      salary: 7000,
      admissionDate: "2017-05-18",
    },
    {
      id: 12,
      name: "Patrícia Gomes",
      email: "patricia.gomes@empresa.com",
      phone: "(41) 4444-5555",
      status: "Ativo",
      role: "Diretor Comercial",
      salary: 15000,
      admissionDate: "2016-10-01",
    },
    {
      id: 13,
      name: "Marcelo Rocha",
      email: "marcelo.rocha@empresa.com",
      phone: "(51) 6666-7777",
      status: "Ativo",
      role: "Engenheiro de Software",
      salary: 10000,
      admissionDate: "2019-02-05",
    },
    {
      id: 14,
      name: "Sofia Dias",
      email: "sofia.dias@empresa.com",
      phone: "(61) 7777-8888",
      status: "Pendente",
      role: "Analista de Qualidade (QA)",
      salary: 6200,
      admissionDate: "2022-04-12",
    },
    {
      id: 15,
      name: "Thiago Correia",
      email: "thiago.correia@empresa.com",
      phone: "(71) 8888-9999",
      status: "Ativo",
      role: "Product Owner",
      salary: 11000,
      admissionDate: "2020-11-30",
    },
    {
      id: 16,
      name: "Beatriz Nogueira",
      email: "beatriz.nogueira@empresa.com",
      phone: "(81) 9999-0000",
      status: "Ativo",
      role: "Assistente Administrativo",
      salary: 4800,
      admissionDate: "2024-01-01",
    },
    {
      id: 17,
      name: "Felipe Azevedo",
      email: "felipe.azevedo@empresa.com",
      phone: "(11) 1234-5678",
      status: "Inativo",
      role: "Consultor Externo",
      salary: 9000,
      admissionDate: "2015-08-01",
    },
    {
      id: 18,
      name: "Isabela Cardoso",
      email: "isabela.cardoso@empresa.com",
      phone: "(21) 2345-6789",
      status: "Ativo",
      role: "Coordenador de Vendas",
      salary: 8000,
      admissionDate: "2021-07-19",
    },
    {
      id: 19,
      name: "Guilherme Siqueira",
      email: "guilherme.siqueira@empresa.com",
      phone: "(31) 3456-7890",
      status: "Ativo",
      role: "Técnico de Redes",
      salary: 5800,
      admissionDate: "2023-03-01",
    },
    {
      id: 20,
      name: "Mariana Barreto",
      email: "mariana.barreto@empresa.com",
      phone: "(41) 4567-8901",
      status: "Pendente",
      role: "Estagiário de Marketing",
      salary: 2500,
      admissionDate: "2024-02-15",
    },
    {
      id: 21,
      name: "Diego Fernandes",
      email: "diego.fernandes@empresa.com",
      phone: "(51) 5678-9012",
      status: "Ativo",
      role: "Arquiteto de Soluções",
      salary: 13000,
      admissionDate: "2017-01-01",
    },
    {
      id: 22,
      name: "Carolina Guedes",
      email: "carolina.guedes@empresa.com",
      phone: "(61) 6789-0123",
      status: "Ativo",
      role: "Scrum Master",
      salary: 10500,
      admissionDate: "2020-09-01",
    },
    {
      id: 23,
      name: "Eduardo Ribeiro",
      email: "eduardo.ribeiro@empresa.com",
      phone: "(71) 7890-1234",
      status: "Inativo",
      role: "Analista Financeiro",
      salary: 7500,
      admissionDate: "2018-04-22",
    },
    {
      id: 24,
      name: "Luisa Pires",
      email: "luisa.pires@empresa.com",
      phone: "(81) 8901-2345",
      status: "Ativo",
      role: "Atendente de Suporte N2",
      salary: 6000,
      admissionDate: "2022-10-10",
    },
    {
      id: 25,
      name: "Artur Gomes",
      email: "artur.gomes@empresa.com",
      phone: "(11) 9012-3456",
      status: "Ativo",
      role: "Gerente de Produto",
      salary: 14000,
      admissionDate: "2019-06-01",
    },
    {
      id: 26,
      name: "Helena Sousa",
      email: "helena.sousa@empresa.com",
      phone: "(21) 0123-4567",
      status: "Pendente",
      role: "Social Media Manager",
      salary: 5700,
      admissionDate: "2023-05-01",
    },
    {
      id: 27,
      name: "Vinicius Lemos",
      email: "vinicius.lemos@empresa.com",
      phone: "(31) 1234-5678",
      status: "Ativo",
      role: "Desenvolvedor Mobile Pleno",
      salary: 8800,
      admissionDate: "2022-07-07",
    },
    {
      id: 28,
      name: "Bruna Dias",
      email: "bruna.dias@empresa.com",
      phone: "(41) 2345-6789",
      status: "Ativo",
      role: "Analista de Negócios",
      salary: 9200,
      admissionDate: "2021-02-28",
    },
    {
      id: 29,
      name: "Caio Viana",
      email: "caio.viana@empresa.com",
      phone: "(51) 3456-7890",
      status: "Inativo",
      role: "Cientista de Dados",
      salary: 11500,
      admissionDate: "2019-12-15",
    },
    {
      id: 30,
      name: "Monica Sales",
      email: "monica.sales@empresa.com",
      phone: "(61) 4567-8901",
      status: "Ativo",
      role: "Consultor de Vendas",
      salary: 7000,
      admissionDate: "2022-11-01",
    },
    {
      id: 31,
      name: "Lucas Neves",
      email: "lucas.neves@empresa.com",
      phone: "(71) 5678-9012",
      status: "Ativo",
      role: "Especialista em SEO",
      salary: 6300,
      admissionDate: "2023-04-20",
    },
    {
      id: 32,
      name: "Priscila Rocha",
      email: "priscila.rocha@empresa.com",
      phone: "(81) 6789-0123",
      status: "Pendente",
      role: "Assistente Financeiro",
      salary: 5000,
      admissionDate: "2024-03-01",
    },
    {
      id: 33,
      name: "Rodrigo Brito",
      email: "rodrigo.brito@empresa.com",
      phone: "(11) 7890-1234",
      status: "Ativo",
      role: "Engenheiro DevOps",
      salary: 12500,
      admissionDate: "2020-08-01",
    },
    {
      id: 34,
      name: "Camila Teixeira",
      email: "camila.teixeira@empresa.com",
      phone: "(21) 8901-2345",
      status: "Ativo",
      role: "Redatora de Conteúdo",
      salary: 5400,
      admissionDate: "2023-06-15",
    },
    {
      id: 35,
      name: "Alexandre Pires",
      email: "alexandre.pires@empresa.com",
      phone: "(31) 9012-3456",
      status: "Inativo",
      role: "Técnico de Manutenção",
      salary: 4900,
      admissionDate: "2016-03-10",
    },
    {
      id: 36,
      name: "Alexandre Melo",
      email: "alexandre.melo@empresa.com",
      phone: "(41) 0123-4567",
      status: "Ativo",
      role: "Coordenador de Marketing",
      salary: 9800,
      admissionDate: "2021-09-01",
    },
    {
      id: 37,
      name: "Ana Costa",
      email: "ana.costa@empresa.com",
      phone: "(51) 1234-5678",
      status: "Ativo",
      role: "Analista de Suporte de TI",
      salary: 6700,
      admissionDate: "2022-01-05",
    },
    {
      id: 38,
      name: "Ana Moraes",
      email: "ana.moraes@empresa.com",
      phone: "(61) 2345-6789",
      status: "Pendente",
      role: "Estagiário de RH",
      salary: 2200,
      admissionDate: "2024-04-01",
    },
  ];
  console.log("//////////////////");
  console.log("//////////////////");
  console.log("const users:");
  console.log(users);
  console.log("//////////////////");

  const userColumns = [
    {
      accessorKey: "id",
      header: "ID",
      size: 80,
    },
    {
      accessorKey: "name",
      header: "Nome",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <FiUser className="text-primary" />
          <span>{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <FiMail className="text-secondary" />
          <span>{row.original.email}</span>
        </div>
      ),
    },
    {
      accessorKey: "phone",
      header: "Telefone",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <FiPhone className="text-accent" />
          <span>{row.original.phone}</span>
        </div>
      ),
    },
    {
      accessorKey: "role",
      header: "Cargo",
    },
    {
      accessorKey: "salary",
      header: "Salário",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <FiDollarSign className="text-success" />
          <span>R$ {row.original.salary.toLocaleString("pt-BR")}</span>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <span
          className={`badge ${
            row.original.status === "Ativo"
              ? "badge-success"
              : row.original.status === "Inativo"
              ? "badge-error"
              : "badge-warning"
          }`}
        >
          {row.original.status}
        </span>
      ),
    },
  ];
  console.log("//////////////////");
  console.log("const userColumns:");
  console.log(userColumns);
  console.log("//////////////////");
  console.log("//////////////////");

  return (
    <div className="bg-base-100 space-y-6">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center">
        <h1 className="flex text-3xl font-bold text-base-content">
          Tabelas{" "}
          <FavoriteButton tela={{ nome: "Tabelas", url: "devs/ui/tabelas" }} />
        </h1>
        <div className="text-sm breadcrumbs text-gray-500">
          <ul>
            <li>Devs</li>
            <li>Elementos UI</li>
            <li className="text-primary font-medium">Tabelas</li>
          </ul>
        </div>
      </div>

      {/* --- Seção: Tabela Básica --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Tabela Básica{" "}
          <small className="text-xs text-gray-500">
            (Inclui ordenação e tabela zebrada. Paginação, filtro de pesquisa e
            exportação excel estão recebendo "false".)
          </small>
        </h2>
        <Tabela
          data={users.slice(0, 4)}
          columns={userColumns}
          pagination={false}
          globalFilter={false}
          enableExport={false}
        />
        <p className="font-medium text-base-content/80 mt-4">Código:</p>
        <div>
          <CodeBlock
            code={`import Tabela from "@/components/Tabela";

const users = [...] // Ta lá no console
const userColumns = [...] // Ta lá no console

<Tabela
  data={users.slice(0, 4)}
  columns={userColumns}
  pagination={false}
  globalFilter={false}
  enableExport={false}
/>`}
          />
        </div>
      </div>

      {/* --- Seção: Tabela com Ordenação e Paginação --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Tabela com Todas as Personalizações{" "}
          <small className="text-xs text-gray-500">
            (Inclui filtro global, filtro por coluna, ocultação de colunas
            persistente, paginação, ordenação inicial e exportação Excel com
            nome de arquivo.)
          </small>
        </h2>
        <Tabela
          data={users} // Dados da tabela
          columns={userColumns} // Configuração das colunas
          globalFilter={true} // Vem "true" por padrão, mas da pra desativar se quiser
          columnFilters // Habilita o filtro por coluna (Funciona melhor com nomes)
          columnVisibility // Habilita a ocultação de colunas pelo usuário
          storageKey="tabela-exemplo-storageKey" // Chave única para que as colunas ocultas permaneçam entre as seções, chave deve ser única no site inteiro
          initialHiddenColumns={["id", "email"]} // Opcional, caso o usuário ainda não tenha personalizado, essas serão as colunas ocultas
          initialSorting={[
            // Define uma ordenação inicial
            { id: "name", desc: false }, // Prioridade 1 (ASC)
            { id: "salary", desc: true }, // Prioridade 2 (DESC)
          ]}
          zebra={true} // Vem "true" por padrão, mas da pra desativar se quiser
          enableExport={true} // Vem "true" por padrão, mas da pra desativar se quiser
          exportFileName="Exportação da Tabela de Exemplo"
          ////////////////////////////////////////////////////////////////////
          className="mt-8 gap-2" // Outras classes tailwind ou não que quiser adicionar
        />

        <p className="font-medium text-base-content/80 mt-4">Código:</p>
        <div>
          <CodeBlock
            code={`import Tabela from "@/components/Tabela";

const users = [...] // Ta lá no console
const userColumns = [...] // Ta lá no console

<Tabela
  data={users}
  columns={userColumns}
  globalFilter={true}
  columnFilters
  columnVisibility
  storageKey="tabela-exemplo-storageKey"
  initialHiddenColumns={["id", "email"]}
  initialSorting={[
    { id: "name", desc: false },
    { id: "salary", desc: true },
  ]}
  zebra={true}
  enableExport={true}
  exportFileName="Exportação da Tabela de Exemplo"
  className="mt-8 gap-2"
/>`}
          />
        </div>
      </div>

      {/* --- Seção: Tabela com Ordenação e Paginação --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Tabela com Coluna de "Ações"
        </h2>
        <Tabela
          data={[
            {
              id: 1,
              name: "João Silva",
              role: "Administrador Geral",
              status: "Ativo",
            },
            {
              id: 2,
              name: "Maria Souza",
              role: "Colaborador",
              status: "Inativo",
            },
            {
              id: 3,
              name: "Pedro Oliveira",
              role: "Gerente de Projeto",
              status: "Pendente",
            },
          ]}
          columns={[
            {
              accessorKey: "id",
              header: "ID",
              size: 80,
            },
            {
              accessorKey: "name",
              header: "Nome",
            },
            {
              accessorKey: "role",
              header: "Cargo",
            },
            {
              accessorKey: "status",
              header: "Status",
              cell: ({ row }) => (
                <span
                  className={`badge ${
                    row.original.status === "Ativo"
                      ? "badge-success"
                      : row.original.status === "Inativo"
                      ? "badge-error"
                      : "badge-warning"
                  }`}
                >
                  {row.original.status}
                </span>
              ),
            },
            {
              accessorKey: "actions",
              header: "Ações",
              cell: () => (
                <span className="flex gap-2">
                  <button
                    className="btn btn-primary tooltip"
                    data-tip="Visualizar"
                    onClick={() =>
                      showAlert({ title: "Visualizar", icon: "info" })
                    }
                  >
                    <FaEye />
                  </button>
                  <button
                    className="btn btn-primary tooltip"
                    data-tip="Editar"
                    onClick={() =>
                      showAlert({ title: "Editar", icon: "success" })
                    }
                  >
                    <FaPencilAlt />
                  </button>
                  <button
                    className="btn btn-error tooltip"
                    data-tip="Excluir"
                    onClick={() =>
                      showAlert({ title: "Excluir", icon: "error" })
                    }
                  >
                    <FaTrashAlt />
                  </button>
                </span>
              ),
            },
          ]}
        />

        <p className="font-medium text-base-content/80 mt-4">Código:</p>
        <div>
          <CodeBlock
            code={`import Tabela from "@/components/Tabela";

<Tabela
  data={[...]}
  columns={[...
    {
      accessorKey: "actions",
      header: "Ações",
      cell: () => (
        <span className="flex gap-2">
          <button
            className="btn btn-primary tooltip"
            data-tip="Visualizar"
            onClick={() =>
              showAlert({ title: "Visualizar", icon: "info" })
            }
          >
            <FaEye />
          </button>
          <button
            className="btn btn-primary tooltip"
            data-tip="Editar"
            onClick={() =>
              showAlert({ title: "Editar", icon: "success" })
            }
          >
            <FaPencilAlt />
          </button>
          <button
            className="btn btn-error tooltip"
            data-tip="Excluir"
            onClick={() =>
              showAlert({ title: "Excluir", icon: "error" })
            }
          >
            <FaTrashAlt />
          </button>
        </span>
      ),
    },
  ]}
/>`}
          />
        </div>
      </div>
    </div>
  );
}
