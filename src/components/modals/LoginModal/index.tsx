import { MailIcon, LockIcon } from "@/components/icons";
import Modal from "@/components/primitives/Modal";
import Input from "@/components/primitives/Input";
import useLogin from "./hooks/useLogin";
import useRegisterModal from "@/components/modals/RegisterModal/hooks/useRegisterModal";
import useLoginModal from "./hooks/useLoginModal";
import { type LoginFormProps } from "./types";

const LoginForm: React.FC<LoginFormProps> = ({ form }) => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <Input
          name="email"
          form={form}
          placeholder="Email"
          icon={<MailIcon className="text-gray-500" />}
        />
      </div>
      <div>
        <Input
          name="password"
          type="password"
          form={form}
          placeholder="Password"
          icon={<LockIcon className="text-gray-500" />}
        />
      </div>
    </div>
  );
};

const LoginModalFooter = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const switchToRegister = () => {
    loginModal.closeModal();
    registerModal.openModal();
  };

  return (
    <div>
      <p className="text-sm text-gray-700 text-center cursor-pointer">
        Don&apos;t have an account?{" "}
        <span className="font-semibold underline" onClick={switchToRegister}>
          Register
        </span>
      </p>
    </div>
  );
};

const LoginModal = () => {
  const { form, onSubmit, isLoading } = useLogin();
  const loginModal = useLoginModal();

  return (
    <Modal
      open={loginModal.open}
      setOpen={loginModal.setOpen}
      title="Login"
      description="Login to your account to access your dashboard."
      body={<LoginForm form={form} />}
      footer={<LoginModalFooter />}
      actionLabel="Login"
      actionHandler={form.handleSubmit(onSubmit)}
      actionLoading={isLoading}
    />
  );
};

export default LoginModal;
