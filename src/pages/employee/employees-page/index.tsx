import { useGetEmployeesPresenter } from "@entities/case/employees/get-employees/presenter";
import { Button } from "@shared/components/common/button";
import { Loader } from "@shared/components/common/loader";
import { Pagination } from "@shared/components/common/pagination";
import { EmployeesTable } from "@widgets/tables/employees";

const EmployeesPage = () => {
  const { form, data, isLoading, handlePageChange } =
    useGetEmployeesPresenter();
  return (
    <div className="flex flex-col gap-6 justify-center">
      <section className="flex justify-between">
        <h1 className="text-gray-90 font-bold text-[42px]">
          Реестр сотрудников
        </h1>
        <Button>Добавить сотрудника</Button>
      </section>

      <Loader isLoading={isLoading}>
        {data && (
          <>
            <EmployeesTable employees={data.data.nodes} form={form} />
            <Pagination
              handlePageClick={handlePageChange}
              page={data.data.page}
              count={data.data.count}
            />
          </>
        )}
      </Loader>
    </div>
  );
};

export default EmployeesPage;
