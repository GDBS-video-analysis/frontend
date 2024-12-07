import { useNewEmployeePresenter } from "@entities/case/employees/new/presenter";
import { NewEmployeeForm } from "@features/forms/employees/new";
import { Button } from "@shared/components/common/button";
import { Loader } from "@shared/components/common/loader";
import { useDeparmentsContext } from "@shared/services/departments-provider/hook";
import { usePostsContext } from "@shared/services/posts-provider/hook";
import { ReactNode } from "react";

const NewEmployeePage = (): ReactNode => {
  const { data: departments, isLoading: isDepartmentLoading } =
    useDeparmentsContext();
  const { data: posts, isLoading: isPostsLoading } = usePostsContext();
  const { form, handleSubmit, isPending } = useNewEmployeePresenter();

  return (
    <Loader isLoading={isDepartmentLoading || isPostsLoading || isPending}>
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h1 className="font-bold text-[42px] text-gray-90">Новый сотрудник</h1>
        <div className="bg-default-white p-4">
<<<<<<< HEAD
          {departments && posts && (
            <NewEmployeeForm
=======
          <PhotoNewEmployeePartForm form={form} />
        </div>
        <div className="bg-default-white p-4">
          {departments && posts && (
            <PersonalDataNewEmployeePartForm
>>>>>>> f4c09d4be708dab4e9b886d3d5af7d5693c62017
              departments={departments}
              posts={posts}
              form={form}
            />
          )}
          <Button className="mt-4" type="submit">
            Добавить сотрудника
          </Button>
        </div>
      </form>
    </Loader>
  );
};

export default NewEmployeePage;
