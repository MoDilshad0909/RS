import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { cn } from '../utils/cn';
import SectionHeading from '../components/ui/SectionHeading';

// Blur hash or simple placeholder logic could go here
// For blur-to-sharp, we use a simple CSS class approach with Framer Motion

const GalleryPage = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [imagesLoaded, setImagesLoaded] = useState({});

  useEffect(() => {
    // Automatically load images from public/images
    const images = import.meta.glob('/public/images/**/*.{jpg,jpeg,png,webp}', { eager: true });
    const items = [];
    const cats = new Set();

    Object.keys(images).forEach((path, index) => {
      const servePath = path.replace('/public', '');
      const parts = path.split('/');
      let category = '';

      if (parts.length > 4) {
        category = parts[3];
      }

      // Ignore General or empty
      if (!category || category.toLowerCase() === 'general' || category.toLowerCase() === 'school') {
        if(category.toLowerCase() === 'school') {
            category = 'Campus';
        } else {
            return; // Skip this image
        }
      }

      cats.add(category);

      items.push({
        id: index,
        category,
        src: servePath,
        alt: `${category} Image ${index + 1}`
      });
    });

    setGalleryItems(items);
    setCategories(['All', ...Array.from(cats)].sort());
  }, []);

  const filteredItems = useMemo(() => {
    return filter === 'All' 
      ? galleryItems 
      : galleryItems.filter(item => item.category === filter);
  }, [filter, galleryItems]);

  const handleKeyDown = useCallback((e) => {
    if (selectedImageIndex === null) return;
    if (e.key === 'ArrowRight') {
      setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === 'ArrowLeft') {
      setSelectedImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Escape') {
      setSelectedImageIndex(null);
    }
  }, [selectedImageIndex, filteredItems.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleImageLoad = (id) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }));
  };

  // Stagger variants for the grid
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <div className="pt-24 pb-20 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="Glimpses of Excellence"
          title="Full School Gallery"
        />

        {/* Smooth Category Switching Filters */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12 max-h-48 overflow-y-auto p-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setSelectedImageIndex(null);
              }}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden",
                filter === cat 
                  ? "text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:shadow-md"
              )}
            >
              {filter === cat && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-[#0D47A1] to-[#0A2552]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {cat}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery Grid */}
        <motion.div 
          layout 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                transition={{ duration: 0.4 }}
                className="relative group rounded-2xl overflow-hidden cursor-pointer bg-gray-200 break-inside-avoid shadow-sm hover:shadow-2xl transition-shadow duration-500"
                onClick={() => setSelectedImageIndex(index)}
              >
                {/* Blur to sharp loading */}
                <div className={cn(
                  "w-full h-full absolute inset-0 bg-gray-300 animate-pulse transition-opacity duration-700",
                  imagesLoaded[item.id] ? "opacity-0" : "opacity-100"
                )} />
                
                {/* Tilt Effect Container */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 1 : -1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    loading="lazy"
                    decoding="async"
                    onLoad={() => handleImageLoad(item.id)}
                    className={cn(
                      "w-full h-auto object-cover transition-all duration-700",
                      imagesLoaded[item.id] ? "blur-0 grayscale-0" : "blur-sm grayscale"
                    )}
                  />
                </motion.div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2552]/90 via-[#0A2552]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full gap-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <ZoomIn className="w-12 h-12 text-white/80" />
                  </motion.div>
                  <span className="text-white font-bold tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p>No images found in this category.</p>
          </div>
        )}
      </div>

      {/* Premium Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-[102] bg-gradient-to-b from-black/80 to-transparent">
              <span className="text-white/90 font-medium tracking-wide">
                {filteredItems[selectedImageIndex].category}
              </span>
              <button 
                className="text-white/70 hover:text-white hover:rotate-90 transition-all duration-300 bg-white/10 hover:bg-white/20 p-2 rounded-full"
                onClick={() => setSelectedImageIndex(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all duration-300 z-[101] p-3 hover:bg-white/10 rounded-full group"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
              }}
            >
              <ChevronLeft className="w-10 h-10 group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all duration-300 z-[101] p-3 hover:bg-white/10 rounded-full group"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
              }}
            >
              <ChevronRight className="w-10 h-10 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Image Container with Floating Motion */}
            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20, filter: "blur(10px)" }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative max-w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[selectedImageIndex].src}
                alt={filteredItems[selectedImageIndex].alt}
                loading="lazy"
                decoding="async"
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </motion.div>
            
            {/* Image Counter */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none z-[102]"
            >
              <div className="bg-black/60 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 text-white/90 text-sm font-medium tracking-widest">
                {selectedImageIndex + 1} <span className="text-white/40 mx-2">/</span> {filteredItems.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
