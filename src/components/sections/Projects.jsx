import RevealOnScroll from "../RevealOnScroll";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#006A71] to-[#48A6A7] bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2">
                Only Pets: Social Media Platform Exclusives for Pet Owners
              </h3>
              <p className="mb-4">
                A scalable platform for pet owners to connect, share, and create
                pet-related content with advanced user management and security
                features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML & CSS", "Bootstrap", "PHP", "MySQL"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-[#48A6A7]/10 py-1 px-3 rounded-full text-sm hover:bg-[#006A71]/20 hover:-translate-y-0.5
                    hover:shadow-[0_2px_8px_rgba(72,166,167,0.3)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <Link
                  to="/portfolio/projects"
                  className="text-[#48A6A7] hover:text-[#006A71] transition-colors my-4"
                >
                  View Project →
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-2">
                Eye C You: A Real-Time Eyelid Detection System for Preventing
                Driver Drowsiness
              </h3>
              <p className="mb-4">
                A real-time eyelid detection system designed to prevent driver
                drowsiness using an Arduino and Python, enhancing road safety.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Arduino"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#48A6A7]/10 py-1 px-3 rounded-full text-sm hover:bg-[#006A71]/20 hover:-translate-y-0.5 
                    hover:shadow-[0_2px_8px_rgba(72,166,167,0.3)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <Link
                  to="/portfolio/projects"
                  className="text-[#48A6A7] hover:text-[#006A71] transition-colors my-4"
                >
                  View Project →
                </Link>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-2">
                CVSU Management and Grading System
              </h3>
              <p className="mb-4">
                A comprehensive management and grading system for CVSU that
                integrates student performance tracking and administrative
                features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "GUI"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#48A6A7]/10 py-1 px-3 rounded-full text-sm hover:bg-[#006A71]/20 hover:-translate-y-0.5 
                      hover:shadow-[0_2px_8px_rgba(72,166,167,0.3)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <Link
                  to="/portfolio/projects"
                  className="text-[#48A6A7] hover:text-[#006A71] transition-colors my-4"
                >
                  View Project →
                </Link>
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-2">
                CVSU Sports Management System
              </h3>
              <p className="mb-4">
                A sports management platform that facilitates team management,
                event scheduling, and athlete performance tracking.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML & CSS", "Bootstrap", "PHP", "MySQL"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-[#48A6A7]/10 py-1 px-3 rounded-full text-sm hover:bg-[#006A71]/20 hover:-translate-y-0.5 
                    hover:shadow-[0_2px_8px_rgba(72,166,167,0.3)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center ">
                <Link
                  to="/portfolio/projects"
                  className="text-[#48A6A7] hover:text-[#006A71] transition-colors my-4"
                >
                  View Project →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
