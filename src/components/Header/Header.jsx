import SearchBar from "./SearchBar";
import LogInSignUp from "./LogInSignUp";
import AccountDropdown from "./AccountDropdown";

const Header = () => {
  return (
    <div className="side:flex-row side:pl-6 side:h-16 flex h-19 flex-col items-center gap-3 bg-white shadow">
      <SearchBar />
      <LogInSignUp />
      <AccountDropdown />
    </div>
  );
};

export default Header;
