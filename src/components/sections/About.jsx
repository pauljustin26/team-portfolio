import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendStack = [
    "React",
    "Bootstrap",
    "TailwindCSS",
    "HTML",
    "CSS",
    "JavaScript",
  ];

  const backendStack = ["MySQL", "MongoDB", "PHP", "Node.js"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#006A71] to-[#48A6A7] bg-clip-text text-transparent text-center">
            {" "}
            About Us
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="mb-6">
              We are a team of enthusiastic Cavite State University students who
              share a passion for web development. Our team is not just diverse
              in our backgrounds, but also in our skills. Each of us has a
              different specialty to contribute. Some are strong in backend
              development, handling server side logic and smooth functionality,
              while others handle databases, organizing and managing data in the
              most efficient manner. Meanwhile, our frontend developers are
              concerned with building an interactive and user friendly
              interface. Our power comes in the form of collaboration and
              teamwork. When we pool our skills together, we work together as a
              seamless unit to make websites come alive. Each site that we
              design is a culmination of hard work, effort, and the combined
              skill of our team. Driven by creativity and innovation, we aim to
              create meaningful and impactful web solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendStack.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#48A6A7]/10 py-1 px-3 rounded-full text-sm hover:bg-[#006A71]/20 hover:-translate-y-0.5 
                      hover:shadow-[0_2px_8px_rgba(72,166,167,0.3)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendStack.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#48A6A7]/10 py-1 px-3 rounded-full text-sm hover:bg-[#006A71]/20 hover:-translate-y-0.5 
                      hover:shadow-[0_2px_8px_rgba(72,166,167,0.3)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Mission </h3>
              <h4 className="list-disc list-inside space-y-2">
                The development of innovative, user friendly websites will be
                achieved by the teamwork and various skill sets.
              </h4>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Vision</h3>
              <div className="space-y-4">
                <div>
                  <h4>
                    The use of creativity and the pursuit of excellence will be
                    the primary tools of creating memorial web solutions.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
