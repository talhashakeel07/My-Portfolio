import React from 'react'
import './index.css';
const Portfolio = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };
const [isMenuOpen, setIsMenuOpen] = React.useState(false); 


  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
<nav className="fixed top-0 w-full bg-gray-800/90 backdrop-blur-md z-50 py-4 shadow-lg">
  <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-blue-400 cursor-pointer">My Portfolio</h1>

    {/* 1. Desktop Menu (Bari screens ke liye) */}
    <ul className="hidden md:flex space-x-8">
      {['Home', 'About', 'Service', 'Projects', 'Contact'].map((item) => (
        <li key={item}>
          <button 
            onClick={() => scrollToSection(item.toLowerCase())}
            className="hover:text-blue-400 transition-colors duration-300 font-medium text-white"
          >
            {item}
          </button>
        </li>
      ))}
    </ul>

    {/* Hamburger Icon (Mobile ke liye) */}
    <div className="md:hidden flex items-center">
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        className="text-blue-400 focus:outline-none"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>
    </div>
  </div>

  {/* 2. Mobile Menu (Jab hamburger par click ho) */}
  {/* Maine max-h-64 ko max-h-80 kar diya hai taake 'Projects' add hone par menu kate nahi */}
  <div className={`md:hidden bg-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-80 border-t border-gray-700' : 'max-h-0'}`}>
    <ul className="flex flex-col space-y-4 p-6">
      {['Home', 'About', 'Service', 'Projects', 'Contact'].map((item) => (
        <li key={item}>
          <button 
            onClick={() => {
              scrollToSection(item.toLowerCase());
              setIsMenuOpen(false);
            }}
            className="block w-full text-left hover:text-blue-400 transition-colors duration-300 font-medium text-white"
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  </div>
</nav>

<section id="home" className="relative min-h-screen flex items-center justify-center px-6 md:px-20 bg-[#0B0F17] overflow-hidden pt-28 pb-10">
  
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#5d5dff_1px,transparent_1px)] [background-size:40px_40px]"></div>
  </div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
    
    <div className="text-left order-2 md:order-1 mb-10 md:mb-0">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
        Hello, I'm <br /> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Talha shakeel</span>
      </h2>
      <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
       I am a Full-Stack Web Developer specializing in the MERN Stack. I craft high-performance, scalable web applications by bridging the gap between elegant Frontend designs (React.js) and robust Backend systems (Node.js, Express, MongoDB). Let's turn your complex ideas into seamless digital realities.
      </p>
      
      <button 
        onClick={() => {
            const element = document.getElementById('service');
            element?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="group relative px-8 py-3 md:px-10 md:py-4 bg-[#5D5DFF] text-white font-bold rounded-xl transition-all duration-300 hover:bg-[#4a4aff] hover:shadow-[0_0_30px_rgba(93,93,255,0.4)] active:scale-95"
      >
        <span className="relative z-10">Explore my Services</span>
       
        <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>
    </div>


    <div className="flex justify-center order-1 md:order-2">
      <div className="relative group">
        <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[80px] group-hover:bg-blue-600/30 transition-all duration-500"></div>

        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-blue-500/20 absolute -inset-4 animate-[ping_3s_linear_infinite]"></div>
        
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[6px] border-[#161B22] shadow-[0_0_60px_-15px_rgba(93,93,255,0.4)]">
          <img 
            src="My-image.jpg" 
            alt="Talha Shakeel" 
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </div>

  </div>
</section>

<section id="about" className="py-24 bg-[#1b2431] text-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
    
    <div className="relative flex justify-center">
      <div className="relative w-full max-w-sm group">
        
        <div className="absolute inset-0 bg-purple-600/20 rounded-3xl blur-2xl transform scale-95 group-hover:scale-105 transition-all duration-500"></div>

        <div className="relative bg-gray-800 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-square border border-white/10">
          <img 
            src="My-image.jpg" 
            alt="About Me" 
            className="w-full h-full object-cover scale-110"
          />
        </div>
      </div>
    </div>

    <div className="text-left">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
        I am a Full-Stack Developer
      </h2>
      <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
        <p>I specialize in building robust and scalable web applications using the MERN (MongoDB, Express.js, React, Node.js) stack. My expertise lies in creating seamless user experiences combined with powerful back-end logic</p>
        <p>My passion is to engineer high-performance digital solutions that turn complex ideas into functional, user-centric web applications for the future.</p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <button 
          onClick={() => {
            const element = document.getElementById('projects');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="px-6 py-2.5 md:px-8 md:py-3 bg-gradient-to-r from-[#A855F7] to-[#9333ea] text-white text-sm md:text-base font-bold rounded-xl shadow-[0_10px_20px_rgba(168,85,247,0.3)] hover:shadow-[#A855F7]/40 hover:-translate-y-1 transition-all duration-300 active:scale-95"
        >
          My Projects
        </button>

        <button className="px-6 py-2.5 md:px-8 md:py-3 border border-gray-600 bg-white/5 backdrop-blur-sm text-white text-sm md:text-base font-bold rounded-xl flex items-center gap-2 hover:bg-white/10 hover:border-gray-400 transition-all duration-300 active:scale-95">
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          Download CV
        </button>
      </div>
    </div>

  </div>
</section>

     <section id="service" className="py-24 px-6 bg-[#020617] text-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-40">My Services</h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      
      <div className="p-8 bg-gray-800 rounded-2xl border-2 border-transparent hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-xl group">
        <div className="mb-6 text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-blue-400 group-hover:text-blue-300">Frontend Excellence</h3>
        <p className="text-gray-400 leading-relaxed">
          Crafting responsive, high-performance user interfaces using modern HTML, CSS, and JavaScript. Focused on seamless cross-device compatibility.
        </p>
      </div>

      <div className="p-8 bg-gray-800 rounded-2xl border-2 border-transparent hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-xl group">
        <div className="mb-6 text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-blue-400 group-hover:text-blue-300">Full-Stack Solutions</h3>
        <p className="text-gray-400 leading-relaxed">
          Building robust web applications with the MERN stack. Expert integration of React frontend with scalable Node.js and Express backends.
        </p>
      </div>

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

{/* --- Projects Section --- */}
<section id="projects" className="py-24 px-6 bg-[#1b2431] text-white">
  <div className="max-w-7xl mx-auto">
    
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Featured <span className="text-blue-500">Projects</span>
      </h2>
      <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
      <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
        A display of my technical expertise in building scalable, real-world web applications.
      </p>
    </div>

    {/* Project Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "Education Management System",
          desc: "A streamlined LMS with student-teacher portals, attendance tracking, and real-time quiz modules.",
          tech: ["React", "Node.js", "MongoDB", "Express"],
          image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000",
          link: "https://education-management-system-blue.vercel.app/login"
        },
        {
          title: "Warehouse Inventory System",
          desc: "Full-scale inventory solution with stock alerts, supplier management, and real-time barcode tracking.",
          tech: ["React", "Node.js", "MongoDB", "Tailwind"],
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
          link: "" 
        },
        {
          title: "E-Commerce Platform",
          desc: "Modern digital storefront with secure Stripe payments, cart logic, and high-speed product filtering.",
          tech: ["React", "Node.js", "MongoDB", "Tailwind"],
          image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
          link: "" 
        }
      ].map((project, index) => (
        <div 
          key={index} 
          className="group bg-[#0B0F17]/50 rounded-[2rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500 shadow-2xl flex flex-col h-full"
        >
          <div className="relative h-56 sm:h-64 overflow-hidden border-b border-white/5">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/80 to-transparent opacity-40"></div>
          </div>

          {/* Project Content */}
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
              {project.desc}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
              {project.tech.map((t, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded-md border border-blue-500/10"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <button 
                type="button" 
                className="text-sm font-bold text-gray-400 hover:text-white transition-all flex items-center gap-1 group-hover:gap-2"
              >
                Source Code <span>→</span>
              </button>
              
              {project.link && project.link.trim() !== "" ? (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-extrabold rounded-xl transition-all shadow-lg active:scale-95 inline-block text-center"
                >
                  Live Preview
                </a>
              ) : (
                <button 
                  type="button"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-extrabold rounded-xl transition-all shadow-lg active:scale-95"
                >
                  Live Preview
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* --- Contact Section --- */}
<section id="contact" className="py-24 bg-[#0a0d14] px-6 relative overflow-hidden">
  
  {/* Background Decorative Glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

  <div className="max-w-4xl mx-auto text-center relative z-10">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
      Get In <span className="text-blue-500">Touch</span>
    </h2>
    <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full mb-8"></div>
    
    <p className="mb-12 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
      Have a vision in mind? Let’s build something extraordinary together!
    </p>

    {/* Form Container - Now using #1b2431 (Replaced) */}
    <div className="bg-[#1b2431] p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl max-w-2xl mx-auto transition-transform hover:scale-[1.01] duration-500">
      <form className="grid grid-cols-1 gap-6">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-4 rounded-xl bg-[#0a0d14]/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" 
          />
        </div>
        
        <div className="relative">
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-4 rounded-xl bg-[#0a0d14]/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" 
          />
        </div>

        <div className="relative">
          <textarea 
            placeholder="Tell me about your project..." 
            rows="5" 
            className="w-full p-4 rounded-xl bg-[#0a0d14]/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
          ></textarea>
        </div>

        <button className="group relative w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-bold text-white transition-all duration-300 shadow-lg shadow-blue-600/20 active:scale-[0.98] overflow-hidden">
          <span className="relative z-10 flex items-center justify-center gap-2 text-sm uppercase tracking-widest">
            Send Message
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </button>
      </form>
    </div>
  </div>
</section>
{/* --- Modern Footer --- */}
<footer className="bg-[#0b0f17] pt-16 pb-8 px-6 border-t border-white/5 relative overflow-hidden">
  {/* Subtle Bottom Glow Line */}
  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

  <div className="max-w-6xl mx-auto flex flex-col items-center">
    
    {/* Branding Section */}
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-extrabold text-white tracking-tighter italic">
        CH <span className="text-blue-500">TALHA</span>
      </h2>
      <p className="text-gray-400 text-sm mt-4 max-w-xs mx-auto leading-relaxed">
        Crafting high-performance web applications with modern tech stacks.
      </p>
    </div>

    {/* Social Links with Specific Background */}
    <div className="flex space-x-5 mb-12">
      {[
        { name: 'Github', icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
        { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
      ].map((social) => (
        <a 
          key={social.name}
          href="#" 
          className="p-3 bg-[#1b2431] rounded-2xl text-gray-400 hover:text-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 border border-white/5"
        >
          <svg className="w-6 h-6 fill-currentColor" viewBox="0 0 24 24">
            <path d={social.icon} />
          </svg>
        </a>
      ))}
    </div>

    {/* Divider Line */}
    <div className="w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

    {/* Footer Bottom */}
    <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-6">
      <p className="font-medium tracking-wide">
        &copy; {new Date().getFullYear()} <span className="text-gray-300">Ch Talha</span>. All rights reserved.
      </p>
      
      <div className="flex items-center gap-6">
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-blue-400 transition-colors">Back to Top ↑</button>
      </div>

      <div className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
        Designed with ❤️ in 2026
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Portfolio;