import React from "react";

interface RadioOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "neutral";
  checked?: boolean;
}

interface RadioGroupProps {
  fieldset: string;
  name: string;
  options: RadioOption[];
  fieldsetCentered?: boolean;
  fieldsetFontSize?: "xl" | "lg" | "base" | "sm" | "xs";
  radioSize?: "xl" | "lg" | "md" | "sm" | "xs";
  labelFontSize?: "xl" | "lg" | "base" | "sm" | "xs";
  className?: string;
  orientation?: "horizontal" | "vertical";
  onValueChange?: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  fieldset,
  name,
  options,
  fieldsetCentered = false,
  fieldsetFontSize = "base",
  radioSize = "md",
  labelFontSize = "base",
  className = "",
  orientation = "vertical",
  onValueChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onValueChange) {
      onValueChange(e.target.value);
    }
  };

  return (
    <fieldset
      className={`fieldset w-fit ${fieldsetCentered ? "justify-items-center text-center" : ""} ${className}`}
    >
      <legend
        className={`fieldset-legend ${fieldsetFontSize && "text-" + fieldsetFontSize}`}
      >
        {fieldset}
      </legend>
      <div
        className={`flex ${
          orientation === "horizontal"
            ? "flex-wrap gap-4"
            : "flex-col gap-2"
        }`}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className={`label gap-2 cursor-pointer ${
              option.disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              defaultChecked={option.checked}
              disabled={option.disabled}
              onChange={handleChange}
              className={`radio ${radioSize ? `radio-${radioSize}` : ""} ${
                option.variant ? `radio-${option.variant}` : ""
              }`}
            />
            <span className={`${labelFontSize && "text-" + labelFontSize}`}>
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default RadioGroup;