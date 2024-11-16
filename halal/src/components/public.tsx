import React from 'react'
import PublicA from '@/assets/public.png'

const Public = () => {
  return (
    <div className='flex mx-40 my-10'>
        <div>
            <img className=' rounded-lg h-3/4' src={PublicA} alt="" />
        </div>
        <div className=' my-8 '>
            <p>The Identity solution for every industry</p>
            <h1 className='text-black text-5xl mt-5'>Public sector</h1>
            <h1 className="flex flex-col text-justify w-30 my-10 text-3xl space-y-2 text-slate-500">
                <span>Financial Service</span>
                <span>Healthcare</span>
                <span>Travel + Hospital</span>
                <span>Technology</span>
                <span>Energy</span>
                <span>Nonprofit</span>
            </h1>
            <p className='w-96 py-5 text-md space-y-2'>{`See how Okta delivers a secure Identity for central
            and local government and education institution
            `}
            </p>
            <a href="" className='underline text-base py-5'>Learn more</a>
        </div>
    </div>
  )
}

export default Public;