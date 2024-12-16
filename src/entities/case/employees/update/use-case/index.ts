import { updateEmployee } from '@entities/slice/employees';
import { EQueryKeys } from '@shared/enums/query-keys';
import { ERoutes } from '@shared/enums/routes';
import { IEditEmployeePort } from '@shared/interfaces/employees';
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

export const useUpdateEmployeeUseCase = (): UseMutationResult<
  AxiosResponse<void>,
  Error,
  IEditEmployeePort
> => {
  const nav = useNavigate();
  const queryClient = useQueryClient();
  const callback = async (port: IEditEmployeePort) => {
    return updateEmployee(port);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [EQueryKeys.GET_EMPLOYEES],
      });

      nav(ERoutes.EMPLOYEES);
    },
  });
};
