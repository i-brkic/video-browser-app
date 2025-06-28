import { useEffect, useRef } from "react";

const useClickOutside = (isActive, onClickOutside, passedRef) => {
  const innerRef = useRef();
  const ref = passedRef || innerRef;

  useEffect(() => {
    if (!isActive) return;
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isActive, onClickOutside, ref]);

  return ref;
};

export default useClickOutside;
