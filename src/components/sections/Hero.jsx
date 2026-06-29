import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, PlayCircle } from 'lucide-react';
import Button from '../ui/Button';
import { getWhatsAppLink } from '../../utils/whatsapp';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/School/IMG-20260629-WA0085.jpg')`, // Assuming one of the school building images
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2552]/90 via-[#0D47A1]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium tracking-wider mb-6">
              WELCOME TO R.S. INTERNATIONAL SCHOOL
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-outfit leading-tight mb-6">
              Empowering Young Minds for a <span className="text-[#F4B400]">Brighter Tomorrow</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              We provide a nurturing environment where students excel academically, develop strong moral character, and build the skills needed to succeed in an ever-changing world.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button as="a" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" variant="accent" className="gap-2">
                Apply for Admission <ArrowRight className="w-5 h-5" />
              </Button>
              <Button as="a" href="tel:+919833577183" variant="primary" className="gap-2">
                <Phone className="w-5 h-5" /> Call Now
              </Button>
              <Button as="a" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" variant="glass" className="gap-2 !bg-green-500/20 hover:!bg-green-500/40">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </Button>
              <Button as="a" href="#gallery" variant="glass" className="gap-2">
                <PlayCircle className="w-5 h-5" /> Virtual Tour
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-white/70 text-sm mb-2 font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/50 flex justify-center p-1">
          <motion.div 
            animate={{ 
              y: [0, 15, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-2 h-2 rounded-full bg-[#F4B400]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
