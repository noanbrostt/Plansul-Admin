// src/components/Select.tsx
import React, { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  fieldset?: string;
  fildsetFontSize?: "xl" | "lg" | "base" | "sm" | "xs";
  options: { value: string; label: string }[];
  multiple?: boolean;
  error?: string;
  success?: string;
  info?: string;
  selectSize?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "ghost";
  bordered?: boolean;
  className?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      fieldset = "",
      fildsetFontSize = "base",
      options,
      multiple = false,
      error,
      success,
      info,
      selectSize = "md",
      variant,
      bordered = true,
      className = "",
      ...props
    },
    ref
  ) => {
    // Mapeamento de classes para tamanhos
    const sizeClasses = {
      xs: "select-xs",
      sm: "select-sm",
      md: "",
      lg: "select-lg",
    };

    // Mapeamento de classes para variantes
    const variantClasses = {
      primary: "select-primary",
      secondary: "select-secondary",
      accent: "select-accent",
      info: "select-info",
      success: "select-success",
      warning: "select-warning",
      error: "select-error",
      ghost: "select-ghost",
    };

    return (
      <div className={`form-control w-full ${className}`}>
        {fieldset && (
          <fieldset className="fieldset">
            <legend
              className={`fieldset-legend ml-1 ${
                fildsetFontSize && "text-" + fildsetFontSize
              }`}
            >
              {fieldset}
            </legend>
          </fieldset>
        )}

        <select
          ref={ref}
          multiple={multiple}
          className={`
            select
            w-full
            ${sizeClasses[selectSize]}
            ${variant ? variantClasses[variant] : ""}
            ${bordered ? "select-bordered" : ""}
            ${error ? "select-error" : ""}
            ${success ? "select-success" : ""}
            ${info ? "select-info" : ""}
          `}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {(error || success || info) && (
          <label className="label">
            <span
              className={`label-text-alt ${
                error ? "text-error" : success ? "text-success" : "text-info"
              }`}
            >
              {error || success || info}
            </span>
          </label>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
