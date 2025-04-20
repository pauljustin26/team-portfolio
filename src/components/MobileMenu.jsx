const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center
                  transition-all duration-500 ease-in-out
                  backdrop-blur-md bg-[rgba(10,10,10,0.6)]
                  ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
                `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl hover:rotate-90 transition-transform duration-300 cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <nav className="flex flex-col items-center space-y-6">
        {["home", "about", "team", "projects", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={() => setMenuOpen(false)}
            className={`text-3xl font-semibold text-white hover:text-[#48A6A7]
                        transition-all duration-300 transform hover:scale-110`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
