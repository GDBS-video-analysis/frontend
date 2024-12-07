import { INewEmployeePort } from '@shared/interfaces/employees';
import { api } from '@shared/lib/api';
import { AxiosResponse } from 'axios';

const SLUG = '/employees';

export const newEmployee = async (
  port: INewEmployeePort
): Promise<AxiosResponse<void>> => {
  return api.post(`${SLUG}/employee`, port);
};
