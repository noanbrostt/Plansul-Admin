import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Cores da borda (e foco) baseadas nas variantes DaisyUI
  variant?:
    "primary"
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
  inputClassName?: string;
  type?: string;
  fieldset?: string;
  fildsetFontSize?: "xl" | "lg" | "base" | "sm" | "xs";
  validMessage?: string;
  validReqs?: object;
}

const Input: React.FC<InputProps> = ({
  variant,
  bordered = true,
  inputSize = "md",
  icon,
  iconPosition = "left",
  optionalBadge = false,
  optionalBadgeText = "Opcional",
  inputClassName = "", // Nova prop para classes diretas do input
  type,
  fieldset = "",
  fildsetFontSize = "base",
  validMessage = "",
  validReqs,
  ...rest
}) => {
  
  // Inicio da logica para input password mostrar a senha
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === 'password';

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const currentInputType = isPasswordField && showPassword ? 'text' : type || 'text';

  // Escolha o ícone do olho com base no estado de visibilidade
  const PasswordToggleButton = isPasswordField && (
    <button
      type="button" // Importante: tipo 'button' para não submeter o formulário
      onClick={togglePasswordVisibility}
      className="btn btn-ghost btn-circle btn-sm -mr-2 text-base-content/60 hover:text-base-content"
      // Classes do Tailwind para posicionamento e estilo
    >
      {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
    </button>
  );
  // Final da logica para input password mostrar a senha


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
    // Imprime caso..
    <>
      <label className={`
        ${finalInputClasses}
        ${validMessage && 'validator'}
        `}
      >
        {/* .. tenha ícone na esquerda */}
        {icon && iconPosition === "left" && iconElement}

        <input
          type={currentInputType}
          className={`${inputClassName}`}
          {...rest}
          {...validReqs} // .. tenha validador
        />

        {/* .. seja input de senha */}
        {isPasswordField && PasswordToggleButton}

        {/* .. tenha ícone na direita */}
        {icon && iconPosition === "right" && iconElement}

        {/* .. tenha tag opcional */}
        {optionalBadge && (
          <span className="badge badge-neutral badge-xs">
            {optionalBadgeText}
          </span>
        )}
      </label>

      {/* .. tenha validador */}
      {validMessage && (
        <p className="validator-hint ml-1">
          {validMessage}
        </p>
      )}
    </>
  );

  if (validMessage) {
    labelInput = (
      <span>{labelInput}</span>
    );
  }

  if (fieldset) {
    labelInput = (
      <fieldset className="fieldset">
        <legend className={`fieldset-legend ml-1 ${fildsetFontSize && 'text-'+fildsetFontSize}`}>{fieldset}</legend>
        {labelInput}
      </fieldset>
    );
  }

  return labelInput;
};

export default Input;
