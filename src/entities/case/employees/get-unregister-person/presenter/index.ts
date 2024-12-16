import { useGetUnregisterPersonUseCase } from '@entities/case/employees/get-unregister-person/use-case';
import { IUnregisterPersonDto } from '@shared/interfaces/employees';
import { IEventIdQueryParams } from '@shared/interfaces/params/event';
import { IUnregisterPersonIdQueryParams } from '@shared/interfaces/params/unregister-person';
import { UseQueryResult } from '@tanstack/react-query';

import { useParams } from 'react-router-dom';
type IUseGetUnregisterPersonPresenterReturn =
  UseQueryResult<IUnregisterPersonDto> & {
    port: IEventIdQueryParams & IUnregisterPersonIdQueryParams;
  };

export const useGetUnregisterPersonPresenter =
  (): IUseGetUnregisterPersonPresenterReturn => {
    const port = useParams() as unknown as IEventIdQueryParams &
      IUnregisterPersonIdQueryParams;

    const response = useGetUnregisterPersonUseCase(port);

    return {
      port,
      ...response,
    };
  };
