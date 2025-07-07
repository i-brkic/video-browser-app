import SearchBar from "./SearchBar";
import LogInSignUp from "./LogInSignUp";
import AccountDropdown from "./AccountDropdown";

const Header = ({ querry, setQuerry }) => {
  return (
    <div className="side:flex-row side:ml-64 side:pl-6 side:h-16 fixed top-0 right-0 left-0 z-25 flex h-19 flex-col items-center gap-3 bg-white">
      <SearchBar querry={querry} setQuerry={setQuerry} />
      <LogInSignUp />
      <div className="side:flex hidden">
        <AccountDropdown />
      </div>
    </div>
  );
};

export default Header;
