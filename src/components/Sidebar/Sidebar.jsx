import Logo from "./Logo";
import { CirclePlay } from "lucide-react";
import { Film } from "lucide-react";
import { Library } from "lucide-react";
import { ChartColumnIncreasing } from "lucide-react";
import { Sparkles } from "lucide-react";
import AccountDropdown from "../Header/AccountDropdown";

const Sidebar = () => {
  return (
    <div className="side:flex side:top-0 side:left-0 side:flex-col side:w-64 side:h-screen side:items-start side:justify-start fixed bottom-0 z-30 flex h-16 w-full items-center justify-around gap-8 bg-white p-4 shadow-sm">
      <Logo />

      <div className="side:flex-row side:gap-4 flex flex-col items-center gap-1 pl-4">
        <CirclePlay className="side:h-9 side:w-9 text-pink-400" />
        <span className="side:text-xl text-sm font-bold text-gray-700">
          Watch
        </span>
      </div>

      <div className="side:flex-row side:gap-4 flex flex-col items-center gap-1 pl-4">
        <Film className="side:h-9 side:w-9 text-sky-300" />
        <span className="side:text-xl text-sm font-bold text-gray-700">
          Series
        </span>
      </div>

      <div className="side:flex hidden items-center gap-4 pl-4">
        <Library className="h-9 w-9 text-emerald-300" />
        <span className="text-xl font-bold text-gray-700">Library</span>
      </div>

      <div className="side:flex-row side:gap-4 flex flex-col items-center gap-1 pl-4">
        <ChartColumnIncreasing className="side:h-9 side:w-9 text-indigo-600" />
        <span className="side:text-xl text-sm font-bold text-gray-700">
          Progress
        </span>
      </div>

      <div className="side:flex-row side:gap-4 flex flex-col items-center gap-1 pl-4">
        <Sparkles className="side:h-9 side:w-9 text-orange-400" />
        <span className="side:text-xl text-sm font-bold text-gray-700">
          Premium
        </span>
      </div>

      <div className="side:hidden flex">
        <AccountDropdown />
      </div>
    </div>
  );
};

export default Sidebar;
