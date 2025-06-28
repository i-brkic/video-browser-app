import CustomCheckbox from "../../../ui/CustomCheckbox";
import useClickOutside from "../../../hooks/useClickOutside";

const GenderFilter = ({
  openDropdown,
  setOpenDropdown,
  guidesGenders,
  checkedGenders,
  handleGenderClick,
  noAbsolute = false,
  dropdownWidth,
}) => {
  const ref = useClickOutside(openDropdown === "gender", () =>
    setOpenDropdown(""),
  );

  if (openDropdown !== "gender") return null;

  return (
    <div ref={ref}>
      <div
        className={`${noAbsolute ? "" : "absolute top-full"} h-34 ${dropdownWidth ? dropdownWidth : "w-60"} rounded-md border border-slate-100 bg-white shadow-md`}
      >
        <span className="mb-2 block pt-3 pl-3 tracking-wide">Include</span>
        <div className="flex flex-col">
          {guidesGenders.map((gender) => {
            return (
              <label
                key={gender}
                className="flex items-center gap-3 p-2 pl-3 text-sm font-semibold hover:bg-slate-100"
                onClick={(e) => {
                  e.stopPropagation();
                  handleGenderClick(gender);
                }}
              >
                <CustomCheckbox
                  checked={checkedGenders.includes(gender)}
                  value={gender}
                />
                {gender[0].toUpperCase() + gender.slice(1)}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GenderFilter;
