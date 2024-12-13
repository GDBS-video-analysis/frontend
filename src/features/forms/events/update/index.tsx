import { Button } from "@shared/components/common/button";
import { DatetimeFiled } from "@shared/components/common/date-time";
import { TextAreaFiled } from "@shared/components/common/text-area";
import { TextFiled } from "@shared/components/common/text-filed";
import { IUpdateEventFormPort } from "@shared/interfaces/events";
import { UseFormReturn } from "react-hook-form";

interface IUpdateEventFormProps {
  form: UseFormReturn<IUpdateEventFormPort>;
  isDisabled: boolean;
  handleSubmit(e?: React.BaseSyntheticEvent): Promise<void>;
}

export const UpdateEventForm = ({
  form,
  isDisabled,
  handleSubmit,
}: IUpdateEventFormProps) => {
  const {
    register,
    formState: { errors },
  } = form;
  return (
    <form className="grid gap-4 grid-cols-2 row-auto" onSubmit={handleSubmit}>
      <input hidden {...register("eventID")} />
      <div className="col-span-2">
        <TextFiled
          label="Название"
          placeholder="Введите название"
          error={errors.name?.message}
          disabled={isDisabled}
          {...register("name")}
        />
      </div>
      <DatetimeFiled
        type="date"
        label="Дата"
        disabled={isDisabled}
        error={errors.date?.message}
        {...register("date")}
      />
      <DatetimeFiled
        type="time"
        label="Время"
        disabled={isDisabled}
        error={errors.time?.message}
        {...register("time")}
      />
      <div className="col-span-2">
        <TextAreaFiled
          className="h-[96px] grid-cols-2"
          label="Описание"
          placeholder="Введите описание"
          error={errors.description?.message}
          disabled={isDisabled}
          {...register("description")}
        />
      </div>
      {!isDisabled && (
        <Button intent="outlined" className="w-fit" type="submit">
          Сохранить
        </Button>
      )}
    </form>
  );
};
