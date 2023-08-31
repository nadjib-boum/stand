import { useSession } from "next-auth/react";
import useRegisterModal from "@/components/modals/RegisterModal/hooks/useRegisterModal";

const useAuth = () => {
  const { data: session, status } = useSession();
  const registerModal = useRegisterModal();

  const checkAuth = () => {
    if (!session) {
      registerModal.openModal();
      return false;
    }

    return true;
  };

  return { checkAuth, status };
};

export default useAuth;
