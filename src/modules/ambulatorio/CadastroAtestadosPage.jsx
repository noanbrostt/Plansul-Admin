import { useState } from "react";
import FavoriteButton from "@/components/FavoriteButton";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";
import Botao from "@/components/Botao";
import { showSuccessAlert, showErrorAlert } from "@/components/alerts";
import {
  FiUser,
  FiUsers,
  FiCalendar,
  FiFileText,
  FiUpload,
  FiXCircle,
} from "react-icons/fi";
import { MdAdd } from "react-icons/md";

const CadastroAtestadosPage = () => {
  const hoje = new Date();
  const ontem = new Date();
  ontem.setDate(hoje.getDate() - 1);

  const formatDate = (date) => date.toISOString().split("T")[0];

  // Estados para os campos do formulário
  const [formData, setFormData] = useState({
    matricula: "",
    nomeFuncionario: "",
    dataInicio: formatDate(ontem),
    dataFim: formatDate(hoje),
    periodo: "dia_todo",
    crmMedico: "",
    nomeMedico: "",
    cid: "",
    nomeAcompanhado: "",
    parentesco: "",
    observacao: "",
    arquivo: null,
  });

  // Estados para controle de UI
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Opções para os selects
  const periodos = [
    { value: "manha", label: "Manhã" },
    { value: "tarde", label: "Tarde" },
    { value: "noite", label: "Noite" },
    { value: "dia_todo", label: "Dia Todo" },
  ];

  const parentescos = [
    { value: "pai", label: "Pai" },
    { value: "mae", label: "Mãe" },
    { value: "filho", label: "Filho" },
    { value: "conjuge", label: "Cônjuge" },
    { value: "irmao", label: "Irmão" },
    { value: "avo", label: "Avô/Avó" },
    { value: "bisavo", label: "Bisavô/Bisavó" },
    { value: "neto", label: "Neto/Neta" },
  ];

  // Função para lidar com mudanças nos inputs
  const handleChange = (e, nameOverride = null) => {
    // Caso seja Select customizado: e é o selectedOption e name vem separado
    if (nameOverride) {
      setFormData({ ...formData, [nameOverride]: e?.value });
      return;
    }

    // Caso seja input nativo
    const { name, value, files } = e.target;

    if (name === "arquivo") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Função para submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log(formData);
    
    // Validação básica
    if (
      !formData.matricula ||
      !formData.nomeFuncionario ||
      !formData.dataInicio ||
      !formData.dataFim ||
      !formData.periodo ||
      !formData.crmMedico ||
      !formData.nomeMedico ||
      !formData.arquivo
    ) {
      showErrorAlert("Preencha os campos obrigatórios")
      setIsSubmitting(false);
      return;
    }

    // Simulando envio para a API
    setTimeout(() => {
      console.log("Dados enviados:", formData);
      setIsSubmitting(false);
      showSuccessAlert("Atestado cadastrado com sucesso!");

      // Resetar o formulário após sucesso
      setFormData({
        matricula: "",
        nomeFuncionario: "",
        dataInicio: "",
        dataFim: "",
        periodo: "",
        crmMedico: "",
        nomeMedico: "",
        cid: "",
        nomeAcompanhado: "",
        parentesco: "",
        observacao: "",
        arquivo: null,
      });
    }, 1500);
  };

  return (
    <div className="bg-base-100 space-y-6">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center">
        <h1 className="flex text-3xl font-bold text-base-content">
          Cadastro de Atestados{" "}
          <FavoriteButton
            tela={{
              nome: "Cadastro de Atestados",
              url: "devs/telas/cadastro-atestados",
            }}
          />
        </h1>
        <div className="text-sm breadcrumbs text-gray-500">
          <ul className="pointer-events-none">
            <li>Ambulatório</li>
            <li className="text-primary font-medium">Cadastro de Atestados</li>
          </ul>
        </div>
      </div>

      {/* Formulário */}
      <div className="bg-base-200 rounded-xl shadow-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dados do Funcionário */}
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h2 className="card-title text-lg font-bold flex items-center gap-2">
                  <FiUser className="text-primary" />
                  Dados do Funcionário
                </h2>

                <div className="space-y-2">
                  <Input
                    type="text"
                    name="matricula"
                    fieldset="Matrícula"
                    placeholder="123456"
                    largura="w-full"
                    value={formData.matricula}
                    onChange={handleChange}
                    mask="000000"
                    asterisk
                  />

                  <Input
                    type="text"
                    name="nomeFuncionario"
                    fieldset="Nome Completo"
                    placeholder="Nome completo do funcionário"
                    largura="w-full"
                    value={formData.nomeFuncionario}
                    onChange={handleChange}
                    asterisk
                  />
                </div>
              </div>
            </div>

            {/* Dados do Acompanhado (opcional) */}
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h2 className="card-title text-lg font-bold flex items-center gap-2">
                  <FiUsers className="text-primary" />
                  Dados do Acompanhado
                </h2>
                <div className="space-y-2">
                  <Input
                    type="text"
                    name="nomeAcompanhado"
                    fieldset={
                      <>
                        Nome do Acompanhado
                        <small className="text-xs text-gray-500 -ml-1">
                          (Opcional)
                        </small>
                      </>
                    }
                    placeholder="Nome completo do acompanhado"
                    largura="w-full"
                    value={formData.nomeAcompanhado}
                    onChange={handleChange}
                    optionalBadge
                  />
                  <Select
                    name="parentesco"
                    options={parentescos}
                    placeholder="Selecione o parentesco..."
                    value={parentescos.find(
                      (p) => p.value === formData.parentesco
                    )}
                    onChange={(option) => handleChange(option, "parentesco")}
                    fieldset={
                      <>
                        Parentesco
                        <small className="text-xs text-gray-500 -ml-1">
                          (Opcional)
                        </small>
                      </>
                    }
                    largura="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Dados do Atestado */}
            <div className="card bg-base-100 shadow md:col-span-2">
              <div className="card-body">
                <h2 className="card-title text-lg font-bold flex items-center gap-2">
                  <FiCalendar className="text-primary" />
                  Dados do Atestado
                </h2>

                <div className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="date"
                      name="dataInicio"
                      fieldset="Data Início"
                      value={formData.dataInicio}
                      onChange={handleChange}
                      largura="w-full"
                      asterisk
                    />

                    <Input
                      type="date"
                      name="dataFim"
                      fieldset="Data Fim"
                      value={formData.dataFim}
                      onChange={handleChange}
                      largura="w-full"
                      asterisk
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select
                      name="periodo"
                      options={periodos}
                      placeholder="Selecione o nível"
                      value={periodos.find((p) => p.value === formData.periodo)}
                      onChange={(option) => handleChange(option, "periodo")}
                      fieldset="Período"
                      largura="w-full"
                      asterisk
                    />

                    <Input
                      type="text"
                      name="cid"
                      fieldset={
                        <>
                          CID
                          <small className="text-xs text-gray-500 -ml-1">
                            (Opcional)
                          </small>
                        </>
                      }
                      placeholder="Código CID"
                      largura="w-full"
                      value={formData.cid}
                      onChange={handleChange}
                      mask="a00.00"
                      forceUppercase
                      optionalBadge
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Dados do Médico */}
            <div className="card bg-base-100 shadow md:col-span-2">
              <div className="card-body">
                <h2 className="card-title text-lg font-bold flex items-center gap-2">
                  <FiUser className="text-primary" />
                  Dados do Médico
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="crmMedico"
                    fieldset="CRM"
                    placeholder="123456/PR"
                    largura="w-full"
                    value={formData.crmMedico}
                    onChange={handleChange}
                    mask="000000/aa"
                    forceUppercase
                    asterisk
                  />

                  <Input
                    type="text"
                    name="nomeMedico"
                    fieldset="Nome do Médico"
                    placeholder="Nome completo do médico"
                    largura="w-full"
                    value={formData.nomeMedico}
                    onChange={handleChange}
                    asterisk
                  />
                </div>
              </div>
            </div>

            {/* Observações e Anexo */}
            <div className="card bg-base-100 shadow md:col-span-2">
              <div className="card-body">
                <h2 className="card-title text-lg font-bold flex items-center gap-2">
                  <FiFileText className="text-primary" />
                  Informações Adicionais
                </h2>

                <div>
                  <Textarea
                    name="observacao"
                    placeholder="Informações adicionais sobre o atestado"
                    value={formData.observacao}
                    onChange={(valor) =>
                      setFormData({ ...formData, observacao: valor })
                    }
                    largura="w-full"
                    fieldset={
                      <>
                        Observações
                        <small className="text-xs text-gray-500 -ml-1">
                          (Opcional)
                        </small>
                      </>
                    }
                  />

                  <div>
                    <fieldset className="fieldset">
                      <legend className={`fieldset-legend ml-1 text-md`}>
                        Anexar Atestado
                        <span className="text-error -ml-1">*</span>
                      </legend>

                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col w-full border-2 border-dashed border-base-300 rounded-xl cursor-pointer hover:bg-base-300/20 transition">
                          <div className="flex flex-col items-center justify-center p-6">
                            {formData.arquivo ? (
                              <div className="flex flex-col items-center">
                                <FiFileText className="h-10 w-10 text-accent" />
                                <p className="mt-2 text-sm font-medium text-base-content">
                                  {formData.arquivo.name}
                                </p>
                                <p className="text-xs text-base-content/70 mt-1">
                                  Clique para selecionar outro arquivo
                                </p>
                              </div>
                            ) : (
                              <div className="flex flex-col items-center">
                                <FiUpload className="h-10 w-10 text-base-content/50" />
                                <p className="mt-2 text-sm font-medium text-base-content">
                                  Arraste ou clique para enviar o arquivo
                                </p>
                                <p className="text-xs text-base-content/70 mt-1">
                                  Formatos aceitos: PDF, JPG, PNG (máx. 5MB)
                                </p>
                              </div>
                            )}
                          </div>
                          <input
                            type="file"
                            name="arquivo"
                            onChange={handleChange}
                            className="hidden"
                            accept=".pdf,.jpg,.jpeg,.png"
                          />
                        </label>
                      </div>
                    </fieldset>
                    {formData.arquivo && (
                      <button
                        type="button"
                        className="btn btn-sm btn-ghost mt-2 text-error"
                        onClick={() =>
                          setFormData({ ...formData, arquivo: null })
                        }
                      >
                        <FiXCircle className="mr-1" /> Remover arquivo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3">
            <Botao
              variant="ghost"
              disabled={isSubmitting}
              onClick={() => {
                setFormData({
                  matricula: "",
                  nomeFuncionario: "",
                  dataInicio: "",
                  dataFim: "",
                  periodo: "",
                  crmMedico: "",
                  nomeMedico: "",
                  cid: "",
                  nomeAcompanhado: "",
                  parentesco: "",
                  observacao: "",
                  arquivo: null,
                });
              }}
            >
              Limpar Formulário
            </Botao>

            <Botao
              type="submit"
              variant={"primary"}
              icon={<MdAdd />}
              loading={isSubmitting}
              className={isSubmitting ? "mx-[73.5px]" : ""}
            >
              Cadastrar Atestado
            </Botao>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroAtestadosPage;
