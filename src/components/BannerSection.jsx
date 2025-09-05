import React from "react";
import Lottie from "lottie-react";
import bannerAnimation from "../assets/lottie files/Background looping animation.json"; // حط اللوتي بتاعتك

const BannerSection = () => {
  return (
    <section
      id="contact-us"
      className="relative w-full py-32 flex items-center justify-center text-center overflow-hidden bg-black/97"
    >
      <div className="absolute inset-0 z-0 opacity-30">
        <Lottie
          animationData={bannerAnimation}
          loop={true}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-20 max-w-2xl px-6">
        <h2
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Join the Future of Learning
        </h2>
        <p
          className="mt-6 text-gray-300 text-lg"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Experience cutting-edge online education with interactive lessons,
          expert instructors, and a platform built to empower learners everywhere.
        </p>
      </div>
    </section>
  );
};

export default BannerSection;
