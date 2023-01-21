import { useRef } from "react";

const TimerDuration = () => {
  const timeDurationInput = useRef(null);

  const handleSetTime = () => {
    localStorage.setItem("timeDuration", timeDurationInput.current.value);
  };

  return (
    <form
      className="flex flex-col justify-center items-baseline sm:w-1/2 lg:w-1/3 mx-auto mt-16 gap-2 border-2 border-slate-500 rounded-sm py-4 px-8 text-slate-300"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="time-duration" className="text-lg">
        Time Duration:
      </label>
      <div className="flex items-center gap-2">
        <input
          ref={timeDurationInput}
          className="w-2/3 text-lg rounded-sm bg-transparent 
        border-2 border-slate-500 py-1 px-2
        focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent
        duration-300 ease-in-out transition-all text-slate-300"
          type="number"
          name="time-duration"
          id="time-duration"
          defaultValue={1}
          onInput={(e) => {
            let x = e.target.value;
            e.target.value = x > 60 ? 60 : x < 1 ? 1 : x;
          }}
        />
        <div className="text-lg flex gap-2">
          <span>minutes</span>
        </div>
      </div>
      <button
        type="submit"
        className="border-2 border-slate-500 rounded-sm py-2 px-8 mt-6 hover:bg-slate-700 hover:text-slate-100 duration-300 ease-in-out transition-all text-slate-300 text-lg font-semibold tracking-wider focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent select-none"
        onClick={handleSetTime}
      >
        Set Time
      </button>
    </form>
  );
};

export default TimerDuration;
