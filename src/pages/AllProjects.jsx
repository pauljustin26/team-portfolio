import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { FaGithub } from "react-icons/fa";
import ScrollUpButton from "../components/ScrollUpButton";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function AllProjects() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const projects = [
    {
      title:
        "Eye C You: A Real-Time Eyelid Detection System for Preventing Driver Drowsiness",
      description:
        "A real-time eyelid detection system designed to prevent driver drowsiness using an Arduino and Python, enhancing road safety.",
      techStack: ["Python", "Arduino"],
      images: [
        "/assets/images/eye-c-you/1.jpg",
        "/assets/images/eye-c-you/2.jpg",
        "/assets/images/eye-c-you/3.jpg",
        "/assets/images/eye-c-you/4.jpg",
      ],

      sourceCodeUrl: "https://github.com/jaencna/Eye-C-You",
    },
    {
      title: "CVSU Management and Grading System",
      description:
        "A comprehensive management and grading system for CVSU that integrates student performance tracking and administrative features.",
      techStack: ["Java", "GUI"],
      images: [
        "/assets/images/cvsu-management-system/1.png", 
        "/assets/images/cvsu-management-system/1-1.png",
        "/assets/images/cvsu-management-system/1-2.png", 
        "/assets/images/cvsu-management-system/2.png", 
        "/assets/images/cvsu-management-system/2-1.png", 
        "/assets/images/cvsu-management-system/2-2.png", 
        "/assets/images/cvsu-management-system/3.png", 
        "/assets/images/cvsu-management-system/3-1.png", 
        "/assets/images/cvsu-management-system/3-2.png", 
      ],
      sourceCodeUrl: "https://github.com/jaencna/CVSU-Grading-System",
    },
    {
      title: "CVSU Sports Management System",
      description:
        "A sports management platform that facilitates team management, event scheduling, and athlete performance tracking.",
      techStack: ["HTML & CSS", "Bootstrap", "PHP", "MySQL"],
      images: [
        "/assets/images/cvsu-sports-management/1.png", 
        "/assets/images/cvsu-sports-management/2.png", 
        "/assets/images/cvsu-sports-management/3.png", 
        "/assets/images/cvsu-sports-management/4.png", 
        "/assets/images/cvsu-sports-management/5.png", 
        "/assets/images/cvsu-sports-management/6.png", 
        "/assets/images/cvsu-sports-management/7.png", 
        "/assets/images/cvsu-sports-management/8.png", 
        "/assets/images/cvsu-sports-management/9.png", 
        "/assets/images/cvsu-sports-management/10.png", 
        "/assets/images/cvsu-sports-management/11.png", 
        "/assets/images/cvsu-sports-management/12.png", 
        "/assets/images/cvsu-sports-management/13.png", 
        "/assets/images/cvsu-sports-management/14.png", 
        "/assets/images/cvsu-sports-management/15.png", 
        "/assets/images/cvsu-sports-management/16.png", 
      ],
      sourceCodeUrl: "https://github.com/jaencna/Sports-Management-System",
    },
    {
      title: "Only Pets: Social Media Platform Exclusives for Pet Owners",
      description:
        "A scalable platform for pet owners to connect, share, and create pet-related content with advanced user management and security features.",
      techStack: ["HTML & CSS", "Bootstrap", "PHP", "MySQL"],
      images: [
        "/assets/images/only-pets/1.png", 
        "/assets/images/only-pets/2.png",
        "/assets/images/only-pets/3.png", 
        "/assets/images/only-pets/4.png", 
        "/assets/images/only-pets/5.png", 
        "/assets/images/only-pets/6.png", 
        "/assets/images/only-pets/7.png", 
        "/assets/images/only-pets/8.png", 
      ],
      sourceCodeUrl: "#",
    },
  ];

  return (
    <section
      id="all-projects"
      className={`min-h-screen flex flex-col items-center py-20 px-4 transform transition-all duration-700 ease-in-out ${
        animate ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <Link
        to="/"
        className="flex items-center gap-2 text-[#48A6A7] hover:text-[#006A71] transition-colors mb-8"
      >
        <ArrowLeftIcon className="w-5 h-5" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#006A71] to-[#48A6A7] bg-clip-text text-transparent text-center mb-12">
        All Projects
      </h1>

      <div className="grid grid-cols-1 gap-12 w-full max-w-4xl">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl border border-white/10 hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm mb-4 text-gray-400">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#48A6A7]/10 py-1 px-3 rounded-full text-sm hover:bg-[#006A71]/20 hover:-translate-y-0.5 
                    hover:shadow-[0_2px_8px_rgba(72,166,167,0.3)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Swiper Gallery */}
            <div className="w-full h-110 mb-6">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                className="rounded-xl overflow-hidden"
              >
                {project.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${project.title} Screenshot ${index + 1}`}
                      className="w-full h-110 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={project.sourceCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#48A6A7] hover:text-[#EEEEEE] text-lg transition-colors"
              >
                Source Code <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>

      <ScrollUpButton />
    </section>
  );
}

export default AllProjects;
