// import React from 'react';
// import { Button } from './ui/button';
// import homeimg from '@/assets/home.png'

// const home = () => {
//   return (
// <div className="h-full w-full flex items-center my-20  bg-blue-600">
//     <div className="w-9/12 p-8 mx-5 flex flex-col justify-center max-w-md">
//         <h1 className="text-white text-5xl font-bold mb-4">Start with your identity</h1>
//         <p className="text-white font-medium mb-6">
//             With Identity, you can improve customer sign-ups, employee productivity, and get apps to market faster.
//         </p>
//         <div className="flex gap-4">
//             <button className="bg-white text-black rounded-3xl px-7 py-3">Free trial</button>
//             <button className="bg-blue-600 text-white rounded-3xl px-7 py-3 border border-white">Talk to us</button>
//         </div>
//     </div>
//     <div className="flex-1 h-full">
//         <img className="h-80 mx-60 my-8 border-white border-4  rounded-lg" src={homeimg} alt="Identity Solution"/>
//     </div>
// </div>
//   )
// }
// export default home;

import React from 'react';
import homeimg from '@/assets/home.png';

const Home = () => {
  return (
//     <div className="h-full w-full flex flex-col-reverse lg:flex-row items-center lg:py-20 px-6 bg-gradient-to-r from-blue-500 to-blue-700">
//       {/* Text Section */}
//       <div className="w-full lg:w-6/12 flex flex-col justify-center max-w-lg lg:max-w-md mx-auto lg:mx-0 text-center lg:text-left">
//         {/* <h1 className="text-white text-4xl lg:text-5xl font-medium mb-6 leading-tight">
//           Empower Your Identity
//         </h1> */}
//         <h1 className="text-white font-aeonik font-medium text-[64px] leading-[72px] tracking-[-0.08em] mb-6">
//   Start with your identity
// </h1>

//         <p className="text-white text-base lg:text-xl font-helvetica  mb-8">
//         With Identity, you can improve customer sign-ups, employee productivity, and get apps to market faster
//         </p>
//         <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
//           <button className="bg-white text-black font-aeonik font-medium text-[20px] leading-[32px] tracking-[0.015em] text-center rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all">
//   Free trial
// </button>

//           {/* <button className="bg-transparent text-white border-2 border-white font-semibold text-lg rounded-full px-8 py-3 hover:bg-white hover:text-blue-600 transition-all">
//             Talk to Us
//           </button> */}
//           <button className="bg-transparent text-white border-2 border-white font-aeonik font-medium text-[20px] leading-[32px] tracking-[0.015em] text-center rounded-full px-8 py-3 hover:bg-white hover:text-blue-600 transition-all">
//   Talk to Us
// </button>

//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="w-full lg:w-6/12 flex justify-center lg:justify-end">
//         <img
//           className="h-64 sm:h-72 lg:h-96 w-auto rounded-xl shadow-lg border-4 border-white"
//           src={homeimg}
//           alt="Identity Solution"
//         />
//       </div>
//     </div>
<div className="flex items-center justify-center mt-20 xl:container xl:mx-auto max-h-screen">
  <div className="bg-blue-500 shadow-lg p-8 flex flex-col md:flex-row items-center">
    <div className="text-white md:w-1/2">
      <h1 className="text-white  font-aeonik font-medium text-[64px] leading-[72px] tracking-[-0.08em] mb-6">Start with your<br></br> identity</h1>
      <p className="text-white text-base lg:text-xl font-helvetica  mb-8">With Identity, you can improve customer sign-ups, employee productivity, and get apps to market faster.</p>
      <div className="flex space-x-4">
        <button className="bg-white text-black font-aeonik font-medium text-[20px] leading-[32px] tracking-[0.015em] text-center rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all">Free trial</button>
        <button className="bg-transparent text-white border-2 border-white font-semibold text-lg rounded-full px-8 py-3 hover:bg-white hover:text-blue-600 transition-all">Talk to us</button>
      </div>
    </div>
    <div className="md:w-1/2 mt-8 md:mt-0">
      <img src={homeimg} alt="Person holding a phone" className="rounded-lg shadow-lg" />
    </div>
  </div>
</div>

  );
};

export default Home;
