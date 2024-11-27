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

  getEmployees(params: IEmployeeFilter): Observable<IEmployeesDto> {
    return new Observable((sub) => {
      setTimeout(() => {
        sub.next({
          data: times(random(3, 7), (n) => ({
            employee_id: n.toString(),
            firstname: 'Jhon',
            lastname: 'Doe',
            patronymic: 'Jhon',
            post_id: 1,
            biometrics: '',
            is_deleted: false,
            email: 'JhonDoe@gmail.com',
          })),
          pagination: {
            itemsCount: 150,
            page: params.page ?? 1,
          },
        });
      }, 500);
    });
  }
}
