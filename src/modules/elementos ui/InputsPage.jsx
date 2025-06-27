import { useState } from "react";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";
import Select from "./components/Select";
import Textarea from "./components/Textarea";

import {
  FiMail,
  FiLock,
  FiSearch,
  FiPhone,
  FiCalendar,
  FiHash,
  FiGlobe,
  FiAlertCircle,
  FiMapPin,
} from "react-icons/fi";

export default function InputsPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [pathValue, setPathValue] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-base-content">Inputs</h1>
        <div className="text-sm breadcrumbs text-gray-500">
          <ul>
            <li>Home</li>
            <li>Elements</li>
            <li>Inputs</li>
          </ul>
        </div>
      </div>

      {/* --- Seção de Inputs Padrão, Variações de Cor e Tamanho --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Inputs Padrão
        </h2>
        <div className="flex flex-col gap-4">
          <p className="font-medium text-base-content/80">Cores da Borda:</p>

          <div className="flex flex-wrap items-end gap-4">
            <Input
              placeholder="Text (Padrão)"
              inputClassName="w-64"
              autoFocus
            />
            <Input
              variant="primary"
              placeholder="Email (Borda Primary)"
              type="email"
              inputClassName="w-64"
            />
            <Input
              variant="secondary"
              placeholder="Tel (Borda Secondary)"
              type="tel"
              inputClassName="w-64"
            />
            <Input
              variant="accent"
              placeholder="URL (Borda Accent)"
              type="url"
              inputClassName="w-64"
            />
            <Input
              variant="info"
              placeholder="Borda Info"
              inputClassName="w-64"
            />
            <Input
              variant="success"
              placeholder="Borda Success"
              inputClassName="w-64"
            />
            <Input
              variant="warning"
              placeholder="Borda Warning"
              inputClassName="w-64"
            />
            <Input
              variant="error"
              placeholder="Borda Error"
              icon={<FiAlertCircle />}
              inputClassName="w-64"
            />
            <Input
              variant="ghost"
              placeholder="Ghost Input (sem borda)"
              bordered={false}
              inputClassName="w-64"
            />
          </div>
          <p className="font-medium text-base-content/80 mt-4">
            Larguras de Inputs:
          </p>
          <div className="flex flex-wrap items-end gap-4">
            <Input placeholder="w-32" inputClassName="w-32" />
            <Input placeholder="w-48" inputClassName="w-48" />
            <Input placeholder="w-64" inputClassName="w-64" />
            <Input placeholder="Padrão (w-80)" />
            <Input placeholder="w-96" inputClassName="w-96" />
            <Input
              placeholder="w-full (default)"
              inputClassName="w-full"
              wrapperClassName="w-80"
            />
          </div>
          <p className="font-medium text-base-content/80 mt-4">
            Tamanhos dos Inputs em si:
          </p>
          <div className="flex gap-4">
            <Input inputSize="lg" placeholder="Input Grande (lg)" />
            <Input inputSize="md" placeholder="Input Médio (md)" />
            <Input inputSize="sm" placeholder="Input Pequeno (sm)" />
            <Input inputSize="xs" placeholder="Input Extra Pequeno (xs)" />
          </div>
        </div>
      </div>

      {/* --- Seção de Inputs com Fieldset --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Inputs com Fieldset
        </h2>
        <div className="flex flex-col gap-4">
          <p className="font-medium text-base-content/80">
            Tamanho da Fonte do Fieldset:
          </p>
          <div className="flex flex-wrap items-end gap-4">
            <Input
              placeholder="Extra Pequeno (xs)"
              fieldset="Nome Completo"
              fildsetFontSize="xs"
              inputClassName="w-64"
            />
            <Input
              placeholder="Pequeno (sm)"
              fieldset="Nome Completo"
              fildsetFontSize="sm"
              inputClassName="w-64"
            />
            <Input
              placeholder="Padrão (base)"
              fieldset="Nome Completo"
              fildsetFontSize="base"
              inputClassName="w-64"
            />
            <Input
              placeholder="Grande (lg)"
              fieldset="Nome Completo"
              fildsetFontSize="lg"
              inputClassName="w-64"
            />
            <Input
              placeholder="Extra Grande (xl)"
              fieldset="Nome Completo"
              fildsetFontSize="xl"
              inputClassName="w-64"
            />
          </div>
          <p className="font-medium text-base-content/80 mt-4">
            Tamanho do input:
          </p>
          <div className="flex flex-wrap items-end gap-4">
            <Input
              placeholder="w-32"
              fieldset="Nome Completo"
              inputClassName="w-32"
            />
            <Input
              placeholder="w-48"
              fieldset="Nome Completo"
              inputClassName="w-48"
            />
            <Input
              placeholder="w-64"
              fieldset="Nome Completo"
              inputClassName="w-64"
            />
            <Input
              placeholder="w-80"
              fieldset="Nome Completo"
              inputClassName="w-80"
            />
            <Input
              placeholder="w-96"
              fieldset="Nome Completo"
              inputClassName="w-96"
            />
          </div>
        </div>
      </div>

      {/* --- Seção de Inputs com Validação --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Inputs com Validação
        </h2>
        <div className="flex flex-wrap items-baseline gap-4">
          <Input
            type="password"
            placeholder="Sua Senha"
            icon={<FiLock />}
            inputClassName="w-64"
            validMessage={
              <>
                Precisa ter ao menos 8 caractéres, incluindo:
                <br />
                Número, letra maiúscula e letra minúscula
              </>
            }
            validReqs={{
              pattern: "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
            }}
            required // Faz com que o input fique errado enquanto vazio
            fieldset="Senha do Paco"
          />
          <Input
            type="email"
            placeholder="Seu Email"
            icon={<FiMail />}
            inputClassName="w-64"
            validMessage={<>Email inválido, falta o "@"</>}
            required // Faz com que o input fique errado enquanto vazio
            fieldset="Email de Contato"
          />
          <Input
            type="number"
            placeholder="Digite um número de 1 à 10"
            inputClassName="w-64"
            validMessage={<>Digite um número de 1 à 10</>}
            validReqs={{
              min: 1,
              max: 10,
            }}
            required // Faz com que o input fique errado enquanto vazio
          />
          <Input
            type="tel"
            placeholder="Digite seu telefone"
            inputClassName="w-64"
            validMessage={<>Precisa ter 11 dígitos</>}
            validReqs={{
              pattern : "[0-9]*",
              minlength : "11",
              maxlength : "11",
            }}
            required // Faz com que o input fique errado enquanto vazio
          />
          <Input
            type="url"
            placeholder="https://"
            inputClassName="w-64"
            icon={<FiGlobe />}
            validMessage={<>Precisa ser uma URL válida</>}
            validReqs={{
              pattern : "^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
            }}
            required // Faz com que o input fique errado enquanto vazio
          />
        </div>
      </div>

      {/* --- Seção de Inputs com Ícones --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Inputs com Ícones
        </h2>
        <div className="flex flex-wrap items-end gap-4">
          <Input
            type="email"
            placeholder="Seu Email"
            icon={<FiMail />}
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            variant="primary"
            inputClassName="w-72"
          />
          <Input
            type="password"
            placeholder="Senha"
            icon={<FiLock />}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            variant="secondary"
            inputClassName="w-72"
          />
          <Input
            type="search"
            placeholder="Buscar..."
            icon={<FiSearch />}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            variant="ghost"
            bordered={false}
            inputClassName="w-80"
          />
          <Input
            type="tel"
            placeholder="(XX) XXXXX-XXXX"
            icon={<FiPhone />}
            iconPosition="left"
            variant="info"
            value={phoneValue}
            onChange={(e) => setPhoneValue(e.target.value)}
            inputClassName="w-64"
          />
        </div>
      </div>

      {/* --- Seção de Inputs Desabilitados e Somente Leitura --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Inputs Desabilitados / Somente Leitura
        </h2>
        <div className="flex flex-wrap items-end gap-4">
          <Input placeholder="Input Desabilitado" disabled />
          <Input
            placeholder="Input Somente Leitura"
            readOnly
            value="Texto pré-definido"
          />
          <Input
            variant="primary"
            placeholder="Desabilitado com Borda Primary"
            disabled
          />
          <Input variant="error" placeholder="Erro Desabilitado" disabled />
        </div>
      </div>

      {/* --- Seção de Input com Tag Opcional --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Input com Tag "Opcional"
        </h2>
        <div className="flex flex-wrap items-end gap-4">
          <Input
            icon={<FiMapPin />}
            optionalBadge
            optionalBadgeText="Opcional"
            placeholder="src/app/"
            value={pathValue}
            onChange={(e) => setPathValue(e.target.value)}
            inputClassName="w-80"
          />

          <Input
            optionalBadge
            optionalBadgeText="Apenas Leitura"
            placeholder="Campo de Observação"
            readOnly
            value="Este campo é apenas para visualização."
            inputClassName="max-w-md"
          />
        </div>
      </div>

      {/* --- Seção de Inputs de Tipos Específicos (HTML5) --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Tipos de Inputs HTML5
        </h2>
        <div className="flex flex-wrap items-end gap-4">
          <Input
            type="number"
            placeholder="Número"
            icon={<FiHash />}
            variant="accent"
            inputClassName="w-32"
          />
          <Input type="date" inputClassName="w-36" />
          <Input type="time" inputClassName="w-22" />
          <Input type="datetime-local" inputClassName="w-46.5" />
          <Input type="color" defaultValue="#4a90e2" inputClassName="w-17" />
          <Input
            type="url"
            placeholder="Sua URL"
            icon={<FiGlobe />}
            variant="info"
            inputClassName="w-64"
          />
          <Input
            type="email"
            placeholder="email@exemplo.com"
            icon={<FiMail />}
            variant="warning"
            inputClassName="w-64"
          />
          <Input
            type="password"
            placeholder="Sua Senha"
            icon={<FiLock />}
            variant="error"
            inputClassName="w-64"
          />
        </div>
      </div>

      {/* --- SEÇÕES COMPLETAS COM MAIS EXEMPLOS --- */}

      {/* --- Seção de Checkboxes --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Checkboxes
        </h2>
        <div className="flex flex-col gap-4">
          <p className="font-medium text-base-content/80">Cores:</p>
          <div className="flex flex-wrap items-center gap-4">
            <Checkbox
              label="Assinar Newsletter (Padrão)"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
            />
            <Checkbox label="Aceito Termos (Primary)" variant="primary" />
            <Checkbox label="Lembrar-me (Secondary)" variant="secondary" />
            <Checkbox label="Confirmar Compra (Accent)" variant="accent" />
            <Checkbox label="Informações (Info)" variant="info" />
            <Checkbox label="Sucesso (Success)" variant="success" />
            <Checkbox label="Aviso (Warning)" variant="warning" />
            <Checkbox label="Erro (Error)" variant="error" />
            <Checkbox label="Neutral" variant="neutral" />
          </div>

          <p className="font-medium text-base-content/80 mt-4">Tamanhos:</p>
          <div className="flex flex-wrap items-center gap-4">
            <Checkbox label="Extra Pequeno (xs)" daisyui_size="xs" />
            <Checkbox label="Pequeno (sm)" daisyui_size="sm" />
            <Checkbox label="Médio (md)" daisyui_size="md" /> {/* Padrão */}
            <Checkbox label="Grande (lg)" daisyui_size="lg" />
          </div>

          <p className="font-medium text-base-content/80 mt-4">Estados:</p>
          <div className="flex flex-wrap items-center gap-4">
            <Checkbox label="Desabilitado" disabled />
            <Checkbox label="Desabilitado e Marcado" disabled checked />
            <Checkbox label="Com Checked Padrão" defaultChecked />
            <Checkbox
              label="Controlado (newsletter)"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
            />
          </div>
        </div>
      </div>

      {/* --- Seção de Radios --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Radio Buttons
        </h2>
        <div className="flex flex-col gap-4">
          <p className="font-medium text-base-content/80">Cores:</p>
          <div className="flex flex-wrap items-center gap-4">
            <Radio
              label="Opção A (Padrão)"
              name="genderGroup1"
              value="A"
              checked={gender === "A"}
              onChange={(e) => setGender(e.target.value)}
            />
            <Radio
              label="Opção B (Primary)"
              name="genderGroup1"
              value="B"
              checked={gender === "B"}
              onChange={(e) => setGender(e.target.value)}
              variant="primary"
            />
            <Radio
              label="Opção C (Secondary)"
              name="genderGroup1"
              value="C"
              checked={gender === "C"}
              onChange={(e) => setGender(e.target.value)}
              variant="secondary"
            />
            <Radio
              label="Opção D (Accent)"
              name="genderGroup1"
              value="D"
              checked={gender === "D"}
              onChange={(e) => setGender(e.target.value)}
              variant="accent"
            />
            <Radio
              label="Opção E (Info)"
              name="genderGroup1"
              value="E"
              checked={gender === "E"}
              onChange={(e) => setGender(e.target.value)}
              variant="info"
            />
            <Radio
              label="Opção F (Success)"
              name="genderGroup1"
              value="F"
              checked={gender === "F"}
              onChange={(e) => setGender(e.target.value)}
              variant="success"
            />
            <Radio
              label="Opção G (Warning)"
              name="genderGroup1"
              value="G"
              checked={gender === "G"}
              onChange={(e) => setGender(e.target.value)}
              variant="warning"
            />
            <Radio
              label="Opção H (Error)"
              name="genderGroup1"
              value="H"
              checked={gender === "H"}
              onChange={(e) => setGender(e.target.value)}
              variant="error"
            />
          </div>

          <p className="font-medium text-base-content/80 mt-4">Tamanhos:</p>
          <div className="flex flex-wrap items-center gap-4">
            <Radio
              label="Extra Pequeno (xs)"
              name="sizeGroup"
              value="xs"
              size="xs"
            />
            <Radio label="Pequeno (sm)" name="sizeGroup" value="sm" size="sm" />
            <Radio label="Médio (md)" name="sizeGroup" value="md" size="md" />
            <Radio label="Grande (lg)" name="sizeGroup" value="lg" size="lg" />
          </div>

          <p className="font-medium text-base-content/80 mt-4">Estados:</p>
          <div className="flex flex-wrap items-center gap-4">
            <Radio
              label="Desabilitado"
              name="disabledGroup"
              value="disabled"
              disabled
            />
            <Radio
              label="Desabilitado e Marcado"
              name="disabledGroup"
              value="disabledChecked"
              disabled
              checked
            />
            <Radio
              label="Padrão Checked"
              name="defaultCheckedGroup"
              value="default"
              defaultChecked
            />
          </div>
        </div>
      </div>

      {/* --- Seção de Selects --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Select Menus
        </h2>
        <div className="flex flex-col gap-4">
          <p className="font-medium text-base-content/80">Cores:</p>
          <div className="flex flex-wrap items-end gap-4">
            <Select
              label="Selecione um País (Padrão)"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              wrapperClassName="w-48"
            >
              <option disabled value="">
                Escolha seu país
              </option>
              <option value="BR">Brasil</option>
              <option value="US">Estados Unidos</option>
              <option value="CA">Canadá</option>
              <option value="GB">Reino Unido</option>
            </Select>

            <Select
              label="Departamento (Primary)"
              variant="primary"
              wrapperClassName="w-56"
            >
              <option value="">Selecione um departamento</option>
              <option value="RH">Recursos Humanos</option>
              <option value="FIN">Financeiro</option>
              <option value="TI">Tecnologia da Informação</option>
            </Select>

            <Select
              label="Categoria (Secondary)"
              variant="secondary"
              wrapperClassName="w-56"
            >
              <option value="">Selecione uma categoria</option>
              <option value="ELE">Eletrônicos</option>
              <option value="MODA">Moda</option>
              <option value="LIV">Livros</option>
            </Select>

            <Select
              label="Status (Accent)"
              variant="accent"
              wrapperClassName="w-40"
            >
              <option value="active">Ativo</option>
              <option value="inactive">Inativo</option>
              <option value="pending">Pendente</option>
            </Select>

            <Select
              label="Prioridade (Info)"
              variant="info"
              wrapperClassName="w-40"
            >
              <option value="low">Baixa</option>
              <option value="medium">Média</option>
              <option value="high">Alta</option>
            </Select>

            <Select
              label="Ghost (Success)"
              variant="ghost"
              bordered={false}
              wrapperClassName="w-48"
            >
              <option value="option1">Opção 1</option>
              <option value="option2">Opção 2</option>
              <option value="option3">Opção 3</option>
            </Select>
          </div>

          <p className="font-medium text-base-content/80 mt-4">Tamanhos:</p>
          <div className="flex flex-wrap items-end gap-4">
            <Select
              label="Extra Pequeno (xs)"
              size="xs"
              variant="neutral"
              wrapperClassName="w-48"
            >
              <option value="xs1">Opção XS 1</option>
              <option value="xs2">Opção XS 2</option>
            </Select>
            <Select
              label="Pequeno (sm)"
              size="sm"
              variant="info"
              wrapperClassName="w-48"
            >
              <option value="sm1">Opção SM 1</option>
              <option value="sm2">Opção SM 2</option>
            </Select>
            <Select
              label="Médio (md)"
              size="md"
              variant="success"
              wrapperClassName="w-48"
            >
              <option value="md1">Opção MD 1</option>
              <option value="md2">Opção MD 2</option>
            </Select>
            <Select
              label="Grande (lg)"
              size="lg"
              variant="warning"
              wrapperClassName="w-48"
            >
              <option value="lg1">Opção LG 1</option>
              <option value="lg2">Opção LG 2</option>
            </Select>
          </div>

          <p className="font-medium text-base-content/80 mt-4">Estados:</p>
          <div className="flex flex-wrap items-end gap-4">
            <Select label="Desabilitado" disabled wrapperClassName="w-48">
              <option value="disabled">Opção Desabilitada</option>
            </Select>
            <Select
              label="Múltipla Seleção"
              multiple
              wrapperClassName="w-48 h-32"
            >
              <option value="opt1">Opção Múltipla 1</option>
              <option value="opt2">Opção Múltipla 2</option>
              <option value="opt3">Opção Múltipla 3</option>
              <option value="opt4">Opção Múltipla 4</option>
            </Select>
          </div>
        </div>
      </div>

      {/* --- Seção de Textareas --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Textareas
        </h2>
        <div className="flex flex-col gap-4">
          <p className="font-medium text-base-content/80">Cores:</p>
          <div className="flex flex-wrap items-end gap-4">
            <Textarea
              label="Sua Mensagem (Padrão)"
              placeholder="Digite sua mensagem aqui..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              wrapperClassName="w-80"
            />
            <Textarea
              label="Notas do Pedido (Primary)"
              variant="primary"
              placeholder="Adicione notas internas..."
              rows={3}
              wrapperClassName="w-96"
            />
            <Textarea
              label="Descrição do Produto (Secondary)"
              variant="secondary"
              placeholder="Detalhes do produto (secondary)"
              rows={5}
              wrapperClassName="w-80"
            />
            <Textarea
              label="Comentários (Accent)"
              variant="accent"
              placeholder="Deixe seus comentários..."
              rows={4}
              wrapperClassName="w-72"
            />
            <Textarea
              label="Feedback (Info)"
              variant="info"
              placeholder="Deixe seu feedback..."
              rows={2}
              wrapperClassName="w-72"
            />
            <Textarea
              label="Observações (Ghost)"
              variant="ghost"
              bordered={false}
              placeholder="Observações adicionais (ghost)"
              rows={5}
              wrapperClassName="w-80"
            />
          </div>

          <p className="font-medium text-base-content/80 mt-4">Tamanhos:</p>
          <div className="flex flex-wrap items-end gap-4">
            <Textarea
              label="Extra Pequeno (xs)"
              size="xs"
              placeholder="Textarea extra pequeno."
              rows={2}
              wrapperClassName="w-64"
            />
            <Textarea
              label="Pequeno (sm)"
              size="sm"
              placeholder="Textarea pequeno."
              rows={3}
              wrapperClassName="w-72"
            />
            <Textarea
              label="Médio (md)"
              size="md"
              placeholder="Textarea médio."
              rows={4}
              wrapperClassName="w-80"
            />
            <Textarea
              label="Grande (lg)"
              size="lg"
              placeholder="Textarea grande."
              rows={6}
              wrapperClassName="w-full max-w-md"
            />
          </div>

          <p className="font-medium text-base-content/80 mt-4">Estados:</p>
          <div className="flex flex-wrap items-end gap-4">
            <Textarea
              label="Campo Desabilitado"
              disabled
              placeholder="Não é possível editar."
              rows={3}
              wrapperClassName="w-80"
            />
            <Textarea
              label="Somente Leitura"
              readOnly
              value="Este texto não pode ser alterado pelo usuário."
              rows={3}
              wrapperClassName="w-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
