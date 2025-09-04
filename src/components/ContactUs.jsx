import Lottie from "lottie-react";
import contactAnimation from "../assets/lottie files/Contact.json";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <span className="text-sm uppercase tracking-widest text-purple-400 font-semibold">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-lg mb-2">
            Have questions about our platform? We’re here to help you anytime.
          </p>
          <p className="text-gray-400 max-w-lg mb-8">
            Fill in the form below and our support team will get back to you as soon as possible.
          </p>

          <ContactForm />
        </div>

        {/* RIGHT */}
        <div className="w-full">
          <Lottie animationData={contactAnimation} loop />
        </div>
      </div>
    </section>
  );
}
