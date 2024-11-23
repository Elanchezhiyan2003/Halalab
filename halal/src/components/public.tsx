import React from 'react';
import { ChevronRight } from 'lucide-react';
import PublicA from '@/assets/public.png';

const industries = [
  'Public Sector',
  'Retail',
  'Financial Services',
  'Healthcare',
  'Travel + Hospitality',
  'Technology',
  'Energy',
  'Nonprofit'
];

function Public() {
  return (
    <div className=" bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative rounded-2xl overflow-hidden bg-[#f5f3e8]">
            <img
              src={PublicA}
              alt="Professional in business attire"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>


          <div className="space-y-8">
            <p className="text-gray-600 text-lg font-medium">
              The Identity solution for every industry
            </p>

            <div className="space-y-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`text-2xl ${index === 0 ? 'text-gray-900 font-semibold' : 'text-gray-500 hover:text-gray-700 transition-colors'
                    }`}
                >
                  {industry}
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-gray-600">
                See how Okta delivers a secure Identity for central and local government and educational institutions.
              </p>
              <button className="inline-flex items-center text-black font-semibold underline hover:text-blue-700 transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Public;