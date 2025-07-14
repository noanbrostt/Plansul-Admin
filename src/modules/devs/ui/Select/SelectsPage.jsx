import { useState } from "react";
import Select from "@/modules/devs/ui/Select/Select";
import FavoriteButton from "@/components/FavoriteButton";

export default function InputsPage() {
  const [selectedFruits, setSelectedFruits] = useState([]);
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
    padrao: null,
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
  // Para selects com larguras
  const [selectedLarguras, setSelectedLarguras] = useState({
    "w-64": null,
    "w-56": null,
    "w-48": null,
    "w-40": null,
    "w-32": null,
    "w-24": null,
    "w-16": null,
    "w-fit": null,
    "w-full": null,
    padrao: null,
  });
  const [nivel, setNivel] = useState(null);
  const [demonMulti, setDemonMulti] = useState([]);

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

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="flex text-3xl font-bold text-base-content">
          Selects
          <FavoriteButton tela={{ nome: "Selects", url: "devs/ui/selects" }} />
        </h1>
        <div className="text-sm breadcrumbs text-gray-500">
          <ul>
            <li>Devs</li>
            <li>Elementos UI</li>
            <li>Selects</li>
          </ul>
        </div>
      </div>

      {/* Grupo Cores */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">Cores</h2>
        <div className="flex flex-wrap gap-4">
          <Select
            options={[
              { value: "1", label: "Opção 1" },
              { value: "2", label: "Opção 2" },
            ]}
            placeholder={`Padrão`}
            value={selectedValues["padrao"]}
            onChange={(val) =>
              setSelectedValues((prev) => ({ ...prev, ["padrao"]: val }))
            }
          />
          <Select
            options={[
              { value: "1", label: "Opção 1" },
              { value: "2", label: "Opção 2" },
            ]}
            placeholder={`Primary`}
            variant="primary"
            value={selectedValues["primary"]}
            onChange={(val) =>
              setSelectedValues((prev) => ({ ...prev, ["primary"]: val }))
            }
          />
          <Select
            options={[
              { value: "1", label: "Opção 1" },
              { value: "2", label: "Opção 2" },
            ]}
            placeholder={`Secondary`}
            variant="secondary"
            value={selectedValues["secondary"]}
            onChange={(val) =>
              setSelectedValues((prev) => ({ ...prev, ["secondary"]: val }))
            }
          />
          <Select
            options={[
              { value: "1", label: "Opção 1" },
              { value: "2", label: "Opção 2" },
            ]}
            placeholder={`Accent`}
            variant="accent"
            value={selectedValues["accent"]}
            onChange={(val) =>
              setSelectedValues((prev) => ({ ...prev, ["accent"]: val }))
            }
          />
          <Select
            options={[
              { value: "1", label: "Opção 1" },
              { value: "2", label: "Opção 2" },
            ]}
            placeholder={`Info`}
            variant="info"
            value={selectedValues["info"]}
            onChange={(val) =>
              setSelectedValues((prev) => ({ ...prev, ["info"]: val }))
            }
          />
          <Select
            options={[
              { value: "1", label: "Opção 1" },
              { value: "2", label: "Opção 2" },
            ]}
            placeholder={`Success`}
            variant="success"
            value={selectedValues["success"]}
            onChange={(val) =>
              setSelectedValues((prev) => ({ ...prev, ["success"]: val }))
            }
          />
          <Select
            options={[
              { value: "1", label: "Opção 1" },
              { value: "2", label: "Opção 2" },
            ]}
            placeholder={`Warning`}
            variant="warning"
            value={selectedValues["warning"]}
            onChange={(val) =>
              setSelectedValues((prev) => ({ ...prev, ["warning"]: val }))
            }
          />
          <Select
            options={[
              { value: "1", label: "Opção 1" },
              { value: "2", label: "Opção 2" },
            ]}
            placeholder={`Error`}
            variant="error"
            value={selectedValues["error"]}
            onChange={(val) =>
              setSelectedValues((prev) => ({ ...prev, ["error"]: val }))
            }
          />
          <Select
            options={[
              { value: "1", label: "Opção 1" },
              { value: "2", label: "Opção 2" },
            ]}
            placeholder={`Neutral`}
            variant="neutral"
            value={selectedValues["neutral"]}
            onChange={(val) =>
              setSelectedValues((prev) => ({ ...prev, ["neutral"]: val }))
            }
          />
          <Select
            options={[
              { value: "1", label: "Opção 1" },
              { value: "2", label: "Opção 2" },
            ]}
            placeholder={`Ghost`}
            variant="ghost"
            value={selectedValues["ghost"]}
            onChange={(val) =>
              setSelectedValues((prev) => ({ ...prev, ["ghost"]: val }))
            }
          />
        </div>
      </div>

      {/* Grupo Tamanhos */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Tamanhos
        </h2>
        <div className="flex flex-wrap gap-4">
          <Select
            variant="primary"
            size="xl"
            options={[
              { value: "1", label: "Pequeno" },
              { value: "2", label: "Grande" },
            ]}
            placeholder={`Extra Large`}
            value={selectedSizes["xl"]}
            onChange={(val) =>
              setSelectedSizes((prev) => ({ ...prev, ["xl"]: val }))
            }
          />
          <Select
            variant="primary"
            size="lg"
            options={[
              { value: "1", label: "Pequeno" },
              { value: "2", label: "Grande" },
            ]}
            placeholder={`Large`}
            value={selectedSizes["lg"]}
            onChange={(val) =>
              setSelectedSizes((prev) => ({ ...prev, ["lg"]: val }))
            }
          />
          <Select
            variant="primary"
            size="md"
            options={[
              { value: "1", label: "Pequeno" },
              { value: "2", label: "Grande" },
            ]}
            placeholder={`Medium (Padrão)`}
            value={selectedSizes["md"]}
            onChange={(val) =>
              setSelectedSizes((prev) => ({ ...prev, ["md"]: val }))
            }
          />
          <Select
            variant="primary"
            size="sm"
            options={[
              { value: "1", label: "Pequeno" },
              { value: "2", label: "Grande" },
            ]}
            placeholder={`Small`}
            value={selectedSizes["sm"]}
            onChange={(val) =>
              setSelectedSizes((prev) => ({ ...prev, ["sm"]: val }))
            }
          />
          <Select
            variant="primary"
            size="xs"
            options={[
              { value: "1", label: "Pequeno" },
              { value: "2", label: "Grande" },
            ]}
            placeholder={`Extra small`}
            value={selectedSizes["xs"]}
            onChange={(val) =>
              setSelectedSizes((prev) => ({ ...prev, ["xs"]: val }))
            }
          />
        </div>
      </div>

      {/* Grupo Larguras */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Larguras
        </h2>
        <div className="flex flex-col gap-4">
          <Select
            variant="primary"
            options={[
              { value: "1", label: "Pequeno" },
              { value: "2", label: "Grande" },
            ]}
            placeholder={`Padrão`}
            value={selectedLarguras["padrao"]}
            onChange={(val) =>
              setSelectedLarguras((prev) => ({ ...prev, ["padrao"]: val }))
            }
          />
          <Select
            variant="primary"
            largura="w-fit"
            options={[
              { value: "1", label: "Pequeno" },
              { value: "2", label: "Grande" },
            ]}
            placeholder={`w-fit`}
            value={selectedLarguras["w-fit"]}
            onChange={(val) =>
              setSelectedLarguras((prev) => ({ ...prev, ["w-fit"]: val }))
            }
          />
          <Select
            variant="primary"
            largura="w-16"
            options={[
              { value: "1", label: "Pequeno" },
              { value: "2", label: "Grande" },
            ]}
            placeholder={`w-16`}
            value={selectedLarguras["w-16"]}
            onChange={(val) =>
              setSelectedLarguras((prev) => ({ ...prev, ["w-16"]: val }))
            }
          />
          <Select
            variant="primary"
            largura="w-24"
            options={[
              { value: "1", label: "Pequeno" },
              { value: "2", label: "Grande" },
            ]}
            placeholder={`w-24`}
            value={selectedLarguras["w-24"]}
            onChange={(val) =>
              setSelectedLarguras((prev) => ({ ...prev, ["w-24"]: val }))
            }
          />
          <Select
            variant="primary"
            largura="w-32"
            options={[
              { value: "1", label: "Pequeno" },
              { value: "2", label: "Grande" },
            ]}
            placeholder={`w-32`}
            value={selectedLarguras["w-32"]}
            onChange={(val) =>
              setSelectedLarguras((prev) => ({ ...prev, ["w-32"]: val }))
            }
          />
          <Select
            variant="primary"
            largura="w-40"
            options={[
              { value: "1", label: "Pequeno" },
              { value: "2", label: "Grande" },
            ]}
            placeholder={`w-40`}
            value={selectedLarguras["w-40"]}
            onChange={(val) =>
              setSelectedLarguras((prev) => ({ ...prev, ["w-40"]: val }))
            }
          />
          <Select
            variant="primary"
            largura="w-48"
            options={[
              { value: "1", label: "Pequeno" },
              { value: "2", label: "Grande" },
            ]}
            placeholder={`w-48`}
            value={selectedLarguras["w-48"]}
            onChange={(val) =>
              setSelectedLarguras((prev) => ({ ...prev, ["w-48"]: val }))
            }
          />
          <Select
            variant="primary"
            largura="w-56"
            options={[
              { value: "1", label: "Pequeno" },
              { value: "2", label: "Grande" },
            ]}
            placeholder={`w-56`}
            value={selectedLarguras["w-56"]}
            onChange={(val) =>
              setSelectedLarguras((prev) => ({ ...prev, ["w-56"]: val }))
            }
          />
          <Select
            variant="primary"
            largura="w-64"
            options={[
              { value: "1", label: "Pequeno" },
              { value: "2", label: "Grande" },
            ]}
            placeholder={`w-64 (Padrão)`}
            value={selectedLarguras["w-64"]}
            onChange={(val) =>
              setSelectedLarguras((prev) => ({ ...prev, ["w-64"]: val }))
            }
          />
          <Select
            variant="primary"
            largura="w-full"
            options={[
              { value: "1", label: "Pequeno" },
              { value: "2", label: "Grande" },
            ]}
            placeholder={`w-full`}
            value={selectedLarguras["w-full"]}
            onChange={(val) =>
              setSelectedLarguras((prev) => ({ ...prev, ["w-full"]: val }))
            }
          />
        </div>
      </div>

      {/* Grupo Multiseleção */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Multiseleção
        </h2>
        <div className="flex flex-wrap gap-4">
          <Select
            variant="primary"
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
    </div>
  );
}
