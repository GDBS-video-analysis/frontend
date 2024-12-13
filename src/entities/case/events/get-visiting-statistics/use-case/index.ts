import { getEventVisitingStatistics } from '@entities/slice/events';
import { EQueryKeys } from '@shared/enums/query-keys';
import { IEventVisitingStatisticsDto } from '@shared/interfaces/events';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const useGetEventVisitingStatisticsUseCase = (
  eventId: number
): UseQueryResult<IEventVisitingStatisticsDto> => {
  const callback = async () => {
    return getEventVisitingStatistics(eventId);
  };

  return useQuery({
    queryKey: [EQueryKeys.GET_EVENT_VISITING_STATISTICS],
    queryFn: callback,
  });
};
