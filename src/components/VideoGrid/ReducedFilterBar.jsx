import { ChevronDown } from "lucide-react";
import { SlidersVertical } from "lucide-react";
// import { ArrowDownUp } from "lucide-react";
// import { Search } from "lucide-react";

const ReducedFilterBar = ({ onOpenFilterMenu }) => {
  return (
    <div className="flex w-full justify-around border-t border-slate-200 bg-white text-sm font-semibold">
      <button
        className="flex flex-1 cursor-pointer items-center justify-center gap-1 border-r border-slate-200 p-2"
        onClick={onOpenFilterMenu}
      >
        <div className="flex gap-2">
          <SlidersVertical className="h-5 w-5" />
          Filter
        </div>
        <ChevronDown className="h-3 w-3" />
      </button>
    </div>
  );
};

export default ReducedFilterBar;
