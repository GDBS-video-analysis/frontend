import {
  IEmployee,
  IEmployeeDto,
  IEmployeeFilter,
  IEmployees,
  IEmployeesDto,
  IEmployeeVisitHistory,
  IEmployeeVisitHistoryDto,
  INewEmployeePort,
} from '@shared/interfaces/employees';
import { api } from '@shared/lib/api';
import { AxiosResponse } from 'axios';

const SLUG = '/employees';

export const newEmployee = async (
  port: INewEmployeePort
): Promise<AxiosResponse<void>> => {
  return api.post(`${SLUG}/employee`, port);
};

export const getEmployee = async (
  employeeId: number
): Promise<IEmployeeDto> => {
  return api.get<IEmployee>(`${SLUG}/${employeeId}`);
};

export const getEmployeeVisitHistory = async (
  employeeId: number
): Promise<IEmployeeVisitHistoryDto> => {
  return api.get<IEmployeeVisitHistory>(`${SLUG}/${employeeId}/visitHistory`);
};

export const getEmployees = async (
  port: IEmployeeFilter
): Promise<IEmployeesDto> => {
  return api.get<IEmployees>(`${SLUG}/employees`, { params: { ...port } });
};
