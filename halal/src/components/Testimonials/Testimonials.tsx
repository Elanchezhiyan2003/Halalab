// import React from "react";
// import adrianImage from '/src/assets/adrian-knoch.png';
// import Adrinan from '@/assets/adrinian.png'
// import { Button } from "../ui/button";
// const  Testimonials= () => {
//   return (
// <div className="relative top-0">
//   <div className="container bg-gray-50 py-4 mx-auto px-4">
//     {/* Header Section */}
//     <div className="flex flex-col md:flex-row items-center justify-between mb-10">
//       <div className="text-center md:text-left">
//         <h2 className="text-3xl font-bold font-aeonik text-gray-900 sm:text-4xl">
//           You are in good company
//         </h2>
//         <p className="mt-2 text-lg text-gray-600 font-helvetica">
//           Create intuitive automations and authentic chatbots to deliver outstanding customer experiences via chat.
//         </p>
//       </div>
//       <div className="mt-6 md:mt-0">
//         <Button className="bg-black bg-opacity-5 text-black font-aeonik">More success stories</Button>
//       </div>
//     </div>

//     {/* Testimonials Section */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {Array(9)
//         .fill(null)
//         .map((_, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
//           >
//             {/* Testimonial Text */}
//             <p className="text-gray-700 font-aeonik mb-4">
//               “Customers will not download an extra app for pharmacies or the e-prescription. In my opinion, WhatsApp is the most natural solution here.”
//             </p>
//             {/* Author Details */}
//             <div className="flex items-center">
//               <img
//                 src={Adrinan}
//                 alt="Author"
//                 className="w-12 h-12 rounded-full object-cover mr-4"
//               />
//               <div>
//                 <h3 className="text-gray-900 font-semibold font-helvetica">Adrian Knoch</h3>
//                 <p className="text-gray-500 text-sm font-aeonik">easyApotheke Duderstadt</p>
//               </div>
//             </div>
//           </div>
//         ))}
//     </div>
//   </div>
// </div>


//   );
// };

// export default Testimonials;

// import React from "react";
// import profileone from '@/assets/profiles/profile-1.png';
// import profiletwo from '@/assets/profiles/profile-2.png';
// import profilethree from '@/assets/profiles/profile-1.png';
// import profilefour from '@/assets/profiles/profile-1.png';
// import profilefive from '@/assets/profiles/profile-1.png';
// import profilesix from '@/assets/profiles/profile-1.png';
// import profileseven from '@/assets/profiles/profile-1.png';
// import profileeight from '@/assets/profiles/profile-1.png';
// import profilenine from '@/assets/profiles/profile-1.png';

// const Testimonials: React.FC = () => {
//   const testimonials = [
//     {
//       text: "Customers will not download an extra app for pharmacies or the e-prescription. In my opinion, WhatsApp is the most natural solution here.",
//       author: "Adrian Knoch",
//       company: "easyApotheke Duderstadt",
//       image: profileone,
//     },
//     {
//       text: "We can map our entire sales process in Superchat's messaging software. We have a separate mailbox for each phase. That makes our work clear.",
//       author: "Andreas Niemiec",
//       company: "Niemiec Versicherungsmakler GmbH & Co. KG",
//       image: profiletwo,
//     },
//     {
//       text: "Our communication has been more efficient, simpler and clearer since the implementation of Superchat. Incoming customer inquiries are directly assigned to the right person, labeled and processed.",
//       author: "Christian Schuder",
//       company: "Porsche Zentrum Baden-Baden",
//       image: profilethree,
//     },
//     {
//       text: "What was promised by Superchat has been delivered. Our employees are thrilled with the messaging platform.",
//       author: "Raphael Dirnberger",
//       company: "Edeka Dirnberger",
//       image: profilefour,
//     },
//     {
//       text: "With Superchat and the WhatsApp newsletter, we are much closer to our customers than with an email newsletter.",
//       author: "Alexander Damm",
//       company: "c1 Kosmetik",
//       image: profilefive,
//     },
//     {
//       text: "Communication with our customers is much easier, faster and more modern. Superchat is even used in the HR department.",
//       author: "Christina Reesch",
//       company: "Widmann + Winterholler",
//       image: profilesix,
//     },
//     {
//       text: "With Superchat, we are accessible on exactly the channels that our target group uses.",
//       author: "Üwen Ergin",
//       company: "KRF (KinderRechteForum)",
//       image: profileseven,
//     },
//     {
//       text: "Superchat has helped us bring system and order to our customer communications. Fewer chats are lost and we can work together as a team on social media and messengers! Thank you very much!",
//       author: "Omar Badawy",
//       company: "ESCP University",
//       image: profileeight,
//     },
//     {
//       text: "Superchat is the central building block in customer communication for us. WhatsApp provides us as an insurer with a new and powerful channel.",
//       author: "Thomas Volker",
//       company: "Allianz Generalvertretung Volker Finster",
//       image: profilenine,
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-12 xl:container xl:mx-auto">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
//         <div className="text-center md:text-left">
//           <h2 className="text-[42px] font-semibold text-gray-900">
//             You are in good company
//           </h2>
//           <p className="mt-2 text-lg text-gray-600">
//             Create intuitive automations and authentic chatbots to deliver
//             outstanding customer experiences via chat.
//           </p>
//         </div>

//         <div className="mt-4 md:mt-0">
//           <button className="bg-white border border-gray-300 text-black font-semibold px-6 py-2 rounded-full shadow-sm hover:bg-gray-100 transition">
//             More success stories
//           </button>
//         </div>
//       </div>

//       <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg p-6 text-left transition-shadow flex flex-col justify-between h-fit border border-[#EAEBEF]"
//           >
//             <p className="text-gray-700 italic">"{testimonial.text}"</p>
//             <div className="mt-6 flex gap-4 items-center">
//               <div>
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.author}
//                   className="w-10 h-10 rounded-full inline-block"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-gray-900 font-semibold">
//                   {testimonial.author}
//                 </h3>
//                 <p className="text-gray-500">{testimonial.company}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import React from "react";
import profileone from '@/assets/profiles/profile-1.png';
import profiletwo from '@/assets/profiles/profile-2.png';
import profilethree from '@/assets/profiles/profile-6.png';
import profilefour from '@/assets/profiles/profile-4.png';
import profilefive from '@/assets/profiles/profile-5.png';
import profilesix from '@/assets/profiles/profile-6.png';
import profileseven from '@/assets/profiles/profile-3.png';
import profileeight from '@/assets/profiles/profile-6.png';
import profilenine from '@/assets/profiles/profile-4.png';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Customers will not download an extra app for pharmacies or the e-prescription. In my opinion, WhatsApp is the most natural solution here.",
      author: "Adrian Knoch",
      company: "easyApotheke Duderstadt",
      image: profileone,
    },
    {
      text: "We can map our entire sales process in Superchat's messaging software. We have a separate mailbox for each phase. That makes our work clear.",
      author: "Andreas Niemiec",
      company: "Niemiec Versicherungsmakler GmbH & Co. KG",
      image: profiletwo,
    },
    {
      text: "Our communication has been more efficient, simpler and clearer since the implementation of Superchat. Incoming customer inquiries are directly assigned to the right person, labeled and processed.",
      author: "Christian Schuder",
      company: "Porsche Zentrum Baden-Baden",
      image: profilethree,
    },
    {
      text: "What was promised by Superchat has been delivered. Our employees are thrilled with the messaging platform.",
      author: "Raphael Dirnberger",
      company: "Edeka Dirnberger",
      image: profilefour,
    },
    {
      text: "With Superchat and the WhatsApp newsletter, we are much closer to our customers than with an email newsletter.",
      author: "Alexander Damm",
      company: "c1 Kosmetik",
      image: profilefive,
    },
    {
      text: "Communication with our customers is much easier, faster and more modern. Superchat is even used in the HR department.",
      author: "Christina Reesch",
      company: "Widmann + Winterholler",
      image: profilesix,
    },
    {
      text: "With Superchat, we are accessible on exactly the channels that our target group uses.",
      author: "Üwen Ergin",
      company: "KRF (KinderRechteForum)",
      image: profileseven,
    },
    {
      text: "Superchat has helped us bring system and order to our customer communications. Fewer chats are lost and we can work together as a team on social media and messengers! Thank you very much!",
      author: "Omar Badawy",
      company: "ESCP University",
      image: profileeight,
    },
    {
      text: "Superchat is the central building block in customer communication for us. WhatsApp provides us as an insurer with a new and powerful channel.",
      author: "Thomas Volker",
      company: "Allianz Generalvertretung Volker Finster",
      image: profilenine,
    },
  ];

  return (
    <section className="bg-gray-50 py-12 xl:container xl:mx-auto">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-[42px] font-semibold text-gray-900">
            You are in good company
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Create intuitive automations and authentic chatbots to deliver
            outstanding customer experiences via chat.
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <button className="bg-white border border-gray-300 text-black font-semibold px-6 py-2 rounded-full shadow-sm hover:bg-gray-100 transition">
            More success stories
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 text-left transition-shadow flex flex-col justify-between h-fit border border-[#EAEBEF]"
          >
            {/* Testimonial Text */}
            <p className="text-gray-700 font-aeonik">"{testimonial.text}"</p>
            {/* Author Details */}
            <div className="mt-6 flex gap-4 items-center">
              <div>
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full inline-block"
                />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold">
                  {testimonial.author}
                </h3>
                <p className="text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
