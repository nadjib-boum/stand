export { AiOutlineLock as LockIcon } from "react-icons/ai";
export { HiOutlineMail as MailIcon } from "react-icons/hi";
export { GrClose as CloseIcon } from "react-icons/gr";
export { HiPlus as PlusIcon } from "react-icons/hi";
export { BiLogOutCircle as LogoutIcon } from "react-icons/bi";
export {
  AiOutlineHome as HomeIcon,
  AiOutlineMessage as MessageIcon,
  AiOutlineUser as UserIcon,
} from "react-icons/ai";
export { IoMdNotificationsOutline as NotificationIcon } from "react-icons/io";
export { HiOutlineCog as CogIcon } from "react-icons/hi";

export const AtIcon: React.FC = () => (
  <span className="text-gray-500 text-lg ">@</span>
);

export const LoadingIcon: React.FC = () => (
  <span
    className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
    role="status"
    aria-label="loading"
  ></span>
);
