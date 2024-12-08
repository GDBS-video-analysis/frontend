import { useGetEventUseCase } from '@entities/case/events/get-event/use-case';
import { ISingleEvent, IUpdateEventFormPort } from '@shared/interfaces/events';
import { ILoading } from '@shared/interfaces/helper-interfaces';
import { IEventIdQueryParams } from '@shared/interfaces/params/event';
import { getFormatDate } from '@shared/utils/scripts/getFormatDate';
import { useEffect } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { useParams } from 'react-router-dom';

interface IUseGetEventPresenterReturn extends ILoading {
  data: ISingleEvent | undefined;
  form: UseFormReturn<IUpdateEventFormPort>;
}

export const useGetEventPresenter = (): IUseGetEventPresenterReturn => {
  const { eventId } = useParams() as unknown as IEventIdQueryParams;
  const { data, isLoading } = useGetEventUseCase(eventId);
  const form = useForm<IUpdateEventFormPort>();

  useEffect(() => {
    if (data) {
      console.log(data.data);
      const date = getFormatDate(data.data.dateTime);
      form.reset({ ...data.data, ...date });
    }
  }, [data, form]);

  return {
    data: data?.data,
    isLoading,
    form,
  };
};
