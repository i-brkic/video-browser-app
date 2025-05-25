import { ArrowDownToLine } from "lucide-react";
import { EllipsisVertical } from "lucide-react";
import { ChartNoAxesColumnIncreasing } from "lucide-react";

const VideoCard = ({ video }) => {
  const styles = {
    superbeginner:
      "flex w-33 items-center gap-2 rounded-md bg-cyan-400 px-1 p-1",
    beginner: "flex w-24 items-center gap-2 rounded-md bg-sky-500 p-1",
    intermediate: "flex w-30 items-center gap-2 rounded-md bg-orange-400 p-1",
    advanced: "flex w-26 items-center gap-2 rounded-md bg-rose-500 p-1",
  };

  return (
    <div className="flex h-60 flex-col rounded-lg bg-white transition-shadow duration-200 hover:shadow-xl">
      <div className="h-33 overflow-hidden rounded-t-md">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="h-full w-full"
        />
      </div>

      <div className="flex h-26 flex-col gap-3 p-3 pb-0">
        <div className="flex items-center justify-between">
          <span className="bg-white-900 text-m text-base font-semibold">
            {video.title}
          </span>
          <div className="flex">
            <ArrowDownToLine className="h-4 w-4 self-start text-gray-900" />
            <EllipsisVertical className="h-4 w-4 self-start text-gray-900" />
          </div>
        </div>

        <div className={styles[video.level]}>
          <ChartNoAxesColumnIncreasing className="text- h-3 w-3 text-gray-200" />
          <div className="text-sm text-white">{video.level}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
