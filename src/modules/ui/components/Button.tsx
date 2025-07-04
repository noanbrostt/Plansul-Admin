import React from 'react';

// 1. Definição das Props do Botão
// Herda todas as props padrão de um botão HTML, adicionando as nossas customizadas.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Variações de cor e estilo do DaisyUI
  variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral' | 'ghost' | 'link';
  outline?: boolean; // Para botões com contorno
  
  // Tamanhos
  size?: 'lg' | 'md' | 'sm' | 'xs';
  
  // Largura
  wide?: boolean;  // Ocupa mais largura (DaisyUI btn-wide)
  block?: boolean; // Ocupa 100% da largura do pai (DaisyUI btn-block)
  
  // Formas
  circle?: boolean; // Botão circular (ideal para ícones)
  square?: boolean; // Botão quadrado (ideal para ícones)

  // Estado de Carregamento
  loading?: boolean; // Adiciona spinner e desabilita o botão
  
  // Conteúdo do botão (pode ser texto, ícones, ou ambos)
  children: React.ReactNode; 
  
  // Opcional: Adicionar ícone diretamente via prop (para conveniência, pode ser undefined)
  icon?: React.ReactElement; 
  iconPosition?: 'left' | 'right'; // Posição do ícone
}

// 2. Componente Funcional do Botão
const Button: React.FC<ButtonProps> = ({
  variant = 'primary', 
  outline = false,
  size = 'md',        
  wide = false,
  block = false,
  circle = false,
  square = false,
  loading = false,
  children,
  icon,
  iconPosition = 'left',
  className = '', // Para permitir classes adicionais personalizadas
  ...rest // Captura todas as outras props HTML (onClick, type, etc.)
}) => {
  // Construção das classes Tailwind/DaisyUI
  const baseClasses = `btn`;
  const variantClass = `btn-${variant}`;
  const outlineClass = outline ? `btn-outline` : '';
  const sizeClass = `btn-${size}`;
  const wideClass = wide ? `btn-wide` : '';
  const blockClass = block ? `btn-block` : '';
  const shapeClass = circle ? `btn-circle` : (square ? `btn-square` : '');
  const loadingClass = loading ? `loading` : '';

  // Combina todas as classes
  const finalClassName = [
    baseClasses,
    variantClass,
    outlineClass,
    sizeClass,
    wideClass,
    blockClass,
    shapeClass,
    loadingClass,
    className // Adiciona quaisquer classes extras passadas pelo usuário
  ].filter(Boolean).join(' '); // Remove strings vazias e une com espaço

  // Renderiza o conteúdo do botão com ou sem ícone
  const renderContent = () => {
    if (loading) {
      return null; // O spinner do DaisyUI aparecerá automaticamente com a classe 'loading'
    }

    // Se tiver um ícone, clonar ele para adicionar classes de espaçamento
    const iconElement = icon ? React.cloneElement(icon, {
      className: `
        ${icon.props.className || ''}
        inline-block w-5 h-5
      `
    }) : null;

    return (
      <>
        {icon && iconPosition === 'left' && iconElement}
        {children}
        {icon && iconPosition === 'right' && iconElement}
      </>
    );
  };

  return (
    <button
      className={finalClassName}
      disabled={rest.disabled} // Desabilita o botão se já estiver desativado ou carregando
      {...rest} // Passa todas as outras props HTML (onClick, type, etc.)
    >
      {renderContent()}
    </button>
  );
};

export default Button;