import { ERoutes } from '@shared/enums/routes';

export const getRouteWithId = (url: ERoutes, param: string, id: number) => {
  return url.replace(':' + param, id.toString());
};
