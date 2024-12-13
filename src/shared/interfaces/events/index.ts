import { IEmployee } from '@shared/interfaces/employees';
import { IFile } from '@shared/interfaces/file';
import { AxiosResponse } from 'axios';

interface IEvent {
  visitorsCount: number;
  eventID: number;
  dateTime: string;
  description?: string;
  videoFile: boolean;
  name: string;
}

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
  presentEmployees: IEmployee[];
  absentEmployees: IEmployee[];
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
};
