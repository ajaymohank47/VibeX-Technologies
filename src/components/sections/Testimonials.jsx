import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Dr. Rais Mulla",
        role: "Head of department",
        company: "Educational Institution",
        review: "VibeX revolutionized our campus operations with the Campus Buddy app. Managing attendance and event registrations is now effortless.",
    },
    {
        name: "Vaibhav Bhaliya",
        role: "CTO",
        company: "FinTech Platform",
        review: "The Xcrypt Payment Gateway they engineered for us is incredibly robust. It gave our investors total confidence.",
    },
    {
        name: "Dillon Evans",
        role: "CEO",
        company: "JRE Services LLC",
        review: "Our commercial digital presence was completely transformed. VibeX delivered a highly responsive, modern website with flawless animations that perfectly captures our brand identity.",
    },
    {
        name: "Conroe Juanb",
        role: "Management",
        company: "MAQ Services",
        review: "We needed a modern, responsive website for our service sector. VibeX delivered an exceptional platform with a beautifully designed user interface that significantly improved our digital presence.",
    }
];

const Testimonials = () => {
    const [isPaused, setIsPaused] = useState(false);
    return (
        <section className="py-24 bg-surface-grey border-b border-border-grey overflow-hidden" id="testimonials">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-accent-teal font-bold tracking-wider uppercase text-sm mb-4 block">Executive Endorsements</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-corporate-navy tracking-tight">
                            Trusted by Industry Leaders
                        </h2>
                    </div>
                </div>

                <div className="overflow-hidden relative w-full flex">
                    {/* Gradient Masks for smooth fading on edges */}
                    <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-surface-grey to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-surface-grey to-transparent z-20 pointer-events-none" />

                    <motion.div
                        className="flex gap-8 py-4"
                        animate={isPaused ? {} : { x: ["0%", "-50%"] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {[...testimonials, ...testimonials].map((t, index) => (
                            <div
                                key={index}
                                className="w-[320px] md:w-[450px] shrink-0 bg-white p-8 md:p-10 rounded-xl border border-border-grey shadow-sm hover:shadow-xl hover:border-accent-teal transition-all duration-300 relative group flex flex-col"
                            >
                                <Quote className="absolute top-8 right-8 text-surface-grey group-hover:text-accent-teal/10 transition-colors" size={60} strokeWidth={1} />

                                <p className="text-slate-600 mb-10 leading-relaxed relative z-10 text-lg italic flex-grow">"{t.review}"</p>

                                <div className="flex items-center gap-4 border-t border-border-grey pt-6 mt-auto">
                                    <div className="w-14 h-14 rounded-full bg-corporate-navy flex items-center justify-center text-white font-bold font-heading text-xl shrink-0">
                                        {t.name.split(' ').map(n => n.charAt(0)).slice(0, 2).join('')}
                                    </div>
                                    <div>
                                        <h4 className="text-corporate-navy font-bold font-heading">{t.name}</h4>
                                        <p className="text-slate-500 text-sm font-medium">{t.role} | {t.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
