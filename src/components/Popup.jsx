// Popup.jsx
import React from "react";
import Lottie from "lottie-react";
import { X } from "lucide-react"; 
import comingSoonAnimation from "../assets/lottie files/Coming soon Loading.json";

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div
        className="relative bg-gray-900 text-white p-8 rounded-2xl shadow-lg max-w-md w-full
                   animate-[fadeIn_0.4s_ease]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X size={28} />
        </button>

        <div className="flex flex-col items-center gap-6">
          <Lottie animationData={comingSoonAnimation} loop={true} className="w-40 h-40" />
          <h2 className="text-2xl font-bold text-center">🚀 Coming Soon!</h2>
          <p className="text-gray-400 text-center">
            This feature is under development. Stay tuned for updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
