import { deleteEvent } from '@entities/slice/events';
import { ERoutes } from '@shared/enums/routes';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useDeleteEventUseCase = () => {
  const nav = useNavigate();
  const callback = async (eventId: number): Promise<void> => {
    return deleteEvent(eventId);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
      nav(ERoutes.EVENTS);
    },
  });
};
