import { useState, useEffect } from "react";
import { Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import InputField from "./ui components/InputField";
import TextAreaField from "./ui components/TextAreaField";
import { validateContactForm } from "../utils/validation";
import SuccessPopup from "./SuccessPopup";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
  ];

  return (
    <>
      {/* Social Icons */}
      <div
        className="mb-8 flex gap-4"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        {socialLinks.map(({ icon: Icon, href, label }, index) => (
          <a
            key={label}
            href={href}
            className="p-3 rounded-full bg-gray-800 hover:bg-purple-500/80 transition-colors"
            title={label}
            data-aos="zoom-in"
            data-aos-delay={1000 + index * 200} // كل أيقونة تظهر متأخرة عن اللي قبلها
          >
            <Icon className="text-white" size={20} />
          </a>
        ))}
      </div>
      <form
        className="space-y-6"
        onSubmit={handleSubmit}
        data-aos="fade-up"
      >
        <div
          className="flex flex-col md:flex-row gap-4"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <InputField
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            error={errors.name}
            icon="User"
          />
          <InputField
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            error={errors.email}
            icon="Mail"
          />
        </div>

        <div data-aos="fade-left" data-aos-delay="400">
          <TextAreaField
            placeholder="Message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            error={errors.message}
          />
        </div>

        <div data-aos="zoom-in" data-aos-delay="600">
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </div>
      </form>

      {success && <SuccessPopup onClose={() => setSuccess(false)} />}
    </>
  );
}
