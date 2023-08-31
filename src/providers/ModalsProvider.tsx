import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";

const ModalProvider: React.FC = () => {
  return (
    <>
      <RegisterModal />
      <LoginModal />
    </>
  );
};

export default ModalProvider;
