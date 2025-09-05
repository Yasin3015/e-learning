import React from "react";
import { Video, Users, Monitor, Award } from "lucide-react"; // icons

const features = [
  {
    icon: <Video className="w-10 h-10 text-purple-400" />,
    title: "High-Quality Video Lessons",
    description:
      "Engaging, professionally produced video lessons designed to deliver knowledge in a clear and interactive way. Our lessons are structured to keep learners focused while ensuring they fully understand the concepts being taught.",
  },
  {
    icon: <Users className="w-10 h-10 text-indigo-400" />,
    title: "Expert Instructors",
    description:
      "Learn from certified professionals with years of industry experience. Our instructors provide practical insights and real-world applications that help learners bridge the gap between theory and practice effectively.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-blue-400" />,
    title: "Learn on Any Device",
    description:
      "Access courses seamlessly on mobile, tablet, or desktop devices. Whether at home, in the office, or on the move, our platform ensures smooth and reliable learning experiences wherever you are.",
  },
  {
    icon: <Award className="w-10 h-10 text-pink-400" />,
    title: "Certified Programs",
    description:
      "Earn certificates that are recognized by leading institutions and employers. Completing our programs demonstrates your commitment to growth, enhances your resume, and boosts your professional credibility.",
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-20 bg-gray-900 text-white text-center px-8"
    >
      {/* Title + Description */}
      <div
        className="max-w-2xl mx-auto mb-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Why Choose EduPro
        </h2>
        <p className="mt-4 text-gray-400">
          Discover the unique benefits of our platform. We combine innovation,
          expertise, and flexibility to provide the ultimate online learning
          experience that empowers you to achieve your goals with confidence.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200} // يخلي الكروت تظهر ورا بعض
            data-aos-duration="1000"
            className="p-6 rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-800 to-gray-900 
            hover:from-gray-700 hover:to-gray-800 transition-all shadow-md hover:shadow-purple-500/20
            transform hover:scale-105 hover:-translate-y-2 duration-500 ease-in-out"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
