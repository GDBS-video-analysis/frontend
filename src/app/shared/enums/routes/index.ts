import { ERouteParameters } from '@/app/shared/enums/constants/route-params';

export enum ERoutes {
  employees = 'employees',
  events = 'events',
  event = `${ERoutes.events}/:${ERouteParameters.EVENT_ID}`,
}
