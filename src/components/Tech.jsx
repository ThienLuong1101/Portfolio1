import { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaJava, FaPython, 
    FaDatabase, FaFigma } from 'react-icons/fa';
import { 
    SiCplusplus, SiC, SiTailwindcss, 
    SiNextdotjs, SiGo, SiR
} from 'react-icons/si';

const TechCard = ({ icon: Icon, name }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    const cardElement = document.getElementById(name);
    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => {
      if (cardElement) {
        observer.unobserve(cardElement);
      }
    };
  }, [name]);

  return (
    <div
      id={name}
      className={`group flex flex-col items-center p-6 bg-black/30 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-cyan-400 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transform transition-all duration-700 ease-in-out`}
    >
      <Icon className="text-4xl md:text-5xl text-cyan-400 group-hover:text-teal-500 transition-colors duration-300" />
      <span className="mt-3 text-white group-hover:text-white transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

export const Tech = () => {
  const technologies = [
    { name: 'C++/C#', icon: SiCplusplus },
    { name: 'C', icon: SiC },
    { name: 'Python', icon: FaPython },
    { name: 'JavaScript', icon: FaJs },
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3Alt },
    { name: 'Java', icon: FaJava },
    { name: 'SQL', icon: FaDatabase },
    { name: 'Go', icon: SiGo },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Figma', icon: FaFigma },
    { name: 'R/Matlab', icon: SiR },
    { name: 'React', icon: FaReact },
    { name: 'Node.js', icon: FaNode },
    { name: 'Next.js', icon: SiNextdotjs }
  ];

  return (
    <section id="Tech" className="min-h-screen py-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-600 mx-auto mt-4"></div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <TechCard
              key={index}
              icon={tech.icon}
              name={tech.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
