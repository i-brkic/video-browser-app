import { useEffect, useRef, useState } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import FilterButton from "../FilterButton";
import { MapPin } from "lucide-react";
import { VenusAndMars } from "lucide-react";
import { Timer } from "lucide-react";
import { SwatchBook } from "lucide-react";
import CountryFilter from "./CountryFilter";
import DurationFilter from "./DurationFilter";
import GenderFilter from "./GenderFilter";
import TopicFilter from "./TopicFilter";

const MoreFilter = ({
  openDropdown,
  setOpenDropdown,
  guidesCountries,
  checkedCountries,
  handleCountryClick,
  durationBreakpoints,
  checkedDurations,
  handleDurationClick,
  guidesGenders,
  checkedGenders,
  handleGenderClick,
  topics,
  checkedTopics,
  handleTopicClick,
}) => {
  const outerRef = useRef();
  const [openInnerDropdown, setOpenInnerDropdown] = useState("");

  useEffect(() => {
    if (openDropdown !== "more") {
      setOpenInnerDropdown("");
    }
  }, [openDropdown]);

  useClickOutside(
    openDropdown === "more",
    () => {
      setOpenDropdown("");
      setOpenInnerDropdown("");
    },
    outerRef,
  );

  const closeAll = () => {
    setOpenDropdown("");
    setOpenInnerDropdown("");
  };

  if (openDropdown !== "more") return null;

  return (
    <div ref={outerRef}>
      <div
        className={
          `filter4:h-34 filter5:h-24 filter6:h-14 side:h-35 filter55:h-24 filter66:h-14 filterF:hidden absolute top-full right-0 flex w-50 flex-col rounded-md border border-slate-100 bg-white shadow-md ` +
          (openInnerDropdown === "" ? "h-45 gap-3 p-3" : "gap-0 p-0")
        }
      >
        {openInnerDropdown === "" && (
          <>
            <div className="filter4:hidden">
              <FilterButton
                icon={<MapPin className="h-4 w-4 text-slate-600" />}
                label="Country"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenInnerDropdown("country");
                }}
              />
            </div>
            <div className="filter5:hidden side:block filter55:hidden">
              <FilterButton
                icon={<VenusAndMars className="h-4 w-4 text-slate-600" />}
                label="Gender"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenInnerDropdown("gender");
                }}
              />
            </div>
            <div className="filter6:hidden side:block filter66:hidden">
              <FilterButton
                icon={<Timer className="h-4 w-4 text-slate-600" />}
                label="Duration"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenInnerDropdown("duration");
                }}
              />
            </div>
            <div className="filterF:hidden">
              <FilterButton
                icon={<SwatchBook className="h-4 w-4 text-slate-600" />}
                label="Topic"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenInnerDropdown("topic");
                }}
              />
            </div>
          </>
        )}
        {openInnerDropdown === "country" && (
          <CountryFilter
            openDropdown="country"
            setOpenDropdown={closeAll}
            guidesCountries={guidesCountries}
            checkedCountries={checkedCountries}
            handleCountryClick={handleCountryClick}
            noAbsolute={true}
            dropdownWidth="w-57"
          />
        )}
        {openInnerDropdown === "duration" && (
          <DurationFilter
            openDropdown="duration"
            setOpenDropdown={closeAll}
            durationBreakpoints={durationBreakpoints}
            checkedDurations={checkedDurations}
            handleDurationClick={handleDurationClick}
            noAbsolute={true}
            dropdownWidth="w-53"
          />
        )}
        {openInnerDropdown === "gender" && (
          <GenderFilter
            openDropdown="gender"
            setOpenDropdown={closeAll}
            guidesGenders={guidesGenders}
            checkedGenders={checkedGenders}
            handleGenderClick={handleGenderClick}
            noAbsolute={true}
            dropdownWidth="w-53"
          />
        )}
        {openInnerDropdown === "topic" && (
          <TopicFilter
            openDropdown="topic"
            setOpenDropdown={closeAll}
            topics={topics}
            checkedTopics={checkedTopics}
            handleTopicClick={handleTopicClick}
            noAbsolute={true}
            dropdownWidth="w-57"
          />
        )}
      </div>
    </div>
  );
};

export default MoreFilter;
