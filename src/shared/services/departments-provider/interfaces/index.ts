import { IDepartment } from '@shared/interfaces/departments';
import { ILoading } from '@shared/interfaces/helper-interfaces';

interface IDepartmentsContextValue extends ILoading {
  data?: IDepartment[];
}

export type { IDepartmentsContextValue };
