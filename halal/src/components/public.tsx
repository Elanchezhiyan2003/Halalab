import React from 'react'
import PublicA from '@/assets/public.png'

const Public = () => {
  return (
    <div className='flex mx-40 my-10 xl:container xl:mx-auto'>
        <div>
            <img className=' rounded-lg h-3/4' src={PublicA} alt="" />
        </div>
        <div className=' my-8 font-helvetica'>
            <p>The Identity solution for every industry</p>
            <h1 className='text-black text-5xl mt-5 font-aeonik'>Public sector</h1>
            <h1 className="flex flex-col text-justify gap-y-0 w-30 my-8 xl:gap-y-12 text-3xl space-y-2 text-slate-500">
                <span className='font-aeonik'>Retail</span>
                <span className='font-aeonik'>Financial Service</span>
                <span className='font-aeonik'>Healthcare</span>
                <span className='font-aeonik'>Travel + Hospital</span>
                <span className='font-aeonik'>Technology</span>
                <span className='font-aeonik'>Energy</span>
                <span className='font-aeonik'>Nonprofit</span>
            </h1>
            <p className='w-96 py-5 text-md space-y-2 font-helvetica'>{`See how Okta delivers a secure Identity for central
            and local government and education institution
            `}
            </p>
            <a href="" className='underline text-base font-helvetica py-5'>Learn more</a>
        </div>
    </div>
  )
}

export default Public;