import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Campus Buddy App",
        client: "Educational Institution",
        metric: "Comprehensive Admin Tools",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop",
        desc: "Developed a cross-platform mobile application using React Native and Java to streamline student form management, event registrations, and attendance tracking.",
        link: "https://campusbuddy.online"
    },
    {
        title: "Xcrypt Payment Gateway",
        client: "FinTech Platform",
        metric: "Blockchain Integration",
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2670&auto=format&fit=crop",
        desc: "Engineered a secure cryptocurrency payment platform utilizing Solidity smart contracts and React. Features include QR-code generation for quick, immutable transactions."
    },
    {
        title: "MAQ Services Platform",
        client: "MAQ Services",
        metric: "Optimized Performance",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2670&auto=format&fit=crop",
        desc: "Designed and built a modern, responsive website for the service sector using React, HTML, CSS, and JavaScript. Features a responsive and modern user interface.",
        link: "https://maq-services.com"
    },
    {
        title: "JRE Commercial Web",
        client: "JRE Services LLC",
        metric: "Enhanced Digital Presence",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop",
        desc: "Developed a modern, responsive React website showcasing commercial construction services. Built with Vite, TailwindCSS, and seamless Framer Motion animations.",
        link: "https://jre-services.com"
    },
    {
        title: "DMCT Healthcare Portal",
        client: "Healthcare Trust Demo",
        metric: "1st Runner-Up Pitch",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
        desc: "Developed a dynamic MERN-stack healthcare website integrating Cloudinary for asset media. Built to demonstrate secure patient data management workflows.",
        link: "https://dmct.vercel.app/"
    },
    {
        title: "Sharath Enterprises",
        client: "AC & Refrigeration Supplier",
        metric: "4,993+ Products in Stock",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2670&auto=format&fit=crop",
        desc: "Designed and developed a clean, responsive web presence for an industrial spare parts distributor, delivering a polished brand identity and seamless user experience.",
        link: "https://www.sharathenterprises.in/"
    }
];

const Portfolio = ({ isPage = false }) => {
    const HeadingTag = isPage ? 'h1' : 'h2';
    return (
        <section className="py-24 bg-corporate-navy text-white" id="portfolio">
            <div className="container mx-auto px-6">

                <div className="flex flex-col justify-center items-center text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-accent-teal font-bold tracking-wider uppercase text-sm mb-4 block">Case Studies</span>
                    <HeadingTag className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
                        Success Stories
                    </HeadingTag>
                    <p className="text-slate-300 text-lg">
                        See how we've partnered with industry leaders to solve complex technological challenges and drive measurable ROI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-corporate-navy-dark rounded-xl overflow-hidden border border-slate-700 hover:border-accent-teal transition-all duration-500 shadow-xl"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy-dark to-transparent"></div>

                                {/* Metric Overlay */}
                                <div className="absolute bottom-4 left-4 bg-accent-orange text-white px-4 py-2 rounded-md font-bold text-sm shadow-lg">
                                    {project.metric}
                                </div>
                            </div>

                            <div className="p-8">
                                <span className="text-accent-teal text-xs font-bold tracking-wide uppercase mb-2 block">{project.client}</span>
                                <h3 className="text-2xl font-heading font-bold text-white mb-4">{project.title}</h3>
                                <p className="text-slate-400 mb-8 leading-relaxed text-sm">{project.desc}</p>

                                {project.link ? (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-orange transition-colors font-semibold flex items-center gap-2 text-sm uppercase tracking-wider group-hover:translate-x-1 duration-300">
                                        Visit Live <ArrowUpRight size={16} />
                                    </a>
                                ) : (
                                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-slate-400 text-xs font-semibold tracking-wider uppercase">
                                        Case Study Coming Soon
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
