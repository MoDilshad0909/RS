import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Users, CheckSquare, GraduationCap, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { getWhatsAppLink } from '../../utils/whatsapp';

const Admission = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "Inquiry & Registration",
      desc: "Fill out the online inquiry form or visit the school office to register your interest.",
      color: "text-blue-500 bg-blue-50"
    },
    {
      icon: Users,
      title: "School Visit & Interaction",
      desc: "Attend a guided campus tour and an informal interaction session with the faculty.",
      color: "text-amber-500 bg-amber-50"
    },
    {
      icon: CheckSquare,
      title: "Document Verification",
      desc: "Submit all required documents including birth certificate and previous academic records.",
      color: "text-green-500 bg-green-50"
    },
    {
      icon: GraduationCap,
      title: "Admission Confirmed",
      desc: "Complete the fee payment to secure your child's seat for the upcoming academic year.",
      color: "text-[#0D47A1] bg-blue-100"
    }
  ];

  return (
    <section id="admission" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A2552] rounded-[3rem] overflow-hidden shadow-2xl relative">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#0D47A1]/50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#F4B400]/20 blur-3xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-5xl font-outfit font-bold text-white mb-6 leading-tight">
                Begin Your Child's <span className="text-[#F4B400]">Journey to Excellence</span>
              </h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-lg">
                Admissions for the current academic session are now open. Follow our simple, transparent admission process to secure a bright future for your child.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button as="a" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" variant="accent">
                  Apply Now
                </Button>
                <Button as="a" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" variant="glass">
                  Call for Admission
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8"
            >
              <h3 className="text-2xl font-outfit font-bold text-[#1E293B] mb-8">Admission Process</h3>
              
              <div className="space-y-6 relative">
                {/* Connecting Line */}
                <div className="absolute left-[1.35rem] top-8 bottom-8 w-0.5 bg-gray-100 -z-10"></div>

                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex gap-4 group">
                      <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 z-10 transition-transform group-hover:scale-110 ${step.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="pt-2">
                        <h4 className="font-outfit font-semibold text-[#1E293B] mb-1">{step.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
