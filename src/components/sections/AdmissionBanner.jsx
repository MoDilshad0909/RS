import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { getWhatsAppLink } from '../../utils/whatsapp';

const AdmissionBanner = () => {
  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#0D47A1] to-[#0A2552] rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-[#F4B400]/20 blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left text-white max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold uppercase tracking-wider mb-4 border border-white/20">
                <GraduationCap className="w-4 h-4 text-[#F4B400]" />
                Admissions Open 2026-2027
              </div>
              <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">
                Enroll your child today for <span className="text-[#F4B400]">quality education.</span>
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Give your child the perfect launchpad for a successful future. Limited seats available for the upcoming academic session.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-end shrink-0">
              <Button as="a" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" variant="accent" className="gap-2 px-8">
                Apply Now <ArrowRight className="w-4 h-4" />
              </Button>
              <Button as="a" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" variant="glass" className="gap-2 bg-green-500/20 hover:bg-green-500/40 border-green-500/30">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </Button>
              <Button as="a" href="tel:+919833577183" variant="glass" className="gap-2">
                <Phone className="w-4 h-4" /> Call Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionBanner;
