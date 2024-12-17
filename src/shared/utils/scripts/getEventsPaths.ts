import { EEmployeeQueryParams } from '@shared/enums/params/employee';
import { EEventQueryParams } from '@shared/enums/params/events';
import { ERoutes } from '@shared/enums/routes';
import { getRouteWithId } from '@shared/utils/scripts/getRouteWithId';

export const getEventsPaths = (
  path: ERoutes,
  eventId: number,
  employeeId: number
) => {
  const part = getRouteWithId(path, EEventQueryParams.eventId, eventId);
  return getRouteWithId(part, EEmployeeQueryParams.EMPLOYEE_ID, employeeId);
};
