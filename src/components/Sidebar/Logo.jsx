import { Globe } from "lucide-react";

const Logo = () => {
  return (
    <div className="side:flex hidden items-center space-x-3 p-5 pb-1">
      <Globe className="h-26 w-26 text-orange-400" />

      <span className="text-l font-semibold text-gray-800">
        Dreaming Languages
      </span>
    </div>
  );
};

export default Logo;
