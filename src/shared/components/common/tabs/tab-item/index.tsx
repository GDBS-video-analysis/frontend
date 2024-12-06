import { ITabOption } from "@shared/components/common/tabs/interfaces";
import { useState } from "react";
import { NavLink } from "react-router-dom";

interface ITabItemProps {
  option: ITabOption;
}

export const TabItem = ({ option }: ITabItemProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <NavLink
      to={option.to}
      className={({ isActive }) => {
        setIsActive(isActive);
        return "flex flex-col items-center gap-[6px] text-gray-90 font-medium";
      }}
    >
      {option.label}
      {isActive && <div className="w-[52px] bg-primary-90 h-[2px]" />}
    </NavLink>
  );
};
