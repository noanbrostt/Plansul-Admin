import React, { useState } from "react";
import FavoriteButton from "@/components/FavoriteButton";

import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import RadioGroup from "./components/Radio";
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
} from "react-icons/fi";

export default function InputsPage() {
  const [inputValue, setInputValue] = useState("");
  const [isAnonymousOffer, setIsAnonymousOffer] = useState(true);
  const [selectedNivel, setSelectedNivel] = useState("");
  const [selectedTermo, setSelectedTermo] = useState("s");

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cpfNumber, setCpfNumber] = useState("");

  const [selectedColor, setSelectedColor] = useState("cor1");
  const [selectedSizeXs, setSelectedSizeXs] = useState("xs1");
  const [selectedSizeSm, setSelectedSizeSm] = useState("sm1");
  const [selectedSizeMd, setSelectedSizeMd] = useState("md1");
  const [selectedSizeLg, setSelectedSizeLg] = useState("lg1");
  const [selectedSizeXl, setSelectedSizeXl] = useState("xl1");
  const [selectedCenteredOption, setSelectedCenteredOption] = useState("opt1");
  const [selectedFieldsetOnlyOption, setSelectedFieldsetOnlyOption] =
    useState("opt1");
  const [selectedOrderStatus, setSelectedOrderStatus] = useState("pending");
  const [selectedPlan, setSelectedPlan] = useState("free");

  const [selectedFruits, setSelectedFruits] = useState([]);

  const handleCheckboxChange = (event) => {
    const newValue = event.target.checked;
    setIsAnonymousOffer(newValue);
    console.log("isAnonymousOffer -> " + newValue);
  };

  const handleNivelChange = (newValue) => {
    setSelectedNivel(newValue);
    console.log("Nível selecionado: ", newValue);
  };

  const handleTermoChange = (newValue) => {
    setSelectedTermo(newValue);
    console.log("Termo selecionado: ", newValue);
  };

  const options = [
    { value: "apple", label: "Maçã" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Laranja" },
    { value: "strawberry", label: "Morango" },
    { value: "grape", label: "Uva" },
    { value: "pineapple", label: "Abacaxi" },
    { value: "watermelon", label: "Melancia" },
    { value: "kiwi", label: "Kiwi" },
    { value: "mango", label: "Manga" },
    { value: "pear", label: "Pêra" },
    { value: "peach", label: "Pêssego" },
    { value: "cherry", label: "Cereja" },
    { value: "blueberry", label: "Mirtilo" },
    { value: "raspberry", label: "Framboesa" },
    { value: "blackberry", label: "Amora" },
    { value: "lemon", label: "Limão" },
    { value: "lime", label: "Lima" },
    { value: "coconut", label: "Coco" },
    { value: "avocado", label: "Abacate" },
    { value: "papaya", label: "Mamão" },
  ];

  const [selectedCor, setSelectedCor] = useState({
    value: "azul",
    label: "Azul",
  });

  const [selectedLinguagens, setSelectedLinguagens] = useState([
    { value: "js", label: "JavaScript" },
    { value: "ts", label: "TypeScript" },
  ]);

  // Para selects com variantes (primary, secondary, etc.)
  const [selectedValues, setSelectedValues] = useState({
    primary: null,
    secondary: null,
    accent: null,
    info: null,
    success: null,
    warning: null,
    error: null,
    neutral: null,
    ghost: null,
  });

  // Para selects com tamanhos
  const [selectedSizes, setSelectedSizes] = useState({
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
  });

  // Para a seção de demonstração
  const [nivel, setNivel] = useState(null);
  const [demonMulti, setDemonMulti] = useState([]);

  const [note, setNote] = useState("Texto inicial...");
  const [comment, setComment] = useState("Msg curta");

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
        <h2 className="text-xl font-semibold text-base-content mb-6">
          Demonstração de Uso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 justify-items-center">
            <Input
              fieldset="Input Padrão"
              placeholder="Digite.."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm">
                {`const [inputValue, setInputValue] = useState("");\n\n<Input\n  fieldset="Input Padrão"\n  placeholder="Digite.."\n  value={inputValue}\n  onChange={(e) => setInputValue(e.target.value)}\n/>`}
              </pre>
            </div>
          </div>

          <div className="space-y-4 justify-items-center">
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
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm">
                {`import { FiLock } from "react-icons/fi";\n\nconst [inputValue, setInputValue] = useState("");\n\n<Input\n  type="password"\n  fieldset="Digite sua senha"\n  placeholder="*****"\n  variant="primary"\n  icon={<FiLock />}\n  validMessage={\n    <>\n    Precisa ter ao menos 8 caractéres, incluindo:\n    <br />\n    Número, letra maiúscula e letra minúscula\n    </>\n  }\n  validReqs={{\n    pattern: "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}",\n  }}\n  required\n  value={inputValue}\n  onChange={(e) => setInputValue(e.target.value)}\n/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6 mt-12">
        <h1 className="text-3xl font-bold text-base-content">Selects</h1>
      </div>

      {/* Grupo com Diferentes Tamanhos e Cores */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Selects Padrão
        </h2>

        <p className="font-medium text-base-content/80 mb-2">Cores:</p>

        <div className="flex flex-wrap gap-4">
          {[
            "primary",
            "secondary",
            "accent",
            "info",
            "success",
            "warning",
            "error",
            "neutral",
            "ghost",
          ].map((variant) => (
            <Select
              key={variant}
              options={[
                { value: "1", label: "Opção 1" },
                { value: "2", label: "Opção 2" },
              ]}
              placeholder={`Select ${variant}`}
              variant={variant}
              value={selectedValues[variant]}
              onChange={(val) =>
                setSelectedValues((prev) => ({ ...prev, [variant]: val }))
              }
            />
          ))}
        </div>

        <p className="font-medium text-base-content/80 mt-6 mb-2">Tamanhos:</p>

        <div className="flex flex-wrap gap-4">
          {["xs", "sm", "md", "lg", "xl"].map((size) => (
            <Select
              key={size}
              size={size}
              options={[
                { value: "1", label: "Pequeno" },
                { value: "2", label: "Grande" },
              ]}
              placeholder={`Select ${size}`}
              value={selectedSizes[size]}
              onChange={(val) =>
                setSelectedSizes((prev) => ({ ...prev, [size]: val }))
              }
            />
          ))}
        </div>

        <p className="font-medium text-base-content/80 mt-6 mb-2">
          Multiseleção com Botões:
        </p>

        <div className="flex flex-wrap gap-4">
          <Select
            multiple
            showSelectAll
            options={options}
            placeholder="Selecione frutas"
            value={selectedFruits}
            onChange={(newValue) => setSelectedFruits(newValue)}
          />
        </div>
      </div>

      {/* --- Seção de Demonstração --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-6">
          Demonstração de Uso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 justify-items-center">
            <Select
              options={[
                { value: "junior", label: "Júnior" },
                { value: "pleno", label: "Pleno" },
                { value: "senior", label: "Sênior" },
              ]}
              placeholder="Selecione o nível"
              value={nivel}
              onChange={setNivel}
              variant="success"
            />

            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm whitespace-pre-wrap">
                {`const [nivel, setNivel] = useState(null);\n\n<Select
  options={[
    { value: "junior", label: "Júnior" },
    { value: "pleno", label: "Pleno" },
    { value: "senior", label: "Sênior" },
  ]}
  placeholder="Selecione o nível"
  value={nivel}
  onChange={setNivel}
  variant="success"
/>`}
              </pre>
            </div>
          </div>

          <div className="space-y-4 justify-items-center">
            <Select
              multiple
              showSelectAll
              placeholder="Selecione várias opções"
              variant="primary"
              size="lg"
              options={[
                { value: "m1", label: "Item 1" },
                { value: "m2", label: "Item 2" },
                { value: "m3", label: "Item 3" },
                { value: "m4", label: "Item 4" },
              ]}
              value={demonMulti}
              onChange={setDemonMulti}
            />

            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm whitespace-pre-wrap">
                {`const [demonMulti, setDemonMulti] = useState([]);\n\n<Select
  multiple
  showSelectAll
  placeholder="Selecione várias opções"
  variant="primary"
  size="lg"
  options={[
    { value: "m1", label: "Item 1" },
    { value: "m2", label: "Item 2" },
    { value: "m3", label: "Item 3" },
    { value: "m4", label: "Item 4" },
  ]}
  value={demonMulti}
  onChange={setDemonMulti}
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* --- Seção com Valores Iniciais --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-6">
          Select com Valores Iniciais
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Select com valor único */}
          <div className="space-y-4 justify-items-center">
            <Select
              placeholder="Escolha uma cor"
              options={[
                { value: "vermelho", label: "Vermelho" },
                { value: "azul", label: "Azul" },
                { value: "verde", label: "Verde" },
              ]}
              value={selectedCor}
              onChange={(val) => {
                setSelectedCor(val);
                console.log("Selecionado:", val);
              }}
              variant="info"
            />

            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm whitespace-pre-wrap">
                {`const [selectedCor, setSelectedCor] = useState({
  value: "azul",
  label: "Azul",
});

<Select
  placeholder="Escolha uma cor"
  options={[
    { value: "vermelho", label: "Vermelho" },
    { value: "azul", label: "Azul" },
    { value: "verde", label: "Verde" },
  ]}
  value={selectedCor}
  onChange={(val) => {
    setSelectedCor(val);
    console.log("Selecionado:", val);
  }}
  variant="info"
/>`}
              </pre>
            </div>
          </div>

          {/* Select múltiplo */}
          <div className="space-y-4 justify-items-center">
            <Select
              multiple
              showSelectAll
              placeholder="Escolha os idiomas"
              largura="w-74"
              options={[
                { value: "js", label: "JavaScript" },
                { value: "ts", label: "TypeScript" },
                { value: "py", label: "Python" },
                { value: "rb", label: "Ruby" },
              ]}
              value={selectedLinguagens}
              onChange={(val) => {
                setSelectedLinguagens(val);
                console.log("Selecionados:", val);
              }}
              variant="success"
            />

            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm whitespace-pre-wrap">
                {`const [selectedLinguagens, setSelectedLinguagens] = useState([
  { value: "js", label: "JavaScript" },
  { value: "ts", label: "TypeScript" },
]);

<Select
  multiple
  showSelectAll
  placeholder="Escolha os idiomas"
  largura="w-74"
  options={[
    { value: "js", label: "JavaScript" },
    { value: "ts", label: "TypeScript" },
    { value: "py", label: "Python" },
    { value: "rb", label: "Ruby" },
  ]}
  value={selectedLinguagens}
  onChange={(val) => {
    setSelectedLinguagens(val);
    console.log("Selecionados:", val);
  }}
  variant="success"
/>`}
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
          Checkbox com Label e Fieldset
        </h2>
        <div className="flex flex-wrap items-center gap-8">
          <Checkbox fieldset="Fieldset" label="xs" checkboxSize="xs" />
          <Checkbox fieldset="Fieldset" label="sm" checkboxSize="sm" />
          <Checkbox fieldset="Fieldset" label="base" />
          <Checkbox fieldset="Fieldset" label="lg" checkboxSize="lg" />
          <Checkbox fieldset="Fieldset" label="xl" checkboxSize="xl" />
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
          Toggles com Label e Fieldset
        </h2>

        <div className="flex flex-wrap items-center gap-8">
          <Checkbox
            toggle
            fieldset="xs"
            leftLabel="leftLabel"
            checkboxSize="xs"
          />
          <Checkbox toggle fieldset="sm" label="label" checkboxSize="sm" />
          <Checkbox
            toggle
            fieldsetCentered
            legendClassName="ml-3"
            fieldset="md"
            label="label"
            leftLabel="leftLabel"
          />
          <Checkbox
            toggle
            fieldsetCentered
            legendClassName="ml-3"
            fieldset="lg"
            label="label"
            leftLabel="leftLabel"
            checkboxSize="lg"
          />
          <Checkbox
            toggle
            fieldsetCentered
            legendClassName="ml-3"
            fieldset="xl"
            label="label"
            leftLabel="leftLabel"
            checkboxSize="xl"
          />
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

      {/* --- Seção de Demonstração --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-6">
          Demonstração de Uso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 justify-items-center mt-11">
            <Checkbox
              label="Oferta Anônima?"
              checked={isAnonymousOffer}
              onChange={handleCheckboxChange}
            />

            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm">
                {`const [isAnonymousOffer, setIsAnonymousOffer] = useState(true);\n\nconst handleCheckboxChange = (event) => {\n  setIsAnonymousOffer(event.target.checked);\n};\n\n<Checkbox\n  label="Oferta Anônima?"\n  checked={isAnonymousOffer}\n  onChange={handleCheckboxChange}\n/>`}
              </pre>
            </div>
          </div>

          <div className="space-y-4 justify-items-center">
            <Checkbox
              toggle
              fieldset="Oferta Anônima?"
              label="Sim"
              leftLabel="Não"
              fieldsetCentered
              checked={isAnonymousOffer}
              onChange={handleCheckboxChange}
            />

            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm">
                {`const [isAnonymousOffer, setIsAnonymousOffer] = useState(true);\n\nconst handleCheckboxChange = (event) => {\n  setIsAnonymousOffer(event.target.checked);\n};\n\n<Checkbox\n  toggle\n  fieldset="Oferta Anônima?"\n  label="Sim"\n  leftLabel="Não"\n  fieldsetCentered\n  checked={isAnonymousOffer}\n  onChange={handleCheckboxChange}\n/>`}
              </pre>
            </div>
          </div>
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
              { value: "cor1", label: "padrão" },
              { value: "cor2", label: "primary", variant: "primary" },
              { value: "cor3", label: "secondary", variant: "secondary" },
              { value: "cor4", label: "accent", variant: "accent" },
              { value: "cor5", label: "info", variant: "info" },
              { value: "cor6", label: "success", variant: "success" },
              { value: "cor7", label: "warning", variant: "warning" },
              { value: "cor8", label: "error", variant: "error" },
              { value: "cor9", label: "neutral", variant: "neutral" },
            ]}
            value={selectedColor}
            onValueChange={setSelectedColor}
          />

          <p className="font-medium text-base-content/80 mt-4">Tamanhos:</p>

          <div className="flex gap-14">
            <RadioGroup
              fieldset="Radio XS"
              name="sizes-xs"
              radioSize="xs"
              options={[
                { value: "xs1", label: "Opção 1" },
                { value: "xs2", label: "Opção 2" },
              ]}
              value={selectedSizeXs}
              onValueChange={setSelectedSizeXs}
            />
            <RadioGroup
              fieldset="Radio SM"
              name="sizes-sm"
              radioSize="sm"
              options={[
                { value: "sm1", label: "Opção 1" },
                { value: "sm2", label: "Opção 2" },
              ]}
              value={selectedSizeSm}
              onValueChange={setSelectedSizeSm}
            />
            <RadioGroup
              fieldset="Radio MD"
              name="sizes-md"
              options={[
                { value: "md1", label: "Opção 1" },
                { value: "md2", label: "Opção 2" },
              ]}
              value={selectedSizeMd}
              onValueChange={setSelectedSizeMd}
            />
            <RadioGroup
              fieldset="Radio LG"
              name="sizes-lg"
              radioSize="lg"
              options={[
                { value: "lg1", label: "Opção 1" },
                { value: "lg2", label: "Opção 2" },
              ]}
              value={selectedSizeLg}
              onValueChange={setSelectedSizeLg}
            />
            <RadioGroup
              fieldset="Radio XL"
              name="sizes-xl"
              radioSize="xl"
              options={[
                { value: "xl1", label: "Opção 1" },
                { value: "xl2", label: "Opção 2" },
              ]}
              value={selectedSizeXl}
              onValueChange={setSelectedSizeXl}
            />
          </div>

          <p className="font-medium text-base-content/80 mt-4">Variações:</p>

          <div className="flex flex-wrap items-start gap-8">
            <RadioGroup
              fieldset="Centralizado"
              name="centered"
              fieldsetCentered
              options={[
                { value: "opt1", label: "Opção centralizada 1" },
                { value: "opt2", label: "Opção centralizada 2" },
              ]}
              value={selectedCenteredOption}
              onValueChange={setSelectedCenteredOption}
            />

            <RadioGroup
              fieldset="Apenas Fieldset"
              name="fieldset-only"
              fieldsetCentered
              options={[
                { value: "opt1", label: "" },
                { value: "opt2", label: "" },
              ]}
              value={selectedFieldsetOnlyOption}
              onValueChange={setSelectedFieldsetOnlyOption}
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
          value={selectedOrderStatus}
          onValueChange={setSelectedOrderStatus}
        />

        <p className="font-medium text-base-content/80 mt-4">Vertical:</p>

        <div className="flex flex-col gap-2">
          <RadioGroup
            fieldset="Escolha seu plano"
            name="plans"
            options={[
              { value: "free", label: "Plano Gratuito" },
              { value: "basic", label: "Plano Básico" },
              { value: "pro", label: "Plano Profissional" },
              {
                value: "enterprise",
                label: "Plano Enterprise",
                disabled: true,
              },
            ]}
            value={selectedPlan}
            onValueChange={setSelectedPlan}
          />
        </div>
      </div>

      {/* --- Seção de Demonstração --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-6">
          Demonstração de Uso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 justify-items-center">
            <RadioGroup
              fieldset="Aceita os Termos?"
              name="termos"
              options={[
                { value: "s", label: "Sim" },
                { value: "n", label: "Não" },
              ]}
              fieldsetCentered
              className="mb-12"
              value={selectedTermo}
              onValueChange={handleTermoChange}
            />

            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm">
                {`const [selectedTermo, setSelectedTermo] = useState("s");\n\nconst handleTermoChange = (newValue) => {\n  setSelectedTermo(newValue);\n};\n\n<RadioGroup\n  fieldset="Aceita os Termos?"\n  name="termos"\n  options={[\n    { value: "s", label: "Sim" },\n    { value: "n", label: "Não" },\n  ]}\n  fieldsetCentered\n  className="mb-12"\n  value={selectedTermo}\n  onValueChange={handleTermoChange}\n/>`}
              </pre>
            </div>
          </div>

          <div className="space-y-4 justify-items-center">
            <RadioGroup
              fieldset="Qual seu nível?"
              name="nivel"
              options={[
                { value: "nv1", label: "Júnior" },
                { value: "nv2", label: "Pleno" },
                { value: "nv3", label: "Sênior" },
              ]}
              value={selectedNivel}
              onValueChange={handleNivelChange}
            />

            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm">
                {`const [selectedNivel, setSelectedNivel] = useState('');\n\nconst handleNivelChange = (newValue) => {\n  setSelectedNivel(newValue);\n};\n\n<RadioGroup\n  fieldset="Qual seu nível?"\n  name="nivel"\n  options={[\n    { value: "nv1", label: "Júnior" },\n    { value: "nv2", label: "Pleno" },\n    { value: "nv3", label: "Sênior" },\n  ]}\n  value={selectedNivel}\n  onValueChange={handleNivelChange}\n/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Textareas por Cores */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Textareas por Cores
        </h2>
        <div className="flex flex-wrap gap-4">
          {[
            "primary",
            "secondary",
            "accent",
            "info",
            "success",
            "warning",
            "error",
            "neutral",
            "ghost",
          ].map((variant) => (
            <Textarea
              key={variant}
              variant={variant}
              placeholder={`Textarea ${variant}`}
              value=""
              onChange={() => {}}
            />
          ))}
        </div>
      </div>

      {/* Textareas por Tamanhos */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Textareas por Tamanhos
        </h2>
        <div className="flex flex-wrap gap-4">
          {["xs", "sm", "md", "lg", "xl"].map((size) => (
            <Textarea
              key={size}
              size={size}
              placeholder={`Textarea ${size.toUpperCase()}`}
              value=""
              onChange={() => {}}
            />
          ))}
        </div>
      </div>

      {/* --- Seção com Valores Iniciais para Textarea --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-6">
          Demonstração de Uso
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Textarea controlado simples */}
          <div className="space-y-4 justify-items-center">
            <Textarea
              placeholder="Digite sua nota"
              value={note}
              onChange={(v) => {
                setNote(v);
                console.log("Nota:", v);
              }}
            />
            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm whitespace-pre-wrap">
                {`const [note, setNote] = useState('Texto inicial...')

<Textarea
  placeholder="Digite sua nota"
  value={note}
  onChange={v => {
    setNote(v)
    console.log('Nota:', v)
  }}
/>`}
              </pre>
            </div>
          </div>

          {/* Textarea com estado de erro */}
          <div className="space-y-4 justify-items-center">
            <Textarea
              placeholder="Sua mensagem"
              value={comment}
              onChange={(v) => {
                setComment(v);
                console.log("Comentário:", v);
              }}
              variant="primary"
              size="lg"
              maxLength="20"
              error={comment.length > 0 && comment.length < 10 ? "Mínimo 10 caracteres" : undefined}
            />
            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm whitespace-pre-wrap">
                {`const [comment, setComment] = useState('Msg curta')

<Textarea
  placeholder="Sua mensagem"
  value={comment}
  onChange={v => {
    setComment(v)
    console.log('Comentário:', v)
  }}
  variant="primary"
  size="lg"
  maxLength="20"
  error={comment.length > 0 && comment.length < 10 ? 'Mínimo 10 caracteres' : undefined}
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
