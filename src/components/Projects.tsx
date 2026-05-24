import React from "react";

const KitchenCompassMockup = () => {
  return (
    <div className="relative h-48 w-full bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-800">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-600 opacity-20 blur-xl group-hover:opacity-35 transition-opacity duration-500" />
      
      {/* Floating Card */}
      <div className="relative w-[90%] max-w-[280px] bg-slate-900/90 border border-slate-700/50 rounded-xl p-4 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1">
        {/* Mock Search Bar */}
        <div className="flex items-center gap-2 bg-slate-950 border border-slate-800/80 rounded-lg px-2.5 py-1.5 mb-3">
          <span className="text-xs text-orange-400 font-bold">🔍</span>
          <div className="text-[11px] text-gray-300 font-mono flex items-center gap-0.5">
            Tomato, garlic, basil, pasta
            <span className="w-1.5 h-3 bg-orange-400 animate-pulse" />
          </div>
        </div>
        
        {/* Ingredients & Match Badge */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5 max-w-[65%]">
            <span className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              ✓ Tomato
            </span>
            <span className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              ✓ Basil
            </span>
            <span className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              ✓ Garlic
            </span>
            <span className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
              + Pasta
            </span>
          </div>
          
          {/* Glassmorphic Match Score Badge */}
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-gradient-to-br from-orange-500/25 to-pink-500/25 border border-orange-500/30 shadow-inner">
            <span className="text-[9px] uppercase font-bold tracking-wider text-orange-300 leading-none">Match</span>
            <span className="text-sm font-extrabold text-white leading-none mt-1">94%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FitnessAppMockup = () => {
  return (
    <div className="relative h-48 w-full bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-800">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 opacity-20 blur-xl group-hover:opacity-35 transition-opacity duration-500" />
      
      {/* Floating Card */}
      <div className="relative w-[90%] max-w-[280px] bg-slate-900/90 border border-slate-700/50 rounded-xl p-4 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1">
        <div className="flex items-center gap-4">
          {/* Circular Progress Ring */}
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              {/* Back Circle */}
              <path
                className="text-slate-800"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              {/* Active Progress */}
              <path
                className="text-purple-500 transition-all duration-1000"
                strokeWidth="3.5"
                strokeDasharray="75, 100"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-[11px] font-extrabold text-white">75%</span>
              <span className="text-[6px] uppercase tracking-wider text-purple-400 font-bold">Goal</span>
            </div>
          </div>
          
          {/* Stats details */}
          <div className="flex-1 space-y-2">
            {/* Calorie Stats */}
            <div>
              <div className="flex justify-between items-center text-[9px] text-gray-400 font-medium">
                <span>Active Calories</span>
                <span className="text-white font-bold">560 kcal</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full w-[75%] rounded-full" />
              </div>
            </div>
            
            {/* Heart Rate / Time */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-red-500 animate-pulse">❤️</span>
                <span className="text-[10px] text-gray-300 font-mono font-bold">134 <span className="text-[8px] text-gray-500">BPM</span></span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[9px] text-gray-400">Time:</span>
                <span className="text-[10px] text-white font-bold font-mono">42m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SupportTicketMockup = () => {
  return (
    <div className="relative h-48 w-full bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-800">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-600 opacity-20 blur-xl group-hover:opacity-35 transition-opacity duration-500" />
      
      {/* Floating Card Container */}
      <div className="relative w-[90%] max-w-[280px] bg-slate-900/90 border border-slate-700/50 rounded-xl p-3 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1 space-y-2">
        {/* Ticket Item 1 */}
        <div className="flex items-center justify-between bg-slate-950/80 border border-slate-800/80 rounded-lg p-2">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded border border-emerald-500/20 font-bold">#842</span>
            <span className="text-[10px] text-gray-300 font-medium truncate max-w-[100px]">API Delay Fix</span>
          </div>
          <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Resolved
          </span>
        </div>
        
        {/* Ticket Item 2 */}
        <div className="flex items-center justify-between bg-slate-950/80 border border-slate-800/80 rounded-lg p-2">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono text-cyan-400 bg-cyan-500/10 px-1 py-0.5 rounded border border-cyan-500/20 font-bold">#843</span>
            <span className="text-[10px] text-gray-300 font-medium truncate max-w-[100px]">UI Layout Shift</span>
          </div>
          <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse">
            In Progress
          </span>
        </div>

        {/* Mini Chat / Activity */}
        <div className="flex items-start gap-2 pt-1 border-t border-slate-800/80">
          <div className="w-4 h-4 rounded-full bg-cyan-600 flex items-center justify-center text-[7px] text-white font-bold">HC</div>
          <div className="flex-1 bg-slate-950/60 border border-slate-800/50 rounded-lg p-1.5">
            <p className="text-[8px] text-gray-400 leading-tight">"Database latency solved, closing ticket."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Kitchen Compass",
      description:
        "A cooking app that helps users find recipes based on their ingredients.",
      tech: ["Remix", "React", "Tailwind", "DynamoDB"],
      color: "from-orange-400 to-pink-500",
      projectLink: "https://kitchen-compass.xyz",
      mockup: <KitchenCompassMockup />,
    },
    {
      title: "Fitness App",
      description:
        "A fitness app that helps users track their progress and stay motivated.",
      tech: ["Angular", "Material UI"],
      color: "from-purple-500 to-indigo-500",
      projectLink: "https://github.com/HarryCravDev/fitness-app",
      mockup: <FitnessAppMockup />,
    },
    {
      title: "Support Ticket System",
      description:
        "A support ticket system that helps users manage their support tickets.",
      tech: ["React", "Ant Design", "Node.js", "TSOA", "MongoDB", "JWT"],
      color: "from-emerald-400 to-cyan-500",
      projectLink: "https://github.com/HarryCravDev/support-ticket-front-end",
      mockup: <SupportTicketMockup />,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Beautiful custom visual preview instead of generic color block */}
              {project.mockup}

              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-700 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
                >
                  View Project{" "}
                  <span className="ml-1 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/HarryCravDev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors border-b border-gray-600 hover:border-white pb-0.5"
          >
            View all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
