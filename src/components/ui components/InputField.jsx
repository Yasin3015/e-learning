import { Mail, User } from "lucide-react";

const icons = { Mail, User };

export default function InputField({ type, placeholder, value, onChange, error, icon }) {
  const Icon = icons[icon];
  return (
    <div className="relative w-full group">
      {Icon && (
        <Icon
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors"
          size={20}
        />
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full bg-gray-800/50 border ${
          error ? "border-red-500" : "border-gray-700"
        } rounded-md px-4 py-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition duration-300 ease-in-out focus:scale-[1.02]`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
