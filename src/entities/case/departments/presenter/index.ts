import { useGetDepartmentsUseCase } from '@entities/case/departments/use-case';
import { IDepartment } from '@shared/interfaces/departments';
import { UseQueryResult } from '@tanstack/react-query';

export const useGetDepartmentsPresenter = (): UseQueryResult<IDepartment[]> => {
  return useGetDepartmentsUseCase();
};
