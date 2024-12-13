import { putExpectedEmployess } from '@entities/slice/events';
import { EQueryKeys } from '@shared/enums/query-keys';
import { IExpectedEmployeesPort } from '@shared/interfaces/events';
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const usePutExpectedEmployeesUseCase = (): UseMutationResult<
  AxiosResponse<void>,
  Error,
  IExpectedEmployeesPort
> => {
  const client = useQueryClient();
  const callback = async (port: IExpectedEmployeesPort) => {
    return putExpectedEmployess(port);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () =>
      client.invalidateQueries({
        queryKey: [EQueryKeys.GET_EVENT],
      }),
  });
};
