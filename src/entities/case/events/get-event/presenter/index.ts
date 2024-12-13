import { useGetEventUseCase } from '@entities/case/events/get-event/use-case';
import { useUpdateEventPresenter } from '@entities/case/events/update-event/presenter';
import { ISingleEvent, IUpdateEventFormPort } from '@shared/interfaces/events';
import { ILoading } from '@shared/interfaces/helper-interfaces';
import { IEventIdQueryParams } from '@shared/interfaces/params/event';
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { useParams } from 'react-router-dom';

interface IUseGetEventPresenterReturn extends ILoading {
  data: ISingleEvent | undefined;
  handleSubmit(e?: React.BaseSyntheticEvent): Promise<void>;
  form: UseFormReturn<IUpdateEventFormPort>;
  isPending: boolean;
  isFormDisabled: boolean;
  toggleFormDisabled(): void;
}
export const useGetEventPresenter = (): IUseGetEventPresenterReturn => {
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const { eventId } = useParams() as unknown as IEventIdQueryParams;
  const { data, isLoading } = useGetEventUseCase(eventId);

  const toggleFormDisabled = () => {
    setIsFormDisabled((prev) => !prev);
  };

  const { form, handleSubmit, isPending } = useUpdateEventPresenter({
    defaultValues: data?.data,
    onSuccesCallback: toggleFormDisabled,
  });

  return {
    data: data?.data,
    isLoading,
    form,
    handleSubmit,
    isPending,
    isFormDisabled,
    toggleFormDisabled,
  };
};
