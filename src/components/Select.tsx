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
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  largura?: string;
  placeholder?: string;
  className?: string;
  showSelectAll?: boolean;
  value?: any;
  fieldset?: string;
  asterisk?: boolean;
}

type SelectProps = BaseProps &
  Omit<RSProps<Option, boolean>, "options" | "isMulti"> & {
    multiple?: boolean;
  };

const Select = forwardRef<any, SelectProps>(
  (
    {
      options,
      variant,
      size = "md",
      largura = "w-64",
      placeholder = "Selecione...",
      className = "",
      multiple = false,
      showSelectAll = false,
      fieldset = false,
      asterisk = false,
      value,
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
          {multiple && showSelectAll && (
            <div className="px-3 py-2 flex space-x-2 border-b border-base-200 bg-base-100 sticky top-0">
              <button
                type="button"
                className="btn btn-xs btn-ghost btn-outline"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectAll();
                }}
              >
                Selecionar todos
              </button>

              <button
                type="button"
                className="btn btn-xs btn-ghost btn-outline"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDesselectAll();
                }}
              >
                Desselecionar todos
              </button>
            </div>
          )}
          <div className="bg-base-100">{menuProps.children}</div>
        </components.MenuList>
      );
    };

    let selectInput = (
      <div className={`text-${size} ${largura} ${className}`} ref={ref}>
        <ReactSelect<Option, boolean>
          options={options}
          isMulti={multiple}
          placeholder={placeholder}
          components={{ MenuList }}
          classNamePrefix="react-select"
          value={value}
          classNames={{
            placeholder: () => "text-[#737373]",
            control: () =>
              `select select-${variant} bg-none h-fit px-2 py-[7.2px] w-full select-${size}`,
            menu: () => "menu bg-base-100 rounded-box shadow-xl p-0 !z-[1000]",
            option: ({ isFocused }) =>
              `p-3 ${isFocused ? variant ? `bg-${variant}/20` : "bg-base-300/40" : ""} !cursor-pointer`,
            multiValue: () =>
              `badge badge-${variant} gap-1.5 pr-0 rounded-[4px]`,
            multiValueLabel: () => "pb-[1px]",
            multiValueRemove: () =>
              "hover:bg-error cursor-pointer p-[5px] mr-[-1px] rounded-r-[4px]",
            valueContainer: () => "flex items-center gap-2 cursor-pointer",
            indicatorsContainer: () => "cursor-pointer",
            clearIndicator: () => "hover:text-error cursor-pointer",
            dropdownIndicator: () =>
              `${size == "md" && "h-10"} -my-2 items-center`,
          }}
          unstyled
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

    if (fieldset) {
      selectInput = (
        <fieldset className="fieldset">
          <legend
            className={`fieldset-legend ml-1 ${
              size && "text-" + size
            }`}
          >
            {fieldset}
            {asterisk ? <span className="text-error -ml-1">*</span> : null}
          </legend>
          {selectInput}
        </fieldset>
      );
    }

    return selectInput;
  }
);

Select.displayName = "Select";
export default Select;
