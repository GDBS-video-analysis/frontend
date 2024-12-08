import { ISingleEvent, ISingleEventDto } from '@shared/interfaces/events';
import { api } from '@shared/lib/api';

const SLUG = '/events';

export const getEvent = (eventId: number): Promise<ISingleEventDto> => {
  return api.get<ISingleEvent>(`${SLUG}/${eventId}`);
};
