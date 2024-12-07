import { getEmployee } from '@entities/slice/employees';
import { EQueryKeys } from '@shared/enums/query-keys';
import { IEmployeeDto } from '@shared/interfaces/employees';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const useGetEmployeeUseCase = (
  employeeId: number
): UseQueryResult<IEmployeeDto> => {
  const callback = async () => {
    return getEmployee(employeeId);
  };

  return useQuery({ queryKey: [EQueryKeys.GET_EMPLOYEE], queryFn: callback });
};
