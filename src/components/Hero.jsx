import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { CheckCircle } from "lucide-react";
import learningAnimation from "../assets/lottie files/Video learning.json";
import Popup from "./Popup"; 

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const features = [
    "Flexible learning schedule",
    "Expert instructors & curated content",
    "Access from any device",
  ];
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex flex-col md:flex-row justify-center items-center gap-12 px-8 
      bg-gradient-to-b from-gray-900 via-black to-gray-900 text-center md:text-left"
    >
      <div className="max-w-xl" data-aos="fade-right">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight 
        bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Learn Anytime, Anywhere
        </h1>
        <p className="text-gray-400 mt-6 text-lg">
          Unlock your potential with our e-learning platform. Access hundreds
          of courses taught by industry experts, at your own pace.
        </p>
        <ul className="mt-6 space-y-3 text-left">
          {features.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-gray-300"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <CheckCircle className="w-6 h-6 text-purple-400" />
              {item}
            </li>
          ))}
        </ul>
        <div
          className="mt-8 flex gap-4 justify-center md:justify-start"
          data-aos="zoom-in-up"
          data-aos-delay="600"
        >
          <button
            onClick={() => setIsPopupOpen(true)}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 
            text-white font-semibold shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform"
          >
            Get Started
          </button>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="px-8 py-3 rounded-xl border border-gray-600 text-white 
            hover:border-purple-400 hover:text-purple-400 transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
        <Lottie
          animationData={learningAnimation}
          loop={true}
          className="w-full max-w-md"
        />
      </div>

      {/* ✅ Popup Component */}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
};

export default Hero;
