import { getEmployeeForEdit } from '@entities/slice/employees';
import { EQueryKeys } from '@shared/enums/query-keys';
import { useQuery } from '@tanstack/react-query';

export const useGetEmployeeForEditUseCase = (employeeId: number) => {
  const callback = async () => {
    return getEmployeeForEdit(employeeId);
  };

  return useQuery({
    queryKey: [EQueryKeys.GET_EMPLOYEE_FOR_EDIT],
    queryFn: callback,
  });
};
