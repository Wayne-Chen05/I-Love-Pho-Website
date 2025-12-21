import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 shadow-md fixed w-full z-1 top-0 left-0">
      <div className="max-w-7x1 mx-auto px-10 py-5 flex justify-between items-center">
        <div>
          <a href="#name" className="font-bold hover:text-amber-400 font-sans text-amber-200 text-3xl flex space-x-5">
            <img src=".\src\assets\logo.png" alt="Logo" className="h-29 w-auto"></img>
          </a>
        </div>
        <ul className="flex space-x-10 text-gray-700">
            <li><a href="#home" className="hover:text-amber-400 text-amber-200">Home</a></li>
            <li><a href="#menu" className="hover:text-amber-400 text-amber-200">Menu</a></li>
            <li><a href="#gallery" className="hover:text-amber-400 text-amber-200">Announcements</a></li>
            <li><a href="#contact" className="hover:text-amber-400 text-amber-200">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
