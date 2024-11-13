import React from 'react'
import { Button } from './ui/button';
import homeimg from '@/assets/home.png'

const home = () => {
  return (
    <div className="h-96 w-full flex items-center bg-blue-600">
    <div className="w-9/12 p-8 mx-5 flex flex-col justify-center max-w-md">
        <h1 className="text-white text-5xl font-bold mb-4">Start with your identity</h1>
        <p className="text-white text-lg mb-6">
            With Identity, you can improve customer sign-ups, employee productivity, and get apps to market faster.
        </p>
        <div className="flex gap-4">
            <button className="bg-white text-black rounded-3xl px-7 py-3">Free trial</button>
            <button className="bg-blue-600 text-white rounded-3xl px-7 py-3 border border-white">Talk to us</button>
        </div>
    </div>
    <div className="flex-1 h-full">
        <img className="h-80 mx-60 my-2 rounded-lg" src={homeimg} alt="Identity Solution" />
    </div>
</div>

  )
}

export default home;