import React from 'react';
import phoneIcon from "../assets/phone.png";
import emailIcon from "../assets/mail.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8 px-4">
        
        {/* Logo and Contact Section */}
        <div className="space-y-4">
          <div className="text-lg font-semibold">Halal_Lab</div>
          <p className="text-sm">Superchat - The name says it all</p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
            <span> <img src={phoneIcon} alt="phone" className="w-5 h-5" />
             </span><pre>Phone</pre>
             <a href="tel:+441224051727" className="hover:underline">+44 1224 051727</a>
            </div>
            <div className="flex items-center space-x-2">
              <img src={emailIcon} alt="email" className="w-5 h-5" />
              <a href="mailto:hello@superchat.com" className="hover:underline">hello@superchat.com</a>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <div className="space-y-2">
          <h3 className="font-semibold">Product</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">WhatsApp Newsletter</a></li>
            <li><a href="#" className="hover:underline">Automations</a></li>
            <li><a href="#" className="hover:underline">Integrations</a></li>
            <li><a href="#" className="hover:underline">Universal inbox</a></li>
            <li><a href="#" className="hover:underline">Webchat</a></li>
          </ul>
        </div>

        {/* About Section */}
        <div className="space-y-2">
          <h3 className="font-semibold">About</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">The goods</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Integrations</a></li>
            <li><a href="#" className="hover:underline">Universal inbox</a></li>
            <li><a href="#" className="hover:underline">Webchat</a></li>
          </ul>
        </div>

        {/* App Section */}
        <div className="space-y-2">
          <h3 className="font-semibold">App</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">API Documentation</a></li>
            <li><a href="#" className="hover:underline">Automations</a></li>
            <li><a href="#" className="hover:underline">Integrations</a></li>
            <li><a href="#" className="hover:underline">Universal inbox</a></li>
            <li><a href="#" className="hover:underline">Webchat</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
