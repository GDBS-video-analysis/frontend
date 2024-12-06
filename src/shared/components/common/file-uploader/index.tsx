import { forwardRef, HTMLAttributes, ReactNode } from "react";

interface IFileUploaderProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "type" | "className | id"> {
  id: string;
  children: ReactNode;
  error?: string;
  accept?: string;
}

export const FileUploader = forwardRef<HTMLInputElement, IFileUploaderProps>(
  ({ id, children, error, accept, ...rest }, ref) => (
    <div>
      <label
        htmlFor={id}
        className="px-7 flex items-center border border-gray-30 text-primary-90 cursor-pointer w-fit font-medium h-12"
      >
        {children}
        <input id={id} ref={ref} type="file" hidden accept={accept} {...rest} />
      </label>
      {error && (
        <span className="text-xs text-default-allert mt-2 block">{error}</span>
      )}
    </div>
  )
);
