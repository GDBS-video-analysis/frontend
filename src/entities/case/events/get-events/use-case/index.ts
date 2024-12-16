import { getEvents } from '@entities/slice/events';
import { EQueryKeys } from '@shared/enums/query-keys';
import { IEventsDto, IEventsFilter } from '@shared/interfaces/events';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const useGetEventsUseCase = (
  port: IEventsFilter
): UseQueryResult<IEventsDto> => {
  const callback = async () => {
    return getEvents(port);
  };

  return useQuery({
    queryKey: [EQueryKeys.GET_EVENTS, port],
    queryFn: callback,
  });
};
