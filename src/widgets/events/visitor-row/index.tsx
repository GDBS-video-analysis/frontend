import { EmployeeShortCard } from "@shared/components/employee-short-card";
import { IEmployee } from "@shared/interfaces/employees";
import { VisitorRowWrapper } from "@widgets/events/visitor-row/visitor-row-wrapper";

interface IVisitorRowProps {
  visitor: IEmployee;
  index: number;
  handleClick?(): void;
}

export const VisitorRow = ({
  visitor,
  index,
  handleClick,
}: IVisitorRowProps) => {
  return (
    <VisitorRowWrapper index={index} handleClick={handleClick}>
      <EmployeeShortCard employee={visitor} />
    </VisitorRowWrapper>
  );
};
