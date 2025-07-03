import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChartColumnIncreasing } from "lucide-react";
import { UserRound } from "lucide-react";
import { MapPin } from "lucide-react";
import { VenusAndMars } from "lucide-react";
import { Timer } from "lucide-react";
import { SwatchBook } from "lucide-react";
import LevelFilter from "./Filters/LevelFilter";
import GuideFilter from "./Filters/GuideFilter";
import CountryFilter from "./Filters/CountryFilter";
import GenderFilter from "./Filters/GenderFilter";
import DurationFilter from "./Filters/DurationFilter";
import TopicFilter from "./Filters/TopicFilter";

const FILTERS = [
  { key: "level", label: "Level", icon: ChartColumnIncreasing },
  { key: "guide", label: "Guide", icon: UserRound },
  { key: "country", label: "Country", icon: MapPin },
  { key: "gender", label: "Gender", icon: VenusAndMars },
  { key: "duration", label: "Duration", icon: Timer },
  { key: "topic", label: "Topic", icon: SwatchBook },
];

const MobileFilterMenu = ({
  open,
  onClose,
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
  const [activePanel, setActivePanel] = useState(null);

  return (
    <div
      className={`fixed top-0 right-0 z-50 h-full w-full bg-white transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <div
        className={`absolute top-0 left-0 z-0 h-full w-full bg-white transition-transform duration-300 ${activePanel ? "-translate-x-full" : "translate-x-0"}`}
      >
        <div className="relative flex items-center bg-gray-200 p-4">
          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer"
            onClick={onClose}
          >
            <ChevronLeft className="h-6 w-6 font-bold text-black" />
          </button>
          <span className="mx-auto text-lg font-semibold">Filter</span>
        </div>
        <div className="flex flex-col p-6 pt-0">
          {FILTERS.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.key}
                className="relative -mx-6 flex items-center justify-between px-6 py-5 transition-colors duration-300 hover:bg-slate-100"
                onClick={() => {
                  console.log("Clicked:", filter.key);
                  setActivePanel(filter.key);
                }}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-black" />
                  <div>{filter.label}</div>
                </div>
                <div>
                  <ChevronRight className="h-6 w-6 text-black" />
                </div>
                <div className="pointer-events-none absolute right-6 bottom-0 left-4 h-px bg-slate-200"></div>
              </button>
            );
          })}
        </div>
        <div className="bg fixed bottom-0 z-55 h-18 w-full bg-gray-100 p-4 shadow-lg">
          <button className="p w-full cursor-pointer rounded-lg bg-amber-500 py-2 text-white">
            View Videos
          </button>
        </div>
      </div>

      <div
        className={`absolute top-0 left-0 z-60 h-full w-full bg-white transition-transform duration-300 ${activePanel ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="relative flex items-center border-b border-slate-200 bg-gray-200 p-4">
          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer"
            onClick={() => setActivePanel(null)}
          >
            <ChevronLeft className="h-6 w-6 font-bold text-black" />
          </button>
          <span className="mx-auto text-lg font-semibold">
            {FILTERS.find((f) => f.key === activePanel)?.label}
          </span>
        </div>
        <div className="p-4">
          {activePanel === "level" && (
            <LevelFilter
              openDropdown="level"
              setOpenDropdown={() => setActivePanel(null)}
              levels={levels}
              checkedLevels={checkedLevels}
              handleLevelClick={handleLevelClick}
              noAbsolute
            />
          )}
          {activePanel === "guide" && (
            <GuideFilter
              openDropdown="guide"
              setOpenDropdown={() => setActivePanel(null)}
              guidesName={guidesName}
              checkedGuides={checkedGuides}
              handleGuideClick={handleGuideClick}
              noAbsolute
            />
          )}
          {activePanel === "country" && (
            <CountryFilter
              openDropdown="country"
              setOpenDropdown={() => setActivePanel(null)}
              guidesCountries={guidesCountries}
              checkedCountries={checkedCountries}
              handleCountryClick={handleCountryClick}
              noAbsolute
            />
          )}
          {activePanel === "gender" && (
            <GenderFilter
              openDropdown="gender"
              setOpenDropdown={() => setActivePanel(null)}
              guidesGenders={guidesGenders}
              checkedGenders={checkedGenders}
              handleGenderClick={handleGenderClick}
              noAbsolute
            />
          )}
          {activePanel === "duration" && (
            <DurationFilter
              openDropdown="duration"
              setOpenDropdown={() => setActivePanel(null)}
              durationBreakpoints={durationBreakpoints}
              checkedDurations={checkedDurations}
              handleDurationClick={handleDurationClick}
              noAbsolute
            />
          )}
          {activePanel === "topic" && (
            <TopicFilter
              openDropdown="topic"
              setOpenDropdown={() => setActivePanel(null)}
              topics={topics}
              checkedTopics={checkedTopics}
              handleTopicClick={handleTopicClick}
              noAbsolute
            />
          )}
        </div>

        <div className="fixed bottom-0 left-0 z-70 w-full bg-gray-100 p-4 shadow-lg">
          <button className="w-full cursor-pointer rounded-lg bg-amber-500 py-2 text-white">
            View Videos
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileFilterMenu;
