import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > 300);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="fixed bottom-44 right-6 z-50 w-12 h-12 bg-corporate-navy hover:bg-accent-teal text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 border border-white/10 hover:scale-110 active:scale-95"
                >
                    <ChevronUp size={22} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;
