import { forwardRef, HTMLProps } from "react";

interface ITextAreaProps
  extends Omit<HTMLProps<HTMLTextAreaElement>, "required" | "type"> {
  required?: boolean;
  label?: string;
  error?: string;
}

export const TextAreaFiled = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  ({ className, label, required, error, ...rest }, ref) => (
    <div className="flex flex-col">
      {label && (
        <span className="text-sm text-gray-90 mb-2">
          {label} {required && <span className="text-default-allert">*</span>}
        </span>
      )}
      <textarea
        ref={ref}
        {...rest}
        className={`px-4 py-3 h-12 bg-gray-10 outline-none placeholder-gray-60 ${className} ${
          error
            ? "border-[2px] border-default-allert"
            : "border-b border-gray-30"
        }`}
      />
      {error && (
        <span className="text-xs text-default-allert mt-2">{error}</span>
      )}
    </div>
  )
);
