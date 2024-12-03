import { EPaginationDefaultValues } from '@/app/shared/enums/constants/pagination';
import {
  IEmployeeFilter,
  IEmployeesDto,
} from '@/app/shared/interfaces/employee';
import { Injectable } from '@angular/core';
import { random, times } from 'lodash';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getEmployees(
    params: IEmployeeFilter,
    page?: number
  ): Observable<IEmployeesDto> {
    return new Observable((sub) => {
      setTimeout(() => {
        sub.next({
          data: times(EPaginationDefaultValues.PAGE_SIZE, (n) => ({
            employee_id: random(200, 1000).toString(),
            firstname: 'Jhon',
            lastname: 'Doe' + random(10, 100),
            patronymic: 'Jhon',
            post: {
              post_id: '123456',
              name: 'Уборщик общественных территорий',
              department_id: 1,
            },
            biometrics: '',
            is_deleted: false,
            email: 'JhonDoe@gmail.com',
          })),
          pagination: {
            itemsCount: 67,
            page: page ?? 1,
          },
        });
      }, 500);
    });
  }
}
