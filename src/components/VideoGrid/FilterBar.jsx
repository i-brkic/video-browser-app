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
    <div className="filter6:grid-cols-6 filter3:grid-cols-3 filter4:grid-cols-4 filter5:grid-cols-5 side:grid-cols-4 filter55:grid-cols-5 filter66:grid-cols-6 filterF:grid-cols-7 grid h-14 w-full gap-3 rounded-md bg-white px-3 py-3 shadow-sm">
      <FilterButton
        icon={<ChartColumnIncreasing className="h-4 w-4 text-slate-600" />}
        label="Level"
        onClick={() => {
          setOpenDropdown(openDropdown === "level" ? "" : "level");
        }}
        isOpen={openDropdown === "level"}
        wrapoerClassName="filter3:block relative hidden"
      />

      <FilterButton
        icon={<UserRound className="h-4 w-4 text-slate-600" />}
        label="Guide"
        onClick={() => {
          setOpenDropdown(openDropdown === "guide" ? "" : "guide");
        }}
        isOpen={openDropdown === "guide"}
        wrapoerClassName="filter3:block relative hidden"
      />

      <FilterButton
        icon={<MapPin className="h-4 w-4 text-slate-600" />}
        label="Country"
        onClick={() => {
          setOpenDropdown(openDropdown === "country" ? "" : "country");
        }}
        isOpen={openDropdown === "country"}
        wrapoerClassName="filter4:block relative hidden"
      />

      <FilterButton
        icon={<VenusAndMars className="h-4 w-4 text-slate-600" />}
        label="Gender"
        onClick={() => {
          setOpenDropdown(openDropdown === "gender" ? "" : "gender");
        }}
        isOpen={openDropdown === "gender"}
        wrapoerClassName="filter5:block relative hidden side:hidden filter55:block"
      />

      <FilterButton
        icon={<Timer className="h-4 w-4 text-slate-600" />}
        label="Duration"
        onClick={() => {
          setOpenDropdown(openDropdown === "duration" ? "" : "duration");
        }}
        isOpen={openDropdown === "duration"}
        wrapoerClassName="filter6:block relative hidden side:hidden filter66:block"
      />

      <FilterButton
        icon={<SwatchBook className="h-4 w-4 text-slate-600" />}
        label="Topic"
        onClick={() => {
          setOpenDropdown(openDropdown === "level" ? "" : "level");
        }}
        isOpen={openDropdown === "level"}
        wrapoerClassName="filterF:block relative hidden"
      />

      <FilterButton
        icon={<SlidersVertical className="h-4 w-4 text-slate-600" />}
        label="More"
        onClick={() => {
          setOpenDropdown(openDropdown === "more" ? "" : "more");
        }}
        isOpen={openDropdown === "more"}
        wrapoerClassName="filter3:block relative hidden"
      />
    </div>
  );
};

export default FilterBar;
