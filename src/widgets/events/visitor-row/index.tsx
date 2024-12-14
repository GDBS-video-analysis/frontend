import { EmployeeShortCard } from "@shared/components/employee-short-card";
import { IEmployee } from "@shared/interfaces/employees";

interface IVisitorRowProps {
  visitor: IEmployee;
  index: number;
}

export const VisitorRow = ({ visitor, index }: IVisitorRowProps) => {
  return (
    <div className="flex gap-5 border-b border-gray-20 p-2 items-center hover:shadow-leftBorder hover:bg-primary-30">
      <span className="font-medium text-sm">{index}</span>
      <EmployeeShortCard employee={visitor} />
    </div>
  );
};
