// import React from 'react'
// import AboutA from '@/assets/abouta.png'
// import AboutB from '@/assets/aboutb.png'
// import Marketing from "@/assets/marketing.png"
// import AboutC from '@/assets/aboutc.png'
// import { Button } from './ui/button'
// const Aboutus = () => {
//   return (
//     <div className='bg-white mx-14 -my-36 h-full xl:container xl:mx-auto py-32'>
//       <div className='flex justify-between mx-3 my-14' >
//         <h1 className='text-black text-4xl'>About us</h1>
//         <div className='flex gap-x-2'>
//           <Button className='text-black pb-4  px-2 py-2 w-8 h-8 border-2 border-opacity-70 border-black rounded-black rounded-3xl bg-white'>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
//               <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
//             </svg>
//           </Button>
//           <Button className='text-black pb-4  px-2 py-2 w-8 h-8 border-2 border-opacity-70 border-black rounded-black rounded-3xl bg-white'>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
//             </svg>

//           </Button>


//     <div className='bg-white py-4 mx-14 h-full p-4'>
//         <div className='flex justify-between mx-3 my-14' >
//             <h1 className='text-black text-4xl'>About us</h1>
//             <div className='flex gap-x-2'>
//             <a href="" className='text-black pb-4  px-2 w-8 h-8 border-2 border-black rounded-black rounded-3xl bg-white'>{'>'}</a>
//             <a href="" className='text-black pb-4  px-2 w-8 h-8 border-2 border-black rounded-black rounded-3xl bg-white'>{'<'}</a>
//             </div>

//         </div>
//       </div>
//       <div className='flex-box flex gap-x-4 rounded-2xl'>
//         <div className=' bg-blue-500 bg-opacity-5 py-2 rounded-lg'>
//           <img className=' p-4  w-[136rem]  rounded-3xl' src={AboutA} alt="" />
//           <h1 className='p-3 text-black font-bold'>Sales</h1>
//           <p className='px-3 text-slate-00 py-2'>Boost your sales performance with Superchat.
//             Automate processes, qualify your leads ands
//           </p>
//         </div>
//         <div className='bg-blue-500 bg-opacity-5   px-4 rounded-lg'>
//           <img className='  p-4 my-2  w-[125rem]  rounded-3xl' src={Marketing} alt="" />
//           <h1 className='p-3 text-black font-bold ' >Marketing</h1>
//           <p className='px-3 text-slate-00 '>Boost your sales performance with Superchat.
//             Automate processes, qualify your leads ands
//           </p>
//         </div>
//         <div className='bg-blue-500 bg-opacity-5 py-2 rounded-lg'>
//           <img className='size-auto p-4   w-[126rem] object-fill rounded-3xl' src={AboutC} alt="" />
//           <h1 className='p-3 text-black font-bold ' >Support</h1>
//           <p className='px-3 text-slate-00 py-2'>Boost your sales performance with Superchat.
//             Automate processes, qualify your leads ands
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Aboutus;
import React from 'react';
import AboutA from '@/assets/abouta.png';
import Marketing from '@/assets/marketing.png';
import AboutC from '@/assets/aboutc.png';
import { Button } from './ui/button';

const Aboutus = () => {
  return (
    <div className="bg-white mx-14 h-full xl:container xl:mx-auto py-32">
      {/* Header Section */}
      <div className="flex justify-between mx-3 my-14">
        <h1 className="text-black text-4xl font-bold">About us</h1>
        <div className="flex gap-x-2">
          <Button className="flex items-center justify-center w-10 h-10 border-2 border-black border-opacity-70 rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Button>
          <Button className="flex items-center justify-center w-10 h-10 border-2 border-black border-opacity-70 rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-wrap gap-6 justify-between">
        {/* Card 1 */}
        <div className="bg-blue-500 bg-opacity-5 p-6 rounded-lg w-full md:w-1/3">
          <img
            className="w-full h-48 object-cover rounded-2xl mb-4"
            src={AboutA}
            alt="Sales"
          />
          <h1 className="text-black font-bold text-lg mb-2">Sales</h1>
          <p className="text-gray-600">
            Boost your sales performance with Superchat. Automate processes, qualify your leads, and improve results.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-500 bg-opacity-5 p-6 rounded-lg w-full md:w-1/3">
          <img
            className="w-full h-48 object-cover rounded-2xl mb-4"
            src={Marketing}
            alt="Marketing"
          />
          <h1 className="text-black font-bold text-lg mb-2">Marketing</h1>
          <p className="text-gray-600">
            Boost your marketing strategies with Superchat. Automate outreach and improve engagement.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-500 bg-opacity-5 p-6 rounded-lg w-full md:w-1/3">
          <img
            className="w-full h-48 object-cover rounded-2xl mb-4"
            src={AboutC}
            alt="Support"
          />
          <h1 className="text-black font-bold text-lg mb-2">Support</h1>
          <p className="text-gray-600">
            Enhance customer support with Superchat. Streamline communication and improve satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
