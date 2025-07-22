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
  inputSize?: "xl" | "lg" | "md" | "sm" | "xs";
  largura?: string;
  icon?: React.ReactElement<{ className?: string }>;
  iconPosition?: "left" | "right";
  optionalBadge?: boolean;
  optionalBadgeText?: string;
  type?: string;
  fieldset?: string;
  validMessage?: string;
  validReqs?: object;
  mask?: string;
  labelClassName?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  variant,
  inputSize = "md",
  largura = "w-64",
  icon,
  iconPosition = "left",
  optionalBadge = false,
  optionalBadgeText = "Opcional",
  type,
  fieldset = "",
  validMessage = "",
  validReqs,
  mask = "",
  labelClassName = "",
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

  const PasswordToggleButton = isPasswordField && (
    <button
      type="button"
      onClick={togglePasswordVisibility}
      className="btn btn-ghost btn-circle btn-sm -mr-2 text-base-content/60 hover:text-base-content"
    >
      {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
    </button>
  );
  // Final da lógica para input password mostrar a senha

  const baseInputClasses = `
    input
    input-${inputSize} 
    ${variant ? `input-${variant}` : ""}
  `;
  const finalInputClasses = `${baseInputClasses} ${largura}`.trim();

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
        ${labelClassName}
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
      {validMessage && <p className="validator-hint ml-1 mt-0.5">{validMessage}</p>}
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
            inputSize && "text-" + inputSize
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
