import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Software Engineer";
  
  useEffect(() => {
    let timeout;
    
    const animateText = () => {
      const currentLength = text.length;
      
      if (!isDeleting && currentLength === fullText.length) {
        // Start deleting after a pause
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentLength === 0) {
        // Start typing again after a pause
        timeout = setTimeout(() => setIsDeleting(false), 500);
      } else {
        // Set the speed - faster for deleting, slower for typing
        const speed = isDeleting ? 50 : 100;
        
        timeout = setTimeout(() => {
          setText(prev => 
            isDeleting 
              ? prev.slice(0, -1)
              : fullText.slice(0, prev.length + 1)
          );
        }, speed);
      }
    };

    timeout = setTimeout(animateText, 100);
    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <section
      id="Home"
      className="min-h-screen flex flex-col justify-center items-center px-8 md:px-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Avatar Column - Move to the left */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center md:justify-start"  // Change justify-center to justify-start
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Removed the bubble effect */}
            <motion.img
              src="avatar.jpg"
              alt="Profile Avatar"
              className="absolute inset-[3px] rounded-full object-cover border-4 border-teal-400"  // Added a border around the avatar
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                delay: 0.5,
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
            />
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-xl text-teal-400 font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi there! I'm
          </motion.h2>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Luong Nguyen
          </motion.h1>
          <motion.h3 
            className="text-2xl md:text-3xl text-gray-300 font-semibold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {text}
            <motion.span
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block ml-1"
            >
              |
            </motion.span>
          </motion.h3>
          <motion.p 
            className="text-gray-400 text-lg mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Aspiring software engineer with expertise in full-stack development, distributed systems, and blockchain. 
            Seeking opportunities to create impactful, scalable solutions while advancing technical skills in a  collaborative and dynamic environment.
          </motion.p>
          <motion.div 
            className="flex gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <motion.a 
              href="https://www.linkedin.com/in/luong-thien-nguyen/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.button 
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-teal-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </motion.a>
            <motion.a 
              href="#Contact" // Anchor link to the Contact section
            >
              <motion.button 
                className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
