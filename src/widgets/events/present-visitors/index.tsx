import { Accordion } from "@shared/components/common/accordion";
import { IEmployee } from "@shared/interfaces/employees";
import { VisitorRow } from "@widgets/events/visitor-row";

interface IPresentVisitors {
  expectedEmployees?: IEmployee[];
  notExpectedEmployees?: IEmployee[];
}

export const PresentVisitors = ({
  expectedEmployees,
  notExpectedEmployees,
}: IPresentVisitors) => {
  return (
    <div className="*:bg-default-white *:p-[18px] flex flex-col gap-6">
      <Accordion header="Запланированные">
        <section>
          {expectedEmployees?.map((visitor, index) => (
            <VisitorRow visitor={visitor} index={index + 1} />
          ))}
        </section>
      </Accordion>
      <Accordion header="Незапланированные">
        <section>
          {notExpectedEmployees?.map((visitor, index) => (
            <VisitorRow visitor={visitor} index={index + 1} />
          ))}
        </section>
      </Accordion>
    </div>
  );
};
