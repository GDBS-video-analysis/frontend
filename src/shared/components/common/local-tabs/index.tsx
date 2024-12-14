import { ILocalTabOption } from "@shared/components/common/local-tabs/interfaces";
import { LocalTab } from "@shared/components/common/local-tabs/tab";
import { useState } from "react";

interface ILocalTabsProps {
  options: ILocalTabOption[];
}

export const LocalTabs = ({ options }: ILocalTabsProps) => {
  const [activeTab, setActiveTab] = useState<ILocalTabOption>(options[0]);

  const handleSetActiveTab = (tab: ILocalTabOption) => {
    if (activeTab.key !== tab.key) setActiveTab(tab);
  };

  return (
    <div>
      <section className="flex gap-6">
        {options.map((option) => (
          <LocalTab
            key={option.key}
            option={option}
            isActive={activeTab.key === option.key}
            onClick={() => handleSetActiveTab(option)}
          />
        ))}
      </section>
      <section className="mt-6">{activeTab.body}</section>
    </div>
  );
};
