import { FormControl, FormGroup } from '@angular/forms';

interface IPagination {
  page: number;
  itemsCount: number;
}

interface IPaginationFilter {
  page: number | null;
}

type IPaginationForm = FormGroup<{
  page: FormControl<number | null>;
}>;

interface IDefaultCollectionResponse<T> {
  data: T;
  pagination: IPagination;
}

export { IPaginationFilter, IPaginationForm, IDefaultCollectionResponse };
