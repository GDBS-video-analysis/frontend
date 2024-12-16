import { deleteEmployeeBiometry } from '@entities/slice/employees';
import { EQueryKeys } from '@shared/enums/query-keys';
import { IDeleteEmployeeBiometryPort } from '@shared/interfaces/employees';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface IUseDeleteEmployeeBiometryUseCaseProps {
  handleToggleModal(): void;
}

export const useDeleteEmployeeBiometryUseCase = ({
  handleToggleModal,
}: IUseDeleteEmployeeBiometryUseCaseProps) => {
  const queryClient = useQueryClient();
  const callback = async (port: IDeleteEmployeeBiometryPort) => {
    return deleteEmployeeBiometry(port);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [EQueryKeys.GET_EMPLOYEE_FOR_EDIT],
      });
      handleToggleModal();
    },
  });
};
