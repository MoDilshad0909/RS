import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const Founder = () => {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          subtitle="Visionaries"
          title="Our Founders"
        />

        <div className="space-y-16 mt-16">
          {/* Founder 1 */}
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Image Side */}
              <div className="lg:col-span-2 bg-[#0A2552] relative flex items-center justify-center p-8 lg:p-0 min-h-[400px] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/founder.png')] bg-cover bg-center opacity-40 mix-blend-luminosity transform group-hover:scale-105 transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2552] via-transparent to-transparent lg:bg-gradient-to-r"></div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-[#F4B400] overflow-hidden shadow-2xl bg-white"
                >
                  <img 
                    src="/images/founder.png" 
                    alt="R.S. Shrivastav - Founder" 
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-3 p-8 lg:p-16 relative">
                <Quote className="absolute top-8 right-8 lg:top-12 lg:right-12 w-20 h-20 text-gray-100 rotate-180" />
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative z-10"
                >
                  <h2 className="text-3xl font-outfit font-bold text-[#1E293B] mb-2">Founder's Message</h2>
                  <div className="h-1 w-16 bg-[#F4B400] mb-8 rounded-full"></div>

                  <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                    <p>
                      We have established R.S. International School with the sole objective of providing the best possible education, leaving no stone unturned.
                    </p>
                    <p>
                      One of the greatest gifts a parent can give their child is a quality education. The true purpose of education is not just to impart bookish knowledge but also to instill humanitarian values such as wisdom, compassion, courage, integrity, and reliability in students.
                    </p>
                    <p>
                      Everything we do is focused on the holistic development of our students in all aspects of life. Education is not limited to academics; it also includes sports, arts & crafts, music, and dance.
                    </p>
                    <p>
                      Our school encourages students to explore their own potential and adapt to the ever-changing world while providing them with guidance and support to develop decision-making and social skills.
                    </p>
                    <p>
                      I wish the school continued growth and new heights of success in the coming years.
                    </p>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <h3 className="font-outfit font-bold text-xl text-[#0D47A1]">R.S. Shrivastav</h3>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-widest flex items-center gap-2">
                        Founder 
                        <span className="w-2 h-2 rounded-full bg-[#F4B400]"></span>
                      </p>
                    </div>
                    {/* Pseudo signature style */}
                    <div className="font-[Brush_Script_MT,cursive] text-4xl text-gray-400 rotate-[-5deg]">
                      R.S. Shrivastav
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Founder 2 (Mrs. Sheela Shrivastav) */}
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden group max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-2/5 bg-[#0D47A1] relative flex justify-center p-8 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/Founder2.png')] bg-cover bg-center opacity-30 mix-blend-luminosity transform group-hover:scale-105 transition-transform duration-1000"></div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 w-56 h-56 rounded-full border-4 border-[#F4B400] overflow-hidden shadow-2xl bg-white"
                >
                  <img 
                    src="/images/Founder2.png" 
                    alt="Mrs. Sheela Shrivastav - Founder" 
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-12 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-[#F4B400] rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-amber-100">
                    <span className="w-2 h-2 rounded-full bg-[#F4B400]"></span>
                    Co-Founder
                  </div>
                  
                  <h3 className="text-3xl font-outfit font-bold text-[#1E293B] mb-2">Mrs. Sheela Shrivastav</h3>
                  <div className="h-1 w-16 bg-[#0D47A1] mx-auto md:mx-0 rounded-full mb-6"></div>
                  
                  <p className="text-gray-600 leading-relaxed text-lg italic">
                    "Empowering the next generation with values, vision, and the courage to pursue their dreams."
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
