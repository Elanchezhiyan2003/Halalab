// import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Profile1 from '@/assets/profiles/profile-1.png';
import Profile2 from '@/assets/profiles/profile-2.png';
import Profile3 from '@/assets/profiles/profile-3.png';
import Profile4 from '@/assets/profiles/profile-4.png';
import Profile5 from '@/assets/profiles/profile-5.png';
import Profile6 from '@/assets/profiles/Uwen.png';
import Profile7 from '@/assets/profiles/thomos.png';
import Profile8 from '@/assets/profiles/profile-2.png';
import Profile9 from '@/assets/profiles/profile-5.png';

const testimonials = [
  {
    text: "Customers will not download an extra app for pharmacies or the e-prescription. In my opinion, WhatsApp is the most natural solution here.",
    author: "Adrian Knoch",
    company: "easyApotheke Duderstadt",
    image: Profile1,
  },
  {
    text: "We can map our entire sales process in Superchat's messaging software. We have a separate mailbox for each phase. That makes our work clear.",
    author: "Andreas Niemiec",
    company: "Niemiec Versicherungsmakler GmbH & Co. KG",
    image: Profile2,
  },
  {
    text: "Our communication has been more efficient, simpler and clearer since the implementation of Superchat. Incoming customer inquiries are directly assigned to the right person, labeled and processed.",
    author: "Christian Schuder",
    company: "Porsche Zentrum Baden-Baden",
    image: Profile3,
  },
  {
    text: "What was promised by Superchat has been delivered. Our employees are thrilled with the messaging platform.",
    author: "Raphael Dirnberger",
    company: "Edeka Dirnberger",
    image: Profile4,
  },
  {
    text: "With Superchat and the WhatsApp newsletter, we are much closer to our customers than with an email newsletter.",
    author: "Alexander Damm",
    company: "c1 Kosmetik",
    image: Profile5,
  },
  {
    text: "Communication with our customers is much easier, faster and more modern. Superchat is even used in the HR department.",
    author: "Christina Reesch",
    company: "Widmann + Winterholler",
    image: Profile6,
  },
  {
    text: "With Superchat, we are accessible on exactly the channels that our target group uses.",
    author: "Üwen Ergin",
    company: "KRF (KinderRechteForum)",
    image: Profile7,
  },
  {
    text: "Superchat has helped us bring system and order to our customer communications. Fewer chats are lost and we can work together as a team on social media and messengers! Thank you very much!",
    author: "Omar Badawy",
    company: "ESCP University",
    image: Profile8,
  },
  {
    text: "Superchat is the central building block in customer communication for us. WhatsApp provides us as an insurer with a new and powerful channel.",
    author: "Thomas Volker",
    company: "Allianz Generalvertretung Volker Finster",
    image: Profile9,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              You are in good company
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Create intuitive automations and authentic chatbots to deliver outstanding customer experiences via chat.
            </p>
          </div>
          <Button variant="outline" size="lg" className="rounded-full">
            More success stories
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <blockquote className="text-gray-700 mb-4">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} 
                  className='rounded-full size-10'
                  alt="" />
                  <div>
                    <cite className="text-sm font-medium text-gray-900 not-italic">
                      {testimonial.author}
                    </cite>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

