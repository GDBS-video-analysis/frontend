import { Button } from "@shared/components/common/button";
import { Table } from "@shared/components/common/table";
import { TableBody } from "@shared/components/common/table/table-body";
import { TableCell } from "@shared/components/common/table/table-cell";
import { TableHead } from "@shared/components/common/table/table-head";
import { TableHeadCell } from "@shared/components/common/table/table-head-cell";
import { TableHeadRow } from "@shared/components/common/table/table-head-row";
import { TableRow } from "@shared/components/common/table/table-row";
import { EEventQueryParams } from "@shared/enums/params/events";
import { ERoutes } from "@shared/enums/routes";
import { IEmployeeVisitHistory } from "@shared/interfaces/employees";
import { IEmployeeIdQueryParams } from "@shared/interfaces/params/employee";
import { getEventsPaths } from "@shared/utils/scripts/getEventsPaths";
import { getFormatDate } from "@shared/utils/scripts/getFormatDate";
import { getRouteWithId } from "@shared/utils/scripts/getRouteWithId";
import { useNavigate, useParams } from "react-router-dom";

interface IVisitHistoryProps {
  visitHistory: IEmployeeVisitHistory;
}

export const VisitHistoryTable = ({ visitHistory }: IVisitHistoryProps) => {
  const { employeeId } = useParams() as unknown as IEmployeeIdQueryParams;
  const nav = useNavigate();
  return (
    <Table>
      <colgroup>
        <col span={1} style={{ width: "40px" }} />
        <col span={1} style={{ width: "100%" }} />
      </colgroup>
      <TableHead>
        <TableHeadRow>
          <TableHeadCell className="inline-block w-10">№</TableHeadCell>
          <TableHeadCell>Мероприятие</TableHeadCell>
          <TableHeadCell></TableHeadCell>
        </TableHeadRow>
      </TableHead>
      <TableBody>
        {visitHistory.map((event, index) => (
          <TableRow
            key={event.eventID}
            className="[&_p]:hover:text-primary-90 cursor-pointer"
            onClick={() =>
              nav(
                getRouteWithId(
                  ERoutes.EVENT,
                  EEventQueryParams.eventId,
                  event.eventID
                )
              )
            }
          >
            <TableCell className="text-sm">{index}</TableCell>
            <TableCell>
              <div>
                <p className="text-sm text-gray-90 font-medium">{event.name}</p>
                <span className="text-xs text-gray-60">{`${
                  getFormatDate(event.dateTime).date
                } ${getFormatDate(event.dateTime).time}`}</span>
              </div>
            </TableCell>
            <TableCell>
              <Button
                intent="outlined"
                size="small"
                onClick={() =>
                  nav(
                    getEventsPaths(
                      ERoutes.EVENT_EMPLOYEE,
                      event.eventID,
                      employeeId
                    )
                  )
                }
              >
                Посещение
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
