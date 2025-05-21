import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-300 py-6 mt-10 pt-35" id='fotter'>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Chamudika</h3>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-white">
            Email
          </a>
        </div>

      </div>
    </div>
  );
};

export default Footer;
