import { useDeleteEventUseCase } from '@entities/case/events/delete/use-case';
import { useModal } from '@shared/components/common/modal/hooks';
import { IIsPending } from '@shared/interfaces/helper-interfaces';
import { BaseSyntheticEvent } from 'react';
import { FieldValues, useForm, UseFormReturn } from 'react-hook-form';

interface IUseDeleteEventPresenterReturn<TForm extends FieldValues>
  extends IIsPending {
  handleOpenModal(data: TForm): void;
  isOpen: boolean;
  handleToggleModal(): void;
  handleSubmit(e?: BaseSyntheticEvent): void;
  form: UseFormReturn<TForm>;
}

export const useDeleteEventPresenter = <
  TForm extends FieldValues
>(): IUseDeleteEventPresenterReturn<TForm> => {
  const { mutateAsync, isPending } = useDeleteEventUseCase();

  const form = useForm<TForm>();

  const { isOpen, handleToggleModal } = useModal();

  const handleOpenModal = (event: TForm) => {
    form.reset(event);
    handleToggleModal();
  };

  const handleSubmit = form.handleSubmit((data) => {
    mutateAsync(data.eventID);
  });

  return {
    handleOpenModal,
    isOpen,
    isPending,
    handleSubmit,
    handleToggleModal,
    form,
  };
};
