import { INewEmployeePort } from '@shared/interfaces/employees';

export const newEmployee = async (port: INewEmployeePort): Promise<void> => {
  console.log(port);
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, 500);
  });
};
