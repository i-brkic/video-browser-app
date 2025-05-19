import Logo from "./Logo";
import { CirclePlay } from "lucide-react";
import { Film } from "lucide-react";
import { Library } from "lucide-react";
import { ChartColumnIncreasing } from "lucide-react";
import { Sparkles } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="flex h-screen w-64 flex-col items-start gap-8 bg-white p-4 shadow">
      <Logo />

      <div className="flex items-center gap-4 pl-4">
        <CirclePlay className="h-9 w-9 text-pink-400" />
        <span className="text-xl font-bold text-gray-700">Watch</span>
      </div>

      <div className="flex items-center gap-4 pl-4">
        <Film className="h-9 w-9 text-sky-300" />
        <span className="text-xl font-bold text-gray-700">Series</span>
      </div>

      <div className="flex items-center gap-4 pl-4">
        <Library className="h-9 w-9 text-emerald-300" />
        <span className="text-xl font-bold text-gray-700">Library</span>
      </div>

      <div className="flex items-center gap-4 pl-4">
        <ChartColumnIncreasing className="h-9 w-9 text-indigo-600" />
        <span className="text-xl font-bold text-gray-700">Progress</span>
      </div>

      <div className="flex items-center gap-4 pl-4">
        <Sparkles className="h-9 w-9 text-orange-400" />
        <span className="text-xl font-bold text-gray-700">Premium</span>
      </div>
    </div>
  );
};

export default Sidebar;
