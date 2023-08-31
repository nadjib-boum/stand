import SidenavList from "./SidenavList";
import CreatePostButton from "./CreatePostButton";

const Sidenav: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 md:w-48">
      <CreatePostButton />
      <SidenavList />
    </div>
  );
};

export default Sidenav;
