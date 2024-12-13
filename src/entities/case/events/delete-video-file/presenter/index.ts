import { useDeleteEventVideoFileUseCase } from '@entities/case/events/delete-video-file/use-case';
import { useModal } from '@shared/components/common/modal/hooks';
import { IIsPending } from '@shared/interfaces/helper-interfaces';
import { IEventIdQueryParams } from '@shared/interfaces/params/event';
import { useParams } from 'react-router-dom';

interface IUseDeleteEventVideoFilePresenterReturn extends IIsPending {
  handleDeleteEventVideoFile(): void;
  isOpen: boolean;
  handlleToggleModal(): void;
}

export const useDeleteEventVideoFilePresenter =
  (): IUseDeleteEventVideoFilePresenterReturn => {
    const { isOpen, handleToggleModal: handlleToggleModal } = useModal();
    const { eventId } = useParams() as unknown as IEventIdQueryParams;
    const { mutateAsync, isPending } =
      useDeleteEventVideoFileUseCase(handlleToggleModal);
    const handleDeleteEventVideoFile = () => {
      mutateAsync(eventId);
    };
    return {
      handleDeleteEventVideoFile,
      isPending,
      isOpen,
      handlleToggleModal,
    };
  };
