import { PropsWithChildren } from "react";

interface IVisitorRowWrapper extends PropsWithChildren {
  index: number;
}

export const VisitorRowWrapper = ({ index, children }: IVisitorRowWrapper) => {
  return (
    <div className="flex gap-5 border-b border-gray-20 p-2 items-center hover:shadow-leftBorder hover:bg-primary-30">
      <span className="font-medium text-sm">{index}</span>
      {children}
    </div>
  );
};
