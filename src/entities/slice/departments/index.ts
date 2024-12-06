import { IDepartment } from '@shared/interfaces/departments';
import { times } from 'lodash';

export const getDepartments = async (): Promise<IDepartment[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(
        times(5, (num) => ({
          departmentId: num.toString(),
          name: 'department ' + num,
        }))
      );
    }, 500);
  });
};
