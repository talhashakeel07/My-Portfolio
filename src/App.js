import React, { useState, useEffect } from 'react'
import './index.css';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Scroll handler for Navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Mobile menu band karne ke liye
  };

  return (
    // Main Wrapper with Theme Logic
    <div className={`${darkMode ? 'bg-[#030712] text-white' : 'bg-[#f8fafc] text-gray-900'} min-h-screen font-sans transition-colors duration-500`}>
      
      {/* --- 2. Navigation Bar (VIP Glassmorphism) --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center px-6 py-3 transition-all duration-500 rounded-[2rem] border ${
            isScrolled 
            ? (darkMode ? 'bg-[#030712]/80 backdrop-blur-2xl border-white/10 shadow-2xl' : 'bg-white/80 backdrop-blur-2xl border-gray-200 shadow-lg') 
            : 'bg-transparent border-transparent'
          }`}>
            
            {/* Logo */}
            <div onClick={() => scrollToSection('home')} className="group cursor-pointer flex items-center">
              <span className={`text-2xl font-black tracking-tighter ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Talha <span className="text-blue-500 group-hover:animate-bounce inline-block">.</span>
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">WebDev</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-6">
                {['Home', 'About', 'Service', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`relative text-[11px] font-black transition-all duration-300 group uppercase tracking-widest ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                    </button>
                  </li>
                ))}
              </ul>
              
              {/* --- Theme Toggle Button --- */}
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-all duration-300 ${darkMode ? 'text-yellow-400 bg-white/5 hover:bg-white/10' : 'text-gray-600 bg-gray-100 hover:bg-gray-200'}`}
              >
                {darkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>

              <button 
                onClick={() => window.open('https://wa.me/923260506076', '_blank')}
                className="flex items-center gap-2 px-5 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-500 text-xs font-bold hover:bg-green-500 hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(34,197,94,0.2)] active:scale-95"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                WhatsApp
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
                {darkMode ? '☀️' : '🌙'}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-blue-400 p-2 bg-white/5 rounded-xl border border-white/10">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden absolute top-24 left-4 right-4 transition-all duration-500 ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <div className={`${darkMode ? 'bg-[#030712]/95 border-white/10' : 'bg-white/95 border-gray-200'} backdrop-blur-3xl border rounded-[2rem] p-6 shadow-2xl text-center`}>
            <ul className="space-y-4">
              {['Home', 'About', 'Service', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button onClick={() => scrollToSection(item.toLowerCase())} className={`text-xl font-bold uppercase tracking-tighter ${darkMode ? 'text-gray-400 hover:text-blue-500' : 'text-gray-700 hover:text-blue-600'}`}>
                    {item}
                  </button>
                </li>
              ))}
              <button onClick={() => window.open('https://wa.me/923260506076', '_blank')} className="w-full py-4 bg-green-600 text-white font-black rounded-xl mt-4">
                WhatsApp Me
              </button>
            </ul>
          </div>
        </div>
      </nav>

      {/* --- 3. Home Section --- */}
      <section id="home" className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-20 transition-colors duration-500 ${darkMode ? 'bg-[#030712]' : 'bg-white'} overflow-hidden pt-32 pb-20`}>
        <div className="absolute inset-0 z-0">
          <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] ${darkMode ? 'bg-blue-900/30' : 'bg-blue-200/20'} blur-[150px] rounded-full animate-pulse`}></div>
          <div className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-200/20'} blur-[150px] rounded-full animate-pulse delay-1000`}></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
          <div className={`absolute inset-0 ${darkMode ? 'bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]' : 'bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]'} bg-[size:24px_24px]`}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 animate-bounce">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em]">Available for Projects</span>
          </div>

          <div className="mb-10">
            <h1 className={`text-6xl sm:text-7xl md:text-9xl font-extrabold tracking-tighter leading-[0.9] mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              FULL & <br />
              <span className="relative">
                <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-40"></span>
                <span className="relative bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 bg-clip-text text-transparent">MERN STACK</span>
              </span>
            </h1>
            <p className={`mt-8 text-2xl md:text-4xl font-bold tracking-tight italic ${darkMode ? 'text-white/90' : 'text-gray-800'}`}>
              DEVELOPER <span className="text-blue-500 not-italic">.</span>
            </p>
          </div>

          <p className={`text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I bridge the gap between <span className={darkMode ? 'text-white' : 'text-blue-600'}>complex logic</span> and <span className={darkMode ? 'text-white' : 'text-blue-600'}>elegant design</span>. Building high-performance digital experiences with Talha's precision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button onClick={() => scrollToSection('service')} className={`group relative w-full sm:w-auto px-10 py-4 font-black rounded-full transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden ${darkMode ? 'bg-white text-black hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]' : 'bg-blue-600 text-white shadow-xl hover:bg-blue-700'}`}>
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button onClick={() => scrollToSection('contact')} className={`w-full sm:w-auto px-10 py-4 border font-bold rounded-full transition-all duration-300 backdrop-blur-xl flex items-center justify-center gap-3 ${darkMode ? 'bg-[#0B0F17] border-white/10 text-white hover:bg-white/5' : 'bg-white border-gray-200 text-gray-800 hover:bg-gray-50 shadow-sm'}`}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Get In Touch
            </button>
          </div>

          <div className={`mt-24 pt-10 border-t flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-700 ${darkMode ? 'border-white/5' : 'border-gray-200'}`}>
            {['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind'].map((tech) => (
              <span key={tech} className={`text-xs font-black tracking-[0.3em] uppercase cursor-default hover:text-blue-500 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. About Section --- */}
      <section id="about" className={`py-24 transition-colors duration-500 ${darkMode ? 'bg-[#1b2431]' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-sm group">
              <div className="absolute inset-0 bg-purple-600/20 rounded-3xl blur-2xl transform scale-95 group-hover:scale-105 transition-all duration-500"></div>
              <div className={`relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-square border ${darkMode ? 'bg-gray-800 border-white/10' : 'bg-white border-gray-200'}`}>
                <img src="My-image.jpg" alt="About Me" className="w-full h-full object-cover scale-110" />
              </div>
            </div>
          </div>
          <div className="text-left">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>I am a Full-Stack Developer</h2>
            <div className={`space-y-6 text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <p>I specialize in building robust and scalable web applications using the MERN stack. My expertise lies in creating seamless user experiences combined with powerful back-end logic.</p>
              <p>My passion is to engineer high-performance digital solutions that turn complex ideas into functional, user-centric web applications for the future.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:-translate-y-1 transition-all active:scale-95">
                My Projects
              </button>
              <button className={`px-8 py-3 border font-bold rounded-xl flex items-center gap-2 transition-all active:scale-95 ${darkMode ? 'border-gray-600 bg-white/5 text-white hover:bg-white/10' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. Service Section --- */}
      <section id="service" className={`py-24 px-6 transition-colors duration-500 ${darkMode ? 'bg-[#020617]' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-20 ${darkMode ? 'text-white' : 'text-gray-900'}`}>My Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className={`p-8 rounded-2xl border-2 transition-all duration-300 shadow-xl group hover:-translate-y-2 ${darkMode ? 'bg-gray-800 border-transparent hover:border-blue-500' : 'bg-slate-50 border-gray-100 hover:border-blue-500'}`}>
              <div className="mb-6 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-500">Frontend Excellence</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Crafting responsive, high-performance user interfaces using modern HTML, CSS, and JavaScript.</p>
            </div>
            {/* Service Card 2 */}
            <div className={`p-8 rounded-2xl border-2 transition-all duration-300 shadow-xl group hover:-translate-y-2 ${darkMode ? 'bg-gray-800 border-transparent hover:border-blue-500' : 'bg-slate-50 border-gray-100 hover:border-blue-500'}`}>
              <div className="mb-6 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-500">Full-Stack Solutions</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Building robust web applications with the MERN stack. Expert integration of React with Node.js.</p>
            </div>
            {/* Service Card 3 */}
            <div className={`p-8 rounded-2xl border-2 transition-all duration-300 shadow-xl group hover:-translate-y-2 ${darkMode ? 'bg-gray-800 border-transparent hover:border-blue-500' : 'bg-slate-50 border-gray-100 hover:border-blue-500'}`}>
              <div className="mb-6 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-500">Database Architecture</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Designing efficient MongoDB schemas and RESTful APIs to ensure secure data management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. Projects Section (Updated with talhashakeel07) --- */}
<section id="projects" className={`py-24 px-6 transition-colors duration-500 ${darkMode ? 'bg-[#1b2431]' : 'bg-slate-100'}`}>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Featured <span className="text-blue-500">Projects</span>
      </h2>
      <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      
      {/* Project 1 */}
      <div className={`group rounded-[2rem] overflow-hidden border transition-all duration-500 shadow-2xl flex flex-col h-full ${darkMode ? 'bg-[#0B0F17]/50 border-white/5 hover:border-blue-500/30' : 'bg-white border-gray-200 hover:border-blue-500/30'}`}>
        <div className="relative h-56 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000" alt="Education System" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <h3 className={`text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>Education Management System</h3>
          <p className={`text-sm mb-6 leading-relaxed line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>A streamlined LMS with student-teacher portals.</p>
          <div className="flex flex-wrap gap-2 mb-8 mt-auto">
            {['React', 'Node.js', 'MongoDB'].map(t => (
              <span key={t} className="px-3 py-1 bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-wider rounded-md border border-blue-500/10">{t}</span>
            ))}
          </div>
          <div className={`flex items-center justify-between pt-6 border-t ${darkMode ? 'border-white/5' : 'border-gray-100'}`}>
            <a href="https://github.com/talhashakeel07" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-all cursor-pointer">
              Source Code →
            </a>
            <a href="https://education-management-system-blue.vercel.app/login" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-extrabold rounded-xl transition-all shadow-lg active:scale-95">Live Preview</a>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className={`group rounded-[2rem] overflow-hidden border transition-all duration-500 shadow-2xl flex flex-col h-full ${darkMode ? 'bg-[#0B0F17]/50 border-white/5 hover:border-blue-500/30' : 'bg-white border-gray-200 hover:border-blue-500/30'}`}>
        <div className="relative h-56 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" alt="Warehouse System" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <h3 className={`text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>Warehouse Inventory System</h3>
          <p className={`text-sm mb-6 leading-relaxed line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Full-scale inventory solution with stock alerts.</p>
          <div className="flex flex-wrap gap-2 mb-8 mt-auto">
            {['React', 'Node.js', 'Tailwind'].map(t => (
              <span key={t} className="px-3 py-1 bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-wider rounded-md border border-blue-500/10">{t}</span>
            ))}
          </div>
          <div className={`flex items-center justify-between pt-6 border-t ${darkMode ? 'border-white/5' : 'border-gray-100'}`}>
            <a href="https://github.com/talhashakeel07" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-all cursor-pointer">
              Source Code →
            </a>
            <a href="#" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-extrabold rounded-xl transition-all shadow-lg active:scale-95">OFF Line</a>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className={`group rounded-[2rem] overflow-hidden border transition-all duration-500 shadow-2xl flex flex-col h-full ${darkMode ? 'bg-[#0B0F17]/50 border-white/5 hover:border-blue-500/30' : 'bg-white border-gray-200 hover:border-blue-500/30'}`}>
        <div className="relative h-56 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000" alt="E-Commerce" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <h3 className={`text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>E-Commerce Platform</h3>
          <p className={`text-sm mb-6 leading-relaxed line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Modern digital storefront with cart logic.</p>
          <div className="flex flex-wrap gap-2 mb-8 mt-auto">
            {['React', 'Node.js', 'MongoDB'].map(t => (
              <span key={t} className="px-3 py-1 bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-wider rounded-md border border-blue-500/10">{t}</span>
            ))}
          </div>
          <div className={`flex items-center justify-between pt-6 border-t ${darkMode ? 'border-white/5' : 'border-gray-100'}`}>
            <a href="https://github.com/talhashakeel07" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-all cursor-pointer">
              Source Code →
            </a>
            <a href="#" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-extrabold rounded-xl transition-all shadow-lg active:scale-95">OFF Line</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* --- 7. Contact Section --- */}
      <section id="contact" className={`py-24 px-6 relative overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-[#030712]' : 'bg-white'}`}>
        
        {/* Background Decorative Elements */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none ${darkMode ? 'bg-[radial-gradient(circle_at_center,#1e3a8a_0%,transparent_70%)]' : 'bg-[radial-gradient(circle_at_center,#bfdbfe_0%,transparent_70%)]'}`}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-6xl font-black mb-4 tracking-tighter ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              LET'S <span className="text-blue-500 italic">CONNECT</span>
            </h2>
            <p className={`text-sm uppercase tracking-[0.5em] font-bold ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Available for Freelance & Full-time</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side: Social Profiles Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'LinkedIn', icon: '🔗', link: 'https://linkedin.com/in/your-profile', color: 'hover:border-blue-600', text: 'Professional Network' },
                { name: 'GitHub', icon: '💻', link: 'https://github.com/talhashakeel07', color: 'hover:border-purple-500', text: 'Code Repositories' },
                { name: 'Fiverr', icon: '🎨', link: 'https://fiverr.com/your-profile', color: 'hover:border-green-500', text: 'Hire Me on Fiverr' },
                { name: 'Upwork', icon: '🚀', link: 'https://upwork.com/your-profile', color: 'hover:border-green-400', text: 'Top Rated Projects' }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-6 rounded-[2rem] border transition-all duration-500 group ${
                    darkMode 
                    ? 'bg-[#0B0F17]/50 border-white/5 hover:bg-white/5' 
                    : 'bg-slate-50 border-gray-200 hover:bg-white hover:shadow-xl'
                  } ${social.color}`}
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{social.icon}</div>
                  <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>{social.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{social.text}</p>
                </a>
              ))}

              {/* Special WhatsApp Contact Card */}
              <div className={`col-span-2 p-8 rounded-[2rem] border mt-4 flex items-center justify-between overflow-hidden relative group ${
                darkMode ? 'bg-green-500/5 border-green-500/20' : 'bg-green-50/50 border-green-200'
              }`}>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-green-500 tracking-tight">Direct WhatsApp</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Get a response in minutes.</p>
                </div>
                <button 
                  onClick={() => window.open('https://wa.me/923260506076', '_blank')}
                  className="bg-green-500 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-green-500/30 hover:scale-105 active:scale-95 transition-all"
                >
                  Chat Now
                </button>
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-green-500"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.438 5.662 1.439h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className={`p-8 md:p-10 rounded-[2.5rem] border shadow-2xl relative ${darkMode ? 'bg-[#0B0F17] border-white/5' : 'bg-white border-gray-100'}`}>
              <form 
                id="contactForm"
                className="grid grid-cols-1 gap-6" 
                onSubmit={(e) => {
                  e.preventDefault();
                  const name = e.target.name.value;
                  const message = e.target.message.value;
                  const whatsappUrl = `https://wa.me/923260506076?text=Hi Talha, I am ${name}. ${message}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Full Name</label>
                  <input name="name" type="text" required placeholder="John Doe" className={`w-full p-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${darkMode ? 'bg-[#1b2431]/50 border-gray-700/50 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} />
                </div>
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Message</label>
                  <textarea name="message" required placeholder="Briefly describe your project..." rows="4" className={`w-full p-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all ${darkMode ? 'bg-[#1b2431]/50 border-gray-700/50 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`}></textarea>
                </div>
                <button type="submit" className="group relative w-full bg-blue-600 hover:bg-blue-500 py-5 rounded-2xl font-black text-white transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] active:scale-[0.98] overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-widest text-sm">
                    Send via WhatsApp
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* --- 8. Modern Footer --- */}
      <footer className={`pt-16 pb-8 px-6 border-t relative overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-[#0b0f17] border-white/5' : 'bg-slate-900 border-gray-800'}`}>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-white tracking-tighter italic">CH <span className="text-blue-500">TALHA</span></h2>
            <p className="text-gray-400 text-sm mt-4 max-w-xs mx-auto">Crafting high-performance web applications with modern tech stacks.</p>
          </div>
          <div className="flex space-x-5 mb-12">
            {['Github', 'LinkedIn'].map((social) => (
              <a key={social} href="#" className={`p-3 rounded-2xl transition-all border ${darkMode ? 'bg-[#1b2431] text-gray-400 hover:text-blue-500 border-white/5' : 'bg-white/10 text-gray-300 hover:text-blue-400 border-white/10'}`}>{social}</a>
            ))}
          </div>
          <div className={`w-full max-w-5xl h-px mb-8 ${darkMode ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent' : 'bg-gradient-to-r from-transparent via-white/5 to-transparent'}`}></div>
          <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-6">
            <p>&copy; {new Date().getFullYear()} <span className={darkMode ? 'text-gray-300' : 'text-gray-400'}>Ch Talha</span>. All rights reserved.</p>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-blue-400 transition-colors">Back to Top ↑</button>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-600">Designed with ❤️ in 2026</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;