import { useNewEmployeePresenter } from "@entities/case/employees/new/presenter";
import { NewEmployeeForm } from "@features/forms/employees/new";
import { Button } from "@shared/components/common/button";
import { Loader } from "@shared/components/common/loader";
import { ReactNode } from "react";

const NewEmployeePage = (): ReactNode => {
  const { form, handleSubmit, isPending } = useNewEmployeePresenter();

  return (
    <Loader isLoading={isPending}>
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h1 className="font-bold text-[42px] text-gray-90">Новый сотрудник</h1>
        <div className="bg-default-white p-4">
          <NewEmployeeForm form={form} />

          <Button className="mt-4" type="submit">
            Добавить сотрудника
          </Button>
        </div>
      </form>
    </Loader>
  );
};

export default NewEmployeePage;
