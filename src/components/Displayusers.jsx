export default function Displayusers({ name, onclick }) {
  const letter = name[0].toUpperCase();
  return (
    <div className="flex items-center mt-3 justify-between ml-11 mr-10">
      <div className="flex items-center gap-2">
        <div className="rounded-full sm:h-10 sm:w-10 bg-slate-400 flex flex-col justify-center items-center h-8 w-8">
          {letter}
        </div>
        <div className="sm:text-lg text-md">{name}</div>
      </div>
      <button
        onClick={onclick}
        className=" bg-black text-white  font-semibold text-sm rounded-lg sm:px-3 sm:py-3 px-1 py-1"
      >
        Send money
      </button>
    </div>
  );
}
