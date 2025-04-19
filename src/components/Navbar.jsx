import { useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const Navbar = ({ menuOpen, setMenuOpen, isDarkMode, setIsDarkMode }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold">
            stu<span className="text-[#006A71]">.devs</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden transition-transform hover:scale-110"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "team", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="hover:text-white transition-colors capitalize"
              >
                {section}
              </a>
            ))}
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2">
              {isDarkMode ? (
                <MoonIcon className="w-6 h-6" />
              ) : (
                <SunIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
