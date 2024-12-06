import { ITabOption } from "@shared/components/common/tabs/interfaces";
import { TabItem } from "@shared/components/common/tabs/tab-item";

interface ITabsProps {
  options: ITabOption[];
}

export const Tabs = ({ options }: ITabsProps) => {
  return (
    <nav className="flex gap-4">
      {options.map((option) => (
        <TabItem key={option.label} option={option} />
      ))}
    </nav>
  );
};
