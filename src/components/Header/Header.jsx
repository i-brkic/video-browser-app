import SearchBar from "./SearchBar";
import AccountDropdown from "./AccountDropdown";

const Header = () => {
  return (
    <div className="bg-blue-300 h-16 flex items-center gap-4 shadow px-6 ">
      <SearchBar />
      <AccountDropdown />
    </div>
  );
};

export default Header;
