import CustomCheckbox from "../../../ui/CustomCheckbox";
import useClickOutside from "../../../hooks/useClickOutside";

const GuideFilter = ({
  openDropdown,
  setOpenDropdown,
  guidesName,
  checkedGuides,
  handleGuideClick,
  noAbsolute = false,
}) => {
  const ref = !noAbsolute
    ? useClickOutside(openDropdown === "guide", () => setOpenDropdown(""))
    : undefined;

  if (openDropdown !== "guide") return null;

  return (
    <div ref={ref}>
      <div
        className={`${
          noAbsolute
            ? "static w-full max-w-full border-0"
            : "absolute top-full w-60 overflow-auto bg-white shadow-md"
        } h-53 rounded-md border-slate-100`}
      >
        <span className="mb-2 block pt-3 pl-3">Include</span>
        <div className="flex flex-col">
          {guidesName.map((name) => (
            <label
              key={name}
              className="flex items-center gap-3 p-2 pl-3 text-sm font-semibold hover:bg-slate-100"
              onClick={(e) => {
                e.stopPropagation();
                handleGuideClick(name);
              }}
            >
              <CustomCheckbox
                checked={checkedGuides.includes(name)}
                value={name}
              />
              {name}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuideFilter;
