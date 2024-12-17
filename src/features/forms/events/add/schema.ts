import { object, string } from 'yup';

export const addEventFormSchema = object().shape({
  name: string().required('Введите имя'),
  date: string().required('Введите дату'),
  time: string().required('Введите время'),
  description: string(),
});
