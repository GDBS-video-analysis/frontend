import { IEmployee } from '@/app/shared/interfaces/employee';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName',
  standalone: true,
})
export class FullNamePipe implements PipeTransform {
  transform(value: IEmployee, args?: any): string {
    return `${value.firstname} ${value.patronymic} ${value.lastname}`;
  }
}
