import { EEmployeeQueryParams } from '@shared/enums/params/employee';
import { EEventQueryParams } from '@shared/enums/params/events';
import { EUnregisterPersonQueryParams } from '@shared/enums/params/unregister-person';

export enum ERoutes {
  EMPLOYEES = '/employees',
  NEW_EMPLOYEE = `${EMPLOYEES}/new`,
  EMPLOYEE = `${EMPLOYEES}/:${EEmployeeQueryParams.EMPLOYEE_ID}`,
  EDIT_EMPLOYEE = `${EMPLOYEES}/:${EEmployeeQueryParams.EMPLOYEE_ID}/edit`,

  EVENTS = '/events',
  EVENT = `${EVENTS}/:${EEventQueryParams.eventId}`,
  EVENT_STATISTICS = `${EVENTS}/:${EEventQueryParams.eventId}/statistics`,
  EVENT_DASHBOARD = `${EVENTS}/:${EEventQueryParams.eventId}/dashboard`,
  EVENT_EMPLOYEE = `${EVENT_STATISTICS}/:${EEmployeeQueryParams.EMPLOYEE_ID}`,

  UNREGISTER_PERSON = `${EVENT_STATISTICS}/unregister/:${EUnregisterPersonQueryParams.UNREGISTER_PERSON_ID}`,

  UNFOUND = '/404',
}
