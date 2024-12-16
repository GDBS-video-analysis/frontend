import { useUpdateEventUseCase } from '@entities/case/events/update-event/use-case';
import { updateEventFormSchema } from '@features/forms/events/update/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { ISingleEvent, IUpdateEventFormPort } from '@shared/interfaces/events';
import { getFormatDate } from '@shared/utils/scripts/getFormatDate';
import { useEffect } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

interface IUseUpdateEventPresenterProps {
  defaultValues: ISingleEvent | undefined;
  onSuccesCallback?(): void;
}

interface IUseUpdateEventPresenterReturn {
  handleSubmit(e?: React.BaseSyntheticEvent): Promise<void>;
  form: UseFormReturn<IUpdateEventFormPort>;
  isPending: boolean;
}

export const useUpdateEventPresenter = ({
  defaultValues,
  onSuccesCallback,
}: IUseUpdateEventPresenterProps): IUseUpdateEventPresenterReturn => {
  const form = useForm<IUpdateEventFormPort>({
    resolver: yupResolver(updateEventFormSchema),
  });
  const { mutateAsync, isPending } = useUpdateEventUseCase(onSuccesCallback);

  const handleSubmit = form.handleSubmit((data) => {
    mutateAsync({
      dateTime: new Date(`${data.date} ${data.time}`).toJSON(),
      name: data.name,
      description: data.description,
      eventID: data.eventID,
    });
  });

  useEffect(() => {
    if (defaultValues) {
      const dateInfo = getFormatDate(defaultValues.dateTime);
      form.reset({
        date: dateInfo.date.split('.').reverse().join('-'),
        time: dateInfo.time,
        ...defaultValues,
      });
    }
  }, [defaultValues, form]);

  return { handleSubmit, form, isPending };
};
