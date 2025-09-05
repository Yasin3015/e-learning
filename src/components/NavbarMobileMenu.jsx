export default function NavbarMobileMenu({
  menuOpen,
  sections,
  activeId,
  onLinkClick,
}) {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-500 ${
        menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <ul className="flex flex-col items-center gap-4 py-4 bg-transparent backdrop-blur-lg text-lg font-medium">
        {sections.map(({ id, label }) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <button
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
      </ul>
    </div>
  );
}
