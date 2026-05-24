import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="md:w-1/2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <div className="relative h-64 md:h-80 w-full bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden">
              {/* <span className="text-6xl">👨‍💻</span> */}
              <img
                src="https://d15jj5gzknwch6.cloudfront.net/me.jpeg"
                alt="profile-picture"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          {/* <div className="md:w-1/2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <div className="relative h-64 md:h-80 w-full bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden">
                <span className="text-6xl">👨‍💻</span>
            </div>
          </div> */}

          <div className="md:w-1/2 space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              Hello! I'm Harry, a passionate developer with a knack for creating
              elegant solutions to complex problems. I started my journey in web
              development 5 years ago and have since worked on a variety of
              challenging projects.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              I love bridging the gap between design and engineering, ensuring
              every pixel looks great while maintaining top-tier performance.
              When I'm not coding, you can find me exploring new coffee shops or
              contributing to open source.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">5+</h4>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">50+</h4>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
