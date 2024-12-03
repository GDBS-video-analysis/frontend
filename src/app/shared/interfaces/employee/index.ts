import {
  IDefaultCollectionResponse,
  IPaginationFilter,
  IPaginationForm,
} from '@/app/shared/interfaces/helper-interface';
import { IPost } from '@/app/shared/interfaces/post';
import { Form, FormControl, FormGroup } from '@angular/forms';

interface IEmployee {
  employee_id: string;
  post?: IPost;
  lastname: string;
  firstname: string;
  patronymic?: string;
  biometrics: string;
  is_deleted: boolean;
  email: string;
}

interface IEmployeeFilter {
  fullName: string | null;
  post: string | null;
  departament_id: string | null;
  email: string | null;
}

type IEmployeeFilterForm = FormGroup<{
  fullName: FormControl<string | null>;
  post: FormControl<string | null>;
  email: FormControl<string | null>;
  departament_id: FormControl<string | null>;
}>;

type IEmployeesDto = IDefaultCollectionResponse<IEmployee[]>;

export { IEmployee, IEmployeeFilter, IEmployeeFilterForm, IEmployeesDto };
