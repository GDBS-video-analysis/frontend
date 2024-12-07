import { EEmployeeQueryParams } from '@shared/enums/params/employee';

export enum ERoutes {
  EMPLOYEES = '/employees',
  NEW_EMPLOYEE = `${EMPLOYEES}/new`,
  EMPLOYEE = `${EMPLOYEES}/:${EEmployeeQueryParams.EMPLOYEE_ID}`,

  EVENTS = '/events',

  UNFOUND = '/404',
}
