import { useEffect, useState } from "react";
import fallbackVideos from "../data/videos.json";
const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

const useVideos = () => {
  const [videos, setVideos] = useState([]);

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await Promise.all(
          fallbackVideos.map(async (video) => {
            const encodedQuery = encodeURIComponent(video.thumbnailQuery);
            const fetchThumbnail = await fetch(
              `https://api.pexels.com/v1/search?query=${encodedQuery}`,
              {
                headers: {
                  Authorization: API_KEY,
                },
              },
            );
            const data = await fetchThumbnail.json();

            const thumbnailUrl = data.photos[0]?.src?.medium || "/error.jpg";

            return {
              ...video,
              thumbnailUrl,
            };
          }),
        );
        setVideos(results);
      } catch (err) {
        console.error("Fetching thumbnails failed:", err);
        setError("Failed to fetch thumbnails");
        setVideos(
          fallbackVideos.map((video) => ({
            ...video,
            thumbnailUrl: "/error.jpg",
          })),
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { videos, error, loading };
};

export default useVideos;
