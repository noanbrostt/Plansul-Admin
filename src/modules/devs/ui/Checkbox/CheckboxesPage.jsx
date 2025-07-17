import { useState } from "react";
import Checkbox from "@/modules/devs/ui/Checkbox/Checkbox";
import FavoriteButton from "@/components/FavoriteButton";
import CodeBlock from "@/components/CodeBlock";

export default function InputsPage() {
  const [isAnonymousOffer, setIsAnonymousOffer] = useState(true);

  const handleCheckboxChange = (event) => {
    const newValue = event.target.checked;
    setIsAnonymousOffer(newValue);
    console.log("isAnonymousOffer -> " + newValue);
  };

  return (
    <div className="bg-base-100 min-h-screen space-y-6">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center">
        <h1 className="flex text-3xl font-bold text-base-content">
          Checkboxes
          <FavoriteButton
            tela={{ nome: "Checkboxes e Toggles", url: "devs/ui/checkboxes" }}
          />
        </h1>
        <div className="text-sm breadcrumbs text-gray-500">
          <ul>
            <li>Devs</li>
            <li>Elementos UI</li>
            <li>Checkboxes e Toggles</li>
          </ul>
        </div>
      </div>

      {/* --- Seção de Cores --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">Cores</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Checkbox defaultChecked label="Padrão" />
          <Checkbox defaultChecked label="Primary" variant="primary" />
          <Checkbox defaultChecked label="Secondary" variant="secondary" />
          <Checkbox defaultChecked label="Accent" variant="accent" />
          <Checkbox defaultChecked label="Info" variant="info" />
          <Checkbox defaultChecked label="Success" variant="success" />
          <Checkbox defaultChecked label="Warning" variant="warning" />
          <Checkbox defaultChecked label="Error" variant="error" />
          <Checkbox defaultChecked label="Neutral" variant="neutral" />
        </div>
      </div>

      {/* --- Seção de Checkbox com Fieldset --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">Tamanhos</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Checkbox defaultChecked label="Extra Large" checkboxSize="xl" />
          <Checkbox defaultChecked label="Large" checkboxSize="lg" />
          <Checkbox defaultChecked label="Medium (Padrão)" />
          <Checkbox defaultChecked label="Small" checkboxSize="sm" />
          <Checkbox defaultChecked label="Extra Small" checkboxSize="xs" />
        </div>
      </div>

      {/* --- Seção de Variações --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Variações
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Checkbox defaultChecked fieldset="Fieldset" label="Label" />
          <Checkbox defaultChecked fieldset="Fieldset" />
          <Checkbox
            defaultChecked
            fieldset="fieldsetCentered"
            fieldsetCentered
          />
          <Checkbox defaultChecked label="Label" />
        </div>
      </div>

      <div className="flex justify-between items-center mb-6 mt-12">
        <h1 className="text-3xl font-bold text-base-content">Toggles</h1>
      </div>

      {/* --- Seção de Toggles com Cores --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">Cores</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Checkbox toggle defaultChecked label="Padrão" />
          <Checkbox toggle defaultChecked label="Primary" variant="primary" />
          <Checkbox toggle defaultChecked label="Accent" variant="accent" />
          <Checkbox toggle defaultChecked label="Success" variant="success" />
          <Checkbox toggle defaultChecked label="Error" variant="error" />
          <Checkbox toggle defaultChecked label="Neutral" variant="neutral" />
        </div>
      </div>

      {/* --- Seção de Checkbox com Fieldset --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">Tamanhos</h2>

        <div className="flex flex-wrap justify-center items-center gap-4">
          <Checkbox
            toggle
            defaultChecked
            label="Extra Large"
            checkboxSize="xl"
          />
          <Checkbox toggle defaultChecked label="Large" checkboxSize="lg" />
          <Checkbox toggle defaultChecked label="Medium (Padrão)" />
          <Checkbox toggle defaultChecked label="Small" checkboxSize="sm" />
          <Checkbox
            toggle
            defaultChecked
            label="Extra Small"
            checkboxSize="xs"
          />
        </div>
      </div>

      {/* --- Seção de Variações --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Variações
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8">
          <Checkbox
            toggle
            defaultChecked
            fieldset="Fieldset"
            leftLabel="leftLabel"
          />
          <Checkbox toggle fieldset="Fieldset" label="label" />
          <Checkbox
            toggle
            defaultChecked
            fieldsetCentered
            legendClassName="ml-3"
            fieldset="fieldsetCentered"
            label="label"
            leftLabel="leftLabel"
          />
          <Checkbox toggle defaultChecked label="label" leftLabel="leftLabel" />
        </div>
      </div>

      {/* --- Seção de Toggle com Ícones Internos --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Toggle com Ícones
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Checkbox toggle defaultChecked iconsToggle />
        </div>
      </div>

      {/* --- Seção de Demonstração --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Demonstração de Uso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 justify-items-center mt-11">
            <Checkbox
              label="Oferta Anônima?"
              checked={isAnonymousOffer}
              onChange={handleCheckboxChange}
            />

            <div>
              <CodeBlock
                code={`const [isAnonymousOffer, setIsAnonymousOffer] = useState(true);
              
const handleCheckboxChange = (event) => {
  setIsAnonymousOffer(event.target.checked);
};

<Checkbox
  label="Oferta Anônima?"
  checked={isAnonymousOffer}
  onChange={handleCheckboxChange}
/>

{/*
  Para o componente começar checkado nós usamos:
  defaultChecked -> Para componentes estáticos;
  checked={const = true} -> Para componentes dinâmicos;
*/}`}
              />
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

            <div>
              <CodeBlock
                code={`const [isAnonymousOffer, setIsAnonymousOffer] = useState(true);

const handleCheckboxChange = (event) => {
    setIsAnonymousOffer(event.target.checked);
};

<Checkbox
  toggle
  fieldset="Oferta Anônima?"
  label="Sim"
  leftLabel="Não"
  fieldsetCentered
  checked={isAnonymousOffer}
  onChange={handleCheckboxChange}
/>`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
