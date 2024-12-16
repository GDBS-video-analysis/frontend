import { useEditEmployeeBiometryPresenter } from "@entities/case/employees/edit-biometry/presenter";
import { Avatar } from "@shared/components/avatar";
import { FileUploader } from "@shared/components/common/file-uploader";
import deleteIcon from "@shared/assets/icons/close-outline.svg";
import { useDeleteEmployeeBiometryPresenter } from "@entities/case/employees/delete-biometry/presenter";
import { Modal } from "@shared/components/common/modal";
import { Button } from "@shared/components/common/button";

interface IEditEmployeeBiometryFormProps {
  biometry?: number[];
}

export const EditEmployeeBiometryForm = ({
  biometry,
}: IEditEmployeeBiometryFormProps) => {
  const {
    isPending: isEditEmployeeBiometryPending,
    handleSubmit,
    form,
  } = useEditEmployeeBiometryPresenter();
  const {
    handleDeleteEmployeeBiometry,
    handleToggleModal: handlleToggleModal,
    isOpen,
    isPending: isDeleteEmployeeBiometryPending,
    handleOpenModal,
  } = useDeleteEmployeeBiometryPresenter();

  const handleFilesChange = (e: React.FormEvent<HTMLInputElement>) => {
    const videoFile = e.currentTarget.files;
    if (videoFile) {
      form.setValue("biometry", videoFile);
      handleSubmit();
    }
  };

  return (
    <div className="p-4 bg-default-white">
      <Modal
        isOpen={isOpen}
        handleToggleModal={handlleToggleModal}
        header="Удаление фотографии"
      >
        <form onSubmit={handleDeleteEmployeeBiometry}>
          <div>
            Вы действительно хотите удалить фотографию ?
            <div className="flex gap-4 justify-end mt-6">
              <Button
                intent="outlined"
                type="submit"
                disabled={isDeleteEmployeeBiometryPending}
              >
                {isDeleteEmployeeBiometryPending ? "Загружаем..." : "Да"}
              </Button>
              <Button onClick={handlleToggleModal}>Нет</Button>
            </div>
          </div>
        </form>
      </Modal>
      <h3 className="text-lg text-gray-90 font-bold mb-6">Фото</h3>
      <section>
        <div className="flex gap-6">
          {biometry?.map((avatar) => (
            <span className="relative " key={avatar}>
              <Avatar avatarId={avatar} form="square" width={96} height={96} />
              <img
                src={deleteIcon}
                className="bg-primary-90/35 absolute inset-y-0 z-10 cursor-pointer"
                onClick={() => handleOpenModal(avatar)}
              />
            </span>
          ))}
          <FileUploader
            id="employee-photo-uploader"
            accept="image/png, image/jpeg"
            onChange={handleFilesChange}
          >
            Загрузить фото{isEditEmployeeBiometryPending && "..."}
          </FileUploader>
        </div>
      </section>
    </div>
  );
};
