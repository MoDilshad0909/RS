import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, GraduationCap } from 'lucide-react';
import { cn } from '../../utils/cn';
import { getWhatsAppLink } from '../../utils/whatsapp';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a 
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0D47A1] text-white p-3 rounded-full shadow-lg hover:bg-[#0A367A] transition-all transform hover:scale-110 flex items-center justify-center group relative"
        aria-label="Admission"
      >
        <GraduationCap className="w-6 h-6" />
        <span className="absolute right-14 bg-gray-900 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Admission
        </span>
      </a>
      
      <a 
        href={getWhatsAppLink()} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center group relative"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-14 bg-gray-900 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp
        </span>
      </a>

      <a 
        href="tel:+919833577183" 
        className="bg-[#F4B400] text-[#1E293B] p-3 rounded-full shadow-lg hover:bg-[#F29E00] transition-all transform hover:scale-110 flex items-center justify-center group relative"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-14 bg-gray-900 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Now
        </span>
      </a>

      <button
        onClick={scrollToTop}
        className={cn(
          "bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all transform hover:scale-110 flex items-center justify-center group relative",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
        <span className="absolute right-14 bg-gray-900 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Back to Top
        </span>
      </button>
    </div>
  );
};

export default FloatingButtons;
