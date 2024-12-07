import { forwardRef, HTMLProps } from "react";
type ITableCellProps = HTMLProps<HTMLTableCellElement>;

export const TableCell = forwardRef<HTMLTableCellElement, ITableCellProps>(
  ({ className, ...rest }, ref) => (
    <td ref={ref} className={`py-2 px-3 ${className}`} {...rest} />
  )
);
