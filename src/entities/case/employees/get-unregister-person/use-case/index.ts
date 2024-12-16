import { getUnregisterPerson } from '@entities/slice/employees';
import { EQueryKeys } from '@shared/enums/query-keys';
import {
  IUnregisterPersonDto,
  IUnregisterPersonPort,
} from '@shared/interfaces/employees';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const useGetUnregisterPersonUseCase = (
  port: IUnregisterPersonPort
): UseQueryResult<IUnregisterPersonDto> => {
  const callback = async () => {
    return getUnregisterPerson(port);
  };

  return useQuery({
    queryKey: [EQueryKeys.GET_UNREGISTER_PERSON],
    queryFn: callback,
  });
};
