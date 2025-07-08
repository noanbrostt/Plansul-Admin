// src/components/MultiSelect.tsx
import React, { useState, useRef, useEffect } from 'react';
import { FiChevronDown, FiCheck } from 'react-icons/fi';

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  fieldset?: string;
  options: Option[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  error?: string;
  success?: string;
  info?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost';
  bordered?: boolean;
  className?: string;
}

const MultiSelect = ({
  fieldset = "",
  options,
  selected = [],
  onChange,
  placeholder = 'Selecione...',
  error,
  success,
  info,
  size = 'md',
  variant,
  bordered = true,
  className = '',
}: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOption = (optionValue: string) => {
    const newSelected = selected.includes(optionValue)
      ? selected.filter(v => v !== optionValue)
      : [...selected, optionValue];
    onChange(newSelected);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Classes para tamanho
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  // Classes para variante
  const variantClasses = {
    primary: 'border-primary focus:border-primary',
    secondary: 'border-secondary focus:border-secondary',
    accent: 'border-accent focus:border-accent',
    info: 'border-info focus:border-info',
    success: 'border-success focus:border-success',
    warning: 'border-warning focus:border-warning',
    error: 'border-error focus:border-error',
    ghost: 'border-ghost focus:border-ghost',
  };

  return (
    <div className={`form-control w-full ${className}`}>
      {fieldset && (
        <fieldset className="fieldset">
          <legend className={`fieldset-legend ml-1 ${sizeClasses[size]}`}>{fieldset}</legend>
        </fieldset>
      )}

      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          className={`flex items-center justify-between w-full px-4 py-2 text-left ${
            bordered ? 'border rounded-lg' : ''
          } ${error ? 'border-error' : success ? 'border-success' : info ? 'border-info' : variant ? variantClasses[variant] : 'border-base-300'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="truncate">
            {selected.length > 0 
              ? options.filter(opt => selected.includes(opt.value)).map(opt => opt.label).join(', ') 
              : placeholder}
          </span>
          <FiChevronDown className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-base-100 border border-base-300 rounded-lg shadow-lg">
            <div className="max-h-60 overflow-y-auto">
              {options.map(option => (
                <label
                  key={option.value}
                  className="flex items-center px-4 py-2 hover:bg-base-200 cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(option.value)}
                    onChange={() => toggleOption(option.value)}
                    className="checkbox checkbox-xs mr-2"
                  />
                  <span className={sizeClasses[size]}>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {(error || success || info) && (
        <label className="label">
          <span className={`label-text-alt ${error ? 'text-error' : success ? 'text-success' : 'text-info'}`}>
            {error || success || info}
          </span>
        </label>
      )}
    </div>
  );
};

export default MultiSelect;