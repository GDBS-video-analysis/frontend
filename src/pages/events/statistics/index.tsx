import { useGetEventPresenter } from "@entities/case/events/get-event/presenter";
import { useGetEventVisitingStatisticsPresenter } from "@entities/case/events/get-visiting-statistics/presenter";
import { Backarrow } from "@shared/components/backarrow";
import { Accordion } from "@shared/components/common/accordion";
import { Button } from "@shared/components/common/button";
import { DatetimeFiled } from "@shared/components/common/date-time";
import { Loader } from "@shared/components/common/loader";
import { LocalTabs } from "@shared/components/common/local-tabs";
import { EEventQueryParams } from "@shared/enums/params/events";
import { ERoutes } from "@shared/enums/routes";
import { getFormatDate } from "@shared/utils/scripts/getFormatDate";
import { getRouteWithId } from "@shared/utils/scripts/getRouteWithId";
import { AbsentVisitors } from "@widgets/events/absent-visitors";
import { PresentVisitors } from "@widgets/events/present-visitors";
import { VisitorRowWrapper } from "@widgets/events/visitor-row/visitor-row-wrapper";
import { useNavigate } from "react-router-dom";

const EventStatisticsPage = () => {
  const nav = useNavigate();
  const { data: event } = useGetEventPresenter();
  const { data, isLoading } = useGetEventVisitingStatisticsPresenter();
  return (
    <Loader isLoading={isLoading}>
      {data && event && (
        <div className="flex flex-col gap-6">
          <section>
            <Backarrow
              to={getRouteWithId(
                ERoutes.EVENT,
                EEventQueryParams.eventId,
                event.eventID
              )}
              label={`${event.name} ${getFormatDate(event.dateTime).date}`}
            />
            <h1 className="text-gray-90 font-bold text-[42px]">
              Статистика посещения
            </h1>
          </section>

          <div className="flex items-end">
            <DatetimeFiled
              type="time"
              className="w-[180px]"
              style={{ background: "#FFFFFF" }}
              label="Время начала"
            />
            <div className="bg-gray-30 w-12 h-12"></div>
            <DatetimeFiled
              type="time"
              className="w-[180px]"
              placeholder="Время конца"
              style={{ background: "#FFFFFF" }}
              label="Время конца"
            />
            <Button
              intent="outlined"
              className="ms-6"
              onClick={() =>
                nav(
                  getRouteWithId(
                    ERoutes.EVENT_DASHBOARD,
                    EEventQueryParams.eventId,
                    event.eventID
                  )
                )
              }
            >
              Дашборд
            </Button>
          </div>
          <LocalTabs
            options={[
              {
                header: "Присутсвующие",
                body: (
                  <PresentVisitors
                    expectedEmployees={data.presentPersons.expectedEmployees}
                    notExpectedEmployees={
                      data.presentPersons.notExpectedEmployees
                    }
                  />
                ),
                key: "1",
              },
              {
                header: "Отсутвующие",
                body: <AbsentVisitors visitors={data.absentEmployees} />,
                key: "2",
              },
            ]}
          />
          <section className="p-[18px] bg-default-white">
            <Accordion header="Неизвестные">
              {data.presentPersons.unregisterPersons.map((visitor, index) => (
                <VisitorRowWrapper index={index + 1}>
                  <h3>Незвестный пользователь {visitor}</h3>
                </VisitorRowWrapper>
              ))}
            </Accordion>
          </section>
        </div>
      )}
    </Loader>
  );
};

export default EventStatisticsPage;
