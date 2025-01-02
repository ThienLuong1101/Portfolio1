import  { useEffect, useRef } from "react";
import { Contact } from "./components/contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Tech } from "./components/Tech";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import * as THREE from "three"; // Import THREE.js
import Education from "./components/Education";

function App() {
  const canvasRef = useRef(null); // Reference for the canvas

  useEffect(() => {
    // Initialize Three.js when the component mounts
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true }); // alpha:true keeps the background transparent

    // Set renderer size
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create star geometry
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 10000;
    const starPositions = new Float32Array(starCount * 3);

    // Generate random star positions
    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 2000; // spread stars randomly
    }

    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));

    // Create star material
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5, // star size
      transparent: true,
    });

    // Create star points
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Set camera position
    camera.position.z = 800;

    // Animation function
    function animateStars() {
      requestAnimationFrame(animateStars);

      // Star movement (rotation and slight vertical shift)
      stars.rotation.y += 0.0005;
      stars.rotation.x += 0.0002;

      // Move stars downward and reset positions when off-screen
      const positions = stars.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= 0.05;

        if (positions[i + 1] < -1000) {
          positions[i + 1] = 1000;
        }
      }
      stars.geometry.attributes.position.needsUpdate = true;

      // Render scene
      renderer.render(scene, camera);
    }

    // Resize event listener
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Start animation
    animateStars();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Background with radial gradient */}
      <div className="fixed -z-10 w-full h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000d0d_40%,#006666_100%)]">
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Tech />
        <Education/>
        <Contact />
      </main>
 
    </>
  );
}

export default App;
