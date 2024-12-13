import { useState } from 'react';

interface IUseModalReturn {
  isOpen: boolean;
  handleToggleModal(): void;
}

export const useModal = (): IUseModalReturn => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen((prev) => {
      document.body.style.overflow = prev ? 'auto' : 'hidden';
      return !prev;
    });
  };

  return {
    handleToggleModal,
    isOpen,
  };
};
