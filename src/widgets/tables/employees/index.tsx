import { useGetDepartmentsPresenter } from "@entities/case/departments/presenter";
import { Avatar } from "@shared/components/avatar";
import { Select } from "@shared/components/common/select";
import { Table } from "@shared/components/common/table";
import { TableBody } from "@shared/components/common/table/table-body";
import { TableCell } from "@shared/components/common/table/table-cell";
import { TableHead } from "@shared/components/common/table/table-head";
import { TableHeadCell } from "@shared/components/common/table/table-head-cell";
import { TableRow } from "@shared/components/common/table/table-row";
import { TextFiled } from "@shared/components/common/text-filed";
import { EEmployeeQueryParams } from "@shared/enums/params/employee";
import { ERoutes } from "@shared/enums/routes";
import { IEmployee, IEmployeeFilter } from "@shared/interfaces/employees";
import { getRouteWithId } from "@shared/utils/scripts/getRouteWithId";
import { FormEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface IEmployeesTable {
  employees: IEmployee[];
  form: UseFormReturn<IEmployeeFilter>;
}

export const EmployeesTable = ({ employees, form }: IEmployeesTable) => {
  const {
    departmentsSelectOptions,
    postsSelectOptions,
    handleDepartmentChange,
  } = useGetDepartmentsPresenter(true);
  const nav = useNavigate();
  const { register } = form;
  const onDepartmentChange = (e: FormEvent<HTMLSelectElement>) => {
    form.setValue("searchDepartment", e.currentTarget.value);
    handleDepartmentChange(e);
  };
  return (
    <form>
      <Table>
        <colgroup>
          <col width={1} />
          <col width={1} />
          <col width={1} />
        </colgroup>
        <TableHead>
          <TableRow>
            <TableHeadCell>ФИО</TableHeadCell>
            <TableHeadCell>Должность</TableHeadCell>
            <TableHeadCell>Подразделение</TableHeadCell>
          </TableRow>
          <TableRow>
            <TableHeadCell>
              <TextFiled
                placeholder="Имя или фамилия"
                className="bg-default-white"
                background="#FFFFFF"
                {...register("searchName")}
              />
            </TableHeadCell>
            <TableHeadCell>
              <Select
                options={postsSelectOptions}
                {...register("searchPost")}
              />
            </TableHeadCell>
            <TableHeadCell>
              <Select
                options={departmentsSelectOptions}
                onChange={onDepartmentChange}
              />
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="bg-default-white">
          {employees.map((employee) => (
            <TableRow
              key={employee.employeeID}
              className="hover:shadow-leftBorder hover:bg-primary-30 cursor-pointer"
              onClick={() =>
                nav(
                  getRouteWithId(
                    ERoutes.EMPLOYEE,
                    EEmployeeQueryParams.EMPLOYEE_ID,
                    employee.employeeID
                  )
                )
              }
            >
              <TableCell>
                <div className="flex gap-2 items-center font-medium">
                  <Avatar avatarId={employee.avatarID} />
                  {`${employee.lastName} ${employee.firstName} ${employee.patronymic}`}
                </div>
              </TableCell>
              <TableCell>{employee.post}</TableCell>
              <TableCell>{employee.department}</TableCell>
            </TableRow>
          ))}
          {employees.length === 0 && (
            <TableRow>
              <TableCell colSpan={3}>Здесь пока ничего нет</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </form>
  );
};
