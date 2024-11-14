import React from 'react';
import downArrowIcon from "../assets/down.png";
import logoImage from "../assets/logo.jpg";
import rightArrowIcon from "../assets/right.png";
const Header: React.FC = () => {
  return (
    <div>
      <header className="flex items-center justify-between p-4 bg-white shadow-md fixed w-full top-0 z-10">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/">
            <img
              src={logoImage}
              alt="Halal Lab Logo"
              className="w-6 h-6 mr-2" // Set size for the logo (adjust as needed)
            />
          </a>
          <span className="text-lg font-semibold text-gray-900">Halal_Lab</span>
        </div>
        {/* Navigation Links */}<div>
        <nav className="flex items-center space-x-8">
          <div className="relative group flex items-center">
            <button className="font-medium hover:text-gray-900 flex items-center">
              Cards
              <img
                src={downArrowIcon}
                alt="Dropdown Arrow"
                className="w-12px h-12px ml-2"
              />
            </button>
            </div>
            {/* Dropdown placeholder */}<div>
            <div className="absolute hidden group-hover:block mt-2 bg-white border border-gray-200 shadow-lg rounded">
              {/* Dropdown items here */}
            </div>
          </div>
          <a href="#" className="font-medium hover:text-gray-900">
            About
          </a>
          <a href="#" className="font-medium hover:text-gray-900">
            App
          </a>
          </nav>
          </div>
          <div className='flex gap-x-3 items-center'>
          <a href="#" className="font-medium hover:text-gray-900">
            Login
          </a>
          <div>
      <button className="px-4 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800 flex items-center">
        Apply Now
        {/* Right Arrow Icon */}
        <img
          src={rightArrowIcon}
          alt="Right Arrow"
          className="w-2 h-2 ml-2"
        />
      </button>
    </div>
          </div>
      </header>
    </div>
  );
};

export default Header;