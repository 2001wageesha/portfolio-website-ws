import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-blue-300 p-4 text-white">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <div className="text-2xl font-bold">Chamudika</div>
        
        <div className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Project</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
