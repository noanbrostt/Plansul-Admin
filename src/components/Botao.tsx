import React from "react";

interface BotaoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "neutral"
    | "ghost"
    | "link";
  outline?: boolean;
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  largura?: string;
  wide?: boolean;
  circle?: boolean;
  square?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  icon?: React.ReactElement;
  iconPosition?: "left" | "right";
}

const Botao: React.FC<BotaoProps> = ({
  variant = "primary",
  outline = false,
  size = "md",
  largura,
  wide = false,
  circle = false,
  square = false,
  loading = false,
  children,
  icon,
  iconPosition = "left",
  className = "",
  ...rest
}) => {
  const baseClasses = `btn`;
  const variantClass = `btn-${variant}`;
  const outlineClass = outline ? `btn-outline` : "";
  const sizeClass = `btn-${size}`;
  const larguraClass = wide ? `btn-wide` : largura;
  const shapeClass = circle ? `btn-circle` : square ? `btn-square` : "";
  const loadingClass = loading ? `loading` : "";

  const finalClassName = [
    baseClasses,
    variantClass,
    outlineClass,
    sizeClass,
    larguraClass,
    shapeClass,
    loadingClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const renderContent = () => {
    if (loading) {
      return null;
    }

    const iconElement = icon
      ? React.cloneElement(icon, {
          className: `
        ${icon.props.className || ""}
        inline-block w-5 h-5
      `,
        })
      : null;

    return (
      <>
        {icon && iconPosition === "left" && iconElement}
        {children}
        {icon && iconPosition === "right" && iconElement}
      </>
    );
  };

  return (
    <button className={finalClassName} disabled={rest.disabled} {...rest}>
      {renderContent()}
    </button>
  );
};

export default Botao;
