// src/components/ui/Checkbox/Checkbox.tsx

import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral'; // Adicionado 'neutral'
  size?: 'lg' | 'md' | 'sm' | 'xs';
  label?: React.ReactNode; 
}
// BUG - Pesquisar pq classes "checkbox-xs" ou "checkbox-primary" não existem
const Checkbox: React.FC<CheckboxProps> = ({
  variant,
  size = 'md',
  label,
  className = '', 
  ...rest 
}) => {
  // Para checkboxes, DaisyUI usa `checkbox-{color}` para a cor de fundo quando marcado
  // e `border-{color}` ou `accent-{color}` para a borda/cor do tick (ícone de check).
  // `accent-color` é uma propriedade CSS que afeta nativamente o checkbox.

  const baseClasses = `checkbox`;
  const sizeClass = size ? `checkbox-${size}` : '';
  
  let colorClasses = '';
  // Mapeamento de variantes para classes de cor de borda e accent (para cor do tick/fundo)
  switch (variant) {
    case 'primary': colorClasses = 'border-primary accent-primary'; break;
    case 'secondary': colorClasses = 'border-secondary accent-secondary'; break;
    case 'accent': colorClasses = 'border-accent accent-accent'; break;
    case 'info': colorClasses = 'border-info accent-info'; break;
    case 'success': colorClasses = 'border-success accent-success'; break;
    case 'warning': colorClasses = 'border-warning accent-warning'; break;
    case 'error': colorClasses = 'border-error accent-error'; break;
    case 'neutral': colorClasses = 'border-neutral accent-neutral'; break;
    default: colorClasses = 'border-base-content/20 accent-primary'; // Padrão ou base para o accent
  }

  const finalClassName = [
    baseClasses,
    sizeClass,
    colorClasses, // Aplicando as classes de cor de borda e accent
    className
  ].filter(Boolean).join(' ');

  if (label) {
    return (
      <label className="label cursor-pointer justify-start gap-2">
        <input 
          type="checkbox" 
          className={finalClassName} 
          {...rest} 
        />
        <span className="label-text text-base-content">{label}</span>
      </label>
    );
  }

  return (
    <input 
      type="checkbox" 
      className={finalClassName} 
      {...rest} 
    />
  );
};

export default Checkbox;