import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Monitor, Smartphone, Cloud, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import Logo from '../../assets/Logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
            if (window.scrollY > 10) setMegaMenuOpen(false); // Close mega menu on scroll
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const topBarLinks = [
        { name: 'Careers', path: '/careers' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
        { name: 'Team', path: '/leadership' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 font-sans ${scrolled ? 'bg-white shadow-lg' : 'bg-white border-b border-border-grey'}`}>

            {/* Top Utility Bar (hidden on mobile) */}
            <div className={`hidden lg:flex bg-corporate-navy text-white py-1.5 px-8 justify-end text-xs font-semibold transition-all duration-300 ${scrolled ? 'max-h-0 py-0 overflow-hidden' : 'max-h-10'}`}>
                <div className="flex gap-6 items-center">
                    {topBarLinks.map(link => (
                        <Link key={link.name} to={link.path} className="hover:text-accent-teal-light transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                {/* Logo + Brand Name */}
                <Link to="/" className="flex items-center gap-3 group">
                    <img src={Logo} alt="VibeX Logo" className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
                    <div className="hidden sm:block">
                        <div className="font-heading font-black text-corporate-navy text-lg leading-none tracking-tight">VibeX</div>
                        <div className="text-accent-teal text-[10px] font-bold tracking-[0.2em] uppercase leading-none mt-0.5">Technologies</div>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8 font-semibold text-corporate-navy">
                    <Link to="/" className="relative hover:text-accent-teal transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent-teal after:transition-all hover:after:w-full">Home</Link>
                    <Link to="/about" className="relative hover:text-accent-teal transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent-teal after:transition-all hover:after:w-full">About Us</Link>

                    {/* Mega Menu Trigger */}
                    <div
                        className="relative flex items-center gap-1 cursor-pointer hover:text-accent-teal transition-colors py-2"
                        onMouseEnter={() => setMegaMenuOpen(true)}
                        onMouseLeave={() => setMegaMenuOpen(false)}
                    >
                        Services <ChevronDown size={16} className={`transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} />

                        {/* Mega Menu Dropdown */}
                        <AnimatePresence>
                            {megaMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white shadow-2xl border border-border-grey rounded-b-lg overflow-hidden flex cursor-default"
                                >
                                    <div className="flex-1 p-8 bg-surface-grey">
                                        <h3 className="font-heading font-bold text-lg mb-4 text-corporate-navy border-b border-border-grey pb-2">Development Services</h3>
                                        <ul className="space-y-3 font-medium text-sm text-slate-600">
                                            <li><Link to="/services" className="hover:text-accent-teal flex items-center gap-2"><Monitor size={16} /> Web Apps &amp; APIs</Link></li>
                                            <li><Link to="/services" className="hover:text-accent-teal flex items-center gap-2"><Smartphone size={16} /> Native Mobile Apps</Link></li>
                                            <li><Link to="/services" className="hover:text-accent-teal flex items-center gap-2"><Cloud size={16} /> Cloud Architecture</Link></li>
                                            <li><Link to="/services" className="hover:text-accent-teal flex items-center gap-2"><ShieldCheck size={16} /> Security &amp; Audits</Link></li>
                                        </ul>
                                    </div>
                                    <div className="flex-1 p-8">
                                        <h3 className="font-heading font-bold text-lg mb-4 text-corporate-navy border-b border-border-grey pb-2">Explore More</h3>
                                        <ul className="space-y-3 font-medium text-sm text-slate-600">
                                            <li><Link to="/automation" className="hover:text-accent-teal">Workflow Automation</Link></li>
                                            <li><Link to="/portfolio" className="hover:text-accent-teal">Our Work</Link></li>
                                            <li><Link to="/process" className="hover:text-accent-teal">How We Build</Link></li>
                                            <li><Link to="/pricing" className="hover:text-accent-teal">Pricing</Link></li>
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link to="/portfolio" className="relative hover:text-accent-teal transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent-teal after:transition-all hover:after:w-full">Our Work</Link>

                    <Button variant="accent" className="px-6 py-2" to="/contact">
                        Start a Project
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button className="lg:hidden text-corporate-navy" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-border-grey overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-4 space-y-4 font-semibold text-corporate-navy">
                            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                            <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
                            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
                            <Link to="/portfolio" onClick={() => setIsOpen(false)}>Our Work</Link>
                            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                            <hr className="border-border-grey" />
                            <div className="flex flex-col space-y-3 text-sm font-medium text-slate-500">
                                {topBarLinks.map(link => (
                                    <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="hover:text-accent-teal transition-colors">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                            <Button variant="accent" className="w-full mt-4" to="/contact" onClick={() => setIsOpen(false)}>
                                Start a Project
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
