import React from 'react';
import { motion } from 'framer-motion';
import { Award, MonitorPlay, FlaskConical, PcCase, ShieldCheck, Gamepad2, Trophy, HeartHandshake, UserCheck, Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { cn } from '../../utils/cn';

const WhyChooseUs = () => {
  const features = [
    { icon: Award, title: "Experienced Teachers", color: "bg-blue-50 text-blue-600" },
    { icon: MonitorPlay, title: "Smart Learning", color: "bg-indigo-50 text-indigo-600" },
    { icon: FlaskConical, title: "Science Lab", color: "bg-green-50 text-green-600" },
    { icon: PcCase, title: "Computer Lab", color: "bg-cyan-50 text-cyan-600" },
    { icon: ShieldCheck, title: "Safe Campus", color: "bg-amber-50 text-amber-600" },
    { icon: Gamepad2, title: "Activity Based", color: "bg-pink-50 text-pink-600" },
    { icon: Trophy, title: "Sports", color: "bg-orange-50 text-orange-600" },
    { icon: HeartHandshake, title: "Discipline", color: "bg-teal-50 text-teal-600" },
    { icon: UserCheck, title: "Individual Attention", color: "bg-violet-50 text-violet-600" },
    { icon: Star, title: "Character Building", color: "bg-rose-50 text-rose-600" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="Why Choose Us"
          title="The Best Choice For Your Child"
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-[#F4B400] hover:shadow-xl hover:shadow-[#F4B400]/10 transition-all duration-300 bg-white flex flex-col items-center text-center cursor-default"
              >
                <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3", feature.color)}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-outfit font-semibold text-[#1E293B] group-hover:text-[#0D47A1] transition-colors">{feature.title}</h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
