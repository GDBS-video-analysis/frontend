import { ISelectOption } from "@shared/components/common/select/interface";
import { forwardRef, HTMLProps } from "react";

interface ISelectProps
  extends Omit<HTMLProps<HTMLSelectElement>, "required" | "type"> {
  required?: boolean;
  label?: string;
  error?: string;
  options: ISelectOption[];
}

export const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ className, label, required, error, options, ...rest }, ref) => (
    <div className="flex flex-col">
      {label && (
        <span className="text-sm text-gray-90 mb-2">
          {label} {required && <span className="text-default-allert">*</span>}
        </span>
      )}
      <select
        ref={ref}
        {...rest}
        className={`px-4 py-3 h-12 bg-gray-10 outline-none placeholder-gray-60 ${className} ${
          error
            ? "border-[2px] border-default-allert"
            : "border-b border-gray-30"
        }`}
      >
        <option value={undefined}>Выберите значение</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-xs text-default-allert mt-2">{error}</span>
      )}
    </div>
  )
);
