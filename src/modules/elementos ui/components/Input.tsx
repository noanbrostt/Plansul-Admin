// src/components/ui/Input/Input.tsx

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Cores da borda (e foco) baseadas nas variantes DaisyUI
  variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral' | 'ghost';
  
  // A classe 'input-bordered' do DaisyUI. Por padrão, muitos inputs terão borda.
  // Se false, será um input mais "plano" ou "ghost" (que não tem borda)
  bordered?: boolean; 
  
  // Tamanhos (agora mapeando para classes Tailwind de padding/texto)
  size?: 'lg' | 'md' | 'sm' | 'xs';
  
  // Opcional: Adicionar ícone diretamente via prop
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';

  // Para o caso específico do "Optional" badge
  optionalBadge?: boolean;
  optionalBadgeText?: string;

  // Permite passar classes para o wrapper, especialmente útil para larguras customizadas
  wrapperClassName?: string;
  
  // Permite passar classes extras diretamente para o input (além das geradas)
  inputClassName?: string; 
}

const Input: React.FC<InputProps> = ({
  variant, 
  bordered = true, 
  size = 'md',     
  icon,
  iconPosition = 'left',
  optionalBadge = false,
  optionalBadgeText = 'Optional', // Texto padrão do badge
  wrapperClassName = '',
  inputClassName = '', // Nova prop para classes diretas do input
  ...rest 
}) => {
  // Mapeamento de tamanhos para classes Tailwind (padding e texto)
  const sizeClasses = {
    lg: 'py-3 px-4 text-lg',
    md: 'py-2 px-3 text-base',
    sm: 'py-1.5 px-2 text-sm',
    xs: 'py-1 px-1.5 text-xs',
  }[size];

  // Mapeamento de variantes para classes de borda e foco
  // Aqui é onde faremos a mágica para a cor da borda ser da variante
  const variantBorderClasses = {
    primary: 'border-primary focus:border-primary',
    secondary: 'border-secondary focus:border-secondary',
    accent: 'border-accent focus:border-accent',
    info: 'border-info focus:border-info',
    success: 'border-success focus:border-success',
    warning: 'border-warning focus:border-warning',
    error: 'border-error focus:border-error',
    neutral: 'border-neutral focus:border-neutral',
    ghost: 'bg-transparent focus:bg-base-100 border-transparent', // Ghost não tem borda, mas pode mudar fundo
  }[variant || '']; // Usa string vazia se variant for undefined

  // Classes básicas do DaisyUI para input e borda
  const baseInputClasses = `
    input ${bordered ? 'input-bordered' : ''} 
    ${sizeClasses} 
    ${variantBorderClasses} 
    focus:outline-none 
    bg-base-100 text-base-content
    rounded-md
  `; 

  const finalInputClasses = `${baseInputClasses} ${inputClassName}`.trim();

  // Se houver um ícone OU um badge opcional, usaremos a estrutura de label/flex
  if (icon || optionalBadge) {
    const iconElement = icon ? React.cloneElement(icon, {
      className: `
        ${icon.props.className || ''} 
        inline-block w-5 h-5 
        ${rest.children ? (iconPosition === 'left' ? 'mr-2' : 'ml-2') : ''}
        text-gray-400
      `
    }) : null;

    return (
      <div className={`form-control ${wrapperClassName}`}>
        <label className={`
          input ${bordered ? 'input-bordered' : ''} 
          flex items-center gap-2 
          ${sizeClasses} 
          ${variantBorderClasses}
          bg-base-100 text-base-content
          rounded-md
        `}>
          {icon && iconPosition === 'left' && iconElement}
          
          {/* O `children` pode ser usado para o "Path" no seu exemplo */}
          {rest.children && <span className="text-base-content">{rest.children}</span>} 

          <input 
            type={rest.type || 'text'}
            className={`grow bg-transparent focus:outline-none ${inputClassName}`}
            {...rest}
            children={null} // Garante que `children` não seja renderizado dentro do input tag
          />
          
          {icon && iconPosition === 'right' && iconElement}
          {optionalBadge && (
            <span className="badge badge-neutral badge-xs">{optionalBadgeText}</span>
          )}
        </label>
      </div>
    );
  }

  // Input simples (sem ícone ou badge opcional)
  return (
    <input 
      type={rest.type || 'text'}
      className={finalInputClasses} 
      {...rest} 
    />
  );
};

export default Input;