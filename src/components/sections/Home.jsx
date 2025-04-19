import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#006A71] to-[#48A6A7] 
          bg-clip-text text-transparent leading-right"
          >
            Hello, We Are StuDevs
          </h1>

          <p className="text-lg mb-8 max-w-lg mx-auto">
            We are a group of students from cavite state university who
            specialize in different fields of web development backend, database
            administration, and frontend. By sharing our skills through teamwork
            and collaboration; we build functional, effective, and accessible
            websites. Innovation is what we are passionate about, and with that,
            we create web solutions that have significant impacts.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-[#006A71] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
              hover:shadow-[0_0_20px_rgba(0,106,113,0.3)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-[#006A71]/50 text-[#006A71] py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,106,113,0.3)] hover:bg-[#48A6A7]/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
