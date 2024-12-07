import { forwardRef, HTMLProps } from "react";
type ITableHeadProps = HTMLProps<HTMLTableSectionElement>;

export const TableHead = forwardRef<HTMLTableSectionElement, ITableHeadProps>(
  ({ className, ...rest }, ref) => (
    <thead ref={ref} className={`${className}`} {...rest} />
  )
);
