import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Trustpilot",
      period: "2023 - Present",
      description: "Developing and maintaining web applications, and mentoring junior developers."
    },
    {
      role: "Full Stack Developer",
      company: "IMS Evolve",
      period: "2020 - 2023",
      description: "Developing and maintaining web applications, and mentoring junior developers."
    },
    {
      role: "Game Development",
      company: "Teesside University",
      period: "2015 - 2017",
      description: "Developing and maintaining web applications, and mentoring junior developers."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          My <span className="text-blue-500">Experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors duration-300 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <p className="text-gray-400 mb-4 font-medium">{exp.company}</p>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
