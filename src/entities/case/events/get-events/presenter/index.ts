import { useGetEventsUseCase } from '@entities/case/events/get-events/use-case';
import { QuantityPerPage } from '@shared/constants/pagination';
import { EEventQueryParams } from '@shared/enums/params/events';
import { EPaginationQueryParams } from '@shared/enums/params/pagination';
import { ESettings } from '@shared/enums/settings';
import { IEventsDto, IEventsFilter } from '@shared/interfaces/events';
import { UseQueryResult } from '@tanstack/react-query';
import { debounce, omit } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

type IUseGetEventsPresenterReturn = UseQueryResult<IEventsDto> & {
  form: UseFormReturn<IEventsFilter>;
  handlePageChange(page: number): void;
};

export const useGetEventsPresenter = (): IUseGetEventsPresenterReturn => {
  const [params, setParams] = useSearchParams();
  const page = Number(params.get(EPaginationQueryParams.PAGE));
  const [filter, setFilter] = useState<IEventsFilter>({
    quantityPerPage: QuantityPerPage,
    page: !isNaN(page) && page !== 0 ? page : 1,
    search: params.get(EEventQueryParams.search) ?? '',
  });
  const response = useGetEventsUseCase(filter);

  const form = useForm<IEventsFilter>({ defaultValues: filter });

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
    handlePageChange,
    form,
    ...response,
  };
};
