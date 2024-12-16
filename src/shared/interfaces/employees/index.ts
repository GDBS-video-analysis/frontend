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

interface IEventEmployee {
  isPresent: boolean;
  employee: IEmployee;
  videoMarks?: string[];
}

type IEventEmployeeDto = AxiosResponse<IEventEmployee>;

interface IEventEmployeePort {
  eventId: number;
  employeeId: number;
}

interface IUnregisterPerson {
  unregisterPersonID: number;
  videoFileMarks: [
    {
      mark: string;
      photoID: number;
    }
  ];
}

type IUnregisterPersonDto = AxiosResponse<IUnregisterPerson>;

interface IUnregisterPersonPort {
  eventId: number;
  unregisterPersonId: number;
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
  IEventEmployee,
  IEventEmployeeDto,
  IEventEmployeePort,
  IUnregisterPerson,
  IUnregisterPersonDto,
  IUnregisterPersonPort,
};
