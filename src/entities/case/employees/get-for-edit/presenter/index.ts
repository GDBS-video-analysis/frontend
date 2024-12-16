import { useGetEmployeeForEditUseCase } from '@entities/case/employees/get-for-edit/use-case';
import { IEditEmployeeDto } from '@shared/interfaces/employees';
import { IEmployeeIdQueryParams } from '@shared/interfaces/params/employee';
import { UseQueryResult } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

type IUseGetEmployeeForEditPresenterReturn =
  UseQueryResult<IEditEmployeeDto> & {
    employeeId: number;
  };

export const useGetEmployeeForEditPresenter =
  (): IUseGetEmployeeForEditPresenterReturn => {
    const { employeeId } = useParams() as unknown as IEmployeeIdQueryParams;

    const response = useGetEmployeeForEditUseCase(employeeId);

    return {
      employeeId,
      ...response,
    };
  };
