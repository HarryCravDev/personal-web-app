import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-800 bg-slate-900/50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Harry Craven. All rights reserved.</p>
        <p className="mt-2 md:mt-0">
          Built with Astro, React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
