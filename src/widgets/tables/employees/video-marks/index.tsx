import { Table } from "@shared/components/common/table";
import { TableBody } from "@shared/components/common/table/table-body";
import { TableCell } from "@shared/components/common/table/table-cell";
import { TableHead } from "@shared/components/common/table/table-head";
import { TableRow } from "@shared/components/common/table/table-row";
import { getFormatDate } from "@shared/utils/scripts/getFormatDate";

interface IVideoMarksTableProps {
  videoMarks?: string[];
}

export const VideoMarksTable = ({ videoMarks }: IVideoMarksTableProps) => {
  return (
    <Table className="bg-default-white">
      <TableHead className="bg-gray-10">
        <TableRow>
          <TableCell>Время</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {videoMarks?.map((mark) => (
          <TableRow key={mark}>
            <TableCell>
              {getFormatDate(mark).date} {getFormatDate(mark).time}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
