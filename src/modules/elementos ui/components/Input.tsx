import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IMaskInput } from "react-imask";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
  inputClassName?: string;
  type?: string;
  fieldset?: string;
  fildsetFontSize?: "xl" | "lg" | "base" | "sm" | "xs";
  validMessage?: string;
  validReqs?: object;
  mask?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  variant,
  bordered = true,
  inputSize = "md",
  icon,
  iconPosition = "left",
  optionalBadge = false,
  optionalBadgeText = "Opcional",
  inputClassName = "",
  type,
  fieldset = "",
  fildsetFontSize = "base",
  validMessage = "",
  validReqs,
  mask = "",
  ...rest
}) => {
  // Início da lógica para input password mostrar a senha
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const currentInputType =
    isPasswordField && showPassword ? "text" : type || "text";

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
  // Final da lógica para input password mostrar a senha

  const baseInputClasses = `
    input
    input-${inputSize} 
    ${variant ? `input-${variant}` : ""}
    ${bordered ? "input-bordered" : ""}
  `;
  const finalInputClasses = `${baseInputClasses} ${inputClassName}`.trim();

  const iconElement = icon
    ? React.cloneElement(icon, {
        className: `
          ${icon.props.className || ""} 
          inline-block w-5 h-5 
          text-gray-400
        `,
      })
    : null;

  // Início da lógica para a máscara
  const [inputValue, setInputValue] = useState<string>(String(value ?? ""));

  const renderInputComponent = () => {
    if (mask) {
      return (
        <IMaskInput
          mask={mask}
          className={`${inputClassName}`}
          value={inputValue}
          onAccept={(value: any) => {
            setInputValue(value);
            rest.onChange?.({ target: { value } } as any);
          }}
          overwrite
          {...rest}
          {...validReqs}
        />
      );
    } else {
      return (
        <input
          type={currentInputType}
          className={`${inputClassName}`}
          value={value}
          {...rest}
          {...validReqs}
        />
      );
    }
  };
  // Final da lógica para a máscara

  let labelInput = (
    // Imprime caso..
    <>
      <label
        className={`
        ${finalInputClasses}
        ${validMessage && "validator"}
        `}
      >
        {/* .. tenha ícone na esquerda */}
        {icon && iconPosition === "left" && iconElement}

        {renderInputComponent()}

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
      {validMessage && <p className="validator-hint ml-1">{validMessage}</p>}
    </>
  );

  // Se tiver validador, envolve num span
  if (validMessage) {
    labelInput = <span>{labelInput}</span>;
  }

  // Se tiver fieldset, envolve num fieldset
  if (fieldset) {
    labelInput = (
      <fieldset className="fieldset">
        <legend
          className={`fieldset-legend ml-1 ${
            fildsetFontSize && "text-" + fildsetFontSize
          }`}
        >
          {fieldset}
        </legend>
        {labelInput}
      </fieldset>
    );
  }

  return labelInput;
};

export default Input;
