import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const MobileStickyCTA = () => {
    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
            className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-border-grey shadow-2xl px-4 py-3 flex gap-3"
        >
            <Link
                to="/contact"
                className="flex-1 bg-corporate-navy text-white text-sm font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-accent-teal transition-colors duration-300"
            >
                Start a Project <ArrowRight size={16} />
            </Link>
            <a
                href="tel:+919004575835"
                className="flex-none bg-surface-grey border border-border-grey text-corporate-navy text-sm font-bold py-3 px-4 rounded-lg hover:border-accent-teal hover:text-accent-teal transition-colors duration-300"
            >
                Call Us
            </a>
        </motion.div>
    );
};

export default MobileStickyCTA;
