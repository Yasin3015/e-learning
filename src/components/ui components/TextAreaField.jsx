export default function TextAreaField({ placeholder, value, onChange, error }) {
  return (
    <div className="relative group">
      <textarea
        placeholder={placeholder}
        rows="5"
        value={value}
        onChange={onChange}
        className={`w-full bg-gray-800/50 border ${
          error ? "border-red-500" : "border-gray-700"
        } rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition duration-300 ease-in-out focus:scale-[1.02]`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
