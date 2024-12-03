import { time } from 'console';

interface IGetTimeReturn {
  time: string;
  date: string;
}

const getDateAndTimeFromSting = (dateTime: string) => {
  const date = dateTime.split(' ');
  return {
    date: date[0],
    time: date[1],
  };
};

const getStringFromDateAndTime = (date: string, time: string): string => {
  return `${date} ${time}`;
};

export { getDateAndTimeFromSting, getStringFromDateAndTime };
