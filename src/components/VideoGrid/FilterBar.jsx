import { useState } from "react";
import { ChartColumnIncreasing } from "lucide-react";
import { UserRound } from "lucide-react";
import { MapPin } from "lucide-react";
import { VenusAndMars } from "lucide-react";
import { Timer } from "lucide-react";
import { SwatchBook } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { SlidersVertical } from "lucide-react";

const FilterBar = () => {
  const [filters, setFilters] = useState({
    level: "",
    guide: "",
    country: "",
    gender: "",
    duration: "",
    topic: "",
  });

  return (
    <div className="filter6:grid-cols-6 filter3:grid-cols-3 filter4:grid-cols-4 filter5:grid-cols-5 side:grid-cols-4 filter55:grid-cols-5 filter66:grid-cols-6 filterF:grid-cols-7 grid h-14 w-full gap-3 rounded-md bg-white px-3 py-3 shadow-sm">
      <div className="filter3:block relative hidden">
        <button className="flex w-full items-center justify-between rounded-md border border-transparent bg-slate-100 p-2 py-1 text-sm font-semibold tracking-wide transition-colors duration-300 hover:border-orange-300">
          <span className="flex items-center gap-4">
            <ChartColumnIncreasing className="h-4 w-4 text-slate-900" />
            Level
          </span>
          <ChevronDown className="h-4 w-4 text-slate-600" />
        </button>
      </div>

      <div className="filter3:block relative hidden">
        <button className="flex w-full items-center justify-between rounded-md border border-transparent bg-slate-100 p-2 py-1 text-sm font-semibold tracking-wide transition-colors duration-300 hover:border-orange-300">
          <span className="flex items-center gap-4">
            <UserRound className="h-4 w-4 text-slate-900" />
            Guide
          </span>
          <ChevronDown className="h-4 w-4 text-slate-600" />
        </button>
      </div>

      <div className="filter4:block relative hidden">
        <button className="flex w-full items-center justify-between rounded-md border border-transparent bg-slate-100 p-2 py-1 text-sm font-semibold tracking-wide transition-colors duration-300 hover:border-orange-300">
          <span className="flex items-center gap-4">
            <MapPin className="h-4 w-4 text-slate-900" />
            Country
          </span>
          <ChevronDown className="h-4 w-4 text-slate-600" />
        </button>
      </div>

      <div className="filter5:block sideh:hidden filter55:block relative hidden">
        <button className="flex w-full items-center justify-between rounded-md border border-transparent bg-slate-100 p-2 py-1 text-sm font-semibold tracking-wide transition-colors duration-300 hover:border-orange-300">
          <span className="flex items-center gap-4">
            <VenusAndMars className="h-4 w-4 text-slate-900" />
            Gender
          </span>
          <ChevronDown className="h-4 w-4 text-slate-600" />
        </button>
      </div>

      <div className="filter6:block sideh:hidden filter66:block relative hidden">
        <button className="flex w-full items-center justify-between rounded-md border border-transparent bg-slate-100 p-2 py-1 text-sm font-semibold tracking-wide transition-colors duration-300 hover:border-orange-300">
          <span className="flex items-center gap-4">
            <Timer className="h-4 w-4 text-slate-900" />
            Duration
          </span>
          <ChevronDown className="h-4 w-4 text-slate-600" />
        </button>
      </div>

      <div className="filterF:block sideh:hidden relative hidden">
        <button className="flex w-full items-center justify-between rounded-md border border-transparent bg-slate-100 p-2 py-1 text-sm font-semibold tracking-wide transition-colors duration-300 hover:border-orange-300">
          <span className="flex items-center gap-4">
            <SwatchBook className="h-4 w-4 text-slate-900" />
            Topic
          </span>
          <ChevronDown className="h-4 w-4 text-slate-600" />
        </button>
      </div>

      <div className="filter3:block relative hidden">
        <button className="flex w-full items-center justify-between rounded-md border border-transparent bg-slate-100 p-2 py-1 text-sm font-semibold tracking-wide transition-colors duration-300 hover:border-orange-300">
          <span className="flex items-center gap-4">
            <SlidersVertical className="h-4 w-4 text-slate-900" />
            More
          </span>
          <ChevronDown className="h-4 w-4 text-slate-600" />
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
