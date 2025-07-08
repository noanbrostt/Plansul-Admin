import { forwardRef } from "react";
import ReactSelect, {
  components,
  MenuListProps,
  Props as RSProps,
  ActionMeta,
  SingleValue,
  MultiValue,
} from "react-select";

export interface Option {
  value: string;
  label: string;
}

interface BaseProps {
  options: Option[];
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "ghost";
  size?: "xs" | "sm" | "md" | "lg";
  placeholder?: string;
  className?: string;
  showSelectAll?: boolean;
  showDesselectAll?: boolean;
  width?: string;
  value?: any; // Adicionado para controle externo do valor
}

type SelectProps = BaseProps &
  Omit<RSProps<Option, boolean>, "options" | "isMulti"> & {
    multiple?: boolean;
  };

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const Select = forwardRef<any, SelectProps>(
  (
    {
      options,
      variant = "primary",
      size = "md",
      placeholder = "Selecione...",
      className = "",
      multiple = false,
      showSelectAll = false,
      showDesselectAll = false,
      width = "w-64",
      value, // Recebe o valor controlado externamente
      onChange,
      ...props
    },
    ref
  ) => {
    // Componente customizado para o menu
    const MenuList = (menuProps: MenuListProps<Option, boolean>) => {
      const handleSelectAll = () => {
        if (onChange) {
          onChange(options, {
            action: "select-option",
            option: options[0],
          } as ActionMeta<Option>);
        }
      };

      const handleDesselectAll = () => {
        if (onChange) {
          onChange([], {
            action: "deselect-option",
            option: options[0],
          } as ActionMeta<Option>);
        }
      };

      return (
        <components.MenuList {...menuProps}>
          {multiple && (showSelectAll || showDesselectAll) && (
            <div className="px-3 py-2 flex space-x-2 border-b border-base-200 bg-base-100">
              {showSelectAll && (
                <button
                  type="button"
                  className="btn btn-xs btn-ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectAll();
                  }}
                >
                  Selecionar todos
                </button>
              )}
              {showDesselectAll && (
                <button
                  type="button"
                  className="btn btn-xs btn-ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDesselectAll();
                  }}
                >
                  Desselecionar todos
                </button>
              )}
            </div>
          )}
          <div className="bg-base-100">{menuProps.children}</div>
        </components.MenuList>
      );
    };

    return (
      <div className={`${sizeClasses[size]} ${width} ${className}`} ref={ref}>
        <ReactSelect<Option, boolean>
          options={options}
          isMulti={multiple}
          placeholder={placeholder}
          components={{ MenuList }}
          classNamePrefix="react-select"
          value={value} // Usa o valor controlado externamente
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: `hsl(var(--${variant}))`,
              primary25: `hsl(var(--${variant}) / 0.1)`,
              primary50: `hsl(var(--${variant}) / 0.3)`,
              primary75: `hsl(var(--${variant}) / 0.5)`,
              neutral0: "hsl(var(--b1))",
              neutral5: "hsl(var(--b2))",
              neutral10: "hsl(var(--b3))",
              neutral20: "hsl(var(--bc) / 0.2)",
              neutral30: "hsl(var(--bc) / 0.3)",
              neutral40: "hsl(var(--bc) / 0.4)",
              neutral50: "hsl(var(--bc) / 0.5)",
              neutral60: "hsl(var(--bc) / 0.6)",
              neutral70: "hsl(var(--bc) / 0.7)",
              neutral80: "hsl(var(--bc) / 0.8)",
              neutral90: "hsl(var(--bc) / 0.9)",
              danger: "hsl(var(--er))",
              dangerLight: "hsl(var(--er) / 0.1)",
            },
          })}
          styles={{
            control: (base) => ({
              ...base,
              backgroundColor: "hsl(var(--b1))",
              borderColor: "hsl(var(--bc) / 0.2)",
              "&:hover": {
                borderColor: "hsl(var(--bc) / 0.3)",
              },
              minHeight: "auto",
              padding: "2px 4px",
              cursor: "pointer", // Adiciona cursor pointer
            }),
            valueContainer: (base) => ({
              ...base,
              padding: 0,
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: "hsl(var(--b1))",
              border: "1px solid hsl(var(--bc) / 0.1)",
              boxShadow: "0 0 10px hsl(var(--bc) / 0.1)",
              zIndex: 50,
            }),
            menuList: (base) => ({
              ...base,
              padding: 0,
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused 
                ? "hsl(var(--b3))" 
                : state.isSelected 
                  ? `hsl(var(--${variant}))` 
                  : "hsl(var(--b1))",
              color: state.isSelected 
                ? "hsl(var(--b1))" 
                : "hsl(var(--bc))",
              "&:active": {
                backgroundColor: "hsl(var(--b3))",
              },
              padding: "8px 12px",
              cursor: "pointer", // Adiciona cursor pointer
            }),
            singleValue: (base) => ({
              ...base,
              color: "hsl(var(--bc))",
            }),
            input: (base) => ({
              ...base,
              color: "hsl(var(--bc))",
              margin: 0,
              padding: 0,
              cursor: "pointer", // Adiciona cursor pointer
            }),
            multiValue: (base) => ({
              ...base,
              backgroundColor: `hsl(var(--${variant}) / 0.1)`,
            }),
            multiValueLabel: (base) => ({
              ...base,
              color: `hsl(var(--${variant}))`,
              padding: "2px 6px",
              cursor: "pointer", // Adiciona cursor pointer
            }),
            multiValueRemove: (base) => ({
              ...base,
              color: `hsl(var(--${variant}))`,
              "&:hover": {
                backgroundColor: `hsl(var(--${variant}) / 0.2)`,
              },
              cursor: "pointer", // Adiciona cursor pointer
            }),
            indicatorsContainer: (base) => ({
              ...base,
              paddingRight: "4px",
            }),
            clearIndicator: (base) => ({
              ...base,
              padding: "2px",
              color: "hsl(var(--bc) / 0.5)",
              "&:hover": {
                color: "hsl(var(--er))",
              },
              cursor: "pointer", // Adiciona cursor pointer
            }),
            dropdownIndicator: (base) => ({
              ...base,
              padding: "2px",
              color: "hsl(var(--bc) / 0.5)",
              cursor: "pointer", // Adiciona cursor pointer
            }),
          }}
          onChange={(
            newValue: SingleValue<Option> | MultiValue<Option>,
            actionMeta: ActionMeta<Option>
          ) => {
            if (onChange) {
              onChange(newValue, actionMeta);
            }
          }}
          {...props}
        />
      </div>
    );
  }
);

Select.displayName = "Select";
export default Select;