import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Team from "./components/sections/Team";
import ScrollUpButton from "./components/ScrollUpButton";
import AllProjects from "./pages/AllProjects";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <Router>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`w-full min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${
          isDarkMode
            ? "bg-[#222831] text-gray-300"
            : "bg-[#EEEEEE] text-[#222831]"
        }`}
      >
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <ScrollUpButton />
        <Routes>
          <Route
            path="/portfolio"
            element={
              <>
                <Navbar
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                />
                <Home />
                <About />
                <Team />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/portfolio/projects" element={<AllProjects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
