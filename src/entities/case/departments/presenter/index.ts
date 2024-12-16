import { useGetDepartmentsUseCase } from '@entities/case/departments/use-case';
import { ISelectOption } from '@shared/components/common/select/interface';
import { IDepartmentDto } from '@shared/interfaces/departments';
import { UseQueryResult } from '@tanstack/react-query';
import { useMemo, useState } from 'react';

type IUseGetDepartmentsPresenterReturn = UseQueryResult<IDepartmentDto> & {
  departmentsSelectOptions: ISelectOption[];
  postsSelectOptions: ISelectOption[];
  handleDepartmentChange(e: React.FormEvent<HTMLSelectElement>): void;
};

export const useGetDepartmentsPresenter =
  (): IUseGetDepartmentsPresenterReturn => {
    const [selectedDepartment, setSelectedDepartment] = useState<number>();

    const response = useGetDepartmentsUseCase();

    const handleDepartmentChange = (e: React.FormEvent<HTMLSelectElement>) => {
      setSelectedDepartment(Number(e.currentTarget.value));
    };

    const departmentsSelectOptions: ISelectOption[] = useMemo(
      () =>
        response.data
          ? response.data?.data.map((department) => ({
              label: department.name,
              value: department.departmentID.toString(),
            }))
          : [],
      [response]
    );

    const postsSelectOptions: ISelectOption[] = useMemo(() => {
      const department = response.data?.data.find(
        (department) => department.departmentID === selectedDepartment
      );
      if (department)
        return department?.posts.map((post) => ({
          label: post.name,
          value: post.postID.toString(),
        }));
      return [];
    }, [response, selectedDepartment]);

    return {
      postsSelectOptions,
      departmentsSelectOptions,
      handleDepartmentChange,
      ...response,
    };
  };
