export default function Inputdash({ label, placeholder, onChange }) {
  return (
    <div className="p-3 flex flex-col gap-4 m-9">
      <div
        className="text-xl
     font-bold text-left py-2"
      >
        {label}
      </div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-slate-400 rounded-lg placeholder-gray-500 p-2.5 bg-slate-100 "
      />
    </div>
  );
}
