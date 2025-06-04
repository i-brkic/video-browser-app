const SearchBar = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-130 items-center justify-between rounded-lg bg-slate-200 px-4 shadow">
        <label className="font-semibold">Search by video name</label>
        <input type="text" className="h-6 w-75 rounded-lg bg-slate-300" />
      </div>
      <div className="h-10 w-1 bg-slate-100"></div>
    </div>
  );
};

export default SearchBar;
