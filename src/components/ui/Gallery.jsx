import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const Gallery = ({ images, title = "Data Gallery" }) => {
    const [selectedId, setSelectedId] = useState(null);

    const handleNext = (e) => {
        e.stopPropagation();
        const currentIndex = images.findIndex(img => img.id === selectedId);
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedId(images[nextIndex].id);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        const currentIndex = images.findIndex(img => img.id === selectedId);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedId(images[prevIndex].id);
    };

    const selectedImage = images.find(img => img.id === selectedId);

    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
                    <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
                            onClick={() => setSelectedId(img.id)}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                                    <ZoomIn className="w-6 h-6" />
                                </span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white font-medium">{img.caption}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedId && selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedId(null)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
                            onClick={() => setSelectedId(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            className="absolute left-4 md:left-8 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-all hidden md:block"
                            onClick={handlePrev}
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        <button
                            className="absolute right-4 md:right-8 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-all hidden md:block"
                            onClick={handleNext}
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            layoutId={selectedId}
                            className="relative max-w-full max-h-full rounded-lg overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="w-auto max-h-[85vh] object-contain rounded-lg"
                            />
                            <div className="absolute bottom-4 left-0 right-0 text-center px-4">
                                <span className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm">
                                    {selectedImage.caption}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
