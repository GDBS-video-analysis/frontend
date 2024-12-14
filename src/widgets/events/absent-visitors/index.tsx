import { IEmployee } from "@shared/interfaces/employees";
import { VisitorRow } from "@widgets/events/visitor-row";

interface IAbsentVisitorsProps {
  visitors: IEmployee[];
}

export const AbsentVisitors = ({ visitors }: IAbsentVisitorsProps) => {
  return (
    <div className="bg-default-white p-[18px]">
      {visitors.map((visitor, index) => (
        <VisitorRow visitor={visitor} index={index + 1} />
      ))}
    </div>
  );
};
