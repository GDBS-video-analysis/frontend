import { mixed, number, object, string } from 'yup';

export const newEmployeeSchema = object().shape({
  name: string().required('Введите имя'),
  lastname: string().required('Введите фамилию'),
  patronymic: string(),
  postId: number()
    .required('Выберите должность')
    .typeError('Выберите должность'),
  photo: mixed<FileList>()
    .required('Выберите фото')
    .test('required', 'Выберите фото', (files?: FileList) =>
      files ? files.length > 0 : false
    ),
});
