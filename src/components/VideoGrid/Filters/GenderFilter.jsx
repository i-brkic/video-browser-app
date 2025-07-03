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
  const ref = !noAbsolute
    ? useClickOutside(openDropdown === "gender", () => setOpenDropdown(""))
    : undefined;

  if (openDropdown !== "gender") return null;

  return (
    <div ref={ref}>
      <div
        className={`${
          noAbsolute
            ? "static w-full max-w-full border-0"
            : `absolute top-full ${dropdownWidth ? dropdownWidth : "w-60"} bg-white shadow-md`
        } h-34 rounded-md border-slate-100`}
      >
        <span className="mb-2 block pt-3 pl-3 tracking-wide">Include</span>
        <div className="flex flex-col">
          {guidesGenders.map((gender) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenderFilter;
