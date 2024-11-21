import React from "react";
import adrianImage from '/src/assets/adrian-knoch.png';
const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Customers will not download an extra app for pharmacies or the e-prescription. In my opinion, WhatsApp is the most natural solution here.",
      author: "Adrian Knoch",
      company: "easyApotheke Duderstadt",
      image: adrianImage,


    },
    {
      text: "We can map our entire sales process in Superchat's messaging software. We have a separate mailbox for each phase. That makes our work clear.",
      author: "Andreas Niemiec",
      company: "Niemiec Versicherungsmakler GmbH & Co. KG",
    },
    {
      text: "Our communication has been more efficient, simpler and clearer since the implementation of Superchat. Incoming customer inquiries are directly assigned to the right person, labeled and processed.",
      author: "Christian Schuder",
      company: "Porsche Zentrum Baden-Baden",
    },
    {
      text: "What was promised by Superchat has been delivered. Our employees are thrilled with the messaging platform.",
      author: "Raphael Dirnberger",
      company: "Edeka Dirnberger",
    },
    {
      text: "With Superchat and the WhatsApp newsletter, we are much closer to our customers than with an email newsletter.",
      author: "Alexander Damm",
      company: "c1 Kosmetik",
    },
    {
      text: "Communication with our customers is much easier, faster and more modern. Superchat is even used in the HR department.",
      author: "Christina Reesch",
      company: "Widmann + Winterholler",
    },
    {
      text: "With Superchat, we are accessible on exactly the channels that our target group uses.",
      author: "Üwen Ergin",
      company: "KRF (KinderRechteForum)",
    },
    {
      text: "Superchat has helped us bring system and order to our customer communications. Fewer chats are lost and we can work together as a team on social media and messengers! Thank you very much!",
      author: "Omar Badawy",
      company: "ESCP University",
    },
    {
      text: "Superchat is the central building block in customer communication for us. WhatsApp provides us as an insurer with a new and powerful channel.",
      author: "Thomas Volker",
      company: "Allianz Generalvertretung Volker Finster",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 xl:container xl:mx-auto">

      <div className="max-w-7xl -mt-44 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">

        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">
            You are in good company
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Create intuitive automations and authentic chatbots to deliver
            outstanding customer experiences via chat.
          </p>
        </div>


        <div className="mt-4 md:mt-0">
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full shadow-sm hover:bg-gray-100 transition">
            More success stories
          </button>
        </div>
      </div>


      <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow"
          >
            <p className="text-gray-700 italic">"{testimonial.text}"</p>
            <div className="mt-4">
              <h3 className="text-gray-900 font-semibold">
                {testimonial.author}
              </h3>
              <p className="text-gray-500">{testimonial.company}</p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
