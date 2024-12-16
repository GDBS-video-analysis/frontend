import { useGetExpectedEmployeesUseCase } from '@entities/case/employees/get-expected-employees/use-case';
import { QuantityPerPage } from '@shared/constants/pagination';
import { IEmployee, IEmployeeFilter } from '@shared/interfaces/employees';
import { omit } from 'lodash';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export const useGetExpectedEmployeesPresenter = () => {
  const [port, setPort] = useState<IEmployeeFilter>({
    page: 1,
    quantityPerPage: QuantityPerPage,
  });
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const { data } = useGetExpectedEmployeesUseCase(port);

  const form = useForm<IEmployeeFilter>({ defaultValues: port });

  const handleOnChangeVisibility = (isVisible: boolean) => {
    if (data && isVisible) {
      if (data.data.count > data.data.page * QuantityPerPage) {
        setPort((prev) => {
          const { page, ...rest } = prev;
          return { page: page ? page + 1 : 1, ...rest };
        });
      }
    }
  };

  useEffect(() => {
    const { unsubscribe } = form.watch((data) => {
      setEmployees([]);
      setPort({ page: 1, ...omit(data, 'page') });
    });

    if (data) {
      setEmployees((prev) => {
        return [
          ...prev,
          ...data.data.nodes.filter(
            (emp) => !prev.some((p) => p.employeeID === emp.employeeID)
          ),
        ];
      });
    }

    return () => {
      //observer.disconnect();
      unsubscribe();
    };
  }, [data]);

  return {
    employees,
    form,
    handleOnChangeVisibility,
  };
};
