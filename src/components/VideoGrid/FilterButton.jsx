import { ChevronDown } from "lucide-react";

const FilterButton = ({ icon, label, isOpen, onClick }) => {
  return (
    <button
      className={
        isOpen
          ? "flex w-full items-center justify-between rounded-md border border-orange-300 bg-slate-100 p-2 py-1 text-sm font-semibold tracking-wide transition-colors duration-300"
          : "flex w-full items-center justify-between rounded-md border border-transparent bg-slate-100 p-2 py-1 text-sm font-semibold tracking-wide transition-colors duration-300 hover:border-orange-300"
      }
      onClick={onClick}
    >
      <span className="flex items-center gap-4">
        {icon}
        {label}
      </span>
      <ChevronDown
        className={`h-4 w-4 text-slate-600 transition duration-300 ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
  );
};

export default FilterButton;
