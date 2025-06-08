const LogInSignUp = () => {
  return (
    <div className="side:w-auto side:px-0 flex w-full items-center justify-between gap-3 px-3">
      <span className="progress:block side:hidden block text-xs font-semibold">
        Sign in now to not lose your progress
      </span>
      <div className="flex items-center gap-3">
        <button className="side:h-10 side:w-20 side:text-base h-6 w-12 rounded-lg bg-orange-400 text-xs font-semibold text-white">
          Log in
        </button>
        <button className="side:h-10 side:w-20 side:text-base h-6 w-14 rounded-lg bg-amber-200 text-xs font-semibold text-orange-400">
          Sign up
        </button>
      </div>
      <div className="side:block hidden h-10 w-1 bg-slate-100"></div>
    </div>
  );
};

export default LogInSignUp;
