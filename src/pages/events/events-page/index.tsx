import { useGetEventsPresenter } from "@entities/case/events/get-events/presenter";
import { Button } from "@shared/components/common/button";
import { Loader } from "@shared/components/common/loader";
import { Pagination } from "@shared/components/common/pagination";
import { EventsTable } from "@widgets/tables/events";

const EventsPage = () => {
  const { data, handlePageChange, isLoading } = useGetEventsPresenter();
  return (
    <div className="flex flex-col gap-6 justify-center">
      <section className="flex justify-between">
        <h1 className="text-gray-90 font-bold text-[42px]">
          Реестр сотрудников
        </h1>
        <Button>Добавить мероприятие</Button>
      </section>

      <Loader isLoading={isLoading}>
        {data && (
          <>
            <EventsTable events={data.data.nodes} />
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

export default EventsPage;
