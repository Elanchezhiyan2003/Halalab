// import React from 'react';
import AboutA from '@/assets/abouta.png';
// import AboutB from '@/assets/aboutb.png';
import Marketing from "@/assets/marketing.png";
import AboutC from '@/assets/aboutc.png';
import { Button } from './ui/button';

const Aboutus = () => {
  return (
    <div className="bg-white px-6 sm:px-10 md:px-14 xl:container xl:mx-auto py-16 sm:py-20">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold">About us</h1>
        <div className="flex gap-2">
          <Button className="text-black px-2 py-2 w-10 h-10 border-2 border-opacity-70 border-black rounded-full bg-white flex items-center justify-center hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </Button>
          <Button className="text-black px-2 py-2 w-10 h-10 border-2 border-opacity-70 border-black rounded-full bg-white flex items-center justify-center hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-500 bg-opacity-5 rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-48 object-cover"
            src={AboutA}
            alt="Sales"
          />
          <div className="p-4">
            <h2 className="text-black font-bold text-lg">Sales</h2>
            <p className="text-gray-600 mt-2">
              Boost your sales performance with Superchat. Automate processes, qualify your leads, and drive results.
            </p>
          </div>
        </div>

        <div className="bg-blue-500 bg-opacity-5 rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-48 object-cover"
            src={Marketing}
            alt="Marketing"
          />
          <div className="p-4">
            <h2 className="text-black font-bold text-lg">Marketing</h2>
            <p className="text-gray-600 mt-2">
              Boost your marketing campaigns with Superchat. Automate workflows and reach the right audience effectively.
            </p>
          </div>
        </div>

        <div className="bg-blue-500 bg-opacity-5 rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-48 object-cover"
            src={AboutC}
            alt="Support"
          />
          <div className="p-4">
            <h2 className="text-black font-bold text-lg">Support</h2>
            <p className="text-gray-600 mt-2">
              Enhance customer support with Superchat. Automate responses, streamline communication, and build loyalty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
