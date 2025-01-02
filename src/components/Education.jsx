import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Education = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      type: 'education',
      title: "Bachelor of Computer Science, The University of Adelaide, Feb 2023 – Dec 2025",
      items: [
        "GPA: 6.75/7",
        "The UoAC High Achiever Progression Scholarship (Top 100 students)",
        "Global Citizens Scholarship (30% scholarship)",
      ],
      image: "university.png",
    },
    {
      id: 2,
      type: 'awards',
      title: "Winner Hackathon Space and Innovation 2024",
      items: [
        "Participated in a 24-hour hackathon for Lunar Living, where I developed a UI controller for a sleep pod, demonstrating teamwork and problem-solving skills that led to our victory.",
      ],
      image: "hackathon.png",
      image2: "hackathon2.png",
    },
    {
      id: 3,
      type: 'certifications',
      title: "Azure Data Fundamentals by Microsoft",
      items: [
        "Essential skills in managing and analyzing data using Azure services like Azure SQL Database, Blob Storage, and Data Lake. It strengthened my understanding of cloud-based data solutions and data security.",
      ],
      image: "microsoftcer.png",
    },
    {
      id: 4,
      type: 'certifications',
      title: "Global IQ Connection by The University of Adelaide",
      items: [
        "Completed a global intelligence program that fostered collaboration, problem-solving, and innovation skills, which strengthened my cross-cultural communication and leadership abilities.",
      ],
      image: "global.png",
    },
    {
      id: 5,
      type: 'certifications',
      title: "Software Engineer by HackerRank",
      items: [
        "Acquired hands-on experience in core computer science concepts such as algorithms, data structures, and problem-solving techniques, helping solidify my foundation as a software engineer.",
      ],
      image: "hackarank.png",
    },
    
  ];

  const paginate = (newDirection) => {
    let newIndex = currentIndex + newDirection;
    if (newIndex < 0) newIndex = cards.length - 1;
    if (newIndex >= cards.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  const renderCard = (card) => {
    switch (card.type) {
      case 'education':
      case 'awards':
      case 'certifications':
        return (
          <motion.div 
            className="min-h-[400px] max-h-[500px] md:min-h-[500px] w-full max-w-[900px] mx-auto rounded-xl bg-gradient-to-br from-gray-950 to-gray-830  p-4 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={card.id}
          >
            <div className="h-full flex flex-col md:flex-row gap-4 md:gap-6">
              <motion.div 
                className="w-full md:w-1/2 h-48 md:h-auto flex-shrink-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full max-h-[450px] object-cover rounded-lg rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-300 to-cyan-600 p-1"
                />
              </motion.div>
              <motion.div 
                className="flex flex-col justify-center flex-grow w-full md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white max-w-[450px]">{card.title}</h3>
                </div>
                <ul className="space-y-3">
                  {card.items.map((item, index) => (
                    <li
                      key={index}
                      className="w-full gap-4 bg-gradient-to-br from-gray-900 to-gray-880 p-3 rounded-lg transform transition-all duration-300 hover:translate-x-2"
                    
                    >
                      <p className={`text-sm md:text-base max-w-[450px] ${card.type === 'education' ? 'text-cyan-400' : 'text-white'}`}>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>

               
              </motion.div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.section 
      id="Education" 
      className="min-h-screen py-12 md:py-20 px-4 md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
      <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-600 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          <div className="transition-all duration-500 ease-in-out">
            {renderCard(cards[currentIndex])}
          </div>

          <motion.button
            className="absolute -left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 transition-colors duration-200"
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>
          <motion.button
            className="absolute -right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black hover:bg-black/70 text-white p-2 rounded-full z-10 transition-colors duration-200"
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.button>

          <motion.div 
            className="flex justify-center gap-2 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {cards.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-cyan-400' : 'bg-gray-600'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;