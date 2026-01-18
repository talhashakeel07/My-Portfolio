import React from 'react';

const Portfolio = () => {
  // Smooth scroll function
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
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-4">Hi, I'm <span className="text-blue-500">Your Name</span></h2>
        <p className="text-xl text-gray-400 max-w-2xl">A passionate developer creating modern and functional web experiences.</p>
        <button 
          onClick={() => scrollToSection('about')}
          className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-bold transition-all"
        >
          Explore My Work
        </button>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-24 bg-gray-800 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 border-b-4 border-blue-500 inline-block">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Main ek React.js developer hoon jo clean code aur behtareen UI/UX design pasand karta hai. 
            Mera maqsad user-friendly applications banana hai jo performance mein fast hon.
          </p>
        </div>
      </section>

      {/* --- Service Section --- */}
      <section id="service" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">My Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Web Design', 'React Development', 'UI/UX Design'].map((service, index) => (
              <div key={index} className="p-8 bg-gray-800 rounded-2xl hover:border-blue-500 border-2 border-transparent transition-all shadow-xl">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">{service}</h3>
                <p className="text-gray-400">High-quality and modern solutions tailored to your needs.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24 bg-gray-800 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="mb-8 text-gray-300">Kya aapke paas koi project hai? Mujhse rabta karein!</p>
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
        <p>&copy; 2026 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;