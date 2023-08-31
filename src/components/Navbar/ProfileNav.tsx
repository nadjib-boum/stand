import Avatar from "../primitives/Avatar";

const ProfileNav = () => {
  return (
    <div className="flex justify-start items-center gap-2">
      <div className="flex flex-col items-center">
        <span className="block text-sm font-bold">username</span>
        <span className="text-xs">@username</span>
      </div>
      <div>
        <Avatar />
      </div>
    </div>
  );
};

export default ProfileNav;
