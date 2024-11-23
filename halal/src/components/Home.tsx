import React from 'react';
import homeimg from '@/assets/home.png';

const Home = () => {
  return (
    <div className="flex justify-center mt-10 sm:mt-16">
      <div className="bg-blue-500 shadow-lg p-6 sm:p-8 flex flex-col md:flex-row xl:container items-center md:space-x-8">
        <div className="text-white md:w-1/2 space-y-6">
          <h1 className="font-aeonik font-medium text-3xl sm:text-4xl md:text-[48px] lg:text-[64px] leading-tight md:leading-[72px] tracking-tight">
            Start with your<br /> identity
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-helvetica">
            With Identity, you can improve customer sign-ups, employee productivity, and get apps to market faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black font-aeonik font-medium text-base sm:text-lg lg:text-[20px] leading-[28px] sm:leading-[32px] tracking-[0.015em] text-center rounded-full px-6 sm:px-8 py-3 shadow-md hover:shadow-lg transition-all">
              Free trial
            </button>
            <button className="bg-transparent text-white border-2 border-white font-semibold text-sm sm:text-base lg:text-lg rounded-full px-6 sm:px-8 py-3 hover:bg-white hover:text-blue-600 transition-all">
              Talk to us
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={homeimg}
            alt="Person holding a phone"
            className="border-4 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
