import { useEffect, useState } from "react";

export const ExperienceCard = ({ title, company, companyUrl, date, points, image }) => {
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

    const cardElement = document.getElementById(title);
    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => {
      if (cardElement) {
        observer.unobserve(cardElement);
      }
    };
  }, [title]);

  return (
    <div
      id={title}
      className={`mb-8 relative transform transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-2 w-3 h-3 bg-cyan-400 rounded-full"></div>
      <div className="absolute left-[5px] top-5 w-[2px] h-full bg-gray-700"></div>

      {/* Content */}
      <div className="ml-8 flex flex-col md:flex-row items-start gap-6">
        {/* Left Column - Image */}
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-24 h-24 object-cover rounded-full border-2 border-cyan-400"
          />
        </div>

        {/* Right Column - Experience details */}
        <div className="flex-1">
          {/* Title and Date Container */}
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between mb-4">
            {/* Title and Company */}
            <div className="pr-4">
              <h3 className="text-xl font-semibold text-white break-words">
                {title}
                <span className="text-cyan-400">
                  ,{" "}
                  <a
                    href={companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-100 hover:drop-shadow-[0_0_10px_rgba(72,210,255,0.8)] break-words"
                  >
                    {company}
                  </a>
                </span>
              </h3>
            </div>
            {/* Date */}
            <div className="md:flex-shrink-0">
              <span className="text-gray-400 text-sm md:text-base whitespace-nowrap">{date}</span>
            </div>
          </div>
          
          {/* Points */}
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            {points.map((point, index) => (
              <li key={index} className="leading-relaxed">
                <span className="break-words">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};



export const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "James Anthony Consulting",
      companyUrl: "https://www.jamesanthonyconsulting.com.au/",
      date: "Dec 2024 - Present",
      points: [
        "Developed and integrated a QR code generation feature into HubSpot's CRM, enabling users to generate and scan vCard QR codes for seamless contact sharing (React).",
      ],
      image: "jac.png",
    },
    {
      title: "Engineering Intern",
      company: "Verida",
      companyUrl: "https://www.verida.network/",
      date: "Jul 2024 – Aug 2024",
      points: [
        "Developed a ranking board for users based on their stakes in the VDAStake pool by fetching data from the Polygon smart contract. (HTML, CSS, JavaScript).",
        "Gained hands-on experience with blockchain technology and smart contract integration.",
      ],
      image: "verida.png",
    },
    {
      title: "IT Support Volunteer",
      company: "City of Adelaide Library",
      companyUrl: "https://www.cityofadelaide.com.au/community/library-services/library-locations/city-library/",
      date: "Oct 2023 – Present",
      points: [
        "Demonstrated strong teaching and communication skills by conducting one-on-one training sessions, boosting the proficiency and confidence of over 100 iOS/Android users in using technology devices.",
        "Resolving a wide range of hardware and software issues, ensuring optimal functionality.",
      ],
      image: "cityAde.png",
    },
  ];

  return (
    <section id="Experience" className="min-h-screen py-20 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-600 mx-auto mt-4"></div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              companyUrl={exp.companyUrl}
              date={exp.date}
              points={exp.points}
              image={exp.image} // Pass the image path here
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
