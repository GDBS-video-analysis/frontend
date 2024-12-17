import { useDeleteEventVideoFilePresenter } from "@entities/case/events/delete-video-file/presenter";
import { Button } from "@shared/components/common/button";
import { Modal } from "@shared/components/common/modal";
import { List } from "@shared/components/list";
import { FILES_API } from "@shared/constants/default-values";
import { IFile } from "@shared/interfaces/file";
import { getFormatDate } from "@shared/utils/scripts/getFormatDate";
import { forwardRef, HTMLAttributes, ReactNode, useState } from "react";
import { Popover } from "react-tiny-popover";

interface IFileUploaderProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "type" | "className | id"> {
  id: string;
  children: ReactNode;
  error?: string;
  accept?: string;
  file?: IFile;
}

export const FileUploader = forwardRef<HTMLInputElement, IFileUploaderProps>(
  ({ id, children, error, accept, file, ...rest }, ref) => {
    const {
      handleDeleteEventVideoFile,
      isPending,
      isOpen,
      handlleToggleModal,
    } = useDeleteEventVideoFilePresenter();

    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    if (file)
      return (
        <div className="flex gap-10 divide-x-2 divide-gray-20">
          <Popover
            isOpen={isPopoverOpen}
            onClickOutside={() => setIsPopoverOpen(false)}
            content={() => (
              <div className="flex flex-col bg-gray-20 py-4 px-6 text-gray-90 text-sm gap-3 *: cursor-pointer">
                <span>
                  <a href={`${FILES_API}/${file.fileID}`}>Скачать файл</a>
                </span>
                <span
                  className="text-default-allert"
                  onClick={handlleToggleModal}
                >
                  Удалить
                </span>
              </div>
            )}
          >
            <p
              className="underline text-[#0F62FE] cursor-pointer"
              onClick={() => setIsPopoverOpen(true)}
            >
              {file.name}
            </p>
          </Popover>

          <List
            className="ps-10"
            header="Информация о видеозаписи"
            options={[
              `Дата загрузки: ${getFormatDate(file.createdAt).date}`,
              `Размер: ${file.size} Kb`,
            ]}
          />
          <Modal
            isOpen={isOpen}
            header="Удаление файла"
            handleToggleModal={handlleToggleModal}
          >
            <div>
              <p>
                Вы действительно хотите удалить файл <b>{file.name}</b>?
                <div className="flex gap-4 justify-end mt-6">
                  <Button
                    className=""
                    intent="outlined"
                    onClick={handleDeleteEventVideoFile}
                  >
                    {isPending ? "Загружаем..." : "Да"}
                  </Button>
                  <Button onClick={handlleToggleModal}>Нет</Button>
                </div>
              </p>
            </div>
          </Modal>
        </div>
      );
    return (
      <div>
        <label
          htmlFor={id}
          className="px-7 flex items-center border border-gray-30 text-primary-90 cursor-pointer w-fit font-medium h-12"
        >
          {children}
          <input
            id={id}
            ref={ref}
            type="file"
            hidden
            accept={accept}
            {...rest}
          />
        </label>
        {error && (
          <span className="text-xs text-default-allert mt-2 block">
            {error}
          </span>
        )}
      </div>
    );
  }
);
