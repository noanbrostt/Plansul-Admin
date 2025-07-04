import { useState } from "react";
import FavoriteButton from "@/components/FavoriteButton";
import Button from "@/modules/ui/components/Button";

import {
  MdSettings,
  MdAdd,
  MdCheck,
  MdStar,
  MdInfo,
  MdArrowForward,
} from "react-icons/md";

export default function ButtonsPage() {
  const [isLoadingPrimary, setIsLoadingPrimary] = useState(false);
  const [isLoadingSecondary, setIsLoadingSecondary] = useState(false);

  const handleLoadingPrimary = () => {
    setIsLoadingPrimary(true);
    setTimeout(() => setIsLoadingPrimary(false), 2000);
  };

  const handleLoadingSecondary = () => {
    setIsLoadingSecondary(true);
    setTimeout(() => setIsLoadingSecondary(false), 2000);
  };

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="flex text-3xl font-bold text-base-content">
          Botões <FavoriteButton tela={{ nome: "Botões", url: "devs/ui/botoes" }} />
        </h1>
        <div className="text-sm breadcrumbs text-gray-500">
          <ul className="pointer-events-none">
            <li>Devs</li>
            <li>Elementos UI</li>
            <li>Botões</li>
          </ul>
        </div>
      </div>

      {/* --- Seção de Botões Padrão --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Botões Padrão
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button>Primary Button</Button> {/* Padrão é variant="primary" */}
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="accent">Accent Button</Button>
          <Button variant="success">Success Button</Button>
          <Button variant="warning">Warning Button</Button>
          <Button variant="info">Info Button</Button>
          <Button variant="error">Error Button</Button>
          <Button variant="neutral">Neutral Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
        </div>
      </div>

      {/* --- Seção de Botões com Ícones --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Botões com Ícones
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          {/* Ícone à esquerda (default iconPosition) */}
          <Button icon={<MdAdd />}>Adicionar</Button>
          <Button variant="secondary" icon={<MdSettings />}>
            Configurar
          </Button>
          <Button variant="ghost" icon={<MdInfo />}>
            Detalhes
          </Button>

          {/* Ícone à direita */}
          <Button icon={<MdCheck />} iconPosition="right">
            Salvar
          </Button>
          <Button variant="secondary" icon={<MdStar />} iconPosition="right">
            Favoritar
          </Button>
          <Button variant="link" icon={<MdArrowForward />} iconPosition="right">
            Ver Mais
          </Button>
        </div>
      </div>

      {/* --- Seção de Botões Outline --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Botões Outline
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button outline>Primary Outline</Button>
          <Button variant="secondary" outline>
            Secondary Outline
          </Button>
          <Button variant="accent" outline>
            Accent Outline
          </Button>
          <Button variant="success" outline>
            Success Outline
          </Button>
          <Button variant="warning" outline>
            Warning Outline
          </Button>
          <Button variant="info" outline>
            Info Outline
          </Button>
          <Button variant="error" outline>
            Error Outline
          </Button>
          <Button variant="neutral" outline>
            Neutral Outline
          </Button>
        </div>
      </div>

      {/* --- Seção de Botões de Tamanhos --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Tamanhos de Botões
        </h2>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <Button size="lg">Large Button</Button>
            <Button variant="secondary" size="lg">
              Large Button
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Button size="md">Medium Button</Button>
            <Button variant="secondary" size="md">
              Medium Button
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Button size="sm">Small Button</Button>
            <Button variant="secondary" size="sm">
              Small Button
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Button size="xs">Extra Small Button</Button>
            <Button variant="secondary" size="xs">
              Extra Small Button
            </Button>
          </div>
        </div>
      </div>

      {/* --- Seção de Botões de Largura --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Largura de Botões
        </h2>
        <div className="flex flex-col gap-4">
          <Button wide>Wide Button</Button>
          <Button variant="secondary" block>
            Block Button
          </Button>
        </div>
      </div>

      {/* --- Seção de Botões Redondos/Quadrados (com ícones) --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Botões Redondos / Quadrados
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button circle icon={<MdAdd />} />
          <Button variant="secondary" circle icon={<MdSettings />} />
          <Button variant="accent" square icon={<MdCheck />} />
          <Button variant="info" square icon={<MdInfo />} />
        </div>
      </div>

      {/* --- Seção de Botões Desativados --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Botões Desativados
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button disabled>Primary Disabled</Button>
          <Button variant="secondary" disabled>
            Secondary Disabled
          </Button>
          <Button outline disabled>
            Outline Disabled
          </Button>
          <Button variant="ghost" disabled>
            Ghost Disabled
          </Button>
        </div>
      </div>

      {/* --- Seção de Botões com Carregamento --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="flex items-baseline gap-3 text-xl font-semibold text-base-content mb-4">
          Botões com Carregamento
          <p className="text-sm text-gray-500 mb-4">
            (Clique para simular um estado de carregamento.)
          </p>
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          {/* 
            Os botões com Loading ficavam invisíveis no tema claro, durante o Loading.
            Para resolver isso é necessário essa condicionar para ficar como "ghost" durante a animação girando
          */}
          <Button
            variant={isLoadingPrimary ? "ghost" : "primary"}
            loading={isLoadingPrimary}
            onClick={handleLoadingPrimary}
          >
            Carregando Primary
          </Button>
          <Button
            variant={isLoadingSecondary ? "ghost" : "secondary"}
            loading={isLoadingSecondary}
            onClick={handleLoadingSecondary}
          >
            Carregando Secondary
          </Button>
          <Button variant="ghost" loading>
            Ghost Loading
          </Button>
          <Button variant="ghost" loading circle />
        </div>
      </div>
    </div>
  );
}
