import { Button } from "@shared/components/common/button";
import { DatetimeFiled } from "@shared/components/common/date-time";
import { TextAreaFiled } from "@shared/components/common/text-area";
import { TextFiled } from "@shared/components/common/text-filed";
import { IAddEventPort } from "@shared/interfaces/events";
import { IIsPending } from "@shared/interfaces/helper-interfaces";
import { BaseSyntheticEvent } from "react";
import { UseFormReturn } from "react-hook-form";

interface IAddEventFormProps extends IIsPending {
  form: UseFormReturn<IAddEventPort>;
  handleSubmit(e?: BaseSyntheticEvent): void;
}

export const AddEventForm = ({
  form,
  handleSubmit,
  isPending,
}: IAddEventFormProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <form className="grid gap-4 grid-cols-2 row-auto" onSubmit={handleSubmit}>
      <div className="col-span-2">
        <TextFiled
          label="Название"
          placeholder="Введите название"
          error={errors.name?.message}
          disabled={isPending}
          {...register("name")}
        />
      </div>
      <DatetimeFiled
        type="date"
        label="Дата"
        disabled={isPending}
        error={errors.date?.message}
        {...register("date")}
      />
      <DatetimeFiled
        type="time"
        label="Время"
        disabled={isPending}
        error={errors.time?.message}
        {...register("time")}
      />
      <div className="col-span-2">
        <TextAreaFiled
          className="h-[96px] grid-cols-2"
          label="Описание"
          placeholder="Введите описание"
          error={errors.description?.message}
          disabled={isPending}
          {...register("description")}
        />
      </div>
      <Button className="w-fit" type="submit" disabled={isPending}>
        Сохранить{isPending && "..."}
      </Button>
    </form>
  );
};
