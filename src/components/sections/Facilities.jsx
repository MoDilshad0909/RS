import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TestTube, Monitor, Presentation, Trophy } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const Facilities = () => {
  const facilities = [
    {
      title: "Science Lab",
      image: "/images/Science Lab/IMG-20260629-WA0030.jpg",
      desc: "Fully equipped laboratories for physics, chemistry, and biology to foster practical learning and scientific inquiry.",
      icon: TestTube
    },
    {
      title: "Computer Lab",
      image: "/images/Computer lab/IMG-20260629-WA0003.jpg",
      desc: "State-of-the-art computer labs with high-speed internet to enhance digital literacy and coding skills.",
      icon: Monitor
    },
    {
      title: "Smart Classrooms",
      image: "/images/School/IMG-20260629-WA0082.jpg",
      desc: "Spacious, well-ventilated classrooms equipped with smart boards for interactive learning sessions.",
      icon: Presentation
    },
    {
      title: "Playground & Sports",
      image: "/images/Event/IMG-20260629-WA0073.jpg",
      desc: "Expansive playgrounds and sports facilities to encourage physical fitness and team spirit.",
      icon: Trophy
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="World Class Infrastructure"
          title="Our Facilities"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-[#F8FAFC] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 relative">
                <div className="absolute -top-6 right-6 bg-[#0D47A1] w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10 group-hover:bg-[#F4B400] transition-colors duration-300">
                  <facility.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-outfit font-bold text-xl text-[#1E293B] mb-3 group-hover:text-[#0D47A1] transition-colors">{facility.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{facility.desc}</p>
                <button className="text-[#F4B400] text-sm font-semibold flex items-center group/btn">
                  Explore <ArrowRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
