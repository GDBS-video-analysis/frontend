import { useGetEmployeePresenter } from "@entities/case/employees/get-employee/presenter";
import { useGetEmployeeVisitHistoryPresenter } from "@entities/case/employees/get-visit-history/presenter";
import { Backarrow } from "@shared/components/backarrow";
import { Loader } from "@shared/components/common/loader";
import { EmployeeCard } from "@shared/components/employee-card";
import { ERoutes } from "@shared/enums/routes";
import { VisitHistoryTable } from "@widgets/tables/employees/visit-history";

const EmployeePage = () => {
  const { data: employee, isLoading: isEmployeeLoading } =
    useGetEmployeePresenter();
  const { data: visitHistory, isLoading: isVisitHistoryLoading } =
    useGetEmployeeVisitHistoryPresenter();
  return (
    <Loader isLoading={isEmployeeLoading || isVisitHistoryLoading}>
      <div className="text-gray-90">
        <Backarrow label="Реестр сотрудников" to={ERoutes.EMPLOYEES} />
        {employee && (
          <>
            <h1 className="text-[42px] mb-6  font-bold">Профиль сотрудника </h1>
            <section className="p-4 border border-gray-20 bg-default-white">
              <EmployeeCard
                employee={employee}
                button={{ label: "Изменить", handleClick: () => {} }}
              />
            </section>
          </>
        )}
        {visitHistory && (
          <>
            <section className="text-gray-90 bg-default-white p-4 border border-gray-2 mt-6">
              <h2 className="text-lg  font-bold mb-6">История посещаемости</h2>
              {visitHistory.length > 0 ? (
                <VisitHistoryTable visitHistory={visitHistory} />
              ) : (
                <p className="text-gray-90">Здесь пока ничего нет</p>
              )}
            </section>
          </>
        )}
      </div>
    </Loader>
  );
};

export default EmployeePage;
