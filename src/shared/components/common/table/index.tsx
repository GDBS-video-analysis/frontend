import { forwardRef, HTMLProps, TableHTMLAttributes } from "react";

type ITableProps = HTMLProps<HTMLTableElement> &
  TableHTMLAttributes<HTMLTableElement>;

export const Table = forwardRef<HTMLTableElement, ITableProps>(
  ({ className, ...rest }, ref) => (
    <table
      ref={ref}
      className={`w-full border border-gray-20 ${className}`}
      {...rest}
    ></table>
  )
);
