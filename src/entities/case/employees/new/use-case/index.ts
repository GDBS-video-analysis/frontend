import { newEmployee } from '@entities/slice/employees';
import { ERoutes } from '@shared/enums/routes';
import { INewEmployeePort } from '@shared/interfaces/employees';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useNewEmployeeUseCase = (): UseMutationResult<
  void,
  Error,
  INewEmployeePort
> => {
  const nav = useNavigate();
  const callback = (port: INewEmployeePort) => {
    return newEmployee(port);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
      nav(ERoutes.EMPLOYEES);
    },
  });
};
