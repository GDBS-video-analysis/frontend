import { addEvent } from '@entities/slice/events';
import { EQueryKeys } from '@shared/enums/query-keys';
import { IEventPort } from '@shared/interfaces/events';
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const useAddEventUseCae = (
  handleCloseModal: () => void
): UseMutationResult<AxiosResponse<void>, Error, IEventPort> => {
  const queryClient = useQueryClient();
  const callback = async (port: IEventPort) => {
    return addEvent(port);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EQueryKeys.GET_EVENTS] });
      handleCloseModal();
    },
  });
};
