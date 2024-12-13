import { deleteEventVideoFile } from '@entities/slice/events';
import { EQueryKeys } from '@shared/enums/query-keys';
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';

export const useDeleteEventVideoFileUseCase = (
  handleCloseModal: () => void
): UseMutationResult<void, Error, number> => {
  const queryClient = useQueryClient();
  const callback = (eventId: number) => {
    return deleteEventVideoFile(eventId);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
      handleCloseModal();
      queryClient.invalidateQueries({ queryKey: [EQueryKeys.GET_EVENT] });
    },
  });
};
