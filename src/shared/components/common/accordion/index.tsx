import { PropsWithChildren, ReactNode, useState } from "react";
import chevronIcon from "@shared/assets/icons/chevron-down.svg";

interface IAccordionProps extends PropsWithChildren {
  header: ReactNode;
}

export const Accordion = ({ header, children }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleOpenState = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <section
        className="flex gap-4 items-center cursor-pointer"
        onClick={handleToggleOpenState}
      >
        <span className="font-medium text-gray-90 text-base">{header}</span>
        <img src={chevronIcon} className={`${isOpen && "rotate-180"} mt-1`} />
      </section>
      <section hidden={!isOpen} className="mt-6">
        {children}
      </section>
    </div>
  );
};
