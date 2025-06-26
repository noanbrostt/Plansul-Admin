// src/components/ui/Radio/Radio.tsx

import React from 'react';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral'; // Adicionado 'neutral'
  size?: 'lg' | 'md' | 'sm' | 'xs';
  label?: React.ReactNode; 
}

const Radio: React.FC<RadioProps> = ({
  variant,
  size = 'md',
  label,
  className = '', 
  ...rest 
}) => {
  // Similar ao checkbox, usamos `accent-{color}` e `border-{color}` para radios.
  const baseClasses = `radio`;
  const sizeClass = size ? `radio-${size}` : '';
  
  let colorClasses = '';
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
          type="radio" 
          className={finalClassName} 
          {...rest} 
        />
        <span className="label-text text-base-content">{label}</span>
      </label>
    );
  }

  return (
    <input 
      type="radio" 
      className={finalClassName} 
      {...rest} 
    />
  );
};

export default Radio;