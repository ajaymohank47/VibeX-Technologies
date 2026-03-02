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

                            <div className="flex flex-wrap gap-4">
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
                    <div className="flex gap-3 mt-10">
                        {carouselData.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`h-2 transition-all duration-500 rounded-full ${currentSlide === idx ? 'w-12 bg-accent-teal' : 'w-4 bg-white/30 hover:bg-white/50'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* Mobile-only quick stats (visible on small screens instead of the 3D graphic) */}
                    <div className="grid grid-cols-2 gap-3 mt-10 lg:hidden">
                        {[
                            { value: '15+', label: 'Apps Deployed' },
                            { value: '3+', label: 'Years Experience' },
                            { value: '20+', label: 'Expert Devs' },
                            { value: '24/7', label: 'Global Support' },
                        ].map((s, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-center">
                                <div className="text-white font-heading font-black text-xl">{s.value}</div>
                                <div className="text-slate-300 text-xs font-medium mt-0.5">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Abstract Geometric Grid / Connecting Dots */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="relative hidden lg:flex items-center justify-center h-full"
                >
                    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                        {/* Glow Behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-teal/5 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/3 w-64 h-64 bg-[#002244]/40 rounded-full blur-[60px] pointer-events-none" />

                        {/* SVG Grid Connections */}
                        <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" viewBox="0 0 500 500">
                            {/* Static Lines */}
                            <path d="M 150 150 L 350 150 L 400 300 L 250 400 L 100 300 Z" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                            <path d="M 250 250 L 150 150 M 250 250 L 350 150 M 250 250 L 400 300 M 250 250 L 250 400 M 250 250 L 100 300" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

                            {/* Animated Glowing Data Lines */}
                            {/* Path 1: Client to Core to DB */}
                            <motion.path
                                d="M 100 300 L 250 250 L 350 150"
                                fill="none"
                                stroke="#14b8a6"
                                strokeWidth="2"
                                strokeDasharray="15 350"
                                animate={{ strokeDashoffset: [0, -365] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                style={{ filter: 'drop-shadow(0 0 5px rgba(20,184,166,0.8))' }}
                            />
                            {/* Path 2: Analytics to Core to Frontend */}
                            <motion.path
                                d="M 400 300 L 250 250 L 150 150"
                                fill="none"
                                stroke="#f97316"
                                strokeWidth="2"
                                strokeDasharray="15 350"
                                animate={{ strokeDashoffset: [0, -365] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                                style={{ filter: 'drop-shadow(0 0 5px rgba(249,115,22,0.8))' }}
                            />
                            {/* Path 3: Security to Core */}
                            <motion.path
                                d="M 250 400 L 250 250 L 350 150"
                                fill="none"
                                stroke="#14b8a6"
                                strokeWidth="1.5"
                                strokeDasharray="12 300"
                                animate={{ strokeDashoffset: [0, -312] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                                style={{ filter: 'drop-shadow(0 0 4px rgba(20,184,166,0.6))' }}
                            />
                            {/* Center Node Data Pulsing */}
                            <motion.circle
                                cx="250" cy="250" r="42"
                                fill="none" stroke="#14b8a6" strokeWidth="1"
                                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </svg>

                        {/* --- Nodes (HTML Overlays) --- */}

                        {/* Center Node (Cloud Core) */}
                        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
                            <motion.div
                                animate={{ y: [-4, 4, -4] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-20 h-20 rounded-2xl bg-corporate-navy-dark border border-white/20 shadow-[0_0_30px_rgba(20,184,166,0.15)] flex items-center justify-center relative backdrop-blur-md"
                            >
                                <Cloud size={32} className="text-accent-teal" />
                                <div className="absolute -bottom-7 text-[10px] text-slate-300 font-mono tracking-widest uppercase whitespace-nowrap">Cloud Core</div>
                            </motion.div>
                        </div>

                        {/* Top Left (Frontend) */}
                        <div className="absolute top-[30%] left-[30%] -translate-x-1/2 -translate-y-1/2 z-10">
                            <motion.div
                                animate={{ y: [4, -4, 4] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                                className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 shadow-lg flex items-center justify-center relative backdrop-blur-md"
                            >
                                <Code size={20} className="text-white" />
                                <div className="absolute -top-6 text-[10px] text-slate-400 font-mono uppercase whitespace-nowrap">Client Apps</div>
                            </motion.div>
                        </div>

                        {/* Top Right (Database) */}
                        <div className="absolute top-[30%] left-[70%] -translate-x-1/2 -translate-y-1/2 z-10">
                            <motion.div
                                animate={{ y: [-3, 3, -3] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                                className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 shadow-lg flex items-center justify-center relative backdrop-blur-md"
                            >
                                <Database size={20} className="text-slate-300" />
                                <div className="absolute -top-6 text-[10px] text-slate-400 font-mono uppercase whitespace-nowrap">Global DB</div>
                            </motion.div>
                        </div>

                        {/* Bottom Left (Mobile/Client) */}
                        <div className="absolute top-[60%] left-[20%] -translate-x-1/2 -translate-y-1/2 z-10">
                            <motion.div
                                animate={{ y: [3, -3, 3] }}
                                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 shadow-lg flex items-center justify-center relative backdrop-blur-md"
                            >
                                <Terminal size={24} className="text-accent-orange" />
                                <div className="absolute -bottom-6 text-[10px] text-slate-400 font-mono uppercase whitespace-nowrap">Edge Nodes</div>
                            </motion.div>
                        </div>

                        {/* Bottom Right (Server/Analytics) */}
                        <div className="absolute top-[60%] left-[80%] -translate-x-1/2 -translate-y-1/2 z-10">
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="w-14 h-14 rounded-xl bg-corporate-navy-dark border border-accent-teal/30 shadow-[0_0_15px_rgba(20,184,166,0.15)] flex items-center justify-center relative backdrop-blur-md"
                            >
                                <div className="w-4 h-4 rounded-full bg-accent-teal animate-pulse" />
                                <div className="absolute -bottom-6 text-[10px] text-accent-teal font-mono uppercase whitespace-nowrap">Processing</div>
                            </motion.div>
                        </div>

                        {/* Bottom Center (Security) */}
                        <div className="absolute top-[80%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
                            <motion.div
                                animate={{ y: [-2, 2, -2] }}
                                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 shadow-lg flex items-center justify-center relative backdrop-blur-md"
                            >
                                <ShieldCheck size={18} className="text-slate-400" />
                            </motion.div>
                        </div>

                        {/* Floating Metric Badge */}
                        <motion.div
                            animate={{ y: [-5, 5, -5], opacity: [0.9, 1, 0.9] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute top-[18%] left-[80%] bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg flex items-center gap-2 shadow-xl whitespace-nowrap z-30"
                        >
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                            <span className="text-white text-xs font-mono font-bold tracking-wider">Systems Online</span>
                        </motion.div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
