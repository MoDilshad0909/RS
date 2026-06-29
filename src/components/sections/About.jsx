import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield, BookOpen, Users } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const About = () => {
  const values = [
    {
      icon: <BookOpen className="w-8 h-8 text-[#0D47A1]" />,
      title: "Quality Education",
      desc: "Providing a world-class curriculum that challenges and inspires students to reach their full potential."
    },
    {
      icon: <Heart className="w-8 h-8 text-[#F4B400]" />,
      title: "Holistic Development",
      desc: "Focusing on academic excellence alongside sports, arts, and extracurricular activities."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Values & Ethics",
      desc: "Instilling core values of integrity, compassion, and discipline in every student."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Community",
      desc: "Building a supportive environment where every student feels valued and encouraged."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="About Us"
          title="Welcome to R.S. International School"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
          {/* Left Side - Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              R.S. International School is committed to providing a transformative educational experience. We believe that true education goes beyond textbooks. Our goal is to nurture well-rounded individuals equipped with the knowledge, skills, and values required to thrive in a globalized world.
            </p>
            <div className="space-y-8 mt-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-[#0D47A1]/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#0D47A1]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-outfit font-bold text-[#1E293B] mb-2">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower students with holistic education, fostering intellectual growth, moral integrity, and social responsibility, enabling them to become visionary leaders of tomorrow.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-[#F4B400]/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-[#F4B400]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-outfit font-bold text-[#1E293B] mb-2">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be a premier institution of excellence that inspires lifelong learning and cultivates a generation of confident, compassionate, and capable global citizens.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="mb-4 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <h4 className="font-outfit font-bold text-lg text-[#1E293B] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
