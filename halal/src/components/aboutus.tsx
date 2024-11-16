import React from 'react'
import AboutA from '@/assets/abouta.png'
import AboutB from '@/assets/aboutb.png'
import AboutC from '@/assets/aboutc.png'
const aboutus = () => {
  return (
    <div className='bg-white mx-14 h-full'>
        <div className='flex justify-between mx-3 my-14' >
            <h1 className='text-black text-4xl'>About us</h1>
            <div className='flex gap-x-2'>
            <a href="" className='text-black pb-4  px-2 w-8 h-8 border-2 border-black rounded-black rounded-3xl bg-white'>{'>'}</a>
            <a href="" className='text-black pb-4  px-2 w-8 h-8 border-2 border-black rounded-black rounded-3xl bg-white'>{'<'}</a>
            </div>
        </div>
        <div className='flex-box flex gap-x-4 rounded-2xl'>
            <div className=' bg-black bg-opacity-5 py-2 rounded-lg'>
                <img className=' p-3 w-full h-48 object-cover rounded-2xl' src={AboutA} alt="" />
                <h1 className='p-3 text-black ' >Sales</h1>
                <p className='px-3 text-slate-00'>Boost your sales performance with Superchat.
                    Automate processes, qualify your leads ands
                </p>
            </div>
            <div className='bg-black bg-opacity-5 py-2 rounded-lg'>
                <img className='p-3 w-full h-48 object-cover rounded-2xl' src={AboutC} alt="" />
                <h1 className='p-3 text-black ' >Sales</h1>
                <p className='px-3 text-slate-00'>Boost your sales performance with Superchat.
                    Automate processes, qualify your leads ands
                </p>
            </div>
            <div className='bg-black bg-opacity-5 py-2 rounded-lg'>
                <img className='p-3 w-full h-48 object-cover rounded-2xl' src={AboutA} alt="" />
                <h1 className='p-3 text-black ' >Sales</h1>
                <p className='px-3 text-slate-00'>Boost your sales performance with Superchat.
                    Automate processes, qualify your leads ands
                </p>
            </div>
        </div>

    </div>
  )
}

export default aboutus;