import { useGetEventEmployeePresenter } from "@entities/case/employees/get-event-employee/presenter";
import { Backarrow } from "@shared/components/backarrow";
import { Accordion } from "@shared/components/common/accordion";
import { Loader } from "@shared/components/common/loader";
import { EmployeeCard } from "@shared/components/employee-card";
import { EEventQueryParams } from "@shared/enums/params/events";
import { ERoutes } from "@shared/enums/routes";
import { getRouteWithId } from "@shared/utils/scripts/getRouteWithId";
import { VideoMarksTable } from "@widgets/tables/employees/video-marks";

const EventEmployeePage = () => {
  const { data, isLoading, port, handleButtonClick } =
    useGetEventEmployeePresenter();
  return (
    <Loader isLoading={isLoading}>
      {data && (
        <div className="flex flex-col gap-6 text-gray-90">
          <section>
            <Backarrow
              to={getRouteWithId(
                ERoutes.EVENT_STATISTICS,
                EEventQueryParams.eventId,
                port.eventId
              )}
              label="Статистика посещения"
            />
            <h1 className="text-gray-90 font-bold text-[42px]">
              {data.data.isPresent
                ? "Запланированный посетитель"
                : "Незапланированный посетитель"}
            </h1>
          </section>

          <section className="p-4 border border-gray-20 bg-default-white">
            <EmployeeCard
              employee={data.data.employee}
              button={{
                label: "Открыть профиль",
                handleClick: handleButtonClick,
              }}
            />
          </section>
          <section className="bg-default-white p-4">
            <Accordion header="Временные метки">
              <VideoMarksTable videoMarks={data.data.videoMarks} />
            </Accordion>
          </section>
        </div>
      )}
    </Loader>
  );
};

export default EventEmployeePage;
