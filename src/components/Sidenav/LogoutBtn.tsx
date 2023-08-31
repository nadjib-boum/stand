import { signOut } from "next-auth/react";
import SidenavItem from "./SidenavItem";
import { LogoutIcon } from "@/components/icons";

const LogoutBtn: React.FC = () => {
  const onClick = async () => {
    await signOut({
      redirect: true,
    });
  };

  return (
    <SidenavItem
      href="#"
      label="Logout"
      icon={<LogoutIcon />}
      onClick={onClick}
    />
  );
};

export default LogoutBtn;
