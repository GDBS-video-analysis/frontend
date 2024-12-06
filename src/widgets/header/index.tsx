import logo from "@shared/assets/icons/logo.svg";
import { Tabs } from "@shared/components/common/tabs";
import { ERoutes } from "@shared/enums/routes";

export const Header = () => {
  return (
    <header className="py-4 px-6 border-b border border-gray-20">
      <section className="flex gap-12 items-center">
        <img src={logo} />
        <Tabs
          options={[
            { label: "Сотрудники", to: ERoutes.EMPLOYEES },
            { label: "Мероприятия", to: ERoutes.EVENTS },
          ]}
        />
      </section>
    </header>
  );
};
