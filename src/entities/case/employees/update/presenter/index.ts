import { useUpdateEmployeeUseCase } from '@entities/case/employees/update/use-case';
import { updateEmployeeSchema } from '@features/forms/employees/update/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { IEditEmployeePort } from '@shared/interfaces/employees';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const useUpdateEmployeePresenter = (
  defaultValues?: IEditEmployeePort
) => {
  const { mutateAsync, isPending } = useUpdateEmployeeUseCase();

  const form = useForm<IEditEmployeePort>({
    resolver: yupResolver(updateEmployeeSchema),
  });

  const handleSubmit = form.handleSubmit((data) => {
    mutateAsync(data);
  });

  useEffect(() => {
    form.reset(defaultValues);
  }, [defaultValues]);

  return {
    form,
    handleSubmit,
    isPending,
  };
};
