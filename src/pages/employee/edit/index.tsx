import { useGetEmployeeForEditPresenter } from "@entities/case/employees/get-for-edit/presenter";
import { useUpdateEmployeePresenter } from "@entities/case/employees/update/presenter";
import { UpdateEmployeeForm } from "@features/forms/employees/update";
import { EditEmployeeBiometryForm } from "@features/forms/employees/update/photo";
import { Loader } from "@shared/components/common/loader";

const EditEmployeePage = () => {
  const { data, isLoading } = useGetEmployeeForEditPresenter();
  const { form, isPending, handleSubmit } = useUpdateEmployeePresenter(
    data?.data
  );

  return (
    <Loader isLoading={isLoading}>
      <div className="flex flex-col gap-6">
        <EditEmployeeBiometryForm biometry={data?.data.biometrics} />
        <UpdateEmployeeForm
          form={form}
          isPending={isPending}
          handleSubmmit={handleSubmit}
        />
      </div>
    </Loader>
  );
};

export default EditEmployeePage;
