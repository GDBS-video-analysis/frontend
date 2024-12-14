import { ILocalTabOption } from "@shared/components/common/local-tabs/interfaces";

interface ILocalTabProps {
  option: ILocalTabOption;
  isActive: boolean;
  onClick(): void;
}

export const LocalTab = ({ option, isActive, onClick }: ILocalTabProps) => {
  return (
    <div
      className={`font-medium text-base py-4 cursor-pointer ${
        isActive ? "border-b border-primary-90" : "text-gray-90"
      }`}
      onClick={onClick}
    >
      {option.header}
    </div>
  );
};
