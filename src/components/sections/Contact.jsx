import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { getWhatsAppLink } from '../../utils/whatsapp';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="Get In Touch"
          title="Contact Us"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100">
                <MapPin className="w-8 h-8 text-[#0D47A1] mb-4" />
                <h4 className="font-outfit font-bold text-[#1E293B] mb-2">Address</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Marhar Mau Khurd, <br />
                  Lucknow, Uttar Pradesh, <br />
                  India
                </p>
              </div>
              
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100">
                <Phone className="w-8 h-8 text-[#0D47A1] mb-4" />
                <h4 className="font-outfit font-bold text-[#1E293B] mb-2">Phone</h4>
                <div className="flex flex-col text-gray-600 text-sm">
                  <a href="tel:+918097140751" className="hover:text-[#F4B400] transition-colors block">
                    📞 +91 8097140751
                  </a>
                  <a href="tel:+919833577183" className="hover:text-[#F4B400] transition-colors block mt-1">
                    📞 +91 9833577183
                  </a>
                  <a href="tel:+919664289564" className="hover:text-[#F4B400] transition-colors block mt-1">
                    📞 +91 9664289564
                  </a>
                </div>
              </div>

              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100">
                <Mail className="w-8 h-8 text-[#0D47A1] mb-4" />
                <h4 className="font-outfit font-bold text-[#1E293B] mb-2">Email</h4>
                <a href="mailto:rsis2019.org@gmail.com" className="text-gray-600 text-sm hover:text-[#F4B400] transition-colors">
                  rsis2019.org@gmail.com
                </a>
              </div>

              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100">
                <Clock className="w-8 h-8 text-[#0D47A1] mb-4" />
                <h4 className="font-outfit font-bold text-[#1E293B] mb-2">Working Hours</h4>
                <p className="text-gray-600 text-sm">Mon - Sat: 8:00 AM - 2:00 PM</p>
                <p className="text-gray-600 text-sm mt-1">Sunday: Closed</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14241.139886361546!2d80.9999!3d26.8300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be33!2sLucknow%2C%20Uttar%2C%20Pradesh!5e0!3m2!1sen!2sin!4v1655000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/40"
          >
            <h3 className="text-2xl font-outfit font-bold text-[#1E293B] mb-6">Send Us A Message</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Parent/Guardian Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D47A1]/20 focus:border-[#0D47A1] transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D47A1]/20 focus:border-[#0D47A1] transition-colors"
                    placeholder="Enter mobile number"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D47A1]/20 focus:border-[#0D47A1] transition-colors"
                    placeholder="Enter email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select 
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D47A1]/20 focus:border-[#0D47A1] transition-colors bg-white"
                >
                  <option value="">Select an inquiry type</option>
                  <option value="admission">Admission Inquiry</option>
                  <option value="fees">Fee Structure Query</option>
                  <option value="visit">Schedule Campus Visit</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D47A1]/20 focus:border-[#0D47A1] transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <Button as="a" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="w-full justify-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                Quick Enquiry via WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
