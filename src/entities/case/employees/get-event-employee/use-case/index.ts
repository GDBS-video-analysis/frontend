import { getEventEmployee } from '@entities/slice/employees';
import { EQueryKeys } from '@shared/enums/query-keys';
import {
  IEventEmployeeDto,
  IEventEmployeePort,
} from '@shared/interfaces/employees';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const useGetEventEmployeeUseCase = (
  port: IEventEmployeePort
): UseQueryResult<IEventEmployeeDto> => {
  const callback = async () => {
    return getEventEmployee(port);
  };

  return useQuery({
    queryKey: [EQueryKeys.GET_EVENT_EMPLOYEE],
    queryFn: callback,
  });
};
