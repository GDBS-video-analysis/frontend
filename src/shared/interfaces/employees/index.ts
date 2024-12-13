import { IEvent } from '@shared/interfaces/events';
import {
  IPaginationFilter,
  IResponseWithPagination,
} from '@shared/interfaces/helper-interfaces';
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

type IEmployees = IResponseWithPagination<IEmployee>;

type IEmployeesDto = AxiosResponse<IEmployees>;

interface IEmployeeFilter extends IPaginationFilter {
  searchName?: string;
  searchPost?: string;
  searchDepartment?: string;
}

export type {
  INewEmployeePort,
  IEmployee,
  IEmployeeDto,
  IEmployeeVisitHistoryDto,
  IEmployeeVisitHistory,
  IEmployeeFilter,
  IEmployeesDto,
  IEmployees,
};
