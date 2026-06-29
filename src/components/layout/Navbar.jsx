import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, GraduationCap } from 'lucide-react';
import { cn } from '../../utils/cn';
import Button from '../ui/Button';
import { getWhatsAppLink } from '../../utils/whatsapp';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Fee Structure', href: '#fees' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-3">
              <img src="/logo.png" alt="R.S. International School Logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain bg-white rounded-full p-1" />
              <div className={cn(
                "font-outfit font-bold text-xl sm:text-2xl tracking-tight hidden sm:block",
                isScrolled ? "text-[#0D47A1]" : "text-white"
              )}>
                R.S. International School
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "font-medium text-sm transition-colors hover:text-[#F4B400]",
                    isScrolled ? "text-[#1E293B]" : "text-white/90"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-3 ml-6 border-l pl-6 border-gray-300/30">
              <Button 
                as="a" 
                href="tel:+919833577183" 
                variant={isScrolled ? 'secondary' : 'glass'}
                className="!px-4 !py-2 !rounded-lg text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button 
                as="a" 
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="accent"
                className="!px-4 !py-2 !rounded-lg text-sm"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Admissions
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 rounded-md focus:outline-none",
                isScrolled ? "text-[#1E293B]" : "text-white"
              )}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 origin-top overflow-hidden",
          isMobileMenuOpen ? "max-h-[500px] border-t border-gray-100" : "max-h-0"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#0D47A1] hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col space-y-3 px-3">
            <Button as="a" href="tel:+919833577183" variant="secondary" className="w-full justify-center">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button as="a" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" variant="accent" className="w-full justify-center">
              <GraduationCap className="w-4 h-4 mr-2" />
              Apply for Admission
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
