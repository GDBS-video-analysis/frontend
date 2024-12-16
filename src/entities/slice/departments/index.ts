import { IDepartment, IDepartmentDto } from '@shared/interfaces/departments';
import { api } from '@shared/lib/api';

export const getDepartments = async (): Promise<IDepartmentDto> => {
  return api.get<IDepartment[]>('/employees/postsByDepartments');
};
