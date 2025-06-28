import FilterButton from "./FilterButton";
import { useState, useRef } from "react";
import { ChartColumnIncreasing } from "lucide-react";
import { UserRound } from "lucide-react";
import { MapPin } from "lucide-react";
import { VenusAndMars } from "lucide-react";
import { Timer } from "lucide-react";
import { SwatchBook } from "lucide-react";
import { SlidersVertical } from "lucide-react";
import useVideos from "../../hooks/useVideos";
import LevelFilter from "./Filters/LevelFilter";
import GuideFilter from "./Filters/GuideFilter";
import CountryFilter from "./Filters/CountryFilter";
import GenderFilter from "./Filters/GenderFilter";
import DurationFilter from "./Filters/DurationFilter";
import TopicFilter from "./Filters/TopicFilter";
import MoreFilter from "./Filters/MoreFilter";

const FilterBar = () => {
  const [openDropdown, setOpenDropdown] = useState("");
  const [checkedLevels, setCheckedLevels] = useState([]);
  const [checkedGuides, setCheckedGuides] = useState([]);
  const [checkedCountries, setCheckedCountries] = useState([]);
  const [checkedGenders, setCheckedGenders] = useState([]);
  const [checkedDurations, setCheckedDurations] = useState([]);
  const [checkedTopics, setCheckedTopics] = useState([]);
  const { videos } = useVideos();

  const levelOrder = ["superbeginner", "beginner", "intermediate", "advanced"];
  const levels = Array.from(new Set(videos.map((video) => video.level))).sort(
    (a, b) => levelOrder.indexOf(a) - levelOrder.indexOf(b),
  );
  const handleLevelClick = (level) => {
    setCheckedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level],
    );
  };

  const guidesName = Array.from(
    new Set(videos.map((video) => video.guide.name)),
  ).sort((a, b) => a.localeCompare(b));
  const handleGuideClick = (guide) => {
    setCheckedGuides((prev) =>
      prev.includes(guide) ? prev.filter((g) => g !== guide) : [...prev, guide],
    );
  };

  const guidesCountries = Array.from(
    new Set(videos.map((video) => video.guide.country)),
  ).sort((a, b) => a.localeCompare(b));
  const handleCountryClick = (country) => {
    setCheckedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((c) => c !== country)
        : [...prev, country],
    );
  };

  const guidesGenders = Array.from(
    new Set(videos.map((video) => video.guide.gender)),
  ).sort((a, b) => a.localeCompare(b));
  const handleGenderClick = (gender) => {
    setCheckedGenders((prev) =>
      prev.includes(gender)
        ? prev.filter((g) => g !== gender)
        : [...prev, gender],
    );
  };

  const durationBreakpoints = [10, 15, 20];
  const handleDurationClick = (duration) => {
    setCheckedDurations((prev) =>
      prev.includes(duration)
        ? prev.filter((d) => d !== duration)
        : [...prev, duration],
    );
  };

  const topics = Array.from(new Set(videos.map((video) => video.topic))).sort(
    (a, b) => a.localeCompare(b),
  );
  const handleTopicClick = (topic) => {
    setCheckedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
    );
  };

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
