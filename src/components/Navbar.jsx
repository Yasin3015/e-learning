import { useLayoutEffect, useMemo, useRef, useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // أيقونات للهامبورجر و X

export default function Navbar({ sections, activeId, onLinkClick }) {
  const listRef = useRef(null);
  const itemRefs = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({
    transform: "translateX(0px)",
    width: 0,
  });
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const idSet = useMemo(() => new Set(sections.map((s) => s.id)), [sections]);

  const measure = () => {
    if (!activeId || !idSet.has(activeId)) return;
    const el = itemRefs.current[activeId];
    const list = listRef.current;
    if (!el || !list) return;
    const listRect = list.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const left = elRect.left - listRect.left;
    const width = elRect.width;
    setIndicatorStyle({
      transform: `translateX(${left}px)`,
      width,
    });
  };

  useLayoutEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, sections]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-all duration-500 ${
        scrolled
          ? "bg-black/30 backdrop-blur-lg shadow-lg shadow-purple-500/30"
          : "bg-black shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            EduPro
          </div>

          {/* Desktop Navigation */}
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
                        "relative px-2 py-1 transition-colors duration-300",
                        isActive
                          ? "text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]"
                          : "text-gray-300 hover:text-purple-300",
                      ].join(" ")}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}

              {/* Animated underline */}
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

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 bg-black/90 backdrop-blur-lg text-lg font-medium">
          {sections.map(({ id, label }) => {
            const isActive = activeId === id;
            return (
              <li key={id}>
                <button
                  onClick={() => {
                    onLinkClick(id);
                    setMenuOpen(false); // يقفل المينيو بعد الكليك
                  }}
                  className={[
                    "relative px-2 py-1 transition-colors duration-300",
                    isActive
                      ? "text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]"
                      : "text-gray-300 hover:text-purple-300",
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
