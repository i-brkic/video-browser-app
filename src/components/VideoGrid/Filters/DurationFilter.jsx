import CustomCheckbox from "../../../ui/CustomCheckbox";
import useClickOutside from "../../../hooks/useClickOutside";

const DurationFilter = ({
  openDropdown,
  setOpenDropdown,
  durationBreakpoints,
  checkedDurations,
  handleDurationClick,
  noAbsolute = false,
  dropdownWidth,
}) => {
  const ref = !noAbsolute
    ? useClickOutside(openDropdown === "duration", () => setOpenDropdown(""))
    : undefined;

  if (openDropdown !== "duration") return null;

  return (
    <div ref={ref}>
      <div
        className={`${
          noAbsolute
            ? "static w-full max-w-full border-0"
            : `absolute top-full ${dropdownWidth ? dropdownWidth : "w-60"} bg-white shadow-md`
        } h-42 rounded-md border-slate-100`}
      >
        <span className="mb-2 block pt-3 pl-3 tracking-wide">Include</span>
        <div className="flex flex-col">
          {durationBreakpoints.map((duration) => (
            <label
              key={duration}
              className="flex items-center gap-3 p-2 pl-3 text-sm font-semibold hover:bg-slate-100"
              onClick={(e) => {
                e.stopPropagation();
                handleDurationClick(duration);
              }}
            >
              <CustomCheckbox
                checked={checkedDurations.includes(duration)}
                value={duration}
              />
              {`Under ${duration} minutes`}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DurationFilter;
