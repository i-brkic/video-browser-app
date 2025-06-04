const LogInSignUp = () => {
  return (
    <div className="flex items-center gap-3">
      <span className="font-semibold">
        Sign in now to not lose your progress
      </span>
      <button className="h-10 w-20 rounded-md bg-orange-400 font-semibold text-white">
        Log in
      </button>
      <button className="h-10 w-20 rounded-md bg-amber-200 font-semibold text-orange-400">
        Sign up
      </button>
      <div className="h-10 w-1 bg-slate-100"></div>
    </div>
  );
};

export default LogInSignUp;
