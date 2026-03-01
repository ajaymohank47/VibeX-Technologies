import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';

const FloatingCallButton = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="fixed right-6 bottom-24 lg:bottom-24 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ duration: 0.25 }}
                        className="bg-white rounded-2xl shadow-2xl border border-border-grey p-5 w-64"
                    >
                        <p className="text-corporate-navy font-heading font-bold text-base mb-1">
                            Let's Talk!
                        </p>
                        <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                            Book a free 30-min call with our team. No commitment, just clarity.
                        </p>
                        <a
                            href="tel:+919004575835"
                            className="flex items-center justify-center gap-2 w-full bg-corporate-navy hover:bg-accent-teal text-white font-bold py-3 px-4 rounded-xl transition-colors duration-300 text-sm"
                        >
                            <Phone size={16} />
                            Call +91 9004575835
                        </a>
                        <a
                            href="mailto:vibextechnologies.business@gmail.com"
                            className="flex items-center justify-center gap-2 w-full mt-2 border border-border-grey hover:border-accent-teal text-corporate-navy hover:text-accent-teal font-semibold py-2.5 px-4 rounded-xl transition-colors duration-300 text-sm"
                        >
                            Email Us Instead
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
                onClick={() => setExpanded(!expanded)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-corporate-navy hover:bg-accent-teal text-white font-bold pl-4 pr-5 py-3.5 rounded-full shadow-xl transition-colors duration-300 border border-white/10"
                aria-label="Book a free call"
            >
                <div className="relative">
                    <Phone size={18} />
                    {/* Pulsing ring */}
                    {!expanded && (
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-teal"></span>
                        </span>
                    )}
                </div>
                <span className="text-sm tracking-wide">
                    {expanded ? <X size={16} /> : 'Book a Free Call'}
                </span>
            </motion.button>
        </div>
    );
};

export default FloatingCallButton;
