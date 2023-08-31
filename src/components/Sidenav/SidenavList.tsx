import SidenavItem from "./SidenavItem";
import LogoutBtn from "./LogoutBtn";
import {
  HomeIcon,
  MessageIcon,
  UserIcon,
  NotificationIcon,
  CogIcon,
} from "@/components/icons";

const SidenavList: React.FC = () => {
  return (
    <ul className="flex flex-col gap-4 mt-3 pt-3 pl-1 text-lg font-medium border-t-2 border-gray-200 w-full">
      <SidenavItem href="/" label="Home" icon={<HomeIcon />} />
      <SidenavItem href="/messages" label="Messages" icon={<MessageIcon />} />
      <SidenavItem
        href="/notifications"
        label="Notifications"
        icon={<NotificationIcon />}
      />
      <SidenavItem href="/profile" label="Profile" icon={<UserIcon />} />
      <SidenavItem href="/settings" label="Settings" icon={<CogIcon />} />
      <LogoutBtn />
    </ul>
  );
};

export default SidenavList;
