import { uploadEventVideoFile } from '@entities/slice/events';
import { EQueryKeys } from '@shared/enums/query-keys';
import { IUploadEventVideoFilePort } from '@shared/interfaces/events';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUploadEventVideoFileUseCase = () => {
  const queryClient = useQueryClient();
  const callback = async (port: IUploadEventVideoFilePort): Promise<void> => {
    return uploadEventVideoFile(port);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EQueryKeys.GET_EVENT] });
    },
  });
};
