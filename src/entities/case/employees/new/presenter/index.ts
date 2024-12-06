import { useNewEmployeeUseCase } from '@entities/case/employees/new/use-case';
import { newEmployeeSchema } from '@features/forms/employees/new/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { INewEmployeePort } from '@shared/interfaces/employees';
import { useForm, UseFormReturn } from 'react-hook-form';

interface IUseNewEmployeePresenterReturn {
  handleSubmit: (e?: React.BaseSyntheticEvent) => void;
  form: UseFormReturn<INewEmployeePort>;
  isPending: boolean;
}

export const useNewEmployeePresenter = (): IUseNewEmployeePresenterReturn => {
  const { mutateAsync, isPending } = useNewEmployeeUseCase();

  const form = useForm<INewEmployeePort>({
    resolver: yupResolver(newEmployeeSchema),
  });

  const handleSubmit = form.handleSubmit((data) => {
    mutateAsync(data);
  });

  return {
    form,
    isPending,
    handleSubmit,
  };
};
