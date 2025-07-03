import CustomCheckbox from "../../../ui/CustomCheckbox";
import useClickOutside from "../../../hooks/useClickOutside";

const LevelFilter = ({
  openDropdown,
  setOpenDropdown,
  levels,
  checkedLevels,
  handleLevelClick,
  noAbsolute = false,
}) => {
  const ref = !noAbsolute
    ? useClickOutside(openDropdown === "level", () => setOpenDropdown(""))
    : undefined;

  if (openDropdown !== "level") return null;

  return (
    <div ref={ref}>
      <div
        className={`${
          noAbsolute
            ? "static w-full max-w-full border-0"
            : "absolute top-full w-60 bg-white shadow-md"
        } h-53 rounded-md border-slate-100`}
      >
        <span className="mb-2 block pt-3 pl-3 tracking-wide">Include</span>
        <div className="flex flex-col">
          {levels.map((level) => (
            <label
              key={level}
              className="flex items-center gap-3 p-2 pl-3 text-sm font-semibold hover:bg-slate-100"
              onClick={(e) => {
                e.stopPropagation();
                handleLevelClick(level);
              }}
            >
              <CustomCheckbox
                checked={checkedLevels.includes(level)}
                value={level}
              />
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LevelFilter;
