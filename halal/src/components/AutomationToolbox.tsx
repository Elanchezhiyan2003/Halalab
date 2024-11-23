import React from 'react';
import personImage from "/src/assets/image762.png";
import ChatImage from "/src/assets/chatting-01.png";
import CheckIcon from "/src/assets/div.mr-3.png";
import InLoveIcon from "/src/assets/in-love.png";
import LayerMaskIcon from "/src/assets/layer-mask-01.png";
import FeatureItem from '@/components/FeatureItem';

function App() {
  return (
    <div className="min-h-auto bg-gray-200 xl:container xl:mx-auto">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Intuitive toolbox for automations
          </h2>
          <p className="text-lg text-gray-600">
            Create intuitive automations and authentic chatbots to deliver outstanding customer experiences via chat.
          </p>
        </div>

        <div className="grid grid-cols-1 bg-gray-200   lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <div className='bg-white rounded-lg py-1'>
              <FeatureItem
                icon="clock"
                title="Sales support around the clock."
                description="Automate your sales process by requesting important information in advance and automatically assigning leads to the appropriate contacts."
                isExpanded={true}
              />
            </div>
            <div className='p-5 bg-white'>
              <FeatureItem
                icon="users"
                title="Easily segment your WhatsApp newsletter subscribers."
              />
            </div>
            <div className='bg-white p-5'>
              <FeatureItem
                icon="message"
                title="Automations that support your customer service."
              />
            </div>
            <div className='bg-white p-5'>
              <FeatureItem
                icon="recruitment"
                title="Automated recruitment processes via WhatsApp."
              />
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={personImage}
              alt="Professional in business attire"
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
