import { useState } from "react";
import Botao from "@/modules/devs/ui/Botao/Botao";
import FavoriteButton from "@/components/FavoriteButton";

import {
  MdSettings,
  MdAdd,
  MdCheck,
  MdStar,
  MdInfo,
  MdArrowForward,
} from "react-icons/md";

export default function BotoesPage() {
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
    <div className="bg-base-100 min-h-screen space-y-6">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center">
        <h1 className="flex text-3xl font-bold text-base-content">
          Botões{" "}
          <FavoriteButton tela={{ nome: "Botões", url: "devs/ui/botoes" }} />
        </h1>
        <div className="text-sm breadcrumbs text-gray-500">
          <ul className="pointer-events-none">
            <li>Devs</li>
            <li>Elementos UI</li>
            <li>Botões</li>
          </ul>
        </div>
      </div>

      {/* --- Seção de Fundo Sólido --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Fundo Sólido
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Botao>Primary Button</Botao> {/* Padrão é variant="primary" */}
          <Botao variant="secondary">Secondary Button</Botao>
          <Botao variant="accent">Accent Button</Botao>
          <Botao variant="success">Success Button</Botao>
          <Botao variant="warning">Warning Button</Botao>
          <Botao variant="info">Info Button</Botao>
          <Botao variant="error">Error Button</Botao>
          <Botao variant="neutral">Neutral Button</Botao>
          <Botao variant="ghost">Ghost Button</Botao>
          <Botao variant="link">Link Button</Botao>
        </div>
      </div>

      {/* --- Seção de Outline --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">Outline</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Botao outline>Primary Outline</Botao>
          <Botao variant="secondary" outline>
            Secondary Outline
          </Botao>
          <Botao variant="accent" outline>
            Accent Outline
          </Botao>
          <Botao variant="success" outline>
            Success Outline
          </Botao>
          <Botao variant="warning" outline>
            Warning Outline
          </Botao>
          <Botao variant="info" outline>
            Info Outline
          </Botao>
          <Botao variant="error" outline>
            Error Outline
          </Botao>
          <Botao variant="neutral" outline>
            Neutral Outline
          </Botao>
          <Botao variant="ghost" outline>
            Ghost Outline
          </Botao>
        </div>
      </div>

      {/* --- Seção de Com Ícones --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">Com Ícones</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Ícone à esquerda (default iconPosition) */}
          <Botao icon={<MdAdd />}>Adicionar</Botao>
          <Botao variant="secondary" icon={<MdSettings />}>
            Configurar
          </Botao>
          <Botao variant="ghost" icon={<MdInfo />}>
            Detalhes
          </Botao>

          {/* Ícone à direita */}
          <Botao icon={<MdCheck />} iconPosition="right">
            Salvar
          </Botao>
          <Botao variant="secondary" icon={<MdStar />} iconPosition="right">
            Favoritar
          </Botao>
          <Botao variant="link" icon={<MdArrowForward />} iconPosition="right">
            Ver Mais
          </Botao>
        </div>
      </div>

      {/* --- Seção de Tamanhos --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">Tamanhos</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Botao size="xl">Extra Large</Botao>
          <Botao size="lg">Large</Botao>
          <Botao>Medium (Padrão)</Botao>
          <Botao size="sm">Small</Botao>
          <Botao size="xs">Extra Small</Botao>
        </div>
      </div>

      {/* --- Seção de Larguras --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">Larguras</h2>
        <div className="flex flex-col items-center gap-4">
          <Botao largura="w-fit">w-fit (Ocupa o espaço do texto)</Botao>
          <Botao largura="w-16">w-16</Botao>
          <Botao largura="w-24">w-24</Botao>
          <Botao largura="w-32">w-32</Botao>
          <Botao largura="w-40">w-40</Botao>
          <Botao largura="w-48">w-48</Botao>
          <Botao largura="w-56">w-56</Botao>
          <Botao wide>wide (w-64 responsivo)</Botao>
        </div>
      </div>

      {/* --- Seção de Botões Redondos/Quadrados (com ícones) --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Botões Redondos / Quadrados
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Botao circle icon={<MdAdd />} />
          <Botao variant="secondary" circle icon={<MdSettings />} />
          <Botao variant="accent" square icon={<MdCheck />} />
          <Botao variant="info" square icon={<MdInfo />} />
        </div>
      </div>

      {/* --- Seção de Botões Desativados --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Botões Desativados
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Botao disabled>Primary Disabled</Botao>
          <Botao outline disabled>
            Outline Disabled
          </Botao>
          <Botao variant="ghost" disabled>
            Ghost Disabled
          </Botao>
        </div>
      </div>

      {/* --- Seção de Botões com Carregamento --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Botões com Carregamento{" "}
          <small className="text-xs text-gray-500 mb-4">
            (Clique para simular um estado de carregamento.)
          </small>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* 
            Os botões com Loading ficavam invisíveis no tema claro, durante o Loading.
            Para resolver isso é necessário essa condicionar para ficar como "ghost" durante a animação girando
          */}
          <Botao
            variant={isLoadingPrimary ? "ghost" : "primary"}
            loading={isLoadingPrimary}
            onClick={handleLoadingPrimary}
          >
            Carregando Primary
          </Botao>
          <Botao
            variant={isLoadingSecondary ? "ghost" : "secondary"}
            loading={isLoadingSecondary}
            onClick={handleLoadingSecondary}
          >
            Carregando Secondary
          </Botao>
          <Botao variant="ghost" loading>
            Ghost Loading
          </Botao>
          <Botao variant="ghost" loading circle />
        </div>
      </div>

      {/* --- Seção de Demonstração --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Demonstração de Uso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 justify-items-center">
            <Botao>Primary Button</Botao>

            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm">{`<Botao>Primary Button</Botao>`}</pre>
            </div>
          </div>

          <div className="space-y-4 justify-items-center">
            <Botao
              variant={isLoadingPrimary ? "ghost" : "primary"}
              icon={<MdCheck />}
              iconPosition="right"
              loading={isLoadingPrimary}
              onClick={handleLoadingPrimary}
            >
              Salvar
            </Botao>

            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm">
                {`import { MdCheck } from "react-icons/md";
                
const [isLoadingPrimary, setIsLoadingPrimary] = useState(false);

const handleLoadingPrimary = () => {
  setIsLoadingPrimary(true);
  setTimeout(() => setIsLoadingPrimary(false), 2000);
};

<Botao
  variant={isLoadingPrimary ? "ghost" : "primary"}
  icon={<MdCheck />}
  iconPosition="right"
  loading={isLoadingPrimary}
  onClick={handleLoadingPrimary}
>
  Salvar
</Botao>

{/*
  A variante "ghost" durante o carregamento serve para o 
  circulo ficar visível em ambos os temas claro e escuro.
*/}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
