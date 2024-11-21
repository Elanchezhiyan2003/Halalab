import React from 'react';
import downArrowIcon from "../assets/down.png";
import Logo from '@/assets/logo.jpg'
import { Button } from './ui/button';

const Header: React.FC = () => {
  return (
    <div className='xl:container xl:mx-auto'>
      <header className="flex items-center justify-between p-4 bg-white shadow-md fixed w-full xl:left-470 xl:container xl:place-self-center xl:mx-auto top-0 z-10 ">

        <div className="flex items-center">
          <a href="/">
            <img
              src={Logo}
              alt="Halal Lab Logo"
              className="w-6 h-6 mr-2 rounded-2xl"
            />
          </a>
          <span style={{ fontFamily: 'Ramabhadra, sans-serif' }} className="text-lg font-semibold text-gray-900">Halal_Lab</span>
        </div>
        <div>
          <nav className="flex items-center space-x-8">
            <div className="relative group flex items-center">
            </div>
            <div>
              <div className="absolute hidden group-hover:block mt-2 bg-white border border-gray-200 shadow-lg rounded">

              </div>
            </div>
            <button className="font-helvetica font-medium text-[16px] leading-[24px] tracking-[-0.01em] hover:text-gray-900 flex items-center">
              Cards
              <span>
                <select name="" id="" className="ml-2">
                </select>
              </span>
            </button>

            <a href="#" className="font-helvetica font-medium text-[16px] leading-[24px] tracking-[-0.01em] hover:text-gray-900">
              About
            </a>

            <a href="#" className="font-helvetica font-medium text-[16px] leading-[24px] tracking-[-0.01em] hover:text-gray-900">
              App
            </a>

          </nav>
        </div>
        <div className='flex gap-x-6 items-center'>
          <a href="#" className="font-aeonik font-medium text-[16px] leading-[24px] tracking-[-0.01em] hover:text-gray-900">
            Login
          </a>

          <div className='flex gap-x-4 '>
            <Button className=' bg-black rounded-3xl'>
              Apply now <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

              </span>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;