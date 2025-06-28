import CustomCheckbox from "../../../ui/CustomCheckbox";
import useClickOutside from "../../../hooks/useClickOutside";

const GuideFilter = ({
  openDropdown,
  setOpenDropdown,
  guidesName,
  checkedGuides,
  handleGuideClick,
}) => {
  const ref = useClickOutside(openDropdown === "guide", () =>
    setOpenDropdown(""),
  );
  if (openDropdown !== "guide") return null;

  return (
    <div ref={ref}>
      <div className="absolute top-full h-53 w-60 overflow-auto rounded-md border border-slate-100 bg-white shadow-md">
        <span className="mb-2 block pt-3 pl-3">Include</span>
        <div className="flex flex-col">
          {guidesName.map((name) => {
            return (
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GuideFilter;
