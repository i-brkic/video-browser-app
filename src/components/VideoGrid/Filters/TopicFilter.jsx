import CustomCheckbox from "../../../ui/CustomCheckbox";
import useClickOutside from "../../../hooks/useClickOutside";

const TopicFilter = ({
  openDropdown,
  setOpenDropdown,
  topics,
  checkedTopics,
  handleTopicClick,
  noAbsolute = false,
  dropdownWidth,
}) => {
  const ref = !noAbsolute
    ? useClickOutside(openDropdown === "topic", () => setOpenDropdown(""))
    : undefined;

  if (openDropdown !== "topic") return null;

  return (
    <div ref={ref}>
      <div
        className={`${
          noAbsolute
            ? "static w-full max-w-full border-0"
            : `absolute top-full ${dropdownWidth ? dropdownWidth : "w-60"} overflow-auto bg-white shadow-md`
        } h-53 rounded-md border-slate-100`}
      >
        <span className="mb-2 block pt-3 pl-3 tracking-wide">Include</span>
        <div className="flex flex-col">
          {topics.map((topic) => (
            <label
              key={topic}
              className="flex items-center gap-3 p-2 pl-3 text-sm font-semibold hover:bg-slate-100"
              onClick={(e) => {
                e.stopPropagation();
                handleTopicClick(topic);
              }}
            >
              <CustomCheckbox
                checked={checkedTopics.includes(topic)}
                value={topic}
              />
              {topic}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicFilter;
