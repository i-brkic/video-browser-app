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
  const ref = useClickOutside(openDropdown === "country", () =>
    setOpenDropdown(""),
  );

  if (openDropdown !== "country") return null;

  return (
    <div ref={ref}>
      <div
        className={`${noAbsolute ? "" : "absolute top-full"} h-53 ${dropdownWidth ? dropdownWidth : "w-60"} overflow-auto rounded-md border border-slate-100 bg-white shadow-md`}
      >
        <span className="mb-2 block pt-3 pl-3">Include</span>
        <div className="flex flex-col">
          {guidesCountries.map((country) => {
            return (
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CountryFilter;
