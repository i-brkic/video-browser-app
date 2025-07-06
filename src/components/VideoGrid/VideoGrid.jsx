import { useState } from "react";
import FilterBar from "./FilterBar";
import ReducedFilterBar from "./ReducedFilterBar";
import useVideos from "../../hooks/useVideos";
import VideoCard from "./VideoCard";
import MobileFilterMenu from "./MobileFilterMenu";

const levelOrder = ["superbeginner", "beginner", "intermediate", "advanced"];

const VideoGrid = () => {
  const { videos, error, loading } = useVideos();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const [checkedLevels, setCheckedLevels] = useState([]);
  const [checkedGuides, setCheckedGuides] = useState([]);
  const [checkedCountries, setCheckedCountries] = useState([]);
  const [checkedGenders, setCheckedGenders] = useState([]);
  const [checkedDurations, setCheckedDurations] = useState([]);
  const [checkedTopics, setCheckedTopics] = useState([]);

  const checkedSign = (
    <div className="absolute -top-1 right-0 h-3 w-3 rounded-full bg-orange-400" />
  );

  const checkedSignMobile = (
    <div className="absolute -top-1 -left-3 h-2 w-2 rounded-full bg-orange-400" />
  );

  const levels = Array.from(new Set(videos.map((video) => video.level))).sort(
    (a, b) => levelOrder.indexOf(a) - levelOrder.indexOf(b),
  );
  const guidesName = Array.from(
    new Set(videos.map((video) => video.guide.name)),
  ).sort((a, b) => a.localeCompare(b));
  const guidesCountries = Array.from(
    new Set(videos.map((video) => video.guide.country)),
  ).sort((a, b) => a.localeCompare(b));
  const guidesGenders = Array.from(
    new Set(videos.map((video) => video.guide.gender)),
  ).sort((a, b) => a.localeCompare(b));
  const durationBreakpoints = [10, 15, 20];
  const topics = Array.from(new Set(videos.map((video) => video.topic))).sort(
    (a, b) => a.localeCompare(b),
  );

  const handleLevelClick = (level) => {
    setCheckedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level],
    );
  };
  const handleGuideClick = (guide) => {
    setCheckedGuides((prev) =>
      prev.includes(guide) ? prev.filter((g) => g !== guide) : [...prev, guide],
    );
  };
  const handleCountryClick = (country) => {
    setCheckedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((c) => c !== country)
        : [...prev, country],
    );
  };
  const handleGenderClick = (gender) => {
    setCheckedGenders((prev) =>
      prev.includes(gender)
        ? prev.filter((g) => g !== gender)
        : [...prev, gender],
    );
  };
  const handleDurationClick = (duration) => {
    setCheckedDurations((prev) =>
      prev.includes(duration)
        ? prev.filter((d) => d !== duration)
        : [...prev, duration],
    );
  };
  const handleTopicClick = (topic) => {
    setCheckedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
    );
  };

  if (loading) {
    return <div className="p-6 text-blue-500">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  if (videos.length === 0) {
    return <div className="p-6 text-gray-500">no videos found.</div>;
  }

  const filteredVideos = videos.filter((video) => {
    if (checkedLevels.length > 0 && !checkedLevels.includes(video.level)) {
      return false;
    }

    if (checkedGuides.length > 0 && !checkedGuides.includes(video.guide.name)) {
      return false;
    }

    if (
      checkedCountries.length > 0 &&
      !checkedCountries.includes(video.guide.country)
    ) {
      return false;
    }

    if (
      checkedGenders.length > 0 &&
      !checkedGenders.includes(video.guide.gender)
    ) {
      return false;
    }

    if (
      checkedDurations.length > 0 &&
      !checkedDurations.some((breakpoint) => video.duration < breakpoint)
    ) {
      return false;
    }

    if (checkedTopics.length > 0 && !checkedTopics.includes(video.topic)) {
      return false;
    }

    return true;
  });

  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto bg-gray-100 p-6 pb-0">
      <div className="filter3:block hidden">
        <FilterBar
          levels={levels}
          checkedLevels={checkedLevels}
          handleLevelClick={handleLevelClick}
          guidesName={guidesName}
          checkedGuides={checkedGuides}
          handleGuideClick={handleGuideClick}
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
          checkedSign={checkedSign}
        />
      </div>

      <div className="filter3:hidden -mx-6 -mt-6 block">
        <ReducedFilterBar
          onOpenFilterMenu={() => setIsMobileFilterOpen(true)}
        />
        <MobileFilterMenu
          open={isMobileFilterOpen}
          onClose={() => setIsMobileFilterOpen(false)}
          levels={levels}
          checkedLevels={checkedLevels}
          handleLevelClick={handleLevelClick}
          guidesName={guidesName}
          checkedGuides={checkedGuides}
          handleGuideClick={handleGuideClick}
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
          checkedSignMobile={checkedSignMobile}
        />
      </div>

      <div className="side:grid-cols-3 grid4:grid-cols-4 grid2:grid-cols-2 grid min-h-[25vh] grid-cols-1 gap-6 rounded-md bg-gray-100">
        {filteredVideos.map((video) => {
          return <VideoCard key={video.id} video={video} />;
        })}
      </div>

      {filteredVideos.length === 0 && (
        <div className="mx-auto flex h-10 w-110 items-center justify-center rounded-lg bg-slate-300 p-20 text-2xl font-semibold tracking-wider">
          No matching videos!
        </div>
      )}
    </div>
  );
};

export default VideoGrid;
