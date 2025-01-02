import { useState } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: "#Home", text: "Home" },
    
    { href: "#Experience", text: "Experience" },
    { href: "#Projects", text: "Projects" },
    { href: "#Tech", text: "Tech" },
    { href: "#Education", text: "Education" },
    { href: "#Contact", text: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 z-20 w-full bg-[#000d0d]/80 px-10 md:px-16 py-6 backdrop-blur-md">
        <div className="flex items-center justify-between text-white">
          {/* Logo */}
          <a
            href="#Home"
            className="bg-gradient-to-r from-cyan-400 to-teal-500 text-cyan-400 bg-clip-text text-3xl font-semibold text-transparent transition-all duration-300 hover:opacity-100 hover:drop-shadow-[0_0_10px_rgba(72,210,255,0.8)]"
          >
            VIET AN
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-10 justify-center flex-grow">
            {navItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className="cursor-pointer from-cyan-400 to-teal-600 opacity-70 transition-all duration-300 hover:opacity-100"
              >
                <li>{item.text}</li>
              </a>
            ))}
          </ul>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/luong-thien-nguyen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 transition-all duration-300 hover:text-teal-400"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/ThienLuong1101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 transition-all duration-300 hover:text-teal-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.instagram.com/thienluong9478/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 transition-all duration-300 hover:text-teal-400"
            >
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white transition-all duration-300 hover:text-gray-300"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Right Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-black transform transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="flex flex-col h-full">
          {/* Close button */}
          <button
            onClick={toggleMenu}
            className="text-white p-6 self-end hover:text-gray-300 transition-colors"
          >
            <FaTimes size={24} />
          </button>

          {/* Navigation Items */}
          <ul className="flex flex-col gap-5 px-6">
            {navItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-white hover:text-gray-300 transition-colors py-2"
              >
                <li>{item.text}</li>
              </a>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-5 px-6 mt-8">
            <a
              href="https://www.linkedin.com/in/luong-thien-nguyen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 transition-all duration-300 hover:text-gray-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/ThienLuong1101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 transition-all duration-300 hover:text-gray-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.instagram.com/thienluong9478/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 transition-all duration-300 hover:text-gray-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
