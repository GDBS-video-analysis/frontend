import { useAddEventUseCae } from '@entities/case/events/add/use-case';
import { addEventFormSchema } from '@features/forms/events/add/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useModal } from '@shared/components/common/modal/hooks';
import { IAddEventPort } from '@shared/interfaces/events';
import { useForm } from 'react-hook-form';

export const useAddEventPresenter = () => {
  const { handleToggleModal, isOpen } = useModal();
  const { mutateAsync, isPending } = useAddEventUseCae(handleToggleModal);
  const form = useForm<IAddEventPort>({
    resolver: yupResolver(addEventFormSchema),
  });

  const handleSubmit = form.handleSubmit((data) => {
    const { date, time, ...rest } = data;
    mutateAsync({ dateTime: new Date(`${date} ${time}`).toJSON(), ...rest });
  });

  const handleOpenModal = () => {
    form.reset();
    handleToggleModal();
  };

  return {
    form,
    handleSubmit,
    handleOpenModal,
    isPending,
    isOpen,
    handleToggleModal,
  };
};
