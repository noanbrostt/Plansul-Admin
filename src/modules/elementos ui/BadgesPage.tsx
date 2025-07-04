import Badge from "./components/Badge";
import FavoriteButton from "@/components/FavoriteButton";

import { FiPlus, FiAlertTriangle, FiAward } from "react-icons/fi";

export default function BadgesPage() {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="flex text-3xl font-bold text-base-content">
          Etiquetas <FavoriteButton tela={{ nome: "Etiquetas", url: "devs/ui/etiquetas" }} />
        </h1>
        <div className="text-sm breadcrumbs text-gray-500">
          <ul>
            <li>Devs</li>
            <li>Elementos UI</li>
            <li>Etiquetas</li>
          </ul>
        </div>
      </div>

      {/* --- Seção: With Light Background (Outline) --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          With Light Background (Outline)
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge outline variant="primary">
            Primary
          </Badge>
          <Badge outline variant="success">
            Success
          </Badge>
          <Badge outline variant="error">
            Error
          </Badge>
          <Badge outline variant="warning">
            Warning
          </Badge>
          <Badge outline variant="info">
            Info
          </Badge>
          <Badge outline variant="light">
            Light
          </Badge>
          <Badge outline variant="dark">
            Dark
          </Badge>
        </div>
      </div>

      {/* --- Seção: With Solid Background --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          With Solid Background
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="light">Light</Badge>
          <Badge variant="dark">Dark</Badge>
        </div>
      </div>

      {/* --- Seção: Light Background with Left Icon --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Light Background with Left Icon
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge outline variant="primary" icon={<FiPlus />}>
            Primary
          </Badge>
          <Badge outline variant="success" icon={<FiPlus />}>
            Success
          </Badge>
          <Badge outline variant="error" icon={<FiPlus />}>
            Error
          </Badge>
          <Badge outline variant="warning" icon={<FiPlus />}>
            Warning
          </Badge>
          <Badge outline variant="info" icon={<FiPlus />}>
            Info
          </Badge>
          <Badge outline variant="light" icon={<FiPlus />}>
            Light
          </Badge>
          <Badge outline variant="dark" icon={<FiPlus />}>
            Dark
          </Badge>
        </div>
      </div>

      {/* --- Seção: Solid Background with Left Icon --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Solid Background with Left Icon
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="primary" icon={<FiPlus />}>
            Primary
          </Badge>
          <Badge variant="success" icon={<FiPlus />}>
            Success
          </Badge>
          <Badge variant="error" icon={<FiPlus />}>
            Error
          </Badge>
          <Badge variant="warning" icon={<FiPlus />}>
            Warning
          </Badge>
          <Badge variant="info" icon={<FiPlus />}>
            Info
          </Badge>
          <Badge variant="light" icon={<FiPlus />}>
            Light
          </Badge>
          <Badge variant="dark" icon={<FiPlus />}>
            Dark
          </Badge>
        </div>
      </div>

      {/* --- Seção: Light Background with Right Icon --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Light Background with Right Icon
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge
            outline
            variant="primary"
            icon={<FiPlus />}
            iconPosition="right"
          >
            Primary
          </Badge>
          <Badge
            outline
            variant="success"
            icon={<FiPlus />}
            iconPosition="right"
          >
            Success
          </Badge>
          <Badge outline variant="error" icon={<FiPlus />} iconPosition="right">
            Error
          </Badge>
          <Badge
            outline
            variant="warning"
            icon={<FiPlus />}
            iconPosition="right"
          >
            Warning
          </Badge>
          <Badge outline variant="info" icon={<FiPlus />} iconPosition="right">
            Info
          </Badge>
          <Badge outline variant="light" icon={<FiPlus />} iconPosition="right">
            Light
          </Badge>
          <Badge outline variant="dark" icon={<FiPlus />} iconPosition="right">
            Dark
          </Badge>
        </div>
      </div>

      {/* --- Seção: Solid Background with Right Icon --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Solid Background with Right Icon
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="primary" icon={<FiPlus />} iconPosition="right">
            Primary
          </Badge>
          <Badge variant="success" icon={<FiPlus />} iconPosition="right">
            Success
          </Badge>
          <Badge variant="error" icon={<FiPlus />} iconPosition="right">
            Error
          </Badge>
          <Badge variant="warning" icon={<FiPlus />} iconPosition="right">
            Warning
          </Badge>
          <Badge variant="info" icon={<FiPlus />} iconPosition="right">
            Info
          </Badge>
          <Badge variant="light" icon={<FiPlus />} iconPosition="right">
            Light
          </Badge>
          <Badge variant="dark" icon={<FiPlus />} iconPosition="right">
            Dark
          </Badge>
        </div>
      </div>

      {/* --- Seção: Outras Variações de Tamanho (Exemplo) --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Outras Variações (Tamanhos)
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="primary" size="lg">
            Large Badge
          </Badge>
          <Badge variant="primary" size="md">
            Medium Badge
          </Badge>
          <Badge variant="primary" size="sm">
            Small Badge
          </Badge>
          <Badge variant="primary" size="xs">
            Extra Small Badge
          </Badge>
          <Badge outline variant="primary" size="lg" icon={<FiAlertTriangle />}>
            Large Outline
          </Badge>
          <Badge variant="primary" icon={<FiAward />}>
            New
          </Badge>
        </div>
      </div>
    </div>
  );
}
