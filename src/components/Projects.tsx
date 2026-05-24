import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Kitchen Compass",
      description:
        "A cooking app that helps users find recipes based on their ingredients.",
      tech: ["Remix", "React", "Tailwind", "DynamoDB"],
      color: "from-orange-400 to-pink-500",
      projectLink: "https://kitchen-compass.xyz",
    },
    {
      title: "Fitness App",
      description:
        "A fitness app that helps users track their progress and stay motivated.",
      tech: ["Angular", "Material UI"],
      color: "from-purple-500 to-indigo-500",
      projectLink: "https://github.com/HarryCravDev/fitness-app",
    },
    {
      title: "Support Ticket System",
      description:
        "A support ticket system that helps users manage their support tickets.",
      tech: ["React", "Ant Design", "Node.js", "TSOA", "MongoDB", "JWT"],
      color: "from-emerald-400 to-cyan-500",
      projectLink: "https://github.com/HarryCravDev/support-ticket-front-end",
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
              {/* Image Placeholder */}
              <div
                className={`h-48 w-full bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`}
              />

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
            href="#"
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
