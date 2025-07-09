// src/components/Textarea.tsx
import React, { forwardRef, ChangeEvent, useState, useEffect } from "react";

export interface TextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  variant?:
    | "ghost"
    | "neutral"
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
  size?: "xs" | "sm" | "md" | "lg";
  largura?: string;
  maxLength?: number;
  showCounter?: boolean;
  className?: string;
  error?: string;
  success?: string;
  info?: string;
}

const variantClasses: Record<string, string> = {
  ghost: "textarea-ghost",
  neutral: "textarea-neutral",
  primary: "textarea-primary",
  secondary: "textarea-secondary",
  accent: "textarea-accent",
  info: "textarea-info",
  success: "textarea-success",
  warning: "textarea-warning",
  error: "textarea-error",
};

const sizeClasses: Record<string, string> = {
  xs: "textarea-xs",
  sm: "textarea-sm",
  md: "textarea-md",
  lg: "textarea-lg",
  xl: "textarea-xl",
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      placeholder = "",
      value = "",
      onChange,
      variant = "neutral",
      size = "md",
      largura = "w-64",
      maxLength,
      showCounter = true,
      className = "",
      error,
      success,
      info,
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

    return (
      <div className={`form-control ${largura} ${className}`}>
        <textarea
          ref={ref}
          className={`
            textarea resize
            ${sizeClasses[size]}
            ${variantClasses[variant]}
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
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
