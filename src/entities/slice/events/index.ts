import {
  IEvents,
  IEventsDto,
  IEventsFilter,
  IEventVisitingStatistics,
  IEventVisitingStatisticsDto,
  IExpectedEmployeesPort,
  ISingleEvent,
  ISingleEventDto,
  IUpdateEventPort,
  IUploadEventVideoFilePort,
} from '@shared/interfaces/events';
import { api } from '@shared/lib/api';
import { AxiosResponse } from 'axios';

const SLUG = '/events';

export const getEvent = (eventId: number): Promise<ISingleEventDto> => {
  return api.get<ISingleEvent>(`${SLUG}/${eventId}`);
};

export const updateEvent = ({
  eventID,
  ...body
}: IUpdateEventPort): Promise<AxiosResponse<void>> => {
  return api.put(`${SLUG}/$${eventID}`, body);
};

export const getEventVisitingStatistics = (
  eventId: number
): Promise<IEventVisitingStatisticsDto> => {
  return api.get<IEventVisitingStatistics>(
    `${SLUG}/${eventId}/visitingStatistics`
  );
};

export const putExpectedEmployess = ({
  eventId,
  employeesIds,
}: IExpectedEmployeesPort): Promise<AxiosResponse<void>> => {
  return api.put(`${SLUG}/$${eventId}/expectedEmployees`, employeesIds);
};

export const deleteEventVideoFile = (eventId: number): Promise<void> => {
  return api.delete(`${SLUG}/${eventId}/videoFile`);
};

export const uploadEventVideoFile = ({
  eventId,
  videoFile,
}: IUploadEventVideoFilePort): Promise<void> => {
  const formData = new FormData();
  formData.append('videoFile', videoFile[0]);
  return api.post(`${SLUG}/$${eventId}/videoFile`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const deleteEvent = (eventId: number): Promise<void> => {
  return api.delete(`${SLUG}/${eventId}`);
};

export const getEvents = (params: IEventsFilter): Promise<IEventsDto> => {
  return api.get<IEvents>(`${SLUG}/events`, { params });
};
