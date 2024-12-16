import { IEmployee } from '@shared/interfaces/employees';
import { IFile } from '@shared/interfaces/file';
import {
  IPaginationFilter,
  IResponseWithPagination,
} from '@shared/interfaces/helper-interfaces';
import { AxiosResponse } from 'axios';

interface IEvent {
  visitorsCount: number;
  eventID: number;
  dateTime: string;
  description?: string;
  videoFile: boolean;
  name: string;
  analisysStatus: number;
}

type IEvents = IResponseWithPagination<IEvent>;

type IUpdateEventPort = Omit<IEvent, 'videoFile' | 'visitorsCount'>;

interface IUpdateEventFormPort extends Omit<IUpdateEventPort, 'dateTime'> {
  date: string;
  time: string;
}

interface ISingleEvent extends Omit<IEvent, 'videoFile' | 'visitorsCount'> {
  videoFile: IFile;
  expectedEmployees?: IEmployee[];
}

type ISingleEventDto = AxiosResponse<ISingleEvent>;

interface IEventVisitingStatistics {
  presentPersons?: {
    expectedEmployees?: IEmployee[];
    notExpectedEmployees?: IEmployee[];
    unregisterPersons?: number[];
  };
  absentEmployees?: IEmployee[];
}

type IEventVisitingStatisticsDto = AxiosResponse<IEventVisitingStatistics>;

interface IExpectedEmployeesPort {
  eventId: number;
  employeesIds: number[];
}

interface IUploadEventVideoFilePort {
  eventId: number;
  videoFile: FileList;
}

interface IEventsFilter extends IPaginationFilter {
  search?: string;
}

type IEventsDto = AxiosResponse<IEvents>;

export type {
  IEvent,
  IUpdateEventPort,
  ISingleEvent,
  ISingleEventDto,
  IUpdateEventFormPort,
  IEventVisitingStatistics,
  IEventVisitingStatisticsDto,
  IExpectedEmployeesPort,
  IUploadEventVideoFilePort,
  IEventsDto,
  IEventsFilter,
  IEvents,
};
