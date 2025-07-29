import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  leftLabel?: string;
  fieldset?: string;
  fieldsetClassName?: string;
  legendClassName?: string;
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
  leftLabel,
  fieldset,
  fieldsetClassName,
  legendClassName,
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
      </label>
    ) : (
      input
    );

  const inputWithLabel = label || leftLabel ? (
    <label className={`label gap-2 ${fieldsetCentered && 'justify-center'}`}>

      {leftLabel && (
      <span className={`${"text-" + checkboxSize}`}>
        {leftLabel}
      </span>
      )}

      {withIcons}

      {label && (
      <span className={`${"text-" + checkboxSize}`}>
        {label}
      </span>
      )}

    </label>
  ) : (
    withIcons
  );

  if (fieldset) {
    return (
      <fieldset className={`fieldset ${fieldsetClassName} ${fieldsetCentered && 'text-center justify-items-center'}`}>
        <legend
          className={`fieldset-legend ${legendClassName} ${"text-" + checkboxSize}`}
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
