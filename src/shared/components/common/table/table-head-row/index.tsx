import { forwardRef, HTMLProps } from "react";
type ITableHeadRowProps = HTMLProps<HTMLTableRowElement>;

export const TableHeadRow = forwardRef<HTMLTableRowElement, ITableHeadRowProps>(
  ({ className, ...rest }, ref) => (
    <tr ref={ref} className={`bg-gray-10 ${className}`} {...rest} />
  )
);
