import { IPost } from '@shared/interfaces/posts';
import { AxiosResponse } from 'axios';

interface IDepartment {
  departmentID: number;
  name: string;
  posts: IPost[];
}

type IDepartmentDto = AxiosResponse<IDepartment[]>;

export type { IDepartment, IDepartmentDto };
