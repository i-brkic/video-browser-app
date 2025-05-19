import SearchBar from "./SearchBar";
import AccountDropdown from "./AccountDropdown";

const Header = () => {
  return (
    <div className="flex h-16 items-center gap-4 bg-white px-6 shadow">
      <SearchBar />
      <AccountDropdown />
    </div>
  );
};

export default Header;
