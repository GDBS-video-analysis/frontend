import { useGetExpectedEmployeesPresenter } from "@entities/case/employees/get-expected-employees/presenter";
import { usePutExpectedEmployeesPresenter } from "@entities/case/events/put-expected-employees/presenter";
import { Avatar } from "@shared/components/avatar";
import { Button } from "@shared/components/common/button";
import { Table } from "@shared/components/common/table";
import { TableBody } from "@shared/components/common/table/table-body";
import { TableCell } from "@shared/components/common/table/table-cell";
import { TableHead } from "@shared/components/common/table/table-head";
import { TableHeadCell } from "@shared/components/common/table/table-head-cell";
import { TableRow } from "@shared/components/common/table/table-row";
import { TextFiled } from "@shared/components/common/text-filed";
import { VisibilityObserver } from "@shared/components/visibility-observer";
import { IEmployee } from "@shared/interfaces/employees";

interface IExpectedEmployeesTableProps {
  expectedEmployees: IEmployee[];
  onCloseModal(): void;
}

export const ExpectedEmployeesTable = ({
  expectedEmployees,
  onCloseModal,
}: IExpectedEmployeesTableProps) => {
  const { employees, form, handleOnChangeVisibility } =
    useGetExpectedEmployeesPresenter();

  const { handleSubmit, onToggleEmployee, expectedEmployeesIds } =
    usePutExpectedEmployeesPresenter(expectedEmployees);

  const { register } = form;

  const handleSaveButonClick = () => {
    handleSubmit();
    onCloseModal();
  };
  return (
    <form className="w-[800px]">
      <Table className="w-full table-fixed [&_td]:w-[260px]">
        <TableHead className="bg-gray-10">
          <TableRow>
            <TableHeadCell className="!w-10"></TableHeadCell>
            <TableHeadCell>ФИО</TableHeadCell>
            <TableHeadCell>Должность</TableHeadCell>
            <TableHeadCell>Подразделение</TableHeadCell>
          </TableRow>
          <TableRow>
            <TableHeadCell>
              <div className="w-[20px] h-[20px] border-2 border-gray-30" />
            </TableHeadCell>
            <TableHeadCell>
              <TextFiled
                placeholder="Имя или фамилия"
                className="bg-default-white"
                background="#FFFFFF"
                {...register("searchName")}
              />
            </TableHeadCell>
            <TableHeadCell>
              <TextFiled
                placeholder="Пост"
                background="#FFFFFF"
                {...register("searchPost")}
              />
            </TableHeadCell>
            <TableHeadCell>
              <TextFiled
                placeholder="Подразделение"
                background="#FFFFFF"
                {...register("searchDepartment")}
              />
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="block max-h-[300px] overflow-y-auto w-[800px]">
          {employees.map((employee, index) => (
            <TableRow key={employee.employeeID} className="">
              <TableCell className="!w-10">
                <input
                  type="checkbox"
                  checked={expectedEmployeesIds.some(
                    (empId) => empId === employee.employeeID
                  )}
                  onChange={() => onToggleEmployee(employee.employeeID)}
                />
              </TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">
                  <Avatar avatarId={employee.avatarID} />
                  {`${employee.lastName} ${employee.firstName} ${employee.patronymic}`}
                </div>
              </TableCell>
              <TableCell>
                {index === employees.length - 1 ? (
                  <VisibilityObserver
                    handleOnChangeVisibility={handleOnChangeVisibility}
                  >
                    {employee.post}
                  </VisibilityObserver>
                ) : (
                  employee.post
                )}
              </TableCell>
              <TableCell>{employee.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button type="button" className="mt-6" onClick={handleSaveButonClick}>
        Сохранить
      </Button>
    </form>
  );
};
