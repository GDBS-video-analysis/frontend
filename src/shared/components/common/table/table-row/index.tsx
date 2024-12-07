import { forwardRef, HTMLProps } from "react";
type ITableRowProps = HTMLProps<HTMLTableRowElement>;

export const TableRow = forwardRef<HTMLTableRowElement, ITableRowProps>(
  ({ className, ...rest }, ref) => (
    <tr ref={ref} className={`border border-gray-20 ${className}`} {...rest} />
  )
);
