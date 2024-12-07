import { EEmployeeQueryParams } from '@shared/enums/params/employee';
import { EEventQueryParams } from '@shared/enums/params/employee/events';

export enum ERoutes {
  EMPLOYEES = '/employees',
  NEW_EMPLOYEE = `${EMPLOYEES}/new`,
  EMPLOYEE = `${EMPLOYEES}/:${EEmployeeQueryParams.EMPLOYEE_ID}`,

  EVENTS = '/events',
  EVENT = `${EVENTS}/:${EEventQueryParams.eventId}`,

  UNFOUND = '/404',
}
