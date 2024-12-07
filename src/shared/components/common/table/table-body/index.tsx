import { forwardRef, HTMLProps } from "react";
type ITableBodyProps = HTMLProps<HTMLTableSectionElement>;

export const TableBody = forwardRef<HTMLTableSectionElement, ITableBodyProps>(
  ({ className, ...rest }, ref) => (
    <tbody ref={ref} className={`${className}`} {...rest} />
  )
);
