import { CircleUserRound } from "lucide-react";
import { ChevronDown } from "lucide-react";

const AccountDropdown = () => {
  return (
    <div className="flex w-22 items-center justify-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-purple-500 text-white">
        <CircleUserRound className="h-12 w-12" />
      </div>
      <ChevronDown className="h-4 w-4" />
    </div>
  );
};

export default AccountDropdown;
