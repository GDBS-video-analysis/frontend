import { Avatar } from "@shared/components/avatar";
import { Button } from "@shared/components/common/button";
import { TwoRowLabel } from "@shared/components/two-row-label";
import { IEmployee } from "@shared/interfaces/employees";

interface IEmployeeCardProps {
  employee: IEmployee;
  button: {
    label: string;
    handleClick(): void;
  };
}

export const EmployeeCard = ({ employee, button }: IEmployeeCardProps) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-[10px]">
        <h2 className="text-lg  font-bold">{`${employee?.lastName} ${employee?.firstName} ${employee?.patronymic}`}</h2>
        <Button intent="link" onClick={button.handleClick}>
          {button.label}
        </Button>
      </div>
      <div className="flex gap-[60px]">
        <Avatar
          form="square"
          width={180}
          height={220}
          avatarId={employee.avatarID}
        />
        <div className="flex flex-col gap-4">
          <TwoRowLabel header="Подразделение" text={employee.department} />
          <TwoRowLabel header="Должность" text={employee.post} />
          <TwoRowLabel header="Телефон" text={employee.phone} />
        </div>
      </div>
    </div>
  );
};
