import React, { useState } from 'react';
import Logo from '@/assets/logo.jpg';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="xl:container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img src={Logo} alt="Halal Lab Logo" className="h-6 rounded-2xl" />
              <span className="font-semibold text-lg">Halal_Lab</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                <span>Cards</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              App
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Login
            </a>
            <Button className="bg-black hover:bg-gray-800 text-white rounded-full flex items-center px-4 py-2">
              <span>Apply now</span>
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} border-t border-gray-200`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-white">
          <div className="py-2">
            <button className="flex items-center w-full text-sm font-medium text-gray-700 hover:text-gray-900">
              <span>Cards</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>
          <a
            href="#"
            className="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            About
          </a>
          <a
            href="#"
            className="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            App
          </a>
          <a
            href="#"
            className="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Login
          </a>
          <div className="pt-2">
            <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center px-4 py-2">
              <span>Apply now</span>
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </header>

  );
};

export default Header;