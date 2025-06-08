import FilterButton from "./FilterButton";
import { useState } from "react";
import { ChartColumnIncreasing } from "lucide-react";
import { UserRound } from "lucide-react";
import { MapPin } from "lucide-react";
import { VenusAndMars } from "lucide-react";
import { Timer } from "lucide-react";
import { SwatchBook } from "lucide-react";
import { SlidersVertical } from "lucide-react";

const FilterBar = () => {
  const [openDropdown, setOpenDropdown] = useState("");

  return (
    <div className="filter6:grid-cols-6 filter3:grid-cols-3 filter4:grid-cols-4 filter5:grid-cols-5 side:grid-cols-4 filter55:grid-cols-5 filter66:grid-cols-6 filterF:grid-cols-7 bg-filterBar filter3:grid hidden h-14 w-full gap-3 rounded-md px-3 py-3 shadow-sm">
      <div className="filter3:block relative hidden">
        <FilterButton
          icon={<ChartColumnIncreasing className="h-4 w-4 text-slate-600" />}
          label="Level"
          onClick={() => {
            setOpenDropdown(openDropdown === "level" ? "" : "level");
          }}
          isOpen={openDropdown === "level"}
        />

        {openDropdown === "level" && (
          <div className="absolute top-full h-44 w-60 rounded-md border border-slate-100 bg-white p-3 shadow-md">
            <span className="mb-3 block">Include</span>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-3 text-sm font-semibold">
                <input
                  type="checkbox"
                  className="h-5 w-5 accent-amber-400 hover:bg-slate-200"
                />
                Superbeginner
              </label>

              <label className="flex items-center gap-3 text-sm font-semibold">
                <input type="checkbox" className="h-5 w-5 accent-amber-400" />
                Beginner
              </label>

              <label className="flex items-center gap-3 text-sm font-semibold">
                <input type="checkbox" className="h-5 w-5 accent-amber-400" />
                Intermediate
              </label>

              <label className="flex items-center gap-3 text-sm font-semibold">
                <input type="checkbox" className="h-5 w-5 accent-amber-400" />
                Advanced
              </label>
            </div>
          </div>
        )}
      </div>

      <div className="filter3:block relative hidden">
        <FilterButton
          icon={<UserRound className="h-4 w-4 text-slate-600" />}
          label="Guide"
          onClick={() => {
            setOpenDropdown(openDropdown === "guide" ? "" : "guide");
          }}
          isOpen={openDropdown === "guide"}
        />
      </div>

      <div className="filter4:block relative hidden">
        <FilterButton
          icon={<MapPin className="h-4 w-4 text-slate-600" />}
          label="Country"
          onClick={() => {
            setOpenDropdown(openDropdown === "country" ? "" : "country");
          }}
          isOpen={openDropdown === "country"}
        />
      </div>
      <div className="filter5:block side:hidden filter55:block relative hidden">
        <FilterButton
          icon={<VenusAndMars className="h-4 w-4 text-slate-600" />}
          label="Gender"
          onClick={() => {
            setOpenDropdown(openDropdown === "gender" ? "" : "gender");
          }}
          isOpen={openDropdown === "gender"}
        />
      </div>

      <div className="filter6:block side:hidden filter66:block relative hidden">
        <FilterButton
          icon={<Timer className="h-4 w-4 text-slate-600" />}
          label="Duration"
          onClick={() => {
            setOpenDropdown(openDropdown === "duration" ? "" : "duration");
          }}
          isOpen={openDropdown === "duration"}
        />
      </div>

      <div className="filterF:block relative hidden">
        <FilterButton
          icon={<SwatchBook className="h-4 w-4 text-slate-600" />}
          label="Topic"
          onClick={() => {
            setOpenDropdown(openDropdown === "level" ? "" : "level");
          }}
          isOpen={openDropdown === "level"}
        />
      </div>

      <div className="filter3:block relative hidden">
        <FilterButton
          icon={<SlidersVertical className="h-4 w-4 text-slate-600" />}
          label="More"
          onClick={() => {
            setOpenDropdown(openDropdown === "more" ? "" : "more");
          }}
          isOpen={openDropdown === "more"}
        />
      </div>
    </div>
  );
};

export default FilterBar;
