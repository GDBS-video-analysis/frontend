import { useGetEmployeeVisitHistoryUseCase } from '@entities/case/employees/get-visit-history/use-case';
import { IEmployeeVisitHistory } from '@shared/interfaces/employees';
import { ILoading } from '@shared/interfaces/helper-interfaces';
import { IEmployeeIdQueryParams } from '@shared/interfaces/params/employee';
import { useParams } from 'react-router-dom';

interface IUseGetEmployeeVisitHistoryPresenterReturn extends ILoading {
  data: IEmployeeVisitHistory | undefined;
}

export const useGetEmployeeVisitHistoryPresenter =
  (): IUseGetEmployeeVisitHistoryPresenterReturn => {
    const { employeeId } = useParams() as unknown as IEmployeeIdQueryParams;
    const { data, isLoading } = useGetEmployeeVisitHistoryUseCase(employeeId);
    return { data: data?.data, isLoading };
  };
