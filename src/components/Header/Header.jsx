import SearchBar from "./SearchBar";
import LogInSignUp from "./LogInSignUp";
import AccountDropdown from "./AccountDropdown";

const Header = () => {
  return (
    <div className="flex h-16 items-center gap-3 bg-white pl-6 shadow">
      <SearchBar />
      <LogInSignUp />
      <AccountDropdown />
    </div>
  );
};

export default Header;
