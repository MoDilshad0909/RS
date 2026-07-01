import React from 'react';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { getWhatsAppLink } from '../../utils/whatsapp';

const Footer = () => {
  return (
    <footer className="bg-[#0A2552] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="R.S. International School Logo" className="w-12 h-12 bg-white rounded-full p-1" />
              <h3 className="font-outfit text-2xl font-bold leading-tight">R.S. International School</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Empowering young minds with quality education, holistic development, and modern facilities. Building the leaders of tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F4B400] hover:text-[#1E293B] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F4B400] hover:text-[#1E293B] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F4B400] hover:text-[#1E293B] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-outfit text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Academics', 'Facilities', 'Gallery'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-[#F4B400] transition-colors flex items-center text-sm">
                    <ChevronRight className="w-4 h-4 mr-2 text-[#F4B400]" />
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#F4B400] transition-colors flex items-center text-sm">
                  <ChevronRight className="w-4 h-4 mr-2 text-[#F4B400]" />
                  Admissions
                </a>
              </li>
            </ul>
          </div>

          {/* Main Branch Contact */}
          <div>
            <h4 className="font-outfit text-xl font-semibold mb-6">Main Branch</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-300 text-sm">
                <MapPin className="w-5 h-5 mr-3 text-[#F4B400] shrink-0" />
                <span>Marhar Mau Kala (Khurdahi Bazaar),<br />Lucknow, Uttar Pradesh, India</span>
              </li>
              <li className="flex flex-col items-start text-gray-300 text-sm">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-[#F4B400] shrink-0" />
                  <a href="tel:+918097140751" className="hover:text-white transition-colors">📞 +91 8097140751</a>
                </div>
                <div className="ml-8 mt-1">
                  <a href="tel:+919833577183" className="hover:text-white transition-colors block">📞 +91 9833577183</a>
                  <a href="tel:+919664289564" className="hover:text-white transition-colors block mt-1">📞 +91 9664289564</a>
                </div>
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <Mail className="w-5 h-5 mr-3 text-[#F4B400] shrink-0" />
                <a href="mailto:rsis2019.org@gmail.com" className="hover:text-white transition-colors">
                  rsis2019.org@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Other Branches */}
          <div>
            <h4 className="font-outfit text-xl font-semibold mb-6">Our Other Branches</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-[#F4B400] text-sm mb-1">Shivam Vidya Mandir High School & Junior College</h5>
                <p className="text-gray-400 text-xs">(Hindi & English Medium)</p>
                <p className="text-gray-300 text-xs mt-1">Khairani Road, Saki Naka, Mumbai – 400072</p>
              </div>
              <div className="pt-2 border-t border-white/10">
                <h5 className="font-semibold text-[#F4B400] text-sm mb-1">Shivam Vidya Mandir</h5>
                <p className="text-gray-300 text-xs mt-1">Tunga Village, S.V. Road, Saki Naka, Mumbai – 400072</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} R.S. International School. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="mt-8 pt-4 border-t border-white/5 text-center">
          <p className="text-gray-400 text-[13px] md:text-sm">
            Designed & Developed by{' '}
            <a 
              href="https://www.dilshad.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block hover:text-[#3B82F6] transition-colors duration-300 group"
            >
              Mo Dilshad
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#3B82F6] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
