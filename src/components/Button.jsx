export default function Button({ label, onClick }) {
  return (
    <div className="p-2">
      <button
        className="bg-gray-800 text-white py-2 px-5 rounded-md w-full my-4"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}
