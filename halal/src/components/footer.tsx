import React from 'react';
import Logo from '@/assets/logo.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-8 sm:py-10 md:py-12 xl:container xl:mx-auto">
      <div className="xl:container xl:mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="space-y-4 text-center sm:text-left">
          <div className="flex justify-center sm:justify-start items-center space-x-2">
            <a href="/">
              <img
                src={Logo}
                alt="Halal Lab Logo"
                className="w-8 h-8 rounded-2xl"
              />
            </a>
            <span
              style={{ fontFamily: 'Ramabhadra, sans-serif' }}
              className="text-xl font-semibold"
            >
              Halal_Lab
            </span>
          </div>
          <p className="text-sm">Superchat - The name says it all</p>
          <div className="space-y-2">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <a href="tel:+441224051727" className="hover:underline text-sm">
                +44 1224 051727
              </a>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <a href="mailto:hello@superchat.com" className="hover:underline text-sm">
                hello@superchat.com
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-2 text-center sm:text-left">
          <h3 className="font-semibold">Product</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">WhatsApp Newsletter</a></li>
            <li><a href="#" className="hover:underline">Automations</a></li>
            <li><a href="#" className="hover:underline">Integrations</a></li>
            <li><a href="#" className="hover:underline">Universal Inbox</a></li>
            <li><a href="#" className="hover:underline">Webchat</a></li>
          </ul>
        </div>

        <div className="space-y-2 text-center sm:text-left">
          <h3 className="font-semibold">About</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">The Goods</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Integrations</a></li>
            <li><a href="#" className="hover:underline">Universal Inbox</a></li>
            <li><a href="#" className="hover:underline">Webchat</a></li>
          </ul>
        </div>

        <div className="space-y-2 text-center sm:text-left">
          <h3 className="font-semibold">App</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">API Documentation</a></li>
            <li><a href="#" className="hover:underline">Automations</a></li>
            <li><a href="#" className="hover:underline">Integrations</a></li>
            <li><a href="#" className="hover:underline">Universal Inbox</a></li>
            <li><a href="#" className="hover:underline">Webchat</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

