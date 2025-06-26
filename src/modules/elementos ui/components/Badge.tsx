// src/components/ui/Badge/Badge.tsx

import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  // Variações de cor do DaisyUI e suas cores customizadas
  variant?: 'primary' | 'success' | 'error' | 'warning' | 'info' | 'light' | 'dark' | 'neutral';
  
  outline?: boolean; // Para badges com fundo claro (outline)
  
  size?: 'lg' | 'md' | 'sm' | 'xs';
  
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  
  children: React.ReactNode; 
}

const Badge: React.FC<BadgeProps> = ({
  variant, 
  outline = false,
  size = 'md', 
  icon,
  iconPosition = 'left',
  children,
  className = '', 
  ...rest 
}) => {
  const baseClasses = `badge`;
  const sizeClass = `badge-${size}`;
  
  // Lógica de Classes de Cor Revisada
  let colorClasses = '';

  if (outline) {
    // Para badges 'outline', o DaisyUI usa 'badge-outline' e espera cores de texto/borda Tailwind
    switch (variant) {
      case 'primary':
        colorClasses = 'badge-outline border-primary text-primary';
        break;
      case 'success':
        colorClasses = 'badge-outline border-success text-success';
        break;
      case 'error':
        colorClasses = 'badge-outline border-error text-error';
        break;
      case 'warning':
        colorClasses = 'badge-outline border-warning text-warning';
        break;
      case 'info':
        colorClasses = 'badge-outline border-info text-info';
        break;
      case 'neutral':
        colorClasses = 'badge-outline border-neutral text-neutral';
        break;
      case 'light': // Simulação para 'Light' outline
        colorClasses = 'badge-outline border-base-content/20 text-base-content'; 
        break;
      case 'dark': // Simulação para 'Dark' outline
        colorClasses = 'badge-outline border-neutral-focus text-neutral-focus'; // Ou outra cor escura do seu tema
        break;
      default:
        colorClasses = 'badge-outline'; // Padrão DaisyUI para outline (usa cor de borda default)
        break;
    }
  } else {
    // Para badges sólidos, o DaisyUI tem classes diretas para as cores base
    switch (variant) {
      case 'primary':
        colorClasses = 'badge-primary';
        break;
      case 'success':
        colorClasses = 'badge-success';
        break;
      case 'error':
        colorClasses = 'badge-error';
        break;
      case 'warning':
        colorClasses = 'badge-warning';
        break;
      case 'info':
        colorClasses = 'badge-info';
        break;
      case 'neutral':
        colorClasses = 'badge-neutral';
        break;
      case 'light': // Simulação para 'Light' solid
        colorClasses = 'bg-base-300 text-base-content'; 
        break;
      case 'dark': // Simulação para 'Dark' solid
        colorClasses = 'bg-neutral text-neutral-content'; 
        break;
      default:
        // Se nenhum variant for especificado para solid, será o badge padrão do DaisyUI
        break;
    }
  }

  const finalClassName = [
    baseClasses,
    sizeClass,
    colorClasses, // A nova forma de aplicar as cores
    className 
  ].filter(Boolean).join(' ');

  const renderContent = () => {
    const iconElement = icon ? React.cloneElement(icon, {
      className: `
        ${icon.props.className || ''} 
        inline-block w-4 h-4 
        ${children ? (iconPosition === 'left' ? 'mr-1' : 'ml-1') : ''}
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
    <div
      className={finalClassName}
      {...rest}
    >
      {renderContent()}
    </div>
  );
};

export default Badge;