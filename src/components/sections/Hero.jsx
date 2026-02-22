import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { ChevronRight, Target, TrendingUp, Cpu, ShieldCheck, Code, Terminal, TerminalSquare, Database, Cloud } from 'lucide-react';

const carouselData = [
    {
        id: 1,
        headline: "We Build Robust Software",
        subhead: "Full-stack web and mobile development to bring your visionary ideas to life.",
        icon: <Code size={24} />,
        color: "from-corporate-navy to-corporate-navy-light"
    },
    {
        id: 2,
        headline: "Engineering Digital Products",
        subhead: "From scalable cloud backends to intuitive UIs, we code solutions that scale.",
        icon: <Terminal size={24} />,
        color: "from-corporate-navy-dark to-corporate-navy"
    },
    {
        id: 3,
        headline: "Your Dedicated Dev Team",
        subhead: "Expert engineers ready to build, launch, and maintain your custom applications.",
        icon: <TerminalSquare size={24} />,
        color: "from-corporate-navy-light to-[#002244]" // slight variant
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselData.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-corporate-navy text-white">

            {/* Carousel Background Overlay */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className={`absolute inset-0 bg-gradient-to-br ${carouselData[currentSlide].color} -z-20`}
                />
            </AnimatePresence>

            {/* Grid Pattern Overlay for Tech Vibe */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

                {/* Left: Content Carousel */}
                <div className="text-left py-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm mb-8 font-semibold uppercase tracking-wider backdrop-blur-sm">
                                {carouselData[currentSlide].icon}
                                Code. Build. Ship.
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 font-heading tracking-tight">
                                {carouselData[currentSlide].headline}
                            </h1>

                            <p className="text-xl md:text-2xl mb-10 text-slate-300 max-w-lg font-light leading-relaxed">
                                {carouselData[currentSlide].subhead}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="accent" className="group text-lg py-4 px-8" to="/contact">
                                    Start a Project
                                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-corporate-navy text-lg py-4 px-8" to="/portfolio">
                                    View Our Work
                                </Button>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Carousel Indicators */}
                    <div className="flex gap-3 mt-16">
                        {carouselData.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`h-2 transition-all duration-500 rounded-full ${currentSlide === idx ? 'w-12 bg-accent-teal' : 'w-4 bg-white/30 hover:bg-white/50'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Abstract 3D Tech Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="relative hidden lg:flex items-center justify-center h-full"
                >
                    {/* Abstract Composition mimicking Development Architecture */}
                    <div className="relative w-[500px] h-[500px]">
                        {/* Center Sphere/Core Server */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-white/10 bg-gradient-to-tr from-white/5 to-transparent backdrop-blur-xl shadow-[0_0_80px_rgba(20,184,166,0.15)] flex items-center justify-center"
                        >
                            <div className="w-32 h-32 rounded-full border border-accent-teal/40 relative flex items-center justify-center">
                                <Database size={40} className="text-accent-teal opacity-70" strokeWidth={1.5} />
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-corporate-navy rounded-full border-2 border-accent-teal" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-corporate-navy rounded-full border-2 border-accent-teal" />
                            </div>
                        </motion.div>

                        {/* Orbital Rings */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-full rounded-full border border-white/10 border-dashed"
                        >
                            <div className="absolute top-[14%] right-[14%] w-4 h-4 bg-accent-orange rounded-full shadow-[0_0_15px_#f97316]" />
                            <div className="absolute bottom-[14%] left-[14%] w-3 h-3 bg-accent-teal rounded-full shadow-[0_0_15px_#14b8a6]" />
                        </motion.div>

                        {/* Floating Tech Stack Node 1. Frontend */}
                        <motion.div
                            animate={{ y: [-15, 15, -15] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[15%] left-[0%] bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-xl flex items-center gap-4 shadow-2xl"
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-lg text-white flex items-center justify-center border border-white/10">
                                <Code size={24} />
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm tracking-wide">Frontend Client</div>
                                <div className="text-slate-400 text-xs font-mono mt-1">React / Mobile</div>
                            </div>
                        </motion.div>

                        {/* Floating Tech Stack Node 2. Backend */}
                        <motion.div
                            animate={{ y: [15, -15, 15] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[30%] right-[0%] bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-xl flex items-center gap-4 shadow-2xl"
                        >
                            <div className="w-12 h-12 bg-accent-orange/20 rounded-lg text-accent-orange flex items-center justify-center border border-accent-orange/20">
                                <TerminalSquare size={24} />
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm tracking-wide">API Gateway</div>
                                <div className="text-accent-orange-light text-xs font-mono mt-1">Node / Python</div>
                            </div>
                        </motion.div>

                        {/* Systems Status Indicator */}
                        <motion.div
                            animate={{ y: [-8, 8, -8] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute bottom-[15%] left-[15%] bg-black/40 backdrop-blur-md border border-white/10 px-4 py-3 rounded-full flex items-center gap-3 shadow-2xl"
                        >
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                            <span className="text-slate-300 text-xs font-mono font-semibold tracking-wider uppercase">Systems Online</span>
                        </motion.div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
