import { updateEvent } from '@entities/slice/events';
import { IUpdateEventPort } from '@shared/interfaces/events';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const useUpdateEventUseCase = (
  onSuccesCallback?: () => void
): UseMutationResult<AxiosResponse<void>, Error, IUpdateEventPort> => {
  const callback = async (port: IUpdateEventPort) => {
    return updateEvent(port);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: onSuccesCallback,
  });
};
