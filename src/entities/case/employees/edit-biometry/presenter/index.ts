import { useEditEmployeeBiometryUseCase } from '@entities/case/employees/edit-biometry/use-case';
import { IEditEmployeeBiometryPort } from '@shared/interfaces/employees';
import { IIsPending } from '@shared/interfaces/helper-interfaces';
import { IEmployeeIdQueryParams } from '@shared/interfaces/params/employee';
import { BaseSyntheticEvent } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { useParams } from 'react-router-dom';

interface IUseEditEmployeeBiometryPresenterReturn extends IIsPending {
  handleSubmit(e?: BaseSyntheticEvent): Promise<void>;
  form: UseFormReturn<IEditEmployeeBiometryPort>;
}

export const useEditEmployeeBiometryPresenter =
  (): IUseEditEmployeeBiometryPresenterReturn => {
    const { employeeId } = useParams() as unknown as IEmployeeIdQueryParams;
    const { mutateAsync, isPending } = useEditEmployeeBiometryUseCase();
    const form = useForm<IEditEmployeeBiometryPort>({
      defaultValues: { employeeId },
    });

    const handleSubmit = form.handleSubmit((data) => {
      mutateAsync(data);
    });

    return {
      handleSubmit,
      isPending,
      form,
    };
  };
