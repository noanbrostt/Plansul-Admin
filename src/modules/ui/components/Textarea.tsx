// src/components/ui/Textarea/Textarea.tsx

import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost' | 'neutral'; // Adicionado 'neutral'
  bordered?: boolean; 
  size?: 'lg' | 'md' | 'sm' | 'xs'; 
  label?: React.ReactNode; 
  wrapperClassName?: string; 
}

const Textarea: React.FC<TextareaProps> = ({
  variant,
  bordered = true,
  size = 'md',
  label,
  className = '', 
  wrapperClassName = '', 
  ...rest
}) => {
  const baseClasses = `textarea w-full`; 
  
  // Classes para tamanho do DaisyUI
  const sizeClass = size ? `text-${size}` : '';

  // Classes de borda e foco baseadas na variante
  let colorClasses = '';
  if (bordered) {
    switch (variant) {
      case 'primary': colorClasses = 'border-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50'; break;
      case 'secondary': colorClasses = 'border-secondary focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/50'; break;
      case 'accent': colorClasses = 'border-accent focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50'; break;
      case 'info': colorClasses = 'border-info focus:outline-none focus:border-info focus:ring-2 focus:ring-info/50'; break;
      case 'success': colorClasses = 'border-success focus:outline-none focus:border-success focus:ring-2 focus:ring-success/50'; break;
      case 'warning': colorClasses = 'border-warning focus:outline-none focus:border-warning focus:ring-2 focus:ring-warning/50'; break;
      case 'error': colorClasses = 'border-error focus:outline-none focus:border-error focus:ring-2 focus:ring-error/50'; break;
      case 'neutral': colorClasses = 'border-neutral focus:outline-none focus:border-neutral focus:ring-2 focus:ring-neutral/50'; break;
      case 'ghost': colorClasses = 'border-transparent focus:outline-none focus:border-base-content/20 focus:ring-2 focus:ring-base-content/10'; break; // Ghost pode ter um foco sutil
      default: colorClasses = 'border-base-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50'; // Borda padrão e foco primary
    }
  } else {
    // Para textareas não-bordered (como ghost), garantimos que não haja borda e o foco funcione
    colorClasses = 'border-transparent focus:outline-none focus:border-transparent focus:ring-2 focus:ring-primary/20';
  }

  const finalTextareaClassName = [
    baseClasses,
    sizeClass,
    colorClasses, // Aplicando as classes de borda e foco personalizadas
    className 
  ].filter(Boolean).join(' ');

  return (
    <div className={`form-control ${wrapperClassName}`}> 
      {label && <label className="label"><span className="label-text text-base-content">{label}</span></label>}
      <textarea 
        className={finalTextareaClassName} 
        {...rest}
      ></textarea>
    </div>
  );
};

export default Textarea;