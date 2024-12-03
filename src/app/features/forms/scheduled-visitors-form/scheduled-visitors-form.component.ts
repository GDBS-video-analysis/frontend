import { EmployeeService } from '@/app/entities/employee-service/employee.service';
import { AvatarComponent } from '@/app/shared/components/avatar/avatar.component';
import { ButtonComponent } from '@/app/shared/components/common/button/button.component';
import { InputComponent } from '@/app/shared/components/common/input/input.component';
import {
  IEmployee,
  IEmployeeFilterForm,
} from '@/app/shared/interfaces/employee';
import { FullNamePipe } from '@/app/shared/utils/pipes/fullNamePipe';
import { NgFor, NgIf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-scheduled-visitors-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FullNamePipe,
    NgFor,
    NgIf,
    InputComponent,
    ButtonComponent,
    AvatarComponent,
  ],
  templateUrl: './scheduled-visitors-form.component.html',
  styleUrl: './scheduled-visitors-form.component.css',
})
export class ScheduledVisitorsFormComponent implements OnInit, AfterViewInit {
  form: IEmployeeFilterForm;
  employees: IEmployee[] = [];
  selectedEmployees: string[] = [];
  itemsCount = 0;
  observer: IntersectionObserver;
  page: number = 1;
  @Output() onSave = new EventEmitter<string[]>();

  @ViewChild('loadMoreTrigger') loadMoreTrigger: ElementRef | undefined;

  constructor(
    private employeesService: EmployeeService,
    private fb: FormBuilder
  ) {
    this.observer = new IntersectionObserver((entries) => {
      if (
        entries[0].isIntersecting &&
        this.employees.length < this.itemsCount
      ) {
        this.getEmployees(this.page + 1);
      }
    });

    this.form = fb.group({
      fullName: new FormControl<string>(''),
      post: new FormControl<string>(''),
      email: new FormControl<string>(''),
      departament_id: new FormControl<string>(''),
    });

    this.form.valueChanges.pipe(debounceTime(500)).subscribe((data) => {
      this.selectedEmployees = [];
      this.getEmployees();
    });
  }

  getEmployees(page?: number) {
    this.employeesService
      .getEmployees(this.form.getRawValue())
      .subscribe((res) => {
        this.itemsCount = res.pagination.itemsCount;
        this.employees = page ? [...this.employees, ...res.data] : res.data;
      });
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  ngAfterViewInit(): void {
    if (this.loadMoreTrigger)
      this.observer.observe(this.loadMoreTrigger.nativeElement);
  }

  onCheckEmployee(employeeId: string) {
    if (this.selectedEmployees.includes(employeeId))
      this.selectedEmployees.splice(
        this.selectedEmployees.indexOf(employeeId),
        1
      );
    else {
      this.selectedEmployees.push(employeeId);
    }
  }

  onSaveBtnClick() {
    this.onSave.emit(this.selectedEmployees);
    this.form.reset();
    this.getEmployees();
  }
}
