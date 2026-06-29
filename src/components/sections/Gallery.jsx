import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { cn } from '../../utils/cn';

const Gallery = () => {
  const [featuredImages, setFeaturedImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState({});

  useEffect(() => {
    // Load all images but randomly select 6 for the homepage
    const images = import.meta.glob('/public/images/**/*.{jpg,jpeg,png,webp}', { eager: true });
    let allItems = [];
    
    Object.keys(images).forEach((path) => {
      const servePath = path.replace('/public', '');
      const parts = path.split('/');
      let category = '';

      if (parts.length > 4) {
        category = parts[3];
      }

      // Filter out 'General' or empty just like full gallery
      if (!category || category.toLowerCase() === 'general' || category.toLowerCase() === 'school') {
        if(category.toLowerCase() === 'school') {
            category = 'Campus';
        } else {
            return;
        }
      }

      allItems.push({
        src: servePath,
        category,
        alt: `${category} Featured Image`
      });
    });

    // Shuffle and pick 6
    const shuffled = allItems.sort(() => 0.5 - Math.random());
    setFeaturedImages(shuffled.slice(0, 6));
  }, []);

  const handleImageLoad = (src) => {
    setImagesLoaded(prev => ({ ...prev, [src]: true }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: 'spring', stiffness: 100, damping: 20 } 
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading 
            subtitle="Glimpses"
            title="School Gallery"
          />
          <Link to="/gallery" className="hidden md:block">
            <Button variant="outline" className="gap-2">
              <ImageIcon className="w-4 h-4" /> View All Gallery <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Premium Grid with Stagger & Reveal */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {featuredImages.map((item, index) => (
              <motion.div
                key={item.src}
                variants={itemVariants}
                className="relative group rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] shadow-sm hover:shadow-2xl transition-shadow duration-500 block"
              >
                {/* Blur placeholder */}
                <div className={cn(
                  "w-full h-full absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-700",
                  imagesLoaded[item.src] ? "opacity-0" : "opacity-100"
                )} />

                <motion.div
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    loading="lazy"
                    decoding="async"
                    onLoad={() => handleImageLoad(item.src)}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      imagesLoaded[item.src] ? "blur-0 grayscale-0" : "blur-sm grayscale"
                    )}
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0D47A1]/90 via-[#0D47A1]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 pointer-events-none">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full gap-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <ZoomIn className="w-10 h-10 text-white/80" />
                  </motion.div>
                  <span className="text-white font-bold tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile View All Button */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link to="/gallery" className="w-full">
            <Button variant="primary" className="w-full justify-center gap-2">
              <ImageIcon className="w-4 h-4" /> View All Gallery <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
