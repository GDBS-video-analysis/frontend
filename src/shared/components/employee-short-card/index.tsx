import { Avatar } from "@shared/components/avatar";
import { TwoRowLabel } from "@shared/components/two-row-label";
import { IEmployee } from "@shared/interfaces/employees";

interface IEmployeeShortCardProps {
  employee: IEmployee;
}

export const EmployeeShortCard = ({ employee }: IEmployeeShortCardProps) => {
  return (
    <div className="flex gap-2">
      <Avatar avatarId={employee.avatarID} />
      <TwoRowLabel
        reverse={true}
        header={employee.post}
        text={`${employee.firstName} ${employee.lastName}`}
      />
    </div>
  );
};
