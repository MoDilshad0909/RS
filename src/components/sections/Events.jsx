import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { getWhatsAppLink } from '../../utils/whatsapp';

const Events = () => {
  const events = [
    {
      title: "Annual Sports Day",
      location: "School Playground",
      image: "/images/Event/IMG-20260629-WA0073.jpg",
      desc: "Students showcasing their athletic skills, teamwork, and sportsmanship in a grand annual sports event."
    },
    {
      title: "Cultural Fest",
      location: "School Auditorium",
      image: "/images/Event/IMG-20260629-WA0074.jpg",
      desc: "A celebration of art, music, and dance highlighting the diverse talents of our students."
    },
    {
      title: "Republic Day Celebration",
      location: "School Campus",
      image: "/images/Event/IMG-20260629-WA0079.jpg",
      desc: "Honoring the spirit of our nation with flag hoisting and cultural performances by students."
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="Happening at Campus"
          title="Upcoming & Past Events"
        />

        <div className="mt-16 space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 items-center bg-[#F8FAFC] rounded-3xl p-6 border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="w-full md:w-1/3 h-64 rounded-2xl overflow-hidden shrink-0 relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              <div className="w-full md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-outfit font-bold text-[#1E293B] mb-4 group-hover:text-[#0D47A1] transition-colors">{event.title}</h3>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  {event.date && (
                    <div className="flex items-center text-sm font-semibold text-[#0D47A1] bg-blue-50 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                  )}
                  <div className="flex items-center text-sm font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg mb-6 max-w-2xl">
                  {event.desc}
                </p>

                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#F4B400] font-semibold hover:text-[#F29E00] transition-colors group/link">
                  Read More 
                  <span className="ml-2 group-hover/link:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
