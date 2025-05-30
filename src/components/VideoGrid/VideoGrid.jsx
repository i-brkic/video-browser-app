import FilterBar from "./FilterBar";
import useVideos from "../../hooks/useVideos";
import VideoCard from "./VideoCard";

const VideoGrid = () => {
  const { videos, error, loading } = useVideos();

  if (loading) {
    return <div className="p-6 text-blue-500">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  if (videos.length === 0) {
    return <div className="p-6 text-gray-500">no videos found.</div>;
  }

  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto bg-gray-100 p-6 pb-0">
      <FilterBar />
      <div className="side:grid-cols-3 grid4:grid-cols-4 grid2:grid-cols-2 grid grid-cols-1 gap-6 rounded-md bg-gray-100">
        {videos.map((video) => {
          return <VideoCard key={video.id} video={video} />;
        })}
      </div>
    </div>
  );
};

export default VideoGrid;
