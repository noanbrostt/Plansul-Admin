import { useState } from "react";
import FavoriteButton from "@/components/FavoriteButton";
import CodeBlock from "@/components/CodeBlock";
import Input from "@/components/Input";

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
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cpfNumber, setCpfNumber] = useState("");

  return (
    <div className="bg-base-100 space-y-6">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center">
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
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">Cores</h2>

        <div className="flex flex-wrap justify-center gap-4">
          <Input placeholder="Padrão" autoFocus />
          <Input variant="primary" placeholder="Primary" />
          <Input variant="secondary" placeholder="Secondary" />
          <Input variant="accent" placeholder="Accent" />
          <Input variant="info" placeholder="Info" />
          <Input variant="success" placeholder="Success" />
          <Input variant="warning" placeholder="Warning" />
          <Input variant="error" placeholder="Error" icon={<FiAlertCircle />} />
          <Input variant="ghost" placeholder="Ghost Input" />
        </div>
      </div>

      {/* --- Seção de Inputs Padrão, Variações de Cor e Tamanho --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">Tamanhos</h2>
        <div className="flex justify-center items-center gap-4">
          <Input variant="primary" inputSize="xl" placeholder="Extra Large" />
          <Input variant="primary" inputSize="lg" placeholder="Large" />
          <Input variant="primary" placeholder="Medium (Padrâo)" />
          <Input variant="primary" inputSize="sm" placeholder="Small" />
          <Input variant="primary" inputSize="xs" placeholder="Extra Small" />
        </div>
      </div>

      {/* --- Seção de Inputs Padrão, Variações de Cor e Tamanho --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">Larguras</h2>
        <div className="flex flex-col justify-center items-center gap-4">
          <Input variant="primary" placeholder="w-32" largura="w-32" />
          <Input variant="primary" placeholder="w-48" largura="w-48" />
          <Input variant="primary" placeholder="w-64 (Padrão)" />
          <Input variant="primary" placeholder="w-80" largura="w-80" />
          <Input variant="primary" placeholder="w-96" largura="w-96" />
          <Input variant="primary" placeholder="w-full" largura="w-full" />
        </div>
      </div>

      {/* --- Seção de Inputs com Fieldset --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Com Fieldset
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Input
            variant="primary"
            fieldset="Fieldset"
            placeholder="Extra Large"
            inputSize="xl"
          />
          <Input
            variant="primary"
            fieldset="Fieldset"
            placeholder="Large"
            inputSize="lg"
          />
          <Input
            variant="primary"
            fieldset="Fieldset"
            placeholder="Medium (Padrão)"
          />
          <Input
            variant="primary"
            fieldset="Fieldset"
            placeholder="Small"
            inputSize="sm"
          />
          <Input
            variant="primary"
            fieldset="Fieldset"
            placeholder="Extra Small"
            inputSize="xs"
          />
        </div>
      </div>

      {/* --- Seção de Inputs com Máscara --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Com Máscara
        </h2>
        <div className="flex flex-wrap justify-center items-baseline gap-4">
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
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Com Validação
        </h2>
        <div className="flex flex-wrap justify-center items-baseline gap-4">
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
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Com Ícones
        </h2>
        <div className="flex flex-wrap justify-center items-end gap-4">
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
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Com Tag "Opcional"
        </h2>
        <div className="flex flex-wrap justify-center items-end gap-4">
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
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Tipos de Inputs HTML5
        </h2>
        <div className="flex flex-wrap justify-center items-end gap-4">
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
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
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

            <div>
              <CodeBlock code={`import Input from "@/components/Input";

const [inputValue, setInputValue] = useState("");\n\n<Input\n  fieldset="Input Padrão"\n  placeholder="Digite.."\n  value={inputValue}\n  onChange={(e) => setInputValue(e.target.value)}\n/>`} />
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

            <div>
              <CodeBlock code={`import Input from "@/components/Input";
import { FiLock } from "react-icons/fi";\n\nconst [inputValue, setInputValue] = useState("");\n\n<Input\n  type="password"\n  fieldset="Digite sua senha"\n  placeholder="*****"\n  variant="primary"\n  icon={<FiLock />}\n  validMessage={\n    <>\n    Precisa ter ao menos 8 caractéres, incluindo:\n    <br />\n    Número, letra maiúscula e letra minúscula\n    </>\n  }\n  validReqs={{\n    pattern: "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}",\n  }}\n  required\n  value={inputValue}\n  onChange={(e) => setInputValue(e.target.value)}\n/>`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
