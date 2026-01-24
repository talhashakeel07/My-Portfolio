import React from 'react'
import './index.css';
const Portfolio = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* --- Navbar --- */}
      <nav className="fixed top-0 w-full bg-gray-800/90 backdrop-blur-md z-50 py-4 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400 cursor-pointer">MyPortfolio</h1>
          <ul className="flex space-x-8">
            {['Home', 'About', 'Service', 'Contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* --- Home Section --- */}
<section id="home" className="relative min-h-screen flex items-center justify-center px-6 md:px-20 bg-[#0B0F17] overflow-hidden pt-20">
  
  {/* Background Decorative Lines (Optional Tech Look) */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#5d5dff_1px,transparent_1px)] [background-size:40px_40px]"></div>
  </div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
    
    {/* Left Side: Text Content */}
    <div className="text-left order-2 md:order-1">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
        Hello, I'm <br /> 
        <span className="text-white">Talha shakeel</span>
      </h2>
      <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
        Hi, I'm a Front-End Web Developer with strong skills in HTML, CSS, JavaScript, 
        and React.js. I love building clean, responsive, and user-friendly websites. 
        I focus on writing clean code, improving our Skills, and turning ideas into 
        interactive web experiences.
      </p>
      <button 
        onClick={() => {
            const element = document.getElementById('service');
            element?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="px-10 py-3 bg-[#5D5DFF] hover:bg-[#4a4aff] text-white font-medium rounded-md transition-all shadow-[0_10px_20px_-10px_rgba(93,93,255,0.5)]"
      >
        Explore my Services
      </button>
    </div>

    {/* Right Side: Circular Image with Shadow */}
    <div className="flex justify-center order-1 md:order-2">
      <div className="relative group">
        
        {/* Glow Shadow Layer (Image ke piche ki chamak) */}
        <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[80px] group-hover:bg-blue-600/30 transition-all duration-500"></div>
        
        {/* Border Pulse Layer */}
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-blue-500/20 absolute -inset-4 animate-[ping_3s_linear_infinite]"></div>
        
        {/* Main Image Container */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[6px] border-[#161B22] shadow-[0_0_60px_-15px_rgba(93,93,255,0.4)]">
          <img 
            src="My-image.jpg" 
            alt="Talha Shakeel" 
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
          />
        </div>
        
        {/* Decorative Grid Over Image (Optional) */}
        <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none"></div>
      </div>
    </div>

  </div>
</section>
     

<section id="about" className="py-24 bg-[#1b2431] text-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
    
    {/* Left Side: Image Container with Shadow */}
    <div className="relative flex justify-center">
      <div className="relative w-full max-w-sm group">
        
        {/* Glow Shadow behind the image (Outer Shadow) */}
        <div className="absolute inset-0 bg-purple-600/20 rounded-3xl blur-2xl transform scale-95 group-hover:scale-105 transition-all duration-500"></div>

        {/* Main Image Container */}
        <div className="relative bg-gray-800 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-square border border-white/10">
          <img 
            src="My-image.jpg" 
            alt="About Me" 
            className="w-full h-full object-cover scale-110"
          />
        </div>
      </div>
    </div>

    {/* Right Side: Text Content */}
    <div className="text-left">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
       I am a  Full-Stack Developer
      </h2>
      <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
        <p>I specialize in building robust and scalable web applications using the MERN (MongoDB, Express.js, React, Node.js) stack. My expertise lies in creating seamless user experiences combined with powerful back-end logic</p>
        <p>My passion is to engineer high-performance digital solutions that turn complex ideas into functional, user-centric web applications for the future.</p>
      </div>

      <div className="mt-10 flex space-x-4">
         <button 
               onClick={() => {
                const element = document.getElementById('service');
               if (element) {
               element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
           className="px-8 py-3 bg-[#A855F7] text-white font-bold rounded-lg shadow-[0_10px_20px_rgba(168,85,247,0.3)] hover:bg-[#9333ea] transition-all">
           My Services
         </button>
        <button className="px-8 py-3 border-2 border-gray-700 text-white font-bold rounded-lg flex items-center gap-2 hover:bg-white/5 transition-all">
          <span className="text-xl">⬇</span> Download CV
        </button>
      </div>
    </div>

  </div>
</section>

      {/* --- Service Section --- */}
     <section id="service" className="py-24 px-6 bg-[#020617] text-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">My Services</h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      
      {/* --- Service 1: Frontend --- */}
      <div className="p-8 bg-gray-800 rounded-2xl border-2 border-transparent hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-xl group">
        <div className="mb-6 text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-blue-400 group-hover:text-blue-300">Frontend Excellence</h3>
        <p className="text-gray-400 leading-relaxed">
          Crafting responsive, high-performance user interfaces using modern HTML, CSS, and JavaScript. Focused on seamless cross-device compatibility.
        </p>
      </div>

      {/* --- Service 2: Full-Stack --- */}
      <div className="p-8 bg-gray-800 rounded-2xl border-2 border-transparent hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-xl group">
        <div className="mb-6 text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-blue-400 group-hover:text-blue-300">Full-Stack Solutions</h3>
        <p className="text-gray-400 leading-relaxed">
          Building robust web applications with the MERN stack. Expert integration of React frontend with scalable Node.js and Express backends.
        </p>
      </div>

      {/* --- Service 3: Database --- */}
      <div className="p-8 bg-gray-800 rounded-2xl border-2 border-transparent hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-xl group">
        <div className="mb-6 text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-blue-400 group-hover:text-blue-300">Database Architecture</h3>
        <p className="text-gray-400 leading-relaxed">
          Designing efficient MongoDB schemas and RESTful APIs to ensure secure data management and lightning-fast server-side processing.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24 bg-gray-800 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="mb-8 text-gray-300">Have a vision in mind? Let’s build something extraordinary together!</p>
          <form className="grid grid-cols-1 gap-4 max-w-lg mx-auto">
            <input type="text" placeholder="Your Name" className="p-4 rounded bg-gray-700 border-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Your Email" className="p-4 rounded bg-gray-700 border-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Message" rows="4" className="p-4 rounded bg-gray-700 border-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button className="bg-blue-600 py-3 rounded font-bold hover:bg-blue-700 transition-all">Send Message</button>
          </form>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-8 text-center border-t border-gray-700 text-gray-500">
        <p>&copy; 2026 Ch Talha. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;