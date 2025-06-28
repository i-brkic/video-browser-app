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
  const ref = useClickOutside(openDropdown === "topic", () =>
    setOpenDropdown(""),
  );

  if (openDropdown !== "topic") return null;

  return (
    <div ref={ref}>
      <div
        className={`${noAbsolute ? "" : "absolute top-full"} h-53 ${dropdownWidth ? dropdownWidth : "w-60"} overflow-auto rounded-md border border-slate-100 bg-white shadow-md`}
      >
        <span className="mb-2 block pt-3 pl-3 tracking-wide">Include</span>
        <div className="flex flex-col">
          {topics.map((topic) => {
            return (
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopicFilter;
