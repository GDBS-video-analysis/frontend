import { useGetUnregisterPersonPresenter } from "@entities/case/employees/get-unregister-person/presenter";
import { Avatar } from "@shared/components/avatar";
import { Backarrow } from "@shared/components/backarrow";
import { Accordion } from "@shared/components/common/accordion";
import { Loader } from "@shared/components/common/loader";
import { useModal } from "@shared/components/common/modal/hooks";
import { FILES_API } from "@shared/constants/default-values";
import { EEventQueryParams } from "@shared/enums/params/events";
import { ERoutes } from "@shared/enums/routes";
import { getRouteWithId } from "@shared/utils/scripts/getRouteWithId";
import { VideoMarksTable } from "@widgets/tables/employees/video-marks";
import { useRef } from "react";
import ImageGallery from "react-image-gallery";

const UnregisterPersonPage = () => {
  const { data, isLoading, port } = useGetUnregisterPersonPresenter();
  const { isOpen, handleToggleModal } = useModal();
  const modal = useRef<HTMLDivElement>(null);
  const onWrapperClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!modal.current?.contains(e.target as Node)) handleToggleModal();
  };

  return (
    <Loader isLoading={isLoading}>
      {data && (
        <div className="flex flex-col gap-6">
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
              Неизвестный посетитель
            </h1>
          </section>
          <section className="bg-default-white p-4">
            <Avatar
              avatarId={data.data.videoFileMarks[0].photoID}
              form="square"
              width={180}
              height={220}
            />
            {data.data.videoFileMarks.length > 1 && (
              <span
                className="text-primary-90 cursor-pointer font-medium"
                onClick={handleToggleModal}
              >
                Еще {data.data.videoFileMarks.length} фото...
              </span>
            )}
          </section>
          <section className="bg-default-white p-4">
            <Accordion header="Временные метки">
              <VideoMarksTable
                videoMarks={data.data.videoFileMarks.map((mark) => mark.mark)}
              />
            </Accordion>
          </section>
          {isOpen && (
            <div
              className="fixed inset-0 w-full h-full bg-black/15 flex items-center justify-center"
              onClick={onWrapperClick}
            >
              <div className="w-[500px] p-5" ref={modal}>
                <ImageGallery
                  showFullscreenButton={false}
                  showPlayButton={false}
                  items={data.data.videoFileMarks.map((mark) => ({
                    original: `${FILES_API}/${mark.photoID}`,
                    thumbnail: `${FILES_API}/${mark.photoID}`,
                  }))}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </Loader>
  );
};

export default UnregisterPersonPage;
