import React from "react";

interface EtiquetaProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "primary"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "neutral";
  outline?: boolean;
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  icon?: React.ReactElement;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

const Etiqueta: React.FC<EtiquetaProps> = ({
  variant,
  outline = false,
  size = "md",
  icon,
  iconPosition = "left",
  children,
  className = "",
  ...rest
}) => {
  const baseClasses = `badge`;
  const sizeClass = `badge-${size}`;
  let colorClasses = "";

  if (outline) {
    colorClasses = `badge-outline ${
      variant && "border-" + variant + " text-" + variant
    }`;
  } else {
    colorClasses = `${variant && "badge-" + variant}`;
  }

  const finalClassName = [baseClasses, sizeClass, colorClasses, className]
    .filter(Boolean)
    .join(" ");

  const renderContent = () => {
    const iconElement = icon
      ? React.cloneElement(icon, {
          className: `
        ${icon.props.className || ""} 
        inline-block w-4 h-4 
        ${children ? (iconPosition === "left" ? "-mr-1" : "-ml-1") : ""}
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
    <div className={finalClassName} {...rest}>
      {renderContent()}
    </div>
  );
};

export default Etiqueta;
