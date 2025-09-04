import Lottie from "lottie-react";
import successAnimation from "../assets/lottie files/Check icon.json";

export default function SuccessPopup({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
      <div className="bg-gray-900 rounded-2xl p-8 text-center shadow-2xl animate-fadeIn">
        <Lottie animationData={successAnimation} loop={false} className="w-32 mx-auto" />
        <h3 className="text-2xl font-bold text-white mt-4">Message Sent!</h3>
        <p className="text-gray-400 mb-4">
          Thank you for contacting us. We’ll get back to you soon.
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
