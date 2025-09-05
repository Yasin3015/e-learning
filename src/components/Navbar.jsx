import { Menu, X } from "lucide-react";
import NavbarMobileMenu from "./NavbarMobileMenu";
import { useState } from "react";
import { useNavbar } from "../hooks/useNavbar";

export default function Navbar({ sections, activeId, onLinkClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { listRef, itemRefs, indicatorStyle, scrolled } = useNavbar(
    sections,
    activeId
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-all pt-3 pb-3 duration-500 w-dvw ${
        scrolled
          ? "bg-black/30 backdrop-blur-lg shadow-lg shadow-purple-500/30"
          : "bg-black/30 shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            <a href="#home">EduPro</a>
          </div>

          {/* Links */}
          <nav className="relative hidden md:block">
            <ul
              ref={listRef}
              className="relative flex gap-4 md:gap-8 text-sm md:text-base font-medium"
            >
              {sections.map(({ id, label }) => {
                const isActive = activeId === id;
                return (
                  <li key={id}>
                    <button
                      ref={(el) => (itemRefs.current[id] = el)}
                      onClick={() => onLinkClick(id)}
                      className={[
                        "relative px-3 py-1.5 transition-colors duration-300 rounded-lg font-medium",
                        isActive
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md"
                          : "text-gray-300 hover:text-purple-300 hover:bg-white/10",
                      ].join(" ")}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}

              <span
                aria-hidden
                className="absolute bottom-0 h-[3px] rounded-full bg-gradient-to-r from-purple-400 to-blue-400 shadow-[0_0_10px_rgba(168,85,247,0.7)] transition-transform duration-300 ease-out"
                style={{
                  transform: indicatorStyle.transform,
                  width: indicatorStyle.width,
                }}
              />
            </ul>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <NavbarMobileMenu
        menuOpen={menuOpen}
        sections={sections}
        activeId={activeId}
        onLinkClick={(id) => {
          onLinkClick(id);
          setMenuOpen(false);
        }}
      />
    </header>
  );
}
