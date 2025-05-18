import FilterBar from "./FilterBar";

const VideoGrid = () => {
  return (
    <div className="bg-gray-300 flex flex-col flex-1 gap-4 overflow-y-auto p-6 pb-0">
      <FilterBar />
      <div className="bg-pink-300 px-6 shadow rounded-md flex items-center flex-1">
        VideoGrid
      </div>
    </div>
  );
};

export default VideoGrid;
