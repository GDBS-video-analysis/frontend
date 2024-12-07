import { useGetEmployeeUseCase } from '@entities/case/employees/get-employee/use-case';
import { IEmployee } from '@shared/interfaces/employees';
import { ILoading } from '@shared/interfaces/helper-interfaces';

import { IEmployeeIdQueryParams } from '@shared/interfaces/params/employee';
import { useParams } from 'react-router-dom';

interface IUseGetEmployeePresenterReturn extends ILoading {
  data: IEmployee | undefined;
}

export const useGetEmployeePresenter = (): IUseGetEmployeePresenterReturn => {
  const { employeeId } = useParams() as unknown as IEmployeeIdQueryParams;
  const { data, isLoading } = useGetEmployeeUseCase(employeeId);
  return { data: data?.data, isLoading };
};
