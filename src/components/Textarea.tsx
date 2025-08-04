import { forwardRef, ChangeEvent, useState, useEffect } from "react";

export interface TextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
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
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  largura?: string;
  maxLength?: number;
  showCounter?: boolean;
  className?: string;
  error?: string;
  success?: string;
  info?: string;
  fieldset?: string;
  asterisk?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      placeholder = "",
      value = "",
      onChange,
      variant,
      size = "md",
      largura = "w-64",
      maxLength,
      showCounter = true,
      className = "",
      error,
      success,
      info,
      fieldset = false,
      asterisk = false,
    },
    ref
  ) => {
    const [count, setCount] = useState(value.length);

    useEffect(() => {
      setCount(value.length);
    }, [value]);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const v = e.target.value;
      if (maxLength != null && v.length > maxLength) return;
      onChange?.(v);
      setCount(v.length);
    };

    let textareaInput = (
      <div className={`form-control ${largura} ${className}`}>
        <textarea
          ref={ref}
          className={`
            textarea resize
            textarea-${size}
            textarea-${variant}
            ${largura}
            ${
              error
                ? "textarea-error"
                : success
                ? "textarea-success"
                : info
                ? "textarea-info"
                : ""
            }
          `}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          {...(maxLength != null ? { maxLength } : {})}
        />

        {(showCounter || error || success || info) && (
          <div
            className={`text-sm text-base-content/60 mt-1 text-right flex ${
              showCounter && (error || success || info) ? "justify-between" : "justify-end"
            }`}
          >
            {(error || success || info) && (
              <span
                className={`label-text-alt ml-0.5 ${
                  error ? "text-error" : success ? "text-success" : "text-info"
                }`}
              >
                {error || success || info}
              </span>
            )}

            {showCounter && (
              <span className="mr-0.5">
                {count}
                {maxLength != null ? ` / ${maxLength}` : ""}
              </span>
            )}
          </div>
        )}
      </div>
    );

    if (fieldset) {
      textareaInput = (
        <fieldset className="fieldset">
          <legend
            className={`fieldset-legend ml-1 ${
              size && "text-" + size
            }`}
          >
            {fieldset}
            {asterisk ? <span className="text-error -ml-1">*</span> : null}
          </legend>
          {textareaInput}
        </fieldset>
      );
    }

    return textareaInput
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
