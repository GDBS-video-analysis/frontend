import { PropsWithChildren } from "react";

interface IPaginationItemProps extends PropsWithChildren {
  isCurrent?: boolean;
  isDisabled?: boolean;
  handlePageClick?(): void;
  className?: string;
}

export const PaginationItem = ({
  children,
  isCurrent,
  isDisabled,
  handlePageClick,
  className,
}: IPaginationItemProps) => {
  return (
    <span
      className={`h-10 w-10 flex items-center justify-center ${
        !isDisabled &&
        "hover:bg-primary-90 hover:text-default-white cursor-pointer"
      } text-base font-medium ${
        isCurrent ? "bg-primary-90 text-default-white" : "text-primary-90"
      } ${className}`}
      onClick={handlePageClick}
    >
      {children}
    </span>
  );
};
