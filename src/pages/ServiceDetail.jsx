import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, Terminal, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/utils/SEO';
import Layout from '../components/layout/Layout';
import ContactSection from '../components/sections/Contact';
import { servicesData } from '../data/servicesData';
import NotFound from './NotFound';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = servicesData[slug];

    if (!service) {
        return <NotFound />;
    }

    const IconComponent = service.icon;

    return (
        <Layout>
            <SEO 
                title={service.title} 
                description={service.metaDescription || service.shortDesc} 
                path={`/services/${slug}`} 
            />

            {/* Premium Dynamic Hero Section */}
            <section className={`relative py-20 md:py-28 overflow-hidden text-white bg-gradient-to-br ${service.color || 'from-corporate-navy to-accent-teal'}`}>
                {/* Tech Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-60" />
                {/* Glowing Aura Effect */}
                <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-teal-light/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm text-slate-300 mb-8 font-medium">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} className="opacity-60" />
                        <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                        <ChevronRight size={14} className="opacity-60" />
                        <span className="text-white font-semibold">{service.title}</span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-accent-teal-light text-xs font-bold uppercase tracking-wider mb-6">
                            {service.category}
                        </span>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
                            <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center text-accent-teal-light shrink-0 backdrop-blur-sm">
                                <IconComponent size={36} strokeWidth={1.5} />
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight">
                                {service.title}
                            </h1>
                        </div>

                        <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-2xl">
                            {service.shortDesc}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Breadcrumb back CTA bar */}
            <div className="bg-surface-grey border-b border-border-grey py-4">
                <div className="container mx-auto px-6">
                    <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 hover:text-corporate-navy font-semibold text-sm transition-colors group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to All Capabilities
                    </Link>
                </div>
            </div>

            {/* Service Details Main Block */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-6xl mx-auto">
                        
                        {/* Left Side: Long Description & Features */}
                        <div className="lg:col-span-8 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-heading font-bold text-corporate-navy mb-6">
                                    Service Overview & Value
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line">
                                    {service.longDesc}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <h3 className="text-2xl font-heading font-bold text-corporate-navy mb-6 border-b border-slate-100 pb-3 flex items-center gap-2">
                                    <Terminal size={20} className="text-accent-teal" /> Key Deliverables & Features
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, idx) => (
                                        <div 
                                            key={idx} 
                                            className="p-5 bg-surface-grey border border-border-grey rounded-xl flex items-start gap-3 hover:border-accent-teal hover:shadow-md transition-all duration-300 group"
                                        >
                                            <CheckCircle2 size={18} className="text-accent-orange shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                            <span className="text-slate-700 text-sm font-medium leading-relaxed group-hover:text-corporate-navy transition-colors">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side: Stack & Use Cases Sidebars */}
                        <div className="lg:col-span-4 space-y-8">
                            {/* Tech Stack Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-corporate-navy-dark border border-slate-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-teal/10 rounded-full blur-2xl" />
                                <h3 className="text-lg font-heading font-bold mb-4 flex items-center gap-2 border-b border-slate-700 pb-2">
                                    <Cpu size={18} className="text-accent-teal-light" /> Tech Stack & Tools
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {service.techStack.map((tech, idx) => (
                                        <span 
                                            key={idx} 
                                            className="bg-white/10 border border-white/10 hover:border-accent-teal text-white/90 text-xs font-semibold font-mono px-3 py-1.5 rounded-lg hover:bg-accent-teal hover:text-white transition-all cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Use Cases Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-surface-grey border border-border-grey rounded-2xl p-6 shadow-sm"
                            >
                                <h3 className="text-lg font-heading font-bold text-corporate-navy mb-4 border-b border-border-grey pb-2">
                                    Ideal Applications
                                </h3>
                                <ul className="space-y-3.5">
                                    {service.useCases.map((useCase, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent-orange shrink-0" />
                                            <span>{useCase}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Context-aware Contact Form Block */}
            <div className="bg-slate-50 border-t border-border-grey relative">
                {/* Form header container */}
                <div className="container mx-auto px-6 pt-16 -mb-8 text-center max-w-3xl">
                    <span className="text-accent-teal font-bold tracking-wider uppercase text-sm mb-3 block">Get Started</span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-corporate-navy tracking-tight">
                        Request Support for {service.title}
                    </h2>
                    <p className="text-slate-500 text-sm mt-3">
                        Need advice, cost estimates, or ready to initiate scoping? Submit details below and our team will follow up.
                    </p>
                </div>
                
                {/* Reuse the custom Web3Forms Contact Section */}
                <ContactSection isPage={false} defaultService={service.title} hideHeader={true} />
            </div>
        </Layout>
    );
};

export default ServiceDetail;
