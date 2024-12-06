import { forwardRef, HTMLProps } from "react";

interface ITextFiledProps
  extends Omit<HTMLProps<HTMLInputElement>, "required" | "type"> {
  required?: boolean;
  label?: string;
  error?: string;
}

export const TextFiled = forwardRef<HTMLInputElement, ITextFiledProps>(
  ({ className, label, required, error, ...rest }, ref) => (
    <div className="flex flex-col">
      {label && (
        <span className="text-sm text-gray-90 mb-2">
          {label} {required && <span className="text-default-allert">*</span>}
        </span>
      )}
      <input
        ref={ref}
        {...rest}
        className={`px-4 py-3 h-12 bg-gray-10 outline-none placeholder-gray-60 ${className} ${
          error
            ? "border-[2px] border-default-allert"
            : "border-b border-gray-30"
        }`}
      ></input>
      {error && (
        <span className="text-xs text-default-allert mt-2">{error}</span>
      )}
    </div>
  )
);
