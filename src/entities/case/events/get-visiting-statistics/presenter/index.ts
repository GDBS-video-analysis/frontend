import { useGetEventVisitingStatisticsUseCase } from '@entities/case/events/get-visiting-statistics/use-case';
import { IEventVisitingStatistics } from '@shared/interfaces/events';
import { ILoading } from '@shared/interfaces/helper-interfaces';
import { IEventIdQueryParams } from '@shared/interfaces/params/event';
import { useParams } from 'react-router-dom';

interface IUseGetEventVisitingStatisticsPresenterReturn extends ILoading {
  data: IEventVisitingStatistics | undefined;
}

export const useGetEventVisitingStatisticsPresenter =
  (): IUseGetEventVisitingStatisticsPresenterReturn => {
    const { eventId } = useParams() as unknown as IEventIdQueryParams;
    const { data, isLoading } = useGetEventVisitingStatisticsUseCase(eventId);

    return { data: data?.data, isLoading };
  };
