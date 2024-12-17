import { Table } from "@shared/components/common/table";
import { TableBody } from "@shared/components/common/table/table-body";
import { TableCell } from "@shared/components/common/table/table-cell";
import { TableHead } from "@shared/components/common/table/table-head";
import { TableHeadCell } from "@shared/components/common/table/table-head-cell";
import { TableRow } from "@shared/components/common/table/table-row";
import { VideoStatus } from "@shared/components/video-status";
import { EEventQueryParams } from "@shared/enums/params/events";
import { ERoutes } from "@shared/enums/routes";
import { IEvent } from "@shared/interfaces/events";
import { getFormatDate } from "@shared/utils/scripts/getFormatDate";
import { getRouteWithId } from "@shared/utils/scripts/getRouteWithId";
import { useNavigate } from "react-router-dom";

interface IEventsTableProps {
  events: IEvent[];
}

export const EventsTable = ({ events }: IEventsTableProps) => {
  const nav = useNavigate();
  return (
    <Table>
      <colgroup>
        <col width={1} />
        <col width={1} />
        <col width={1} />
        <col width={1} />
        <col width={1} />
      </colgroup>
      <TableHead>
        <TableRow>
          <TableHeadCell>Название</TableHeadCell>
          <TableHeadCell>Дата</TableHeadCell>
          <TableHeadCell>Время</TableHeadCell>
          <TableHeadCell>Посетители</TableHeadCell>
          <TableHeadCell>Видео</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody className="bg-default-white">
        {events.map((event) => (
          <TableRow
            key={event.eventID}
            className="hover:shadow-leftBorder hover:bg-primary-30 h-12 cursor-pointer"
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
            <TableCell>{event.name}</TableCell>
            <TableCell>{getFormatDate(event.dateTime).date}</TableCell>
            <TableCell>{getFormatDate(event.dateTime).time}</TableCell>
            <TableCell>{event.visitorsCount}</TableCell>
            <TableCell>
              <VideoStatus status={event.analisysStatus} />
            </TableCell>
          </TableRow>
        ))}
        {events.length === 0 && (
          <TableRow>
            <TableCell colSpan={5}>Здесь пока ничего нет</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
