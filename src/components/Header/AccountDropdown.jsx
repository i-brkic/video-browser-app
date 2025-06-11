import { CircleUserRound } from "lucide-react";
import { ChevronDown } from "lucide-react";

const AccountDropdown = () => {
  return (
    <div className="side:w-22 side:flex-row side:gap-2 flex flex-col items-center justify-center gap-1">
      <div className="side:h-10 side:w-10 flex items-center justify-center overflow-hidden rounded-full bg-purple-500 text-white">
        <CircleUserRound className="side:h-12 side:w-12" />
      </div>
      <ChevronDown className="side:h-4 side:w-4 side:block hidden" />
      <span className="side:hidden text-sm font-bold">Account</span>
    </div>
  );
};

export default AccountDropdown;
