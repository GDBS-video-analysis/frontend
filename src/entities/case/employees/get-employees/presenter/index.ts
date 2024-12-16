import { useGetExpectedEmployeesUseCase } from '@entities/case/employees/get-expected-employees/use-case';
import { QuantityPerPage } from '@shared/constants/pagination';
import { EEmployeeQueryParams } from '@shared/enums/params/employee';
import { EPaginationQueryParams } from '@shared/enums/params/pagination';
import { ESettings } from '@shared/enums/settings';
import { IEmployeeFilter } from '@shared/interfaces/employees';
import { debounce, omit } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

export const useGetEmployeesPresenter = () => {
  const [params, setParams] = useSearchParams();
  const [filter, setFilter] = useState<IEmployeeFilter>({
    quantityPerPage: QuantityPerPage,
    page: !isNaN(Number(params.get(EPaginationQueryParams.PAGE)))
      ? Number(params.get(EPaginationQueryParams.PAGE))
      : 1,
    searchName: params.get(EEmployeeQueryParams.SEARCH_NAME) ?? '',
    searchPost: params.get(EEmployeeQueryParams.SEARCH_POST) ?? '',
    searchDepartment: params.get(EEmployeeQueryParams.SEARCH_DEPARTMENT) ?? '',
  });

  const { data, isLoading } = useGetExpectedEmployeesUseCase(filter);

  const form = useForm<IEmployeeFilter>({ defaultValues: filter });

  const debouncedHandler = useMemo(() => {
    return debounce((value): void => {
      value.page = 1;
      setFilter(value);
      setParams(new URLSearchParams(Object.entries(value)));
    }, ESettings.DEBAUNCE_DELAY);
  }, []);

  const handlePageChange = (page: number) => {
    const newFilter = { page, ...omit(filter, 'page') };
    setParams(
      new URLSearchParams(
        Object.entries(newFilter).map(([key, value]) => [key, value.toString()])
      )
    );
    setFilter(newFilter);
  };

  useEffect(() => {
    const subscription = form.watch(debouncedHandler);

    return () => {
      debouncedHandler.cancel();
      subscription.unsubscribe();
    };
  }, [form]);

  return {
    form,
    isLoading,
    data,
    handlePageChange,
  };
};
