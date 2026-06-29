import React from 'react';
import { cn } from '../../utils/cn';

const Button = ({ children, variant = 'primary', className, onClick, as = 'button', href, type = 'button' }) => {
  const baseStyle = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "bg-[#0D47A1] text-white hover:bg-[#0A367A] hover:shadow-lg hover:-translate-y-1",
    secondary: "bg-white text-[#0D47A1] border border-[#0D47A1] hover:bg-[#F8FAFC]",
    accent: "bg-[#F4B400] text-[#1E293B] hover:bg-[#F29E00] hover:shadow-lg hover:-translate-y-1",
    glass: "bg-white/20 backdrop-blur-md text-white border border-white/40 hover:bg-white/30",
  };

  const Component = as === 'a' ? 'a' : 'button';
  const props = as === 'a' ? { href } : { type, onClick };

  return (
    <Component 
      className={cn(baseStyle, variants[variant], 'px-6 py-2.5 sm:px-8 sm:py-3', className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
