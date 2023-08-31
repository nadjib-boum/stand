import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ProfileNav from "./ProfileNav";

const Navbar: React.FC = () => {
  return (
    <div style={{ background: "#f9f9f9" }}>
      <div className="_container mx-auto">
        <div className="flex justify-between items-center py-4 ">
          <Logo />
          <SearchBar />
          <ProfileNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
