import { IEvent } from '@shared/interfaces/events';
import { AxiosResponse } from 'axios';

interface INewEmployeePort {
  firstName: string;
  lastName: string;
  patronymic?: string;
  postID: number;
  phone: string;
}

interface IEmployee extends Omit<INewEmployeePort, 'postID'> {
  employeeID: number;
  avatarID?: number;
  post: string;
  department: string;
}

type IEmployeeVisitHistory = IEvent[];

type IEmployeeVisitHistoryDto = AxiosResponse<IEmployeeVisitHistory>;

type IEmployeeDto = AxiosResponse<IEmployee>;

export type {
  INewEmployeePort,
  IEmployee,
  IEmployeeDto,
  IEmployeeVisitHistoryDto,
  IEmployeeVisitHistory,
};
