import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const SectionHeading = ({ title, subtitle, className, center = true }) => {
  return (
    <div className={cn("mb-12", center ? "text-center" : "text-left", className)}>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#F4B400] font-semibold tracking-wider uppercase text-sm mb-2"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B]"
      >
        {title}
      </motion.h2>
      {center && (
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-1 w-24 bg-[#0D47A1] mx-auto mt-6 rounded-full"
        />
      )}
    </div>
  );
};

export default SectionHeading;
