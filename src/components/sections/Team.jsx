import RevealOnScroll from "../RevealOnScroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Team = () => {
  const developers = [
    {
      name: "Paul Justin T. Dela Cuesta",
      role: "Frontend Developer",
      bio: "nothing, just a simple guy who tries to code.",
      avatar: "/assets/images/developers/paul.jpg",
      github: "https://github.com/pauljustin26",
      linkedin: "https://www.linkedin.com/in/pauljdelacuesta/",
      ig: "https://www.instagram.com/paulj.delacuesta/",
    },
    {
      name: "Joseph Edrick E. Mirasol",
      role: "Backend Developer",
      bio: "if you think you can do it, you can.",
      avatar: "/assets/images/developers/jed.jpg",
      github: "https://github.com/SHYET25",
      linkedin: "",
      ig: "https://www.instagram.com/jed_mirasol/",
    },
    {
      name: "Christoff Jaen V. Reyes",
      role: "Project Manager",
      bio: "the silent type who watches everything.",
      avatar: "/assets/images/developers/chris.jpg",
      github: "https://github.com/jaencna",
      linkedin: "https://www.linkedin.com/in/christoff-jaen-reyes-8825ab32b",
      ig: "https://www.instagram.com/criz_vgs",
    },
    {
      name: "Renz Andrei A. Pambuena",
      role: "UI/UX Designer",
      bio: "jack of all trades, master of none.",
      avatar: "/assets/images/developers/renx.jpg",
      github: "https://github.com/r-pam",
      linkedin: "https://www.linkedin.com/in/andrei-pambuena-538229360",
      ig: "https://www.instagram.com/andweiyou",
    },

    {
      name: "Nathaniel L. Relox",
      role: "QA Tester",
      bio: "trying new things that help me become a better person.",
      avatar: "/assets/images/developers/nats.png",
      github: "https://github.com/reloxnathaniel",
      linkedin: "https://www.linkedin.com/in/nathaniel-relox-212a0030b",
      ig: "https://www.instagram.com/iam_nath04",
    },

    {
      name: "Michael Davenfort V. Pitoc",
      role: "UI/UX Designer",
      bio: "...",
      avatar: "/assets/images/developers/miko.jpg",
      github: "",
      linkedin: "",
      ig: "",
    },
  ];

  return (
    <section
      id="team"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="mt-8 ml-4 mr-4">
          <h3 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#006A71] to-[#48A6A7] text-transparent bg-clip-text">
            Meet the Team
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {developers.map((dev, idx) => (
              <div
                key={idx}
                className="border border-white/10 rounded-xl p-6 text-center hover:-translate-y-1 transition-all transform hover:scale-105"
              >
                <img
                  src={dev.avatar}
                  alt={dev.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border border-black/20"
                />
                <h4 className="text-xl font-bold">{dev.name}</h4>
                <p className="text-[#48A6A7] mb-2">{dev.role}</p>
                <p className="text-sm">{dev.bio}</p>
                <div className="flex justify-center items-center space-x-4 mt-2">
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#48A6A7] hover:text-[#EEEEEE] text-3xl"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#48A6A7] hover:text-blue-700 text-3xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={dev.ig}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#48A6A7] hover:text-pink-500 text-3xl"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Team;
