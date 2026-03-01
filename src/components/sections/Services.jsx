import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Monitor, Smartphone, PenTool, Code, Server, Database,
    Zap, Bug, Rocket, ClipboardList, Calendar, RefreshCw,
    Wrench, FileText, HardDrive, Megaphone, FileSpreadsheet, Headset, Lightbulb
} from 'lucide-react';

const groupedServices = [
    {
        category: "Development & Engineering",
        items: [
            { icon: Monitor, title: "Website Development", desc: "Custom, responsive, and high-performance websites tailored to your business needs." },
            { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile applications for iOS and Android devices." },
            { icon: Code, title: "Frontend Development", desc: "Interactive and dynamic user interfaces built with modern web frameworks." },
            { icon: Server, title: "Backend Development", desc: "Robust, scalable, and secure server-side architectures and APIs." },
            { icon: Database, title: "Database Setup & Management", desc: "Efficient data modeling, storage solutions, and seamless database administration." },
            { icon: Zap, title: "Automation Creation", desc: "Streamlining workflows through intelligent and efficient automated processes." },
        ]
    },
    {
        category: "Design & Product Innovation",
        items: [
            { icon: PenTool, title: "UI / UX Design", desc: "Intuitive, engaging, and user-centric interfaces designed for optimal experiences." },
            { icon: Lightbulb, title: "Idea & Product Development", desc: "Transforming innovative ideas into market-ready digital solutions." },
        ]
    },
    {
        category: "Testing, Deployment & Maintenance",
        items: [
            { icon: Bug, title: "Testing & Bug Fixing", desc: "Comprehensive quality assurance to deliver flawless and reliable software." },
            { icon: Rocket, title: "App / Website Deployment", desc: "Smooth and secure launch of your digital products to the live environment." },
            { icon: HardDrive, title: "Hosting & Server Management", desc: "Reliable cloud and on-premise solutions for high availability." },
            { icon: RefreshCw, title: "Feature Updates", desc: "Continuous enhancement and integration of new functionalities." },
            { icon: Wrench, title: "Maintenance & Support", desc: "Ongoing technical assistance to ensure your systems run flawlessly." },
        ]
    },
    {
        category: "Strategy & Consulting",
        items: [
            { icon: ClipboardList, title: "Requirements Gathering", desc: "In-depth analysis to align project goals with your strategic vision." },
            { icon: Calendar, title: "Project Planning", desc: "Structured roadmaps and agile methodologies for timely delivery." },
            { icon: FileText, title: "Documentation", desc: "Clear, comprehensive user manuals and technical architecture guides." },
            { icon: FileSpreadsheet, title: "Proposal & Pricing", desc: "Transparent, customized project scopes and flexible pricing models." },
        ]
    },
    {
        category: "Marketing & Client Success",
        items: [
            { icon: Megaphone, title: "Marketing & Acquisition", desc: "Strategic digital campaigns to drive growth and expand your client base." },
            { icon: Headset, title: "Client Support", desc: "Dedicated, round-the-clock assistance for all your inquiries and needs." },
        ]
    }
];

const Services = () => {
    return (
        <section className="py-24 bg-white relative" id="services">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-accent-orange font-bold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-corporate-navy tracking-tight">
                            What We Build
                        </h2>
                        <p className="text-slate-600 text-lg">
                            End-to-end software development services tailored to your scalable business needs.
                        </p>
                    </div>
                </div>

                <div className="space-y-24">
                    {groupedServices.map((group, groupIndex) => (
                        <div key={groupIndex}>
                            <h3 className="text-3xl font-heading font-bold mb-10 text-corporate-navy border-b-2 border-slate-100 pb-4">
                                {group.category}
                            </h3>

                            {/* 4-column grid shifting to carousel/scroll on mobile */}
                            <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0 gap-6 snap-x scroll-smooth hide-scrollbar items-stretch">
                                {group.items.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        whileHover={{ y: -5 }}
                                        className="min-w-[85vw] md:min-w-0 bg-surface-grey p-8 border-t-4 border-accent-teal shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col snap-center h-auto"
                                    >
                                        <div className="w-14 h-14 bg-white rounded-md flex items-center justify-center text-corporate-navy mb-6 group-hover:bg-corporate-navy group-hover:text-white transition-colors duration-300 shadow-sm border border-border-grey">
                                            <service.icon size={28} strokeWidth={1.5} />
                                        </div>
                                        <h4 className="text-xl font-heading font-bold mb-4 text-corporate-navy tracking-tight">
                                            {service.title}
                                        </h4>
                                        <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                                            {service.desc}
                                        </p>

                                        <div className="mt-8 pt-4 border-t border-border-grey w-full">
                                            <Link to="/services" className="text-accent-teal font-semibold text-sm group-hover:text-accent-orange transition-colors flex items-center gap-2">
                                                Learn more <span className="text-lg leading-none">&rarr;</span>
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
};

export default Services;
