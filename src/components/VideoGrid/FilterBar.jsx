import FilterButton from "./FilterButton";
import { ChartColumnIncreasing } from "lucide-react";
import { UserRound } from "lucide-react";
import { MapPin } from "lucide-react";
import { VenusAndMars } from "lucide-react";
import { Timer } from "lucide-react";
import { SwatchBook } from "lucide-react";
import { SlidersVertical } from "lucide-react";
import { useState } from "react";
import LevelFilter from "./Filters/LevelFilter";
import GuideFilter from "./Filters/GuideFilter";
import CountryFilter from "./Filters/CountryFilter";
import GenderFilter from "./Filters/GenderFilter";
import DurationFilter from "./Filters/DurationFilter";
import TopicFilter from "./Filters/TopicFilter";
import MoreFilter from "./Filters/MoreFilter";

const FilterBar = ({
  levels,
  checkedLevels,
  handleLevelClick,
  guidesName,
  checkedGuides,
  handleGuideClick,
  guidesCountries,
  checkedCountries,
  handleCountryClick,
  guidesGenders,
  checkedGenders,
  handleGenderClick,
  durationBreakpoints,
  checkedDurations,
  handleDurationClick,
  topics,
  checkedTopics,
  handleTopicClick,
}) => {
  const [openDropdown, setOpenDropdown] = useState("");

  return (
    <div className="filter6:grid-cols-6 filter3:grid-cols-3 filter4:grid-cols-4 filter5:grid-cols-5 side:grid-cols-4 filter55:grid-cols-5 filter66:grid-cols-6 filterF:grid-cols-7 bg-filterBar filter3:grid hidden h-14 w-full gap-3 rounded-md px-3 py-3 shadow-sm">
      <div className="filter3:block relative hidden">
        <FilterButton
          icon={<ChartColumnIncreasing className="h-4 w-4 text-slate-600" />}
          label="Level"
          onClick={(e) => {
            e.stopPropagation();
            setOpenDropdown(openDropdown === "level" ? "" : "level");
          }}
          isOpen={openDropdown === "level"}
        />

        <LevelFilter
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          levels={levels}
          checkedLevels={checkedLevels}
          handleLevelClick={handleLevelClick}
        />
      </div>

      <div className="filter3:block relative hidden">
        <FilterButton
          icon={<UserRound className="h-4 w-4 text-slate-600" />}
          label="Guide"
          onClick={(e) => {
            e.stopPropagation();
            setOpenDropdown(openDropdown === "guide" ? "" : "guide");
          }}
          isOpen={openDropdown === "guide"}
        />

        <GuideFilter
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          guidesName={guidesName}
          checkedGuides={checkedGuides}
          handleGuideClick={handleGuideClick}
        />
      </div>

      <div className="filter4:block relative hidden">
        <FilterButton
          icon={<MapPin className="h-4 w-4 text-slate-600" />}
          label="Country"
          onClick={(e) => {
            e.stopPropagation();
            setOpenDropdown(openDropdown === "country" ? "" : "country");
          }}
          isOpen={openDropdown === "country"}
        />

        <CountryFilter
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          guidesCountries={guidesCountries}
          checkedCountries={checkedCountries}
          handleCountryClick={handleCountryClick}
        />
      </div>

      <div className="filter5:block side:hidden filter55:block relative hidden">
        <FilterButton
          icon={<VenusAndMars className="h-4 w-4 text-slate-600" />}
          label="Gender"
          onClick={(e) => {
            e.stopPropagation();
            setOpenDropdown(openDropdown === "gender" ? "" : "gender");
          }}
          isOpen={openDropdown === "gender"}
        />

        <GenderFilter
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          guidesGenders={guidesGenders}
          checkedGenders={checkedGenders}
          handleGenderClick={handleGenderClick}
        />
      </div>

      <div className="filter6:block side:hidden filter66:block relative hidden">
        <FilterButton
          icon={<Timer className="h-4 w-4 text-slate-600" />}
          label="Duration"
          onClick={(e) => {
            e.stopPropagation();
            setOpenDropdown(openDropdown === "duration" ? "" : "duration");
          }}
          isOpen={openDropdown === "duration"}
        />

        <DurationFilter
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          durationBreakpoints={durationBreakpoints}
          checkedDurations={checkedDurations}
          handleDurationClick={handleDurationClick}
        />
      </div>

      <div className="filterF:block relative hidden">
        <FilterButton
          icon={<SwatchBook className="h-4 w-4 text-slate-600" />}
          label="Topic"
          onClick={(e) => {
            e.stopPropagation();
            setOpenDropdown(openDropdown === "topic" ? "" : "topic");
          }}
          isOpen={openDropdown === "topic"}
        />
        <TopicFilter
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          topics={topics}
          checkedTopics={checkedTopics}
          handleTopicClick={handleTopicClick}
        />
      </div>

      <div className="filter3:block relative hidden">
        <FilterButton
          icon={<SlidersVertical className="h-4 w-4 text-slate-600" />}
          label="More"
          onClick={(e) => {
            e.stopPropagation();
            setOpenDropdown(openDropdown === "more" ? "" : "more");
          }}
          isOpen={openDropdown === "more"}
        />

        <MoreFilter
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          guidesCountries={guidesCountries}
          checkedCountries={checkedCountries}
          handleCountryClick={handleCountryClick}
          guidesGenders={guidesGenders}
          checkedGenders={checkedGenders}
          handleGenderClick={handleGenderClick}
          durationBreakpoints={durationBreakpoints}
          checkedDurations={checkedDurations}
          handleDurationClick={handleDurationClick}
          topics={topics}
          checkedTopics={checkedTopics}
          handleTopicClick={handleTopicClick}
        />
      </div>
    </div>
  );
};

export default FilterBar;
