import { Accordion } from "@shared/components/common/accordion";
import { EEmployeeQueryParams } from "@shared/enums/params/employee";
import { EEventQueryParams } from "@shared/enums/params/events";
import { ERoutes } from "@shared/enums/routes";
import { IEmployee } from "@shared/interfaces/employees";
import { IEventIdQueryParams } from "@shared/interfaces/params/event";
import { getRouteWithId } from "@shared/utils/scripts/getRouteWithId";
import { VisitorRow } from "@widgets/events/visitor-row";
import { useNavigate, useParams } from "react-router-dom";

interface IPresentVisitors {
  expectedEmployees?: IEmployee[];
  notExpectedEmployees?: IEmployee[];
}

export const PresentVisitors = ({
  expectedEmployees,
  notExpectedEmployees,
}: IPresentVisitors) => {
  const { eventId } = useParams() as unknown as IEventIdQueryParams;
  const nav = useNavigate();
  const handleVisitorClick = (employeeId: number) => {
    const routePart = getRouteWithId(
      ERoutes.EVENT_EMPLOYEE,
      EEventQueryParams.eventId,
      eventId
    );
    nav(
      getRouteWithId(routePart, EEmployeeQueryParams.EMPLOYEE_ID, employeeId)
    );
  };

  return (
    <div className="*:bg-default-white *:p-[18px] flex flex-col gap-6">
      <Accordion header="Запланированные">
        <section>
          {expectedEmployees?.map((visitor, index) => (
            <VisitorRow
              key={visitor.employeeID}
              visitor={visitor}
              index={index + 1}
              handleClick={() => handleVisitorClick(visitor.employeeID)}
            />
          ))}
        </section>
      </Accordion>
      <Accordion header="Незапланированные">
        <section>
          {notExpectedEmployees?.map((visitor, index) => (
            <VisitorRow
              key={visitor.employeeID}
              visitor={visitor}
              index={index + 1}
              handleClick={() => handleVisitorClick(visitor.employeeID)}
            />
          ))}
        </section>
      </Accordion>
    </div>
  );
};
