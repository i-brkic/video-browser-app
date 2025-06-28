const CustomCheckbox = ({ checked }) => {
  return (
    <div
      className={`bg-checkbox relative h-6 w-6 rounded ${checked ? "ring-2 ring-amber-400" : ""}`}
    >
      {checked && (
        <div className="absolute h-6 w-6 rounded bg-amber-400">
          <div className="absolute inset-0 flex items-center justify-center rounded bg-amber-400">
            <svg
              width="16"
              height="16"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto my-auto"
            >
              <path
                d="M3 7L6 10L11 4"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomCheckbox;
