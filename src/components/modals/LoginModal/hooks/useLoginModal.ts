import { atom, useAtom } from "jotai";

const loginModalAtom = atom<boolean>(false);

const useLoginModal = () => {
  const [open, setOpen] = useAtom(loginModalAtom);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return {
    open,
    setOpen,
    openModal,
    closeModal,
  };
};

export default useLoginModal;
