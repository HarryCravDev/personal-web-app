import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows (Optimized for Mobile GPU) */}
      <div className="absolute top-0 -left-10 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 -right-10 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 text-center z-10">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium animate-fade-in">
          Available for new opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Harry Craven <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Full Stack Developer
          </span>
        </h1>
        {/* <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Building Digital <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Experiences
          </span>
        </h1> */}

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          I'm Harry, a Full Stack Developer specializing in building exceptional digital products with the latest web technologies.
          {/* I'm Harry, a Full Stack Developer specializing in building exceptional digital products with React, Node.js, and modern web technologies. */}
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#projects"
            className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-lg border border-gray-700 hover:border-blue-500/50 hover:bg-blue-500/5 text-gray-300 hover:text-white font-semibold transition-all hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
