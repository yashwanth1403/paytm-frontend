export default function InputBox({ label, placeholder, onChange }) {
  return (
    <div className="p-3">
      <div
        className="text-sm
     font-medium text-left py-2"
      >
        {label}
      </div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px- py-1 border rounded-lg border-slate-200 placeholder-gray-500 p-2"
      />
    </div>
  );
}
