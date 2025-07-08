import { useState } from "react";
import FavoriteButton from "@/components/FavoriteButton";

import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import RadioGroup from "./components/Radio";
import Select from "./components/Select";
import MultiSelect from "./components/MultiSelect";
import Textarea from "./components/Textarea";

import {
  FiMail,
  FiLock,
  FiSearch,
  FiPhone,
  FiHash,
  FiGlobe,
  FiAlertCircle,
} from "react-icons/fi";

export default function InputsPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cpfNumber, setCpfNumber] = useState("");

  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: "op1", label: "Opção 1" },
    { value: "op2", label: "Opção 2" },
    { value: "op3", label: "Opção 3" },
  ];

  const multipleOptions = [
    { value: "m1", label: "Item 1" },
    { value: "m2", label: "Item 2" },
    { value: "m3", label: "Item 3" },
    { value: "m4", label: "Item 4" },
    { value: "m5", label: "Item 5" },
  ];

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="flex text-3xl font-bold text-base-content">
          Inputs
          <FavoriteButton tela={{ nome: "Inputs", url: "devs/ui/inputs" }} />
        </h1>
        <div className="text-sm breadcrumbs text-gray-500">
          <ul>
            <li>Devs</li>
            <li>Elementos UI</li>
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
            <Input placeholder="Padrão" autoFocus />
            <Input variant="primary" placeholder="Primary" />
            <Input variant="secondary" placeholder="Secondary" />
            <Input variant="accent" placeholder="Accent" />
            <Input variant="info" placeholder="Info" />
            <Input variant="success" placeholder="Success" />
            <Input variant="warning" placeholder="Warning" />
            <Input
              variant="error"
              placeholder="Error"
              icon={<FiAlertCircle />}
            />
            <Input variant="ghost" placeholder="Ghost Input" />
          </div>
          <p className="font-medium text-base-content/80 mt-4">
            Larguras de Inputs:
          </p>
          <div className="flex flex-wrap items-end gap-4">
            <Input placeholder="w-32" largura="w-32" />
            <Input placeholder="w-48" largura="w-48" />
            <Input placeholder="Padrão (w-64)" />
            <Input placeholder="w-80" largura="w-80" />
            <Input placeholder="w-96" largura="w-96" />
            <Input placeholder="w-full" largura="w-full" />
          </div>
          <p className="font-medium text-base-content/80 mt-4">
            Tamanhos dos Inputs em si:
          </p>
          <div className="flex gap-4">
            <Input inputSize="xs" placeholder="Extra Pequeno (xs)" />
            <Input inputSize="sm" placeholder="Pequeno (sm)" />
            <Input placeholder="Padrão (Médio - md)" />
            <Input inputSize="lg" placeholder="Grande (lg)" />
            <Input inputSize="xl" placeholder="Extra Grande (xl)" />
          </div>
        </div>
      </div>

      {/* --- Seção de Inputs com Fieldset --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Inputs com Fieldset
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-end gap-4">
            <Input
              fieldset="Nome Completo"
              placeholder="Extra Pequeno (xs)"
              inputSize="xs"
            />
            <Input
              fieldset="Nome Completo"
              placeholder="Pequeno (sm)"
              inputSize="sm"
            />
            <Input fieldset="Nome Completo" placeholder="Padrão (md)" />
            <Input
              fieldset="Nome Completo"
              placeholder="Grande (lg)"
              inputSize="lg"
            />
            <Input
              fieldset="Nome Completo"
              placeholder="Extra Grande (xl)"
              inputSize="xl"
            />
          </div>
        </div>
      </div>

      {/* --- Seção de Inputs com Máscara --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Inputs com Máscara
        </h2>
        <div className="flex flex-wrap items-baseline gap-4">
          <Input
            fieldset="Telefone"
            placeholder="(00) 00000-0000"
            mask="(00) 00000-0000"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Input
            fieldset="CPF"
            placeholder="000.000.000-00"
            mask="000.000.000-00"
            value={cpfNumber}
            onChange={(e) => setCpfNumber(e.target.value)}
          />
          <Input
            fieldset="Máscara + Validação"
            type="text"
            placeholder="Digite seu telefone"
            mask="(00) 00000-0000"
            validMessage={<>Precisa ter 11 números</>}
            validReqs={{
              pattern: "[0-9]*",
              minLength: "15",
              maxLength: "15",
            }}
            required // Faz com que o input fique errado enquanto vazio
          />
          <Input
            placeholder="Digite sua matrícula"
            mask="P000000"
            required // Faz com que o input fique errado enquanto vazio
          />
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
            validMessage={<>Email inválido, falta o "@"</>}
            required // Faz com que o input fique errado enquanto vazio
            fieldset="Email de Contato"
          />
          <Input
            type="number"
            placeholder="Digite um número de 1 à 10"
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
            validMessage={<>Precisa ter 11 dígitos</>}
            validReqs={{
              pattern: "[0-9]*",
              minLength: "11",
              maxLength: "11",
            }}
            required // Faz com que o input fique errado enquanto vazio
          />
          <Input
            type="url"
            placeholder="https://"
            icon={<FiGlobe />}
            validMessage={<>Precisa ser uma URL válida</>}
            validReqs={{
              pattern:
                "^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$",
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
          />
          <Input
            type="email"
            placeholder="Seu Email"
            icon={<FiMail />}
            iconPosition="right"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            variant="primary"
          />
          <Input
            type="password"
            placeholder="Senha"
            icon={<FiLock />}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            variant="secondary"
          />
          <Input
            type="search"
            placeholder="Buscar..."
            icon={<FiSearch />}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            variant="ghost"
            bordered={false}
          />
          <Input
            type="tel"
            placeholder="(XX) XXXXX-XXXX"
            icon={<FiPhone />}
            iconPosition="left"
            variant="info"
            value={phoneValue}
            onChange={(e) => setPhoneValue(e.target.value)}
          />
        </div>
      </div>

      {/* --- Seção de Input com Tag Opcional --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Input com Tag "Opcional"
        </h2>
        <div className="flex flex-wrap items-end gap-4">
          <Input
            optionalBadge
            optionalBadgeText="Opcional"
            placeholder="Adicionar apelido?"
            largura="w-80"
          />

          <Input
            optionalBadge
            optionalBadgeText="Apenas Leitura"
            placeholder="Campo de Observação"
            readOnly
            value="Este campo é apenas para visualização."
            largura="max-w-md"
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
            largura="w-32"
          />
          <Input type="date" largura="w-36" />
          <Input type="time" largura="w-22" />
          <Input type="datetime-local" largura="w-46.5" />
          <Input type="color" defaultValue="#4a90e2" largura="w-17" />
          <Input
            type="url"
            placeholder="Sua URL"
            icon={<FiGlobe />}
            variant="info"
          />
          <Input
            type="email"
            placeholder="email@exemplo.com"
            icon={<FiMail />}
            variant="warning"
          />
          <Input
            type="password"
            placeholder="Sua Senha"
            icon={<FiLock />}
            variant="error"
          />
        </div>
      </div>

      {/* --- Seção de Demonstração --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Demonstração de Uso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Input fieldset="Input Padrão" placeholder="Digite.." />

            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm">
                {`<Input\n  fieldset="Input Padrão"\n  placeholder="Digite.."\n/>`}
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <Input
              type="password"
              fieldset="Digite sua senha"
              placeholder="*****"
              variant="primary"
              icon={<FiLock />}
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
              required
            />

            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm">
                {`import { FiLock } from "react-icons/fi";\n\n<Input\n  type="password"\n  fieldset="Digite sua senha"\n  placeholder="*****"\n  variant="primary"\n  icon={<FiLock />}\n  validMessage={\n    <>\n    Precisa ter ao menos 8 caractéres, incluindo:\n    <br />\n    Número, letra maiúscula e letra minúscula\n    </>\n  }\n  validReqs={{\n    pattern: "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}",\n  }}\n  required\n/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6 mt-12">
        <h1 className="text-3xl font-bold text-base-content">Selects</h1>
      </div>

      {/* --- Seção de Selects Padrão com Cores --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Selects Padrão
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="font-medium text-base-content/80 mb-2">Cores:</p>
            <div className="space-y-4">
              <Select options={options} fieldset="Default" />
              <Select options={options} fieldset="Primary" variant="primary" />
              <Select
                options={options}
                fieldset="Secondary"
                variant="secondary"
              />
              <Select options={options} fieldset="Accent" variant="accent" />
              <Select options={options} fieldset="Info" variant="info" />
              <Select options={options} fieldset="Success" variant="success" />
              <Select options={options} fieldset="Warning" variant="warning" />
              <Select options={options} fieldset="Error" variant="error" />
            </div>
          </div>

          <div>
            <p className="font-medium text-base-content/80 mb-2">Tamanhos:</p>
            <div className="space-y-4">
              <Select options={options} fieldset="XS" size="xs" />
              <Select options={options} fieldset="SM" size="sm" />
              <Select options={options} fieldset="MD (Padrão)" size="md" />
              <Select options={options} fieldset="LG" size="lg" />
            </div>

            <p className="font-medium text-base-content/80 mt-6 mb-2">
              Estados:
            </p>
            <div className="space-y-4">
              <Select
                options={options}
                fieldset="Com Erro"
                error="Campo obrigatório"
              />
              <Select
                options={options}
                fieldset="Com Sucesso"
                success="Seleção válida"
              />
              <Select
                options={options}
                fieldset="Com Informação"
                info="Selecione uma opção"
              />
              <Select options={options} fieldset="Desabilitado" disabled />
            </div>
          </div>
        </div>
      </div>

      {/* --- Seção de Multiple Select --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Multiple Select (Dropdown com Checkboxes)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="font-medium text-base-content/80 mb-2">Tamanhos:</p>
            <div className="space-y-4">
              <MultiSelect
                options={multipleOptions}
                selected={selectedOptions}
                onChange={setSelectedOptions}
                fieldset="XS"
                size="xs"
              />
              <MultiSelect
                options={multipleOptions}
                selected={selectedOptions}
                onChange={setSelectedOptions}
                fieldset="SM"
                size="sm"
              />
              <MultiSelect
                options={multipleOptions}
                selected={selectedOptions}
                onChange={setSelectedOptions}
                fieldset="MD"
                size="md"
              />
              <MultiSelect
                options={multipleOptions}
                selected={selectedOptions}
                onChange={setSelectedOptions}
                fieldset="LG"
                size="lg"
              />
            </div>
          </div>

          <div>
            <p className="font-medium text-base-content/80 mb-2">Cores:</p>
            <div className="space-y-4">
              <MultiSelect
                options={multipleOptions}
                selected={selectedOptions}
                onChange={setSelectedOptions}
                fieldset="Primary"
                variant="primary"
              />
              <MultiSelect
                options={multipleOptions}
                selected={selectedOptions}
                onChange={setSelectedOptions}
                fieldset="Success"
                variant="success"
              />
              <MultiSelect
                options={multipleOptions}
                selected={selectedOptions}
                onChange={setSelectedOptions}
                fieldset="Warning"
                variant="warning"
              />
              <MultiSelect
                options={multipleOptions}
                selected={selectedOptions}
                onChange={setSelectedOptions}
                fieldset="Error"
                variant="error"
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="font-medium text-base-content/80 mb-2">Estados:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MultiSelect
              options={multipleOptions}
              selected={selectedOptions}
              onChange={setSelectedOptions}
              fieldset="Com Erro"
              error="Selecione pelo menos uma opção"
            />
            <MultiSelect
              options={multipleOptions}
              selected={selectedOptions}
              onChange={setSelectedOptions}
              fieldset="Com Sucesso"
              success="Opções válidas"
            />
            <MultiSelect
              options={multipleOptions}
              selected={selectedOptions}
              onChange={setSelectedOptions}
              fieldset="Com Informação"
              info="Escolha múltiplas opções"
            />
          </div>
        </div>
      </div>

      {/* --- Seção de Selects sem Borda --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Selects sem Borda
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="font-medium text-base-content/80 mb-2">
              Select Simples:
            </p>
            <div className="space-y-4">
              <Select
                options={options}
                fieldset="Ghost"
                variant="ghost"
                bordered={false}
              />
              <Select
                options={options}
                fieldset="Primary"
                variant="primary"
                bordered={false}
              />
              <Select
                options={options}
                fieldset="Secondary"
                variant="secondary"
                bordered={false}
              />
              <Select
                options={options}
                fieldset="Accent"
                variant="accent"
                bordered={false}
              />
            </div>
          </div>

          <div>
            <p className="font-medium text-base-content/80 mb-2">
              Multiple Select:
            </p>
            <MultiSelect
              options={multipleOptions}
              selected={selectedOptions}
              onChange={setSelectedOptions}
              fieldset="Ghost Multiple"
              variant="ghost"
              bordered={false}
            />
          </div>
        </div>
      </div>

      {/* --- Seção de Demonstração --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Demonstração de Uso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Select
              options={options}
              fieldset="Selecione uma opção"
              variant="primary"
              info="Escolha uma das opções"
            />

            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm">
                {`<Select\n  options={options}\n  label="Selecione uma opção"\n  variant="primary"\n  info="Escolha uma das opções"\n/>`}
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <MultiSelect
              options={multipleOptions}
              selected={selectedOptions}
              onChange={setSelectedOptions}
              fieldset="Selecione múltiplas opções"
              variant="success"
              placeholder="Escolha os itens..."
            />

            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm">
                {`const [selected, setSelected] = useState([]);\n\n<MultiSelect\n  options={options}\n  selected={selected}\n  onChange={setSelected}\n  label="Selecione múltiplas opções"\n  variant="success"\n  placeholder="Escolha os itens..."\n/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6 mt-12">
        <h1 className="text-3xl font-bold text-base-content">Checkboxes</h1>
      </div>

      {/* --- Seção de Checkboxes Padrão com Cores --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Checkboxes Padrão
        </h2>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-base-content/80">Cores:</p>

          <div className="flex flex-wrap items-center gap-4">
            <Checkbox defaultChecked label="Default" />
            <Checkbox defaultChecked label="Primary" variant="primary" />
            <Checkbox defaultChecked label="Secondary" variant="secondary" />
            <Checkbox defaultChecked label="Accent" variant="accent" />
            <Checkbox defaultChecked label="Info" variant="info" />
            <Checkbox defaultChecked label="Success" variant="success" />
            <Checkbox defaultChecked label="Warning" variant="warning" />
            <Checkbox defaultChecked label="Error" variant="error" />
            <Checkbox defaultChecked label="Neutral" variant="neutral" />
          </div>

          <p className="font-medium text-base-content/80 mt-4">Tamanhos:</p>

          <div className="flex items-center gap-4">
            <Checkbox defaultChecked label="XS" checkboxSize="xs" />
            <Checkbox defaultChecked label="SM" checkboxSize="sm" />
            <Checkbox defaultChecked label="MD (Padrão)" />
            <Checkbox defaultChecked label="LG" checkboxSize="lg" />
            <Checkbox defaultChecked label="XL" checkboxSize="xl" />
          </div>
        </div>
      </div>

      {/* --- Seção de Checkbox com Fieldset --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Checkbox com Variações de Label e Fieldset
        </h2>
        <div className="flex flex-col gap-4">
          <p className="font-medium text-base-content/80">Tamanhos Fieldset:</p>

          <div className="flex flex-wrap items-center gap-8">
            <Checkbox fieldset="Fieldset" label="xs" fildsetFontSize="xs" />
            <Checkbox fieldset="Fieldset" label="sm" fildsetFontSize="sm" />
            <Checkbox fieldset="Fieldset" label="base" fildsetFontSize="base" />
            <Checkbox fieldset="Fieldset" label="lg" fildsetFontSize="lg" />
            <Checkbox fieldset="Fieldset" label="xl" fildsetFontSize="xl" />
          </div>

          <p className="font-medium text-base-content/80 mt-4">
            Tamanhos Label:
          </p>

          <div className="flex items-center gap-8">
            <Checkbox fieldset="Fieldset" label="xs" labelFontSize="xs" />
            <Checkbox fieldset="Fieldset" label="sm" labelFontSize="sm" />
            <Checkbox fieldset="Fieldset" label="base" labelFontSize="base" />
            <Checkbox fieldset="Fieldset" label="lg" labelFontSize="lg" />
            <Checkbox fieldset="Fieldset" label="xl" labelFontSize="xl" />
          </div>

          <p className="font-medium text-base-content/80 mt-4">Variações:</p>

          <div className="flex items-center gap-8">
            <Checkbox
              fieldset="Aceito os termos"
              fieldsetCentered
              defaultChecked
            />
            <Checkbox fieldset="Aceito os termos" defaultChecked />
            <Checkbox label="Eu aceito" />
            <Checkbox
              fieldset="Aceito os termos"
              fildsetFontSize="xl"
              label="Eu aceito"
              labelFontSize="xl"
            />
            <Checkbox
              fieldset="Aceito os termos"
              fildsetFontSize="xs"
              label="Eu aceito"
              labelFontSize="xs"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6 mt-12">
        <h1 className="text-3xl font-bold text-base-content">Toggles</h1>
      </div>

      {/* --- Seção de Toggles com Cores --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Toggles Padrão
        </h2>

        <div className="flex flex-col gap-4">
          <p className="font-medium text-base-content/80">Cores:</p>

          <div className="flex flex-wrap items-center gap-4">
            <Checkbox toggle defaultChecked label="Default" />
            <Checkbox toggle defaultChecked label="Primary" variant="primary" />
            <Checkbox toggle defaultChecked label="Accent" variant="accent" />
            <Checkbox toggle defaultChecked label="Success" variant="success" />
            <Checkbox toggle defaultChecked label="Error" variant="error" />
            <Checkbox toggle defaultChecked label="Neutral" variant="neutral" />
          </div>

          <p className="font-medium text-base-content/80 mt-4">Tamanhos:</p>

          <div className="flex items-center gap-4">
            <Checkbox toggle defaultChecked label="XS" checkboxSize="xs" />
            <Checkbox toggle defaultChecked label="SM" checkboxSize="sm" />
            <Checkbox toggle defaultChecked label="MD" checkboxSize="md" />
            <Checkbox toggle defaultChecked label="LG" checkboxSize="lg" />
            <Checkbox toggle defaultChecked label="XL" checkboxSize="xl" />
          </div>
        </div>
      </div>

      {/* --- Seção de Checkbox com Fieldset --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Toggles com Label e/ou Fieldset
        </h2>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-base-content/80">Tamanhos Fieldset:</p>

          <div className="flex flex-wrap items-center gap-8">
            <Checkbox
              toggle
              fieldset="Fieldset"
              label="xs"
              fildsetFontSize="xs"
            />
            <Checkbox
              toggle
              fieldset="Fieldset"
              label="sm"
              fildsetFontSize="sm"
            />
            <Checkbox
              toggle
              fieldset="Fieldset"
              label="base"
              fildsetFontSize="base"
            />
            <Checkbox
              toggle
              fieldset="Fieldset"
              label="lg"
              fildsetFontSize="lg"
            />
            <Checkbox
              toggle
              fieldset="Fieldset"
              label="xl"
              fildsetFontSize="xl"
            />
          </div>

          <p className="font-medium text-base-content/80 mt-4">
            Tamanhos Label:
          </p>

          <div className="flex items-center gap-8">
            <Checkbox
              toggle
              fieldset="Fieldset"
              label="xl"
              labelFontSize="xl"
            />
            <Checkbox
              toggle
              fieldset="Fieldset"
              label="lg"
              labelFontSize="lg"
            />
            <Checkbox
              toggle
              fieldset="Fieldset"
              label="base"
              labelFontSize="base"
            />
            <Checkbox
              toggle
              fieldset="Fieldset"
              label="sm"
              labelFontSize="sm"
            />
            <Checkbox
              toggle
              fieldset="Fieldset"
              label="xs"
              labelFontSize="xs"
            />
          </div>

          <p className="font-medium text-base-content/80 mt-4">Variações:</p>

          <div className="flex items-center gap-8">
            <Checkbox
              toggle
              fieldset="Aceito os termos"
              fieldsetCentered
              defaultChecked
            />
            <Checkbox toggle fieldset="Aceito os termos" defaultChecked />
            <Checkbox toggle label="Eu aceito" />
            <Checkbox
              toggle
              fieldset="Aceito os termos"
              fildsetFontSize="xl"
              label="Eu aceito"
              labelFontSize="xl"
            />
            <Checkbox
              toggle
              fieldset="Aceito os termos"
              fildsetFontSize="xs"
              label="Eu aceito"
              labelFontSize="xs"
            />
          </div>
        </div>
      </div>

      {/* --- Seção de Toggle com Ícones Internos --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Toggle com Ícones
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Checkbox toggle iconsToggle />
        </div>
      </div>

      {/* --- Seção de Radios --- */}
      <div className="flex justify-between items-center mb-6 mt-12">
        <h1 className="text-3xl font-bold text-base-content">Radio Groups</h1>
      </div>

      {/* Grupo com Diferentes Tamanhos */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Radios Padrão
        </h2>

        <p className="font-medium text-base-content/80">Cores:</p>

        <div className="flex flex-col gap-2">
          <RadioGroup
            name="cores"
            orientation="horizontal"
            options={[
              { value: "cor1", label: "padrão", checked: true },
              { value: "cor2", label: "primary", variant: "primary" },
              { value: "cor3", label: "secondary", variant: "secondary" },
              { value: "cor4", label: "accent", variant: "accent" },
              { value: "cor5", label: "info", variant: "info" },
              { value: "cor6", label: "success", variant: "success" },
              { value: "cor7", label: "warning", variant: "warning" },
              { value: "cor8", label: "error", variant: "error" },
              { value: "cor9", label: "neutral", variant: "neutral" },
            ]}
          />

          <p className="font-medium text-base-content/80 mt-4">Tamanhos:</p>

          <div className="flex gap-14">
            <RadioGroup
              fieldset="Radio XS"
              name="sizes-xs"
              radioSize="xs"
              options={[
                { value: "xs1", label: "Opção 1", checked: true },
                { value: "xs2", label: "Opção 2" },
              ]}
            />
            <RadioGroup
              fieldset="Radio SM"
              name="sizes-sm"
              radioSize="sm"
              options={[
                { value: "sm1", label: "Opção 1", checked: true },
                { value: "sm2", label: "Opção 2" },
              ]}
            />
            <RadioGroup
              fieldset="Radio MD"
              name="sizes-md"
              radioSize="md"
              options={[
                { value: "md1", label: "Opção 1", checked: true },
                { value: "md2", label: "Opção 2" },
              ]}
            />
            <RadioGroup
              fieldset="Radio LG"
              name="sizes-lg"
              radioSize="lg"
              options={[
                { value: "lg1", label: "Opção 1", checked: true },
                { value: "lg2", label: "Opção 2" },
              ]}
            />
            <RadioGroup
              fieldset="Radio XL"
              name="sizes-xl"
              radioSize="xl"
              options={[
                { value: "xl1", label: "Opção 1", checked: true },
                { value: "xl2", label: "Opção 2" },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Grupo Vertical Simples */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Orientações
        </h2>

        <p className="font-medium text-base-content/80">Horizontal:</p>

        <RadioGroup
          fieldset="Status do Pedido"
          name="order-status"
          orientation="horizontal"
          options={[
            {
              value: "pending",
              label: "Pendente",
              variant: "warning",
              checked: true,
            },
            {
              value: "processing",
              label: "Processando",
              variant: "info",
            },
            {
              value: "shipped",
              label: "Enviado",
              variant: "success",
            },
            {
              value: "delivered",
              label: "Entregue",
              variant: "primary",
            },
          ]}
        />

        <p className="font-medium text-base-content/80 mt-4">Vertical:</p>

        <div className="flex flex-col gap-2">
          <RadioGroup
            fieldset="Escolha seu plano"
            name="plans"
            options={[
              { value: "free", label: "Plano Gratuito", checked: true },
              { value: "basic", label: "Plano Básico" },
              { value: "pro", label: "Plano Profissional" },
              {
                value: "enterprise",
                label: "Plano Enterprise",
                disabled: true,
              },
            ]}
            fieldsetFontSize="lg"
          />
        </div>
      </div>

      {/* --- Seção de Radio Groups com Variações de Label e Fieldset --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Radio Groups com Variações de Label e Fieldset
        </h2>

        <div className="flex flex-col gap-2">
          <p className="font-medium text-base-content/80">Tamanhos Fieldset:</p>

          <div className="flex flex-wrap items-start gap-8 mb-4">
            <RadioGroup
              fieldset="Fieldset xs"
              name="fieldset-xs"
              fieldsetFontSize="xs"
              options={[
                { value: "opt1", label: "Opção 1", checked: true },
                { value: "opt2", label: "Opção 2" },
              ]}
            />

            <RadioGroup
              fieldset="Fieldset sm"
              name="fieldset-sm"
              fieldsetFontSize="sm"
              options={[
                { value: "opt1", label: "Opção 1", checked: true },
                { value: "opt2", label: "Opção 2" },
              ]}
            />

            <RadioGroup
              fieldset="Fieldset base"
              name="fieldset-base"
              fieldsetFontSize="base"
              options={[
                { value: "opt1", label: "Opção 1", checked: true },
                { value: "opt2", label: "Opção 2" },
              ]}
            />

            <RadioGroup
              fieldset="Fieldset lg"
              name="fieldset-lg"
              fieldsetFontSize="lg"
              options={[
                { value: "opt1", label: "Opção 1", checked: true },
                { value: "opt2", label: "Opção 2" },
              ]}
            />

            <RadioGroup
              fieldset="Fieldset xl"
              name="fieldset-xl"
              fieldsetFontSize="xl"
              options={[
                { value: "opt1", label: "Opção 1", checked: true },
                { value: "opt2", label: "Opção 2" },
              ]}
            />
          </div>

          <p className="font-medium text-base-content/80 mt-4">
            Tamanhos Label:
          </p>

          <div className="flex flex-wrap items-start gap-8 mb-4">
            <RadioGroup
              fieldset="Fieldset"
              name="label-xs"
              labelFontSize="xs"
              options={[
                { value: "opt1", label: "Label xs", checked: true },
                { value: "opt2", label: "Label xs" },
              ]}
            />

            <RadioGroup
              fieldset="Fieldset"
              name="label-sm"
              labelFontSize="sm"
              options={[
                { value: "opt1", label: "Label sm", checked: true },
                { value: "opt2", label: "Label sm" },
              ]}
            />

            <RadioGroup
              fieldset="Fieldset"
              name="label-base"
              labelFontSize="base"
              options={[
                { value: "opt1", label: "Label base", checked: true },
                { value: "opt2", label: "Label base" },
              ]}
            />

            <RadioGroup
              fieldset="Fieldset"
              name="label-lg"
              labelFontSize="lg"
              options={[
                { value: "opt1", label: "Label lg", checked: true },
                { value: "opt2", label: "Label lg" },
              ]}
            />

            <RadioGroup
              fieldset="Fieldset"
              name="label-xl"
              labelFontSize="xl"
              options={[
                { value: "opt1", label: "Label xl", checked: true },
                { value: "opt2", label: "Label xl" },
              ]}
            />
          </div>

          <p className="font-medium text-base-content/80 mt-4">Variações:</p>

          <div className="flex flex-wrap items-start gap-8">
            <RadioGroup
              fieldset="Centralizado"
              name="centered"
              fieldsetCentered
              options={[
                { value: "opt1", label: "Opção centralizada 1", checked: true },
                { value: "opt2", label: "Opção centralizada 2" },
              ]}
            />

            <RadioGroup
              fieldset="Apenas Fieldset"
              name="fieldset-only"
              fieldsetCentered
              options={[
                { value: "opt1", label: "", checked: true },
                { value: "opt2", label: "" },
              ]}
            />

            <RadioGroup
              fieldset="Fieldset e Labels"
              name="combined"
              fieldsetFontSize="lg"
              labelFontSize="sm"
              options={[
                { value: "opt1", label: "Label pequena", checked: true },
                { value: "opt2", label: "Label pequena" },
              ]}
            />

            <RadioGroup
              fieldset="Fieldset grande e Labels grandes"
              name="large-all"
              fieldsetFontSize="xl"
              labelFontSize="xl"
              options={[
                { value: "opt1", label: "Label XL", checked: true },
                { value: "opt2", label: "Label XL" },
              ]}
            />

            <RadioGroup
              fieldset="Fieldset pequeno e Labels pequenas"
              name="small-all"
              fieldsetFontSize="xs"
              labelFontSize="xs"
              options={[
                { value: "opt1", label: "Label xs", checked: true },
                { value: "opt2", label: "Label xs" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
