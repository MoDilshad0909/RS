import React from 'react';
import { motion } from 'framer-motion';
import { Baby, Book, GraduationCap } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { getWhatsAppLink } from '../../utils/whatsapp';

const Academics = () => {
  const levels = [
    {
      title: "Pre-Primary",
      classes: "Nursery • LKG • UKG",
      icon: Baby,
      desc: "A playful and nurturing environment focusing on sensory and motor skills, foundational literacy, and social development.",
      color: "from-pink-500 to-rose-500",
      bg: "bg-pink-50"
    },
    {
      title: "Primary",
      classes: "Class I to V",
      icon: Book,
      desc: "Building a strong academic foundation with interactive learning methods, encouraging curiosity and critical thinking.",
      color: "from-blue-500 to-[#0D47A1]",
      bg: "bg-blue-50"
    },
    {
      title: "Middle & High School",
      classes: "Class VI to X",
      icon: GraduationCap,
      desc: "Comprehensive curriculum designed to prepare students for higher education with specialized focus on core subjects and life skills.",
      color: "from-amber-400 to-[#F4B400]",
      bg: "bg-amber-50"
    }
  ];

  return (
    <section id="academics" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="Academics"
          title="Educational Journey"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {levels.map((level, index) => {
            const Icon = level.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${level.color}`} />
                
                <div className={`${level.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                  <Icon className="w-8 h-8 text-gray-800" />
                </div>
                
                <h3 className="text-2xl font-outfit font-bold text-[#1E293B] mb-2">{level.title}</h3>
                <p className="text-sm font-semibold text-[#0D47A1] uppercase tracking-wider mb-4">{level.classes}</p>
                <p className="text-gray-600 leading-relaxed">
                  {level.desc}
                </p>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-[#F4B400] hover:text-[#F29E00] transition-colors">
                    Admissions Open <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Academics;
