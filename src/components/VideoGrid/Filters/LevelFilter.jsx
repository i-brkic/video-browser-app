import CustomCheckbox from "../../../ui/CustomCheckbox";
import useClickOutside from "../../../hooks/useClickOutside";

const LevelFilter = ({
  openDropdown,
  setOpenDropdown,
  levels,
  checkedLevels,
  handleLevelClick,
}) => {
  const ref = useClickOutside(openDropdown === "level", () =>
    setOpenDropdown(""),
  );

  if (openDropdown !== "level") return null;

  return (
    <div ref={ref}>
      <div className="absolute top-full h-53 w-60 rounded-md border border-slate-100 bg-white shadow-md">
        <span className="mb-2 block pt-3 pl-3 tracking-wide">Include</span>
        <div className="flex flex-col">
          {levels.map((level) => {
            return (
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LevelFilter;
