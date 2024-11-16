import React from "react";
import personImage from "/src/assets/image762.png"; 
import ChatImage from "/src/assets/chatting-01.png"; 
import CheckIcon from "/src/assets/div.mr-3.png"; 
import InLoveIcon from "/src/assets/in-love.png";
import LayerMaskIcon from "/src/assets/layer-mask-01.png";
const AutomationToolbox: React.FC = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center bg-gray-50 p-8 lg:p-16 gap-8"
      style={{ background: "#F7F8FA" }} 
    >
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Intuitive toolbox for automations
        </h1>
        <p className="text-gray-600">
          Create intuitive automations and authentic chatbots to deliver
          outstanding customer experiences via chat.
        </p>
        {/* Feature List */}
        <div className="space-y-4">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow flex items-start gap-4">
            <img src={CheckIcon} alt="Check icon" className="w-6 h-6 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Sales support around the clock.
              </h3>
              <p className="text-gray-600 mb-4">
                Automate your sales process by requesting important information
                in advance and automatically assigning leads to the appropriate
                contacts.
              </p>
              <button className="px-4 py-2 border border-gray-300 rounded text-gray-800 hover:bg-gray-100">
                Learn more
              </button>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
            <img src={LayerMaskIcon} alt="Layer mask icon" className="w-6 h-6" /> {/* New Image */}
            <p className="text-gray-800">
              Easily segment your WhatsApp newsletter subscribers.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
            <img src={ChatImage} alt="Check icon" className="w-6 h-6" />
            <p className="text-gray-800">
              Automations that support your customer service.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
            <img src={InLoveIcon} alt="In love icon" className="w-6 h-6" />
            <p className="text-gray-800">
              Automations that support your customer service.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 flex justify-center items-stretch">        
      <img
          src={personImage}
          alt="Professional person"
          className="rounded-lg shadow-lg w-full max-w-sm"
          style={{
            alignSelf: "flex-start", 
            height: "calc(100% - 45px)", 
          }}
        />
      </div>
    </div>
  );
};

export default AutomationToolbox;
