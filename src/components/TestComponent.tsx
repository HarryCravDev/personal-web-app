import React from 'react';

export default function TestComponent() {
  return (
    <div className="p-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 max-w-md mx-auto mt-10">
      <h2 className="text-3xl font-extrabold text-white mb-4">React + Tailwind</h2>
      <p className="text-purple-100 text-lg leading-relaxed">
        This component is powered by <span className="font-mono bg-white/20 px-2 py-1 rounded text-white">React</span> and styled with <span className="font-mono bg-white/20 px-2 py-1 rounded text-white">Tailwind CSS</span>.
      </p>
      <div className="mt-6 flex gap-4">
        <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-bold hover:bg-purple-50 transition-colors shadow-lg">
          Interactive
        </button>
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-purple-200 flex items-center justify-center text-purple-600 font-bold text-sm">
              {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
