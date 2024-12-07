import { Select } from "@shared/components/common/select";
import { ISelectOption } from "@shared/components/common/select/interface";
import { TextFiled } from "@shared/components/common/text-filed";
import { IDepartment } from "@shared/interfaces/departments";
import { INewEmployeePort } from "@shared/interfaces/employees";
import { IPost } from "@shared/interfaces/posts";
import { useMemo, useState } from "react";
import { UseFormReturn } from "react-hook-form";

interface INewEmployeeFormProps {
  departments: IDepartment[];
  posts: IPost[];
  form: UseFormReturn<INewEmployeePort>;
}

export const NewEmployeeForm = ({
  departments,
  posts,
  form,
}: INewEmployeeFormProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  const [selectedDepartment, setSelectedDepartment] = useState<
    number | undefined
  >();

  const departmentsSelectOptions: ISelectOption[] = useMemo(
    () =>
      departments.map((x) => ({
        label: x.name,
        value: x.departmentId,
      })),
    [departments]
  );

  const postsSelectOptions: ISelectOption[] = useMemo(
    () =>
      posts
        .filter((x) => x.departmentId === selectedDepartment)
        .map((x) => ({ label: x.name, value: x.postId })),
    [posts, selectedDepartment]
  );

  const onDepartmentChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setSelectedDepartment(Number(e.currentTarget.value));
  };

  return (
    <div className="w-[616px]">
      <h1 className="mb-6 text-lg font-bold text-gray-90">
        Персональные данные
      </h1>
      <div className="flex flex-col gap-4">
        <TextFiled
          label="Имя"
          required={true}
          placeholder="Введите имя"
          error={errors.firstName?.message}
          {...register("firstName")}
        />
        <TextFiled
          label="Фамилия"
          required={true}
          placeholder="Введите фамилию"
          error={errors.lastname?.message}
          {...register("lastname")}
        />
        <TextFiled
          label="Отчество"
          placeholder="Введите отчество"
          error={errors.patronymic?.message}
          {...register("patronymic")}
        />
        <Select
          label="Подразделение"
          required={true}
          options={departmentsSelectOptions}
          onChange={onDepartmentChange}
        />
        <p className="text-xs text-gray-90">
          *Перед выбором должности выберите подразделение
        </p>
        <Select
          label="Должность"
          required={true}
          options={postsSelectOptions}
          error={errors.postID?.message}
          {...register("postID")}
        />
        <TextFiled
          label="Телефон"
          placeholder="Введите телефон"
          required={true}
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>
    </div>
  );
};
