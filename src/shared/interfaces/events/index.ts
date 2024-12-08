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
}

type ISingleEventDto = AxiosResponse<ISingleEvent>;

export type {
  IEvent,
  IUpdateEventPort,
  ISingleEvent,
  ISingleEventDto,
  IUpdateEventFormPort,
};
