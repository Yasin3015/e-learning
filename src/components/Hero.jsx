import React from "react";
import Lottie from "lottie-react";
import { CheckCircle } from "lucide-react";
import learningAnimation from "../assets/lottie files/Video learning.json";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-12 px-8 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-center md:text-left"
    >
      {/* Left Content */}
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Learn Anytime, Anywhere
        </h1>
        <p className="text-gray-400 mt-6 text-lg">
          Unlock your potential with our e-learning platform. Access hundreds
          of courses taught by industry experts, at your own pace.
        </p>

        {/* ✅ Features List */}
        <ul className="mt-6 space-y-3 text-left">
          <li className="flex items-center gap-3 text-gray-300">
            <CheckCircle className="w-6 h-6 text-purple-400" />
            Flexible learning schedule
          </li>
          <li className="flex items-center gap-3 text-gray-300">
            <CheckCircle className="w-6 h-6 text-purple-400" />
            Expert instructors & curated content
          </li>
          <li className="flex items-center gap-3 text-gray-300">
            <CheckCircle className="w-6 h-6 text-purple-400" />
            Access from any device
          </li>
        </ul>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center md:justify-start">
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-xl border border-gray-600 text-white hover:border-purple-400 hover:text-purple-400 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Content (Animation) */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Lottie
          animationData={learningAnimation}
          loop={true}
          className="w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default Hero;
