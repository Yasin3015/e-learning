import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "#help" },
      { label: "Guides", href: "#guides" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
    ],
  },
];

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            EduPro
          </h2>
          <p className="mt-4 text-gray-400 max-w-xs">
            Empowering learners worldwide with top-quality courses, expert instructors,
            and cutting-edge e-learning experiences.
          </p>
          <p className="mt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} EduPro. All rights reserved.
          </p>
        </div>

        {/* Dynamic Link Columns */}
        {footerLinks.map((col, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-white mb-4">{col.title}</h3>
            <ul className="space-y-3">
              {col.links.map((link, j) => (
                <li key={j}>
                  <a href={link.href} className="hover:text-purple-400 transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={i}
                  href={s.href}
                  className="p-2 rounded-full bg-gray-800 hover:bg-purple-500 transition"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
