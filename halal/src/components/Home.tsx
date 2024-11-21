import React from 'react';
import homeimg from '@/assets/home.png';
import Before from '@/assets/before.png'

const Home = () => {
  return (

    <div className="flex  justify-center mt-20  ">
      <div className="bg-blue-500 shadow-lg p-8 flex flex-col md:flex-row xl:container items-center">
        <div className="text-white md:w-1/2">
          <h1 className="text-white  font-aeonik font-medium text-[64px] leading-[72px]  mb-6 tracking-tight">Start with your<br></br> identity</h1>
          <p className="text-white w-[30rem] text-base lg:text-xl font-helvetica  mb-8">With Identity, you can improve customer sign-ups, employee productivity, and get apps to market <br></br>faster.</p>
          <div className="flex space-x-4">
            <button className="bg-white text-black font-aeonik font-medium text-[20px] leading-[32px] tracking-[0.015em] text-center rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all">Free trial</button>
            <button className="bg-transparent text-white border-2 border-white font-semibold text-lg rounded-full px-8 py-3 hover:bg-white hover:text-blue-600 transition-all">Talk to us</button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={homeimg} alt="Person holding a phone" className=" z-0rounded-lg shadow-lg" />
          {/* <img src={Before} alt="" className='absolute size-30' /> */}
        </div>
      </div>
    </div>

  );
};

export default Home;
