import { useEffect, useState } from "react";

const SearchBar = ({ setQuerry }) => {
  const [localInput, setLocalInput] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setQuerry(localInput);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [localInput, setQuerry]);

  return (
    <div className="side:flex-1 flex w-full items-center gap-3">
      <div className="side:h-10 side:rounded-lg flex h-8 w-full items-center bg-slate-200 px-4 shadow">
        <label className="mr-2 text-sm font-semibold">
          Search by video name
        </label>
        <input
          type="text"
          value={localInput}
          className="side:h-6 h-4 flex-1 rounded-lg bg-slate-300 pl-2 text-sm"
          onChange={(e) => setLocalInput(e.target.value)}
        />
      </div>
      <div className="side:block hidden h-10 w-1 bg-slate-100"></div>
    </div>
  );
};

export default SearchBar;
