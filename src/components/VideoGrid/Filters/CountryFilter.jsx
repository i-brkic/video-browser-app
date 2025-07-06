import CustomCheckbox from "../../../ui/CustomCheckbox";
import useClickOutside from "../../../hooks/useClickOutside";

const CountryFilter = ({
  openDropdown,
  setOpenDropdown,
  guidesCountries,
  checkedCountries,
  handleCountryClick,
  noAbsolute = false,
  dropdownWidth,
}) => {
  const ref = !noAbsolute
    ? useClickOutside(openDropdown === "country", () => setOpenDropdown(""))
    : undefined;

  if (openDropdown !== "country") return null;

  return (
    <div ref={ref}>
      <div
        className={`${
          noAbsolute
            ? "static h-53 w-full max-w-full overflow-y-auto border-0"
            : `absolute top-full ${dropdownWidth ? dropdownWidth : "w-60"} overflow-auto bg-white shadow-md`
        } h-53 rounded-md border-slate-100`}
      >
        <span className="mb-2 block pt-3 pl-3">Include</span>
        <div className="flex flex-col">
          {guidesCountries.map((country) => (
            <label
              key={country}
              className="flex items-center gap-3 p-2 pl-3 text-sm font-semibold hover:bg-slate-100"
              onClick={(e) => {
                e.stopPropagation();
                handleCountryClick(country);
              }}
            >
              <CustomCheckbox
                checked={checkedCountries.includes(country)}
                value={country}
              />
              {country}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryFilter;
