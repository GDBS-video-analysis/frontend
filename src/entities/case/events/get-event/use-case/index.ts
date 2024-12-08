import { getEvent } from '@entities/slice/events';
import { EQueryKeys } from '@shared/enums/query-keys';
import { ISingleEventDto } from '@shared/interfaces/events';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const useGetEventUseCase = (
  eventId: number
): UseQueryResult<ISingleEventDto> => {
  const callback = async () => {
    return getEvent(eventId);
  };

  return useQuery({
    queryKey: [EQueryKeys.GET_EVENT],
    queryFn: callback,
  });
};
