import { useUploadEventVideoFileUseCase } from '@entities/case/events/upload-video-file/use-case';
import { IUploadEventVideoFilePort } from '@shared/interfaces/events';
import { IIsPending } from '@shared/interfaces/helper-interfaces';
import { IEventIdQueryParams } from '@shared/interfaces/params/event';
import { BaseSyntheticEvent } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

interface IUseUploadEventVideoFilePresenterReturn extends IIsPending {
  handleSubmit(e?: BaseSyntheticEvent): Promise<void>;
  form: UseFormReturn<IUploadEventVideoFilePort>;
}

export const useUploadEventVideoFilePresenter =
  (): IUseUploadEventVideoFilePresenterReturn => {
    const { eventId } = useParams() as unknown as IEventIdQueryParams;
    const { mutateAsync, isPending } = useUploadEventVideoFileUseCase();
    const form = useForm<IUploadEventVideoFilePort>({
      defaultValues: { eventId },
    });

    const handleSubmit = form.handleSubmit((data) => {
      console.log(data);
      mutateAsync(data);
    });

    return {
      handleSubmit,
      isPending,
      form,
    };
  };
