import { useState } from "react";
import RadioGroup from "@/modules/devs/ui/Radio/Radio";
import FavoriteButton from "@/components/FavoriteButton";

export default function InputsPage() {
  const [selectedNivel, setSelectedNivel] = useState("");
  const [selectedTermo, setSelectedTermo] = useState("s");
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
  const handleNivelChange = (newValue) => {
    setSelectedNivel(newValue);
    console.log("Nível selecionado: ", newValue);
  };
  const handleTermoChange = (newValue) => {
    setSelectedTermo(newValue);
    console.log("Termo selecionado: ", newValue);
  };

  return (
    <div className="bg-base-100 min-h-screen space-y-6">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center">
        <h1 className="flex text-3xl font-bold text-base-content">
          Radios
          <FavoriteButton tela={{ nome: "Radios", url: "devs/ui/radios" }} />
        </h1>
        <div className="text-sm breadcrumbs text-gray-500">
          <ul>
            <li>Devs</li>
            <li>Elementos UI</li>
            <li>Radios</li>
          </ul>
        </div>
      </div>

      {/* Grupo Cores */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">Cores</h2>
        <div className="flex flex-col items-center gap-2">
          <RadioGroup
            name="cores"
            orientation="horizontal"
            options={[
              { value: "cor1", label: "Padrão" },
              { value: "cor2", label: "Primary", variant: "primary" },
              { value: "cor3", label: "Secondary", variant: "secondary" },
              { value: "cor4", label: "Accent", variant: "accent" },
              { value: "cor5", label: "Info", variant: "info" },
              { value: "cor6", label: "Success", variant: "success" },
              { value: "cor7", label: "Warning", variant: "warning" },
              { value: "cor8", label: "Error", variant: "error" },
              { value: "cor9", label: "Neutral", variant: "neutral" },
            ]}
            value={selectedColor}
            onValueChange={setSelectedColor}
          />
        </div>
      </div>

      {/* Grupo Tamanhos */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">Tamanhos</h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <RadioGroup
            fieldset="Extra Large"
            name="sizes-xl"
            radioSize="xl"
            options={[
              { value: "xl1", label: "Opção 1" },
              { value: "xl2", label: "Opção 2" },
            ]}
            value={selectedSizeXl}
            onValueChange={setSelectedSizeXl}
          />
          <RadioGroup
            fieldset="Large"
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
            fieldset="Medium (Padrão)"
            name="sizes-md"
            options={[
              { value: "md1", label: "Opção 1" },
              { value: "md2", label: "Opção 2" },
            ]}
            value={selectedSizeMd}
            onValueChange={setSelectedSizeMd}
          />
          <RadioGroup
            fieldset="Small"
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
            fieldset="Extra Small"
            name="sizes-xs"
            radioSize="xs"
            options={[
              { value: "xs1", label: "Opção 1" },
              { value: "xs2", label: "Opção 2" },
            ]}
            value={selectedSizeXs}
            onValueChange={setSelectedSizeXs}
          />
        </div>
      </div>

      {/* Grupo Variações */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Variações
        </h2>
        <div className="flex flex-wrap justify-center items-start gap-8">
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

      {/* Grupo Vertical Simples */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Orientações
        </h2>
        <div className="flex flex-wrap justify-center items-start gap-8">
          <div>
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
          </div>

          <div>
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
        </div>
      </div>

      {/* --- Seção de Demonstração --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
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
                {`const [selectedTermo, setSelectedTermo] = useState("s");

const handleTermoChange = (newValue) => {
    setSelectedTermo(newValue);
};

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
/>`}
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
                {`const [selectedNivel, setSelectedNivel] = useState('');

const handleNivelChange = (newValue) => {
    setSelectedNivel(newValue);
};

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
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
