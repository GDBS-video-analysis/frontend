export const getRouteWithId = (url: string, param: string, id: number) => {
  return url.replace(':' + param, id.toString());
};
