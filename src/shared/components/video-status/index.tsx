import { EVideoStatuses } from "@shared/enums/video";

interface IVideoStatus {
  status: EVideoStatuses;
}

export const VideoStatus = ({ status }: IVideoStatus) => {
  switch (status) {
    case EVideoStatuses.IN_QUEUE:
      return (
        <div className="text-default-white bg-[#8e8e8e]">
          <span className="w-2 h-2 rounded-full bg-[#eaeaea]" />В очереди
        </div>
      );
    case EVideoStatuses.IN_PROCESS:
      return (
        <div className="text-default-white bg-[#ECB010]">
          <span className="w-2 h-2 rounded-full bg-[#FBFF00]" />В обработке
        </div>
      );
    case EVideoStatuses.SUCCESFULL:
      return (
        <div className="text-default-white bg-[#288442]">
          <span className="w-2 h-2 rounded-full bg-[#00D33D]" />
          Обработано
        </div>
      );
    default:
      return (
        <div className="text-default-white bg-primary-90 w-fit flex gap-2 items-center pe-[10px] ps-[6px] rounded-[10px] text-xs py-[2px]">
          <span className="w-2 h-2 rounded-full bg-[#FF0000]" />
          Ошибка
        </div>
      );
  }
};
