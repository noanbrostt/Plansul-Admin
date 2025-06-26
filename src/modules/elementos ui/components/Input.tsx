import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Cores da borda (e foco) baseadas nas variantes DaisyUI
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "neutral"
    | "ghost";
  bordered?: boolean;
  inputSize?: "lg" | "md" | "sm" | "xs";
  icon?: React.ReactElement<{ className?: string }>;
  iconPosition?: "left" | "right";
  optionalBadge?: boolean;
  optionalBadgeText?: string;
  wrapperClassName?: string;
  inputClassName?: string;

  fieldset?: string;
}

const Input: React.FC<InputProps> = ({
  variant,
  bordered = true,
  inputSize = "md",
  icon,
  iconPosition = "left",
  optionalBadge = false,
  optionalBadgeText = "Opcional",
  wrapperClassName = "",
  inputClassName = "", // Nova prop para classes diretas do input
  fieldset = "",
  ...rest
}) => {
  // Classes básicas do DaisyUI para input e borda
  const baseInputClasses = `
    input
    input-${inputSize} 
    ${variant ? `input-${variant}` : ""}
    ${bordered ? "input-bordered" : ""}
  `;
  const finalInputClasses = `${baseInputClasses} ${inputClassName}`.trim();

  // Se houver um ícone OU um badge opcional, usaremos a estrutura de label/flex
  const iconElement = icon
    ? React.cloneElement(icon, {
        // Agora o TypeScript sabe que 'icon.props' tem 'className'
        className: `
          ${icon.props.className || ""} 
          inline-block w-5 h-5 
          text-gray-400
        `,
      })
    : null;

  let labelInput = (
    <label className={finalInputClasses}>
      {icon && iconPosition === "left" && iconElement}

      <input
        type={rest.type || "text"}
        className={`${inputClassName}`}
        {...rest}
      />

      {icon && iconPosition === "right" && iconElement}
      {optionalBadge && (
        <span className="badge badge-neutral badge-xs">
          {optionalBadgeText}
        </span>
      )}
    </label>
  );


  if (fieldset) {
    labelInput = (
      <fieldset className="fieldset">
        <legend className="fieldset-legend">{fieldset}</legend>
        {labelInput}
      </fieldset>
    );
  }



  return labelInput;
};

export default Input;
