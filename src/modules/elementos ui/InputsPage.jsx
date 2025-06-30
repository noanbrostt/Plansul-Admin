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
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cpfNumber, setCpfNumber] = useState("");

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
            <Input placeholder="w-full (default)" inputClassName="w-full" />
          </div>
          <p className="font-medium text-base-content/80 mt-4">
            Tamanhos dos Inputs em si:
          </p>
          <div className="flex gap-4">
            <Input inputSize="xl" placeholder="Input Extra Grande (xl)" />
            <Input inputSize="lg" placeholder="Input Grande (lg)" />
            <Input placeholder="Input Médio (md - Padrão)" />
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
            inputClassName="w-64"
            mask="(00) 00000-0000"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Input
            fieldset="CPF"
            placeholder="000.000.000-00"
            inputClassName="w-64"
            mask="000.000.000-00"
            value={cpfNumber}
            onChange={(e) => setCpfNumber(e.target.value)}
          />
          <Input
            fieldset="Máscara + Validação"
            type="text"
            placeholder="Digite seu telefone"
            inputClassName="w-64"
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
            inputClassName="w-64"
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
              pattern: "[0-9]*",
              minLength: "11",
              maxLength: "11",
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
            inputClassName="w-64"
          />
          <Input
            type="email"
            placeholder="Seu Email"
            icon={<FiMail />}
            iconPosition="right"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            variant="primary"
            inputClassName="w-64"
          />
          <Input
            type="password"
            placeholder="Senha"
            icon={<FiLock />}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            variant="secondary"
            inputClassName="w-64"
          />
          <Input
            type="search"
            placeholder="Buscar..."
            icon={<FiSearch />}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            variant="ghost"
            bordered={false}
            inputClassName="w-64"
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

      <div className="flex justify-between items-center mb-6 mt-12">
        <h1 className="text-3xl font-bold text-base-content">Checkboxes</h1>
      </div>

      {/* --- Seção de Checkboxes Padrão com Cores --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Checkboxes Padrão
        </h2>
        <div className="flex flex-col gap-4">
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
            <Checkbox defaultChecked label="LG" checkboxSize="xl" />
          </div>
        </div>
      </div>

      {/* --- Seção de Checkbox com Fieldset --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Checkbox com Label e/ou Fieldset
        </h2>
        <div className="flex flex-col gap-4">
          <p className="font-medium text-base-content/80">Tamanhos Fieldset:</p>

          <div className="flex flex-wrap items-center gap-8">
            <Checkbox fieldset="Fieldset" label="xl" fildsetFontSize="xl" />
            <Checkbox fieldset="Fieldset" label="lg" fildsetFontSize="lg" />
            <Checkbox fieldset="Fieldset" label="base" fildsetFontSize="base" />
            <Checkbox fieldset="Fieldset" label="sm" fildsetFontSize="sm" />
            <Checkbox fieldset="Fieldset" label="xs" fildsetFontSize="xs" />
          </div>

          <p className="font-medium text-base-content/80 mt-4">
            Tamanhos Label:
          </p>

          <div className="flex items-center gap-8">
            <Checkbox fieldset="Fieldset" label="xl" labelFontSize="xl" />
            <Checkbox fieldset="Fieldset" label="lg" labelFontSize="lg" />
            <Checkbox fieldset="Fieldset" label="base" labelFontSize="base" />
            <Checkbox fieldset="Fieldset" label="sm" labelFontSize="sm" />
            <Checkbox fieldset="Fieldset" label="xs" labelFontSize="xs" />
          </div>

          <p className="font-medium text-base-content/80 mt-4">Variações:</p>

          <div className="flex items-center gap-8">
            <Checkbox
              fieldset="Aceito os termos"
              fieldsetCentered
              defaultChecked
            />
            <Checkbox fieldset="Aceito os termos" defaultChecked />
            <Checkbox
              label="Eu aceito"
            />
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
        <div className="flex flex-col gap-4">
          <p className="font-medium text-base-content/80">Tamanhos Fieldset:</p>

          <div className="flex flex-wrap items-center gap-8">
            <Checkbox
              toggle
              fieldset="Fieldset"
              label="xl"
              fildsetFontSize="xl"
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
              label="base"
              fildsetFontSize="base"
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
              label="xs"
              fildsetFontSize="xs"
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
            <Checkbox
              toggle
              label="Eu aceito"
            />
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

      <div className="flex justify-between items-center mb-6 mt-12">
        <h1 className="text-3xl font-bold text-base-content">Radio Buttons</h1>
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

      <div className="flex justify-between items-center mb-6 mt-12">
        <h1 className="text-3xl font-bold text-base-content">Selects</h1>
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

      <div className="flex justify-between items-center mb-6 mt-12">
        <h1 className="text-3xl font-bold text-base-content">Textareas</h1>
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
