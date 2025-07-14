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
}

interface RadioGroupProps {
  fieldset: string;
  name: string;
  options: RadioOption[];
  fieldsetCentered?: boolean;
  radioSize?: "xl" | "lg" | "md" | "sm" | "xs";
  className?: string;
  orientation?: "horizontal" | "vertical";
  onValueChange?: (value: string) => void;
  value?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  fieldset,
  name,
  options,
  fieldsetCentered = false,
  radioSize = "md",
  className,
  orientation = "vertical",
  onValueChange,
  value,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onValueChange) {
      onValueChange(e.target.value);
    }
  };

  return (
    <fieldset
      className={`fieldset w-fit ${
        fieldsetCentered ? "justify-items-center text-center" : ""
      } ${className}`}
    >
      <legend className={`fieldset-legend text-${radioSize}`}>
        {fieldset}
      </legend>
      <div
        className={`flex ${
          orientation === "horizontal" ? "flex-wrap gap-4" : "flex-col gap-2"
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
              checked={value === option.value}
              disabled={option.disabled}
              onChange={handleChange}
              className={`radio ${radioSize ? `radio-${radioSize}` : ""} ${
                option.variant ? `radio-${option.variant}` : ""
              }`}
            />
            <span className={`text-${radioSize}`}>{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default RadioGroup;
