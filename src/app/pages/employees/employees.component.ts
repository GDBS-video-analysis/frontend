import { EmployeeService } from '@/app/entities/employee-service/employee.service';
import { ButtonComponent } from '@/app/shared/components/common/button/button.component';
import { InputComponent } from '@/app/shared/components/common/input/input.component';
import { LoaderComponent } from '@/app/shared/components/common/loader/loader.component';
import { PaginationComponent } from '@/app/shared/components/common/pagination/pagination.component';
import { EEmployeeFilterParams } from '@/app/shared/enums/constants/employee';
import { EPaginationParams } from '@/app/shared/enums/constants/pagination';
import {
  IEmployee,
  IEmployeeFilterForm,
  IEmployeesDto,
} from '@/app/shared/interfaces/employee';
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    NgIf,
    ButtonComponent,
    LoaderComponent,
    InputComponent,
    FormsModule,
    NgFor,
    ReactiveFormsModule,
    PaginationComponent,
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  employees: IEmployeesDto | undefined;
  form: IEmployeeFilterForm;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      fullName: new FormControl<string>(''),
      post: new FormControl<string>(''),
      email: new FormControl<string>(''),
      departament_id: new FormControl<string>(''),
      page: new FormControl<number>(1),
    });

    route.queryParams.subscribe((params) => {
      this.form.controls.fullName.patchValue(
        params[EEmployeeFilterParams.FULL_NAME] ?? ''
      );
      this.form.controls.email.patchValue(
        params[EEmployeeFilterParams.EMIAL] ?? ''
      );
      this.form.controls.departament_id.patchValue(
        params[EEmployeeFilterParams.DEPARTAMENT_ID] ?? ''
      );
      this.form.controls.post.patchValue(
        params[EEmployeeFilterParams.POST] ?? ''
      );
      this.form.controls.page.patchValue(
        Number(params[EPaginationParams.PAGE] ?? 1)
      );

      this.employeeService
        .getEmployees(this.form.getRawValue())
        .subscribe((data) => {
          this.employees = data;
        });
    });

    this.form.valueChanges.pipe(debounceTime(500)).subscribe(() => {
      this.updateQueryParams();
    });
  }

  getFullName(employee: IEmployee) {
    return `${employee.firstname} ${employee.patronymic} ${employee.lastname}`;
  }

  updateQueryParams(): void {
    this.router.navigate([], {
      queryParams: this.form.getRawValue(),
      queryParamsHandling: 'merge',
    });
  }
}
