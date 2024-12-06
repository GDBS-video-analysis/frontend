import { getDepartments } from '@entities/slice/departments';
import { EQueryKeys } from '@shared/enums/query-keys';
import { IDepartment } from '@shared/interfaces/departments';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const useGetDepartmentsUseCase = (): UseQueryResult<IDepartment[]> => {
  const callback = () => {
    return getDepartments();
  };

  return useQuery({
    queryKey: [EQueryKeys.GET_DEPARTMENTS],
    queryFn: callback,
  });
};
