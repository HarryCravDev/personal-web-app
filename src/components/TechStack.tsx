import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: "Frontend", skills: ["React", "Tailwind CSS", "Next.js", "Remix"] },
    { name: "Backend", skills: ["Node.js", "Express", "NestJS", "NoSQL", "Serverless"] },
    { name: "Tools", skills: ["Git", "Docker", "TypeScript", "AWS", "Lambda", "ECS", "Figma"] },
  ];

  return (
    <section id="tech" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Current <span className="text-cyan-400">Tech Stack</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all hover:bg-slate-800/80 group"
            >
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-slate-700/50 text-gray-300 text-sm font-medium border border-slate-600/50 group-hover:border-blue-500/30 group-hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
