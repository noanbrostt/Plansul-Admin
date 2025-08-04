import Etiqueta from "@/components/Etiqueta";
import FavoriteButton from "@/components/FavoriteButton";
import CodeBlock from "@/components/CodeBlock";

import { FiPlus } from "react-icons/fi";

export default function EtiquetasPage() {
  return (
    <div className="bg-base-100 space-y-6">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center">
        <h1 className="flex text-3xl font-bold text-base-content">
          Etiquetas{" "}
          <FavoriteButton
            tela={{ nome: "Etiquetas", url: "devs/ui/etiquetas" }}
          />
        </h1>
        <div className="text-sm breadcrumbs text-gray-500">
          <ul>
            <li>Devs</li>
            <li>Elementos UI</li>
            <li className="text-primary font-medium">Etiquetas</li>
          </ul>
        </div>
      </div>

      {/* --- Seção: Fundo Sólido --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Fundo Sólido
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Etiqueta>Padrão</Etiqueta>
          <Etiqueta variant="primary">Primary</Etiqueta>
          <Etiqueta variant="secondary">Secondary</Etiqueta>
          <Etiqueta variant="accent">Accent</Etiqueta>
          <Etiqueta variant="success">Success</Etiqueta>
          <Etiqueta variant="warning">Warning</Etiqueta>
          <Etiqueta variant="error">Error</Etiqueta>
          <Etiqueta variant="info">Info</Etiqueta>
          <Etiqueta variant="neutral">Neutral</Etiqueta>
          <Etiqueta variant="ghost">Ghost</Etiqueta>
        </div>
      </div>

      {/* --- Seção: Outline --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">Outline</h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Etiqueta outline>Padrão</Etiqueta>
          <Etiqueta outline variant="primary">
            Primary
          </Etiqueta>
          <Etiqueta outline variant="secondary">
            Secondary
          </Etiqueta>
          <Etiqueta outline variant="accent">
            Accent
          </Etiqueta>
          <Etiqueta outline variant="success">
            Success
          </Etiqueta>
          <Etiqueta outline variant="warning">
            Warning
          </Etiqueta>
          <Etiqueta outline variant="error">
            Error
          </Etiqueta>
          <Etiqueta outline variant="info">
            Info
          </Etiqueta>
          <Etiqueta outline variant="neutral">
            Neutral
          </Etiqueta>
          <Etiqueta outline variant="ghost">
            Ghost
          </Etiqueta>
        </div>
      </div>

      {/* --- Seção: Fundo Sólido com Left Icon --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Fundo Sólido com Left Icon
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Etiqueta icon={<FiPlus />}>Padrão</Etiqueta>
          <Etiqueta variant="primary" icon={<FiPlus />}>
            Primary
          </Etiqueta>
          <Etiqueta variant="secondary" icon={<FiPlus />}>
            Secondary
          </Etiqueta>
          <Etiqueta variant="accent" icon={<FiPlus />}>
            Accent
          </Etiqueta>
          <Etiqueta variant="success" icon={<FiPlus />}>
            Success
          </Etiqueta>
          <Etiqueta variant="warning" icon={<FiPlus />}>
            Warning
          </Etiqueta>
          <Etiqueta variant="error" icon={<FiPlus />}>
            Error
          </Etiqueta>
          <Etiqueta variant="info" icon={<FiPlus />}>
            Info
          </Etiqueta>
          <Etiqueta variant="neutral" icon={<FiPlus />}>
            Neutral
          </Etiqueta>
          <Etiqueta variant="ghost" icon={<FiPlus />}>
            Ghost
          </Etiqueta>
        </div>
      </div>

      {/* --- Seção: Outline com Left Icon --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Outline com Left Icon
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Etiqueta outline icon={<FiPlus />}>
            Padrão
          </Etiqueta>
          <Etiqueta outline variant="primary" icon={<FiPlus />}>
            Primary
          </Etiqueta>
          <Etiqueta outline variant="secondary" icon={<FiPlus />}>
            Secondary
          </Etiqueta>
          <Etiqueta outline variant="accent" icon={<FiPlus />}>
            Accent
          </Etiqueta>
          <Etiqueta outline variant="success" icon={<FiPlus />}>
            Success
          </Etiqueta>
          <Etiqueta outline variant="warning" icon={<FiPlus />}>
            Warning
          </Etiqueta>
          <Etiqueta outline variant="error" icon={<FiPlus />}>
            Error
          </Etiqueta>
          <Etiqueta outline variant="info" icon={<FiPlus />}>
            Info
          </Etiqueta>
          <Etiqueta outline variant="neutral" icon={<FiPlus />}>
            Neutral
          </Etiqueta>
          <Etiqueta outline variant="ghost" icon={<FiPlus />}>
            Ghost
          </Etiqueta>
        </div>
      </div>

      {/* --- Seção: Fundo Sólido com Right Icon --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Fundo Sólido com Right Icon
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Etiqueta icon={<FiPlus />} iconPosition="right">
            Padrão
          </Etiqueta>
          <Etiqueta variant="primary" icon={<FiPlus />} iconPosition="right">
            Primary
          </Etiqueta>
          <Etiqueta variant="secondary" icon={<FiPlus />} iconPosition="right">
            Secondary
          </Etiqueta>
          <Etiqueta variant="accent" icon={<FiPlus />} iconPosition="right">
            Accent
          </Etiqueta>
          <Etiqueta variant="success" icon={<FiPlus />} iconPosition="right">
            Success
          </Etiqueta>
          <Etiqueta variant="warning" icon={<FiPlus />} iconPosition="right">
            Warning
          </Etiqueta>
          <Etiqueta variant="error" icon={<FiPlus />} iconPosition="right">
            Error
          </Etiqueta>
          <Etiqueta variant="info" icon={<FiPlus />} iconPosition="right">
            Info
          </Etiqueta>
          <Etiqueta variant="neutral" icon={<FiPlus />} iconPosition="right">
            Neutral
          </Etiqueta>
          <Etiqueta variant="ghost" icon={<FiPlus />} iconPosition="right">
            Ghost
          </Etiqueta>
        </div>
      </div>

      {/* --- Seção: Outline com Right Icon --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Outline com Right Icon
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Etiqueta outline icon={<FiPlus />} iconPosition="right">
            Padrão
          </Etiqueta>
          <Etiqueta
            outline
            variant="primary"
            icon={<FiPlus />}
            iconPosition="right"
          >
            Primary
          </Etiqueta>
          <Etiqueta
            outline
            variant="secondary"
            icon={<FiPlus />}
            iconPosition="right"
          >
            Secondary
          </Etiqueta>
          <Etiqueta
            outline
            variant="accent"
            icon={<FiPlus />}
            iconPosition="right"
          >
            Accent
          </Etiqueta>
          <Etiqueta
            outline
            variant="success"
            icon={<FiPlus />}
            iconPosition="right"
          >
            Success
          </Etiqueta>
          <Etiqueta
            outline
            variant="warning"
            icon={<FiPlus />}
            iconPosition="right"
          >
            Warning
          </Etiqueta>
          <Etiqueta
            outline
            variant="error"
            icon={<FiPlus />}
            iconPosition="right"
          >
            Error
          </Etiqueta>
          <Etiqueta
            outline
            variant="info"
            icon={<FiPlus />}
            iconPosition="right"
          >
            Info
          </Etiqueta>
          <Etiqueta
            outline
            variant="neutral"
            icon={<FiPlus />}
            iconPosition="right"
          >
            Neutral
          </Etiqueta>
          <Etiqueta
            outline
            variant="ghost"
            icon={<FiPlus />}
            iconPosition="right"
          >
            Ghost
          </Etiqueta>
        </div>
      </div>

      {/* --- Seção: Outras Variações de Tamanho (Exemplo) --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">Tamanhos</h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Etiqueta variant="primary" size="xl">
            Extra Large
          </Etiqueta>
          <Etiqueta variant="primary" size="lg">
            Large
          </Etiqueta>
          <Etiqueta variant="primary">Medium (Padrão)</Etiqueta>
          <Etiqueta variant="primary" size="sm">
            Small
          </Etiqueta>
          <Etiqueta variant="primary" size="xs">
            Extra Small
          </Etiqueta>
        </div>
      </div>

      {/* --- Seção de Demonstração --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Demonstração de Uso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 justify-items-center">
            <Etiqueta variant="primary">Primary</Etiqueta>

            <div>
              <CodeBlock
                code={`import Etiqueta from "@/components/Etiqueta";
                  
<Etiqueta variant="primary">
  Primary
</Etiqueta>`}
              />
            </div>
          </div>

          <div className="space-y-4 justify-items-center">
            <Etiqueta
              outline
              variant="secondary"
              icon={<FiPlus />}
              iconPosition="right"
            >
              Secondary
            </Etiqueta>

            <div>
              <CodeBlock
                code={`import Etiqueta from "@/components/Etiqueta";
import { FiPlus } from "react-icons/fi";

<Etiqueta
  outline
  variant="secondary"
  icon={<FiPlus />}
  iconPosition="right"
>
  Secondary
</Etiqueta>`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
