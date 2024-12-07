import { forwardRef, HTMLProps } from "react";
type ITableHeadCellProps = HTMLProps<HTMLTableHeaderCellElement>;

export const TableHeadCell = forwardRef<
  HTMLTableHeaderCellElement,
  ITableHeadCellProps
>(({ className, ...rest }, ref) => (
  <th
    ref={ref}
    className={`py-4 px-3 text-left text-sm ${className}`}
    {...rest}
  />
));
