import { EmployeeShortCard } from "@shared/components/employee-short-card";
import { IEmployee } from "@shared/interfaces/employees";
import { VisitorRowWrapper } from "@widgets/events/visitor-row/visitor-row-wrapper";

interface IVisitorRowProps {
  visitor: IEmployee;
  index: number;
}

export const VisitorRow = ({ visitor, index }: IVisitorRowProps) => {
  return (
    <VisitorRowWrapper index={index}>
      <EmployeeShortCard employee={visitor} />
    </VisitorRowWrapper>
  );
};
