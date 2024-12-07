interface INewEmployeePort {
  name: string;
  lastname: string;
  patronymic?: string;
  postId: number;
  photo: FileList;
}

export type { INewEmployeePort };
