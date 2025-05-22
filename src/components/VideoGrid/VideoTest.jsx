import useVideos from "../../hooks/useVideos";

const VideoTest = () => {
  const { videos, error } = useVideos();

  if (error) return <div>{error}</div>;

  if (videos.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h1>Fetched Videos</h1>
      <ul className="flex flex-wrap">
        {videos.map((video) => {
          return (
            <li key={video.title}>
              <p>{video.title}</p>
              <img src={video.thumbnailUrl} alt={video.title} width="200" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VideoTest;
