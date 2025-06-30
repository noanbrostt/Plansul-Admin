import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  labelFontSize?: "xl" | "lg" | "base" | "sm" | "xs";
  fieldset?: string;
  fildsetFontSize?: "xl" | "lg" | "base" | "sm" | "xs";
  fieldsetCentered?: boolean;
  checkboxSize?: "xl" | "lg" | "md" | "sm" | "xs";
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "neutral";
  toggle?: boolean;
  iconsToggle?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  labelFontSize = "base",
  fieldset,
  fildsetFontSize = "base",
  fieldsetCentered = false,
  checkboxSize = "md",
  variant,
  toggle = false,
  iconsToggle = false,
  className = "",
  ...rest
}) => {
  const typeClass = toggle ? "toggle" : "checkbox";
  const sizeClass = checkboxSize ? `${typeClass}-${checkboxSize}` : "";
  const variantClass = variant ? `${typeClass}-${variant}` : "";
  const inputClasses =
    `${!iconsToggle && typeClass} ${sizeClass} ${variantClass} ${className}`.trim();

  const input = <input type="checkbox" className={inputClasses} {...rest} />;

  const withIcons =
    toggle && iconsToggle ? (
      <label className="toggle text-base-content">
        {input}
        <svg
          aria-label="enabled"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            stroke="currentColor"
          >
            <path d="M20 6 9 17l-5-5"></path>
          </g>
        </svg>
        <svg
          aria-label="disabled"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </label>
    ) : (
      input
    );

  const inputWithLabel = label ? (
    <label className="label gap-2">
      {withIcons}
      <span className={`${labelFontSize && "text-" + labelFontSize}`}>
        {label}
      </span>
    </label>
  ) : (
    withIcons
  );

  if (fieldset) {
    return (
      <fieldset className={`fieldset ${fieldsetCentered && 'justify-items-center'}`}>
        <legend
          className={`fieldset-legend ${
            fildsetFontSize && "text-" + fildsetFontSize
          }`}
        >
          {fieldset}
        </legend>
        {inputWithLabel}
      </fieldset>
    );
  }

  return inputWithLabel;
};

export default Checkbox;
