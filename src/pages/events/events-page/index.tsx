import { useAddEventPresenter } from "@entities/case/events/add/presenter";
import { useGetEventsPresenter } from "@entities/case/events/get-events/presenter";
import { AddEventForm } from "@features/forms/events/add";
import { Button } from "@shared/components/common/button";
import { Loader } from "@shared/components/common/loader";
import { Modal } from "@shared/components/common/modal";
import { Pagination } from "@shared/components/common/pagination";
import { EventsTable } from "@widgets/tables/events";

const EventsPage = () => {
  const { data, handlePageChange, isLoading } = useGetEventsPresenter();
  const {
    isPending,
    form,
    handleOpenModal,
    handleSubmit,
    isOpen,
    handleToggleModal,
  } = useAddEventPresenter();
  return (
    <div className="flex flex-col gap-6 justify-center">
      <section className="flex justify-between">
        <h1 className="text-gray-90 font-bold text-[42px]">
          Реестр мероприятий
        </h1>
        <Button onClick={handleOpenModal}>Добавить мероприятие</Button>
      </section>
      <Modal
        handleToggleModal={handleToggleModal}
        isOpen={isOpen}
        header="Создание мероприятия"
      >
        <AddEventForm
          form={form}
          handleSubmit={handleSubmit}
          isPending={isPending}
        />
      </Modal>

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
