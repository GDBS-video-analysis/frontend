import { useGetDepartmentsPresenter } from "@entities/case/departments/presenter";
import { Button } from "@shared/components/common/button";
import { Select } from "@shared/components/common/select";
import { TextFiled } from "@shared/components/common/text-filed";
import { IEditEmployeePort } from "@shared/interfaces/employees";
import { IIsPending } from "@shared/interfaces/helper-interfaces";
import { BaseSyntheticEvent } from "react";
import { UseFormReturn } from "react-hook-form";

interface IUpdateEmployeeFormProps extends IIsPending {
  form: UseFormReturn<IEditEmployeePort>;
  handleSubmmit(e?: BaseSyntheticEvent): void;
}

export const UpdateEmployeeForm = ({
  form,
  handleSubmmit,
  isPending,
}: IUpdateEmployeeFormProps) => {
  const {
    register,
    formState: { errors },
  } = form;
  const {
    departmentsSelectOptions,
    postsSelectOptions,
    handleDepartmentChange,
  } = useGetDepartmentsPresenter({});

  return (
    <form onSubmit={handleSubmmit} className="p-4 bg-default-white">
      <h3 className="text-lg text-gray-90 font-bold mb-6">
        Персональные данные
      </h3>
      <section className="flex flex-col w-[616px] gap-4">
        <TextFiled
          label="Имя"
          required={true}
          placeholder="Введите имя"
          error={errors.firstName?.message}
          disabled={isPending}
          {...register("firstName")}
        />
        <TextFiled
          label="Фамилия"
          required={true}
          placeholder="Введите фамилию"
          error={errors.lastName?.message}
          disabled={isPending}
          {...register("lastName")}
        />
        <TextFiled
          label="Отчество"
          placeholder="Введите отчество"
          error={errors.patronymic?.message}
          disabled={isPending}
          {...register("patronymic")}
        />
        <Select
          label="Подразделение"
          required={true}
          options={departmentsSelectOptions}
          disabled={isPending}
          onChange={handleDepartmentChange}
        />
        <p className="text-xs text-gray-90">
          *Перед выбором должности выберите подразделение
        </p>
        <Select
          label="Должность"
          required={true}
          options={postsSelectOptions}
          error={errors.postID?.message}
          disabled={isPending}
          {...register("postID")}
        />
        <TextFiled
          label="Телефон"
          placeholder="Введите телефон"
          required={true}
          error={errors.phone?.message}
          disabled={isPending}
          {...register("phone")}
        />
        <Button type="submit" disabled={isPending} className="w-fit">
          Сохранить{isPending && "..."}
        </Button>
      </section>
    </form>
  );
};
