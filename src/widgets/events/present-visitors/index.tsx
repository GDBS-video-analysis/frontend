import { Accordion } from "@shared/components/common/accordion";
import { IEmployee } from "@shared/interfaces/employees";
import { VisitorRow } from "@widgets/events/visitor-row";

interface IPresentVisitors {
  visitors: IEmployee[];
}

export const PresentVisitors = ({ visitors }: IPresentVisitors) => {
  return (
    <div className="bg-default-white p-[18px]">
      <Accordion header="Запланированные">
        <section>
          {visitors.map((visitor, index) => (
            <VisitorRow visitor={visitor} index={index + 1} />
          ))}
        </section>
      </Accordion>
    </div>
  );
};
