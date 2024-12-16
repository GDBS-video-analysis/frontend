import { editEmployeeBiometry } from '@entities/slice/employees';
import { EQueryKeys } from '@shared/enums/query-keys';
import { IEditEmployeeBiometryPort } from '@shared/interfaces/employees';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useEditEmployeeBiometryUseCase = () => {
  const queryClient = useQueryClient();
  const callback = async (port: IEditEmployeeBiometryPort) => {
    return editEmployeeBiometry(port);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [EQueryKeys.GET_EMPLOYEE_FOR_EDIT],
      });
    },
  });
};
