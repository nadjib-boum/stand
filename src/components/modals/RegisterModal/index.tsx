import { UserIcon, MailIcon, LockIcon, AtIcon } from "@/components/icons";
import Modal from "@/components/primitives/Modal";
import Input from "@/components/primitives/Input";
import useRegister from "./hooks/useRegister";
import useRegisterModal from "./hooks/useRegisterModal";
import useLoginModal from "../LoginModal/hooks/useLoginModal";
import { type RegisterFormProps } from "./types";

const RegisterForm: React.FC<RegisterFormProps> = ({ form }) => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <Input
          name="name"
          form={form}
          placeholder="Name"
          icon={<UserIcon className="text-gray-500" />}
        />
      </div>
      <div>
        <Input
          name="username"
          form={form}
          placeholder="Username"
          icon={<AtIcon />}
        />
      </div>
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

const RegisterModalFooter = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const switchToLogin = () => {
    registerModal.closeModal();
    loginModal.openModal();
  };

  return (
    <div>
      <p className="text-sm text-gray-700 text-center cursor-pointer">
        Already have an account?{" "}
        <span className="font-semibold underline" onClick={switchToLogin}>
          Login
        </span>
      </p>
    </div>
  );
};

const RegisterModal = () => {
  const { form, onSubmit, isLoading } = useRegister();
  const { open, setOpen } = useRegisterModal();
  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title={"Register"}
      description="Register to create your own account."
      body={<RegisterForm form={form} />}
      footer={<RegisterModalFooter />}
      actionLabel="Register"
      actionHandler={form.handleSubmit(onSubmit)}
      actionLoading={isLoading}
    />
  );
};

export default RegisterModal;
