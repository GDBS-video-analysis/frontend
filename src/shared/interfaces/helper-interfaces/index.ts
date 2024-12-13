interface ILoading {
  isLoading: boolean;
}

interface IIsPending {
  isPending: boolean;
}

interface IPaginationFilter {
  page?: number;
  quantityPerPage?: number;
}

interface IResponseWithPagination<T> {
  page: number;
  count: number;
  nodes: T[];
}

export type {
  ILoading,
  IPaginationFilter,
  IResponseWithPagination,
  IIsPending,
};
