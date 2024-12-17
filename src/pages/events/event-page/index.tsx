import { useGetEventPresenter } from "@entities/case/events/get-event/presenter";
import { UpdateEventForm } from "@features/forms/events/update";
import { Button } from "@shared/components/common/button";
import { Loader } from "@shared/components/common/loader";
import { Modal } from "@shared/components/common/modal";
import { useModal } from "@shared/components/common/modal/hooks";
import { EmployeeShortCard } from "@shared/components/employee-short-card";
import { ExpectedEmployeesTable } from "@widgets/tables/employees/expected-employees";
import deleteIcon from "@shared/assets/icons/close-outline.svg";
import { FileUploader } from "@shared/components/common/file-uploader";
import { useUploadEventVideoFilePresenter } from "@entities/case/events/upload-video-file/presenter";
import { useDeleteEventPresenter } from "@entities/case/events/delete/presenter";
import { ISingleEvent } from "@shared/interfaces/events";
import { useNavigate } from "react-router-dom";
import { getRouteWithId } from "@shared/utils/scripts/getRouteWithId";
import { ERoutes } from "@shared/enums/routes";
import { EEventQueryParams } from "@shared/enums/params/events";

const EventPage = () => {
  const nav = useNavigate();

  const {
    form: updateEventform,
    handleSubmit: handleUpdateEventSubmit,
    isFormDisabled,
    toggleFormDisabled,
    isLoading,
    isPending: isUpdateEventPending,
    data,
  } = useGetEventPresenter();

  const {
    form: deleteEventForm,
    isPending: isDeleteEventPending,
    handleOpenModal: handleOpenDeleteEventModal,
    handleToggleModal: handleToggleDeleteEventModal,
    isOpen: isDeleteEventModalOpen,
    handleSubmit: handleDeleteEventSubmit,
  } = useDeleteEventPresenter<ISingleEvent>();

  const {
    handleSubmit: handleUploadEventVideoFileSubmit,
    isPending: isUploadEventVideoFilePending,
    form: uploadEventVideoFileform,
  } = useUploadEventVideoFilePresenter();
  const { isOpen, handleToggleModal: handlleToggleModal } = useModal();

  const { register } = uploadEventVideoFileform;

  const handleFilesChange = (e: React.FormEvent<HTMLInputElement>) => {
    const videoFile = e.currentTarget.files;
    if (videoFile) {
      uploadEventVideoFileform.setValue("videoFile", videoFile);
      handleUploadEventVideoFileSubmit();
    }
  };

  return (
    <Loader isLoading={isLoading || isUpdateEventPending}>
      {data && (
        <>
          <div className="flex flex-col gap-6">
            <section className="flex justify-between">
              <h1 className="text-gray-90 font-bold text-[42px]">
                {data.name}
              </h1>
              <Button
                onClick={() =>
                  nav(
                    getRouteWithId(
                      ERoutes.EVENT_STATISTICS,
                      EEventQueryParams.eventId,
                      data.eventID
                    )
                  )
                }
              >
                Статистика посещения
              </Button>
            </section>
            <div className="bg-default-white p-4">
              <div className="flex justify-between">
                <h2 className="text-gray-90 text-lg font-bold">Информация</h2>
                <Button intent="link" onClick={toggleFormDisabled}>
                  {isFormDisabled ? "Редактировать" : "Отменить"}
                </Button>
              </div>
              <UpdateEventForm
                form={updateEventform}
                isDisabled={isFormDisabled}
                handleSubmit={handleUpdateEventSubmit}
              />
            </div>
            <div className="p-4 bg-default-white">
              <h2 className="text-gray-90 text-lg font-bold">
                Планируемые посетители
              </h2>

              <div>
                {data.expectedEmployees?.map((employee) => (
                  <div className="py-2 px-3 border-t border-gray-20 flex justify-between">
                    <EmployeeShortCard employee={employee} />
                    <img src={deleteIcon} className="cursor-pointer" />
                  </div>
                ))}
              </div>

              <Button
                intent="outlined"
                onClick={handlleToggleModal}
                className="mt-6"
              >
                Добавить посетителей
              </Button>
            </div>
            <div className="p-4 bg-default-white">
              <h2 className="text-gray-90 text-lg font-bold mb-6">
                Видеозапись
              </h2>
              <form>
                <FileUploader
                  id="video-uploader"
                  file={data.videoFile}
                  accept="video/mp4"
                  {...(register("videoFile"),
                  {
                    onChange: (e) => handleFilesChange(e),
                  })}
                >
                  {isUploadEventVideoFilePending
                    ? "Загрузка..."
                    : "Загрузить видео"}
                </FileUploader>
              </form>
            </div>
            <Button
              className="w-fit"
              intent="link"
              onClick={() => handleOpenDeleteEventModal(data)}
            >
              Удалить мероприятие
            </Button>
          </div>
          <Modal
            isOpen={isDeleteEventModalOpen}
            handleToggleModal={handleToggleDeleteEventModal}
            header="Удаление мероприятия"
          >
            <form onSubmit={handleDeleteEventSubmit}>
              <div>
                Вы действительно хотите удалить мероприятие{" "}
                <b>{deleteEventForm.getValues("name")}</b>?
                <div className="flex gap-4 justify-end mt-6">
                  <Button intent="outlined" type="submit">
                    {isDeleteEventPending ? "Загружаем..." : "Да"}
                  </Button>
                  <Button onClick={handleToggleDeleteEventModal}>Нет</Button>
                </div>
              </div>
            </form>
          </Modal>
          <Modal
            isOpen={isOpen}
            header="Планируемые посетители"
            handleToggleModal={handlleToggleModal}
          >
            <ExpectedEmployeesTable
              expectedEmployees={data.expectedEmployees ?? []}
              onCloseModal={handlleToggleModal}
            />
          </Modal>
        </>
      )}
    </Loader>
  );
};

export default EventPage;
