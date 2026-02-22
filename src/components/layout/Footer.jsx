import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Youtube } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../../assets/Logo.png';

const Footer = () => {
    return (
        <footer className="bg-corporate-navy-dark text-slate-300 font-sans pt-20 pb-10 border-t-4 border-accent-teal">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Company Info & Social Cluster */}
                    <div>
                        <Link to="/" className="text-3xl font-bold font-heading text-white tracking-tight mb-6 flex items-center gap-2">
                            <img src={Logo} alt="VibeX Logo" className="h-10 w-auto" />
                            VibeX
                        </Link>
                        <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                            Empowering global enterprises with scalable software development and dedicated IT support.
                        </p>
                        <div className="flex space-x-3">
                            {[Linkedin, Twitter, Facebook, Youtube].map((Icon, index) => (
                                <a key={index} href="#" className="w-10 h-10 rounded bg-corporate-navy flex items-center justify-center hover:bg-accent-teal hover:text-white transition-colors text-slate-300 shadow-sm border border-slate-700 hover:border-accent-teal">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Solutions / Quick Links */}
                    <div>
                        <h4 className="text-white font-heading font-semibold mb-6 uppercase tracking-wider text-sm">Capabilities</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/services" className="hover:text-accent-teal-light transition-colors">Development & Engineering</Link></li>
                            <li><Link to="/services" className="hover:text-accent-teal-light transition-colors">Design & Product Innovation</Link></li>
                            <li><Link to="/services" className="hover:text-accent-teal-light transition-colors">Testing, Deployment & Maintenance</Link></li>
                            <li><Link to="/services" className="hover:text-accent-teal-light transition-colors">Strategy & Consulting</Link></li>
                            <li><Link to="/services" className="hover:text-accent-teal-light transition-colors">Marketing & Client Success</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-heading font-semibold mb-6 uppercase tracking-wider text-sm">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/about" className="hover:text-accent-teal-light transition-colors">About VibeX</Link></li>
                            <li><Link to="/leadership" className="hover:text-accent-teal-light transition-colors">Leadership Team</Link></li>
                            <li><Link to="/portfolio" className="hover:text-accent-teal-light transition-colors">Success Stories</Link></li>
                            <li><Link to="/careers" className="hover:text-accent-teal-light transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-accent-teal-light transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Connect / Newsletter */}
                    <div>
                        <h4 className="text-white font-heading font-semibold mb-6 uppercase tracking-wider text-sm">Stay Connected</h4>
                        <ul className="space-y-4 text-sm mb-6">
                            <li>
                                <a href="https://maps.google.com/?q=Mumbai,+Maharashtra,+India" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-accent-teal-light transition-colors group">
                                    <MapPin size={18} className="text-accent-teal shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                    <span>Mumbai, Maharashtra, India</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919004575835" className="flex items-center gap-3 hover:text-accent-teal-light transition-colors group">
                                    <Phone size={18} className="text-accent-teal shrink-0 group-hover:scale-110 transition-transform" />
                                    <span>+91 9004575835</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <Mail size={18} className="text-accent-teal shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                    <a href="mailto:vibextechnologies.business@gmail.com" className="hover:text-accent-teal-light transition-colors">
                                        vibextechnologies.business@gmail.com
                                    </a>
                                    <span className="text-slate-500 group-hover:text-slate-400 transition-colors">/</span>
                                    <a href="mailto:technologiesvibex@gmail.com" className="hover:text-accent-teal-light transition-colors">
                                        technologiesvibex@gmail.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs font-medium">
                    <p>© {new Date().getFullYear()} VibeX Technologies Inc. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
