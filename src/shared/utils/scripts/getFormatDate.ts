import { getDecimal } from '@shared/utils/scripts/getDecimal';

export const getFormatDate = (date: string) => {
  const objDate = new Date(date);
  return {
    date: `${getDecimal(objDate.getDate())}.${getDecimal(
      objDate.getMonth()
    )}.${getDecimal(objDate.getFullYear())}`,
    time: `${getDecimal(objDate.getHours())}:${getDecimal(
      objDate.getMinutes()
    )}`,
  };
};
