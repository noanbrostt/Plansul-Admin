import Etiqueta from "@/modules/ui/Etiqueta/Etiqueta";
import FavoriteButton from "@/components/FavoriteButton";

import { FiPlus } from "react-icons/fi";

export default function EtiquetasPage() {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center mb-6">
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
            <li>Etiquetas</li>
          </ul>
        </div>
      </div>

      {/* --- Seção: Fundo Sólido --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Fundo Sólido
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Etiqueta>Padrão</Etiqueta>
          <Etiqueta variant="primary">Primary</Etiqueta>
          <Etiqueta variant="success">Success</Etiqueta>
          <Etiqueta variant="error">Error</Etiqueta>
          <Etiqueta variant="warning">Warning</Etiqueta>
          <Etiqueta variant="info">Info</Etiqueta>
        </div>
      </div>

      {/* --- Seção: Outline --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Outline
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Etiqueta outline>Padrão</Etiqueta>
          <Etiqueta outline variant="primary">
            Primary
          </Etiqueta>
          <Etiqueta outline variant="success">
            Success
          </Etiqueta>
          <Etiqueta outline variant="error">
            Error
          </Etiqueta>
          <Etiqueta outline variant="warning">
            Warning
          </Etiqueta>
          <Etiqueta outline variant="info">
            Info
          </Etiqueta>
        </div>
      </div>

      {/* --- Seção: Fundo Sólido com Left Icon --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Fundo Sólido com Left Icon
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Etiqueta icon={<FiPlus />}>Padrão</Etiqueta>
          <Etiqueta variant="primary" icon={<FiPlus />}>
            Primary
          </Etiqueta>
          <Etiqueta variant="success" icon={<FiPlus />}>
            Success
          </Etiqueta>
          <Etiqueta variant="error" icon={<FiPlus />}>
            Error
          </Etiqueta>
          <Etiqueta variant="warning" icon={<FiPlus />}>
            Warning
          </Etiqueta>
          <Etiqueta variant="info" icon={<FiPlus />}>
            Info
          </Etiqueta>
        </div>
      </div>

      {/* --- Seção: Outline com Left Icon --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Outline com Left Icon
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Etiqueta outline icon={<FiPlus />}>
            Padrão
          </Etiqueta>
          <Etiqueta outline variant="primary" icon={<FiPlus />}>
            Primary
          </Etiqueta>
          <Etiqueta outline variant="success" icon={<FiPlus />}>
            Success
          </Etiqueta>
          <Etiqueta outline variant="error" icon={<FiPlus />}>
            Error
          </Etiqueta>
          <Etiqueta outline variant="warning" icon={<FiPlus />}>
            Warning
          </Etiqueta>
          <Etiqueta outline variant="info" icon={<FiPlus />}>
            Info
          </Etiqueta>
        </div>
      </div>

      {/* --- Seção: Fundo Sólido com Right Icon --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Fundo Sólido com Right Icon
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Etiqueta icon={<FiPlus />} iconPosition="right">
            Padrão
          </Etiqueta>
          <Etiqueta variant="primary" icon={<FiPlus />} iconPosition="right">
            Primary
          </Etiqueta>
          <Etiqueta variant="success" icon={<FiPlus />} iconPosition="right">
            Success
          </Etiqueta>
          <Etiqueta variant="error" icon={<FiPlus />} iconPosition="right">
            Error
          </Etiqueta>
          <Etiqueta variant="warning" icon={<FiPlus />} iconPosition="right">
            Warning
          </Etiqueta>
          <Etiqueta variant="info" icon={<FiPlus />} iconPosition="right">
            Info
          </Etiqueta>
        </div>
      </div>

      {/* --- Seção: Outline com Right Icon --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Outline com Right Icon
        </h2>
        <div className="flex flex-wrap items-center gap-4">
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
            variant="success"
            icon={<FiPlus />}
            iconPosition="right"
          >
            Success
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
            variant="warning"
            icon={<FiPlus />}
            iconPosition="right"
          >
            Warning
          </Etiqueta>
          <Etiqueta
            outline
            variant="info"
            icon={<FiPlus />}
            iconPosition="right"
          >
            Info
          </Etiqueta>
        </div>
      </div>

      {/* --- Seção: Outras Variações de Tamanho (Exemplo) --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Tamanhos
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Etiqueta variant="primary" size="xl">
            Extra Large
          </Etiqueta>
          <Etiqueta variant="primary" size="lg">
            Large
          </Etiqueta>
          <Etiqueta variant="primary">
            Medium (Padrão)
          </Etiqueta>
          <Etiqueta variant="primary" size="sm">
            Small
          </Etiqueta>
          <Etiqueta variant="primary" size="xs">
            Extra Small
          </Etiqueta>
        </div>
      </div>

      {/* --- Seção de Demonstração --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-6">
          Demonstração de Uso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 justify-items-center">
            <Etiqueta variant="primary">Primary</Etiqueta>

            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm">
                {`<Etiqueta variant="primary">
  Primary
</Etiqueta>`}
              </pre>
            </div>
          </div>

          <div className="space-y-4 justify-items-center">
            <Etiqueta
              outline
              variant="success"
              icon={<FiPlus />}
              iconPosition="right"
            >
              Success
            </Etiqueta>

            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm">
                {`import { FiPlus } from "react-icons/fi";

<Etiqueta
  outline
  variant="success"
  icon={<FiPlus />}
  iconPosition="right"
>
  Success
</Etiqueta>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
