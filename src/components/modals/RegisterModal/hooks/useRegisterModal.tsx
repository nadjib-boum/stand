import { atom, useAtom } from "jotai";

const registerModalAtom = atom<boolean>(false);

const useRegisterModal = () => {
  const [open, setOpen] = useAtom(registerModalAtom);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return {
    open,
    setOpen,
    openModal,
    closeModal,
  };
};

export default useRegisterModal;
