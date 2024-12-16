import { useDeleteEmployeeBiometryUseCase } from '@entities/case/employees/delete-biometry/use-case';
import { useModal } from '@shared/components/common/modal/hooks';
import { IDeleteEmployeeBiometryPort } from '@shared/interfaces/employees';
import { IIsPending } from '@shared/interfaces/helper-interfaces';
import { IEmployeeIdQueryParams } from '@shared/interfaces/params/employee';
import { BaseSyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

interface IUseDeleteEmployeeBiometryPresenter extends IIsPending {
  handleDeleteEmployeeBiometry(e?: BaseSyntheticEvent): void;
  isOpen: boolean;
  handleToggleModal(): void;
  handleOpenModal(biometryID: number): void;
}

export const useDeleteEmployeeBiometryPresenter =
  (): IUseDeleteEmployeeBiometryPresenter => {
    const { isOpen, handleToggleModal: handleToggleModal } = useModal();
    const { employeeId } = useParams() as unknown as IEmployeeIdQueryParams;
    const { mutateAsync, isPending } = useDeleteEmployeeBiometryUseCase({
      handleToggleModal,
    });
    const form = useForm<Omit<IDeleteEmployeeBiometryPort, 'employeeID'>>();
    const handleDeleteEmployeeBiometry = form.handleSubmit(({ biometryID }) => {
      mutateAsync({ employeeId, biometryID });
    });
    const handleOpenModal = (biometryID: number) => {
      form.reset({ biometryID });
      handleToggleModal();
    };
    return {
      handleDeleteEmployeeBiometry,
      isPending,
      isOpen,
      handleToggleModal,
      handleOpenModal,
    };
  };
