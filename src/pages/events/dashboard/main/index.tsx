import { Backarrow } from "@shared/components/backarrow";
import { EEventQueryParams } from "@shared/enums/params/employee/events";
import { ERoutes } from "@shared/enums/routes";
import { IEventIdQueryParams } from "@shared/interfaces/params/event";
import { getRouteWithId } from "@shared/utils/scripts/getRouteWithId";
import { useParams } from "react-router-dom";

const DashboardPage = () => {
  const { eventId } = useParams() as unknown as IEventIdQueryParams;
  return (
    <div>
      <section className="mb-6">
        <Backarrow
          to={getRouteWithId(
            ERoutes.EVENT_STATISTICS,
            EEventQueryParams.eventId,
            eventId
          )}
          label="Статистика посещения"
        />
        <h1 className="text-gray-90 font-bold text-[42px]">
          Дашборд активности
        </h1>
      </section>

      <section className="bg-default-white p-4">
        <h2 className="text-gray-90 font-bold text-lg mb-4">Посетители</h2>
        <iframe
          src={`https://datalens.yandex/qbuyytmfarpud?event_id=${eventId}&_embedded=1&_theme=light`}
          className="h-[400px] w-full"
        />
      </section>
    </div>
  );
};

export default DashboardPage;
