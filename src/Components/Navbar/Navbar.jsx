import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 shadow-sm'>
            <div className="flex items-center">
        <h1 className="text-xl font-bold text-[#1e1b4b]">
          CS — Ticket System
        </h1>
      </div>
            <div className='flex items-center space-x-8'>
                <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-purple-600 transition-colors">Home</a>
          <a href="#" className="hover:text-purple-600 transition-colors">FAQ</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Changelog</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Blog</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Download</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Contact</a>
        </div>
                <button className="flex items-center bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-5 py-2 rounded-md text-sm font-semibold transition-all shadow-md">
          <span className="mr-2 text-lg font-light">+</span>
          New Ticket
        </button>
            </div>
            
        </nav>
    );
};

export default Navbar;