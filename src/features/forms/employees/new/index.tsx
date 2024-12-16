import { useGetDepartmentsPresenter } from "@entities/case/departments/presenter";
import { Select } from "@shared/components/common/select";
import { TextFiled } from "@shared/components/common/text-filed";
import { INewEmployeePort } from "@shared/interfaces/employees";
import { UseFormReturn } from "react-hook-form";

interface INewEmployeeFormProps {
  form: UseFormReturn<INewEmployeePort>;
}

export const NewEmployeeForm = ({ form }: INewEmployeeFormProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  const {
    departmentsSelectOptions,
    postsSelectOptions,
    handleDepartmentChange,
  } = useGetDepartmentsPresenter();

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
          error={errors.lastName?.message}
          {...register("lastName")}
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
