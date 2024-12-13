import { PropsWithChildren, useRef } from "react";
import closeIcon from "@shared/assets/icons/close-outline.svg";
import { createPortal } from "react-dom";

interface IModalProps extends PropsWithChildren {
  isOpen: boolean;
  header?: string;
  handleToggleModal(): void;
}

export const Modal = ({
  isOpen,
  children,
  header,
  handleToggleModal,
}: IModalProps) => {
  const modal = useRef<HTMLDivElement>(null);
  const onWrapperClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!modal.current?.contains(e.target as Node)) handleToggleModal();
  };

  return (
    isOpen &&
    createPortal(
      <div
        onClick={onWrapperClick}
        className="fixed inset-0 w-full h-full bg-black/15 flex items-center justify-center"
      >
        <div
          ref={modal}
          className="bg-white min-h-[200px] min-w-[700px] p-4 border border-gray-20"
        >
          <section className="text-2xl font-bold mb-6">
            {header}{" "}
            <img
              src={closeIcon}
              onClick={handleToggleModal}
              className="ms-auto float-right cursor-pointer"
            />
          </section>
          <section>{children}</section>
        </div>
      </div>,
      document.body
    )
  );
};
