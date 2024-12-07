import { phoneRegExp } from '@shared/constants/reg-exps';
import { number, object, string } from 'yup';

export const newEmployeeSchema = object().shape({
  firstName: string().required('Введите имя'),
  lastname: string().required('Введите фамилию'),
  patronymic: string(),
  postID: number()
    .required('Выберите должность')
    .typeError('Выберите должность'),
  phone: string()
    .required('Введите номер телефона')
    .matches(phoneRegExp, 'Неправильный формат номера'),
});
