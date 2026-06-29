import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const FAQ = () => {
  const faqs = [
    {
      question: "What is the admission procedure?",
      answer: "The admission process involves filling an inquiry form, visiting the school for an interaction session, submitting required documents (birth certificate, previous report card), and paying the admission fee."
    },
    {
      question: "What are the school timings?",
      answer: "The regular school timings are from 8:00 AM to 2:00 PM, Monday through Saturday. The school remains closed on Sundays and public holidays."
    },
    {
      question: "Is transport facility available?",
      answer: "Yes, we provide safe and secure transport facilities across major routes in Lucknow. Please contact the administrative office for specific route availability and charges."
    },
    {
      question: "What documents are required for admission?",
      answer: "You will need the child's birth certificate, 4 passport-size photographs of the child, 2 photographs of parents, Aadhar card copy, and previous school's transfer certificate and report card (if applicable)."
    },
    {
      question: "Are there any extracurricular activities?",
      answer: "Yes, we strongly believe in holistic development. We offer various activities including sports, music, dance, arts & crafts, and computer education as part of our regular curriculum."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="Clear Your Doubts"
          title="Frequently Asked Questions"
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-[#F8FAFC]"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className={`font-semibold font-outfit text-lg ${activeIndex === index ? 'text-[#0D47A1]' : 'text-[#1E293B]'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-[#0D47A1]' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
