import { number, object, string } from 'yup';

export const updateEventFormSchema = object().shape({
  eventID: number().required(),
  name: string().required('Введите название'),
  date: string().required('Введите дату'),
  time: string().required('Введите время'),
  description: string(),
});
