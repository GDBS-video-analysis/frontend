import { getEmployeeVisitHistory } from '@entities/slice/employees';
import { EQueryKeys } from '@shared/enums/query-keys';
import { IEmployeeVisitHistoryDto } from '@shared/interfaces/employees';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const useGetEmployeeVisitHistoryUseCase = (
  employeeId: number
): UseQueryResult<IEmployeeVisitHistoryDto> => {
  const callback = async () => {
    return getEmployeeVisitHistory(employeeId);
  };

  return useQuery({
    queryKey: [EQueryKeys.GET_EMPLOYEE_VISIT_HISTORY],
    queryFn: callback,
  });
};
