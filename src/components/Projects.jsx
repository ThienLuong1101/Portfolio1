import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';

const TechBadge = ({ name }) => (
  <span className="px-4 py-1 text-gray-300 mr-4 bg-black rounded-full">
    {name}
  </span>
);

export const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 2;

  const projects = [
    {
      title: "YouTube with Share Screen Features",
      description: "Enhanced YouTube platform with ad-free functionality, user video tracking, and integrated share-screen feature for real-time viewing with others.",
      technologies: ["React", "JavaScript", "Material-UI", "Node.js", "Agora", "WebRTC"],
      period: "June 2024 – Aug 2024",
      image: "ytbclone.png",
      github: "https://github.com/ThienLuong1101/MyTube"
    },
    {
      title: "Expense Tracker (Save Penny)",
      description: "Developed an expense tracker app allowing users to log and categorize their expenses, providing charts for visualizing spending patterns. Integrated OpenAI for personalized financial advice.",
      technologies: ["C#", "ASP.NET Core MVC", "SQL", "OpenAI"],
      period: "Oct 2024 – Dec 2024",
      image: "savepenny.png",
      github: "https://github.com/ThienLuong1101/SavePenny"
    },
    {
      title: "Volunteer Organization Website",
      description: "Led a team of 4 to develop a platform for a volunteer organization where users can join, receive notifications, and participate in events.",
      technologies: ["JavaScript", "HTML", "CSS", "SQL", "Node.js"],
      period: "Apr 2024 – Jun 2024",
      image: "wdc.png",
      github: "https://github.com/ThienLuong1101/VolunteerWeb"
    },
    {
      title: "Chat Application with ChatBot (Chatterly)",
      description: "Built a real-time chat app with AI chatbot integration for answering user queries, scalable system supporting multiple channels and interactions, secure authentication with password validation, JWT tokens, and cookie-based sessions.",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Stream API", "Node.js", "Google AI", "CORS"],
      period: "Aug 2024 – Oct 2024",
      image: "chatterly.png",
      github: "https://github.com/ThienLuong1101/ChatRoomCode"
    },
    {
      title: "Flappy Bird with Computer Vision Control",
      description: "Developed an interactive Python game using OpenCV and Pygame, enabling players to control gameplay via hand gestures captured through a webcam. Implemented multi-threading architecture for smooth performance.",
      technologies: ["Python", "OpenCV", "Pygame", "MediaPipe"],
      period: "June 2024 – July 2024",
      image: "flap.png",
      github: "https://github.com/ThienLuong1101/FlappyBirdAndHandTracking"
    },
    {
      title: "Distributed REST API System",
      description: "Designed and implemented a REST API system with concurrency handling using Lamport locks and state persistence via serialization.",
      technologies: ["Java", "Socket", "HTTP", "Threadpool","JSON","RMI"],
      period: "June 2024 – July 2024",
      image: "rest-api.png",
      github: "https://github.com/ThienLuong1101/REST_API_SYSTEM"
    },
  ];

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const visibleProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Animation logic using Intersection Observer
  const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.1,
        }
      );
  
      if (cardRef.current) {
        observer.observe(cardRef.current);
      }
  
      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, []);

    return (
      <div 
        ref={cardRef}
        className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : ''}`}
      >
        {/* Project Image */}
        <div className="w-full md:w-2/5">
          <div className={`rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-300 to-cyan-600 p-1 transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-95'}`}>
            <img 
              src={project.image}
              alt={project.title}
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Project Info */}
        <div className="w-full md:w-3/5 space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors hover:scale-105 duration-300"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-y-2 mt-4">
            {project.technologies.map((tech, index) => (
              <TechBadge key={index} name={tech} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="Projects" className="min-h-screen py-20 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-600 mx-auto mt-4"></div>
        </div>

        {/* Projects List */}
        <div className="relative">
          <div className="space-y-32">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={startIndex + index} project={project} index={index} />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-16">
            <button
              onClick={prevPage}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors hover:scale-110 duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPage === index ? 'bg-cyan-400 scale-125' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors hover:scale-110 duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;