import { getEmployees } from '@entities/slice/employees';
import { EQueryKeys } from '@shared/enums/query-keys';
import { IEmployeeFilter, IEmployeesDto } from '@shared/interfaces/employees';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const useGetEmployeesUseCase = (
  port: IEmployeeFilter
): UseQueryResult<IEmployeesDto> => {
  const callback = async () => {
    return getEmployees(port);
  };

  return useQuery({
    queryKey: [
      EQueryKeys.GET_EMPLOYEES,
      port.page,
      port.searchDepartment,
      port.searchName,
      port.searchPost,
    ],
    queryFn: callback,
  });
};
