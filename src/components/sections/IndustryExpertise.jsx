import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Smartphone, ShoppingBag, Activity, ArrowRight, ShieldCheck, Database, LayoutTemplate, Box } from 'lucide-react';
import Button from '../ui/Button';

const industries = [
    {
        id: 'saas',
        icon: Box,
        title: 'B2B SaaS Products',
        headline: 'Scalable Architectures for SaaS Founders',
        desc: 'We build multi-tenant architectures from the ground up. From secure authentication and role-based access control (RBAC) to complex billing integrations with Stripe.',
        features: ['Multi-Tenant Databases', 'Subscription & Billing APIs', 'Custom Admin Dashboards']
    },
    {
        id: 'fintech',
        icon: ShieldCheck,
        title: 'FinTech & Web3',
        headline: 'Secure, High-Performance Financial Apps',
        desc: 'Develop robust, compliant fintech platforms. We integrate bank-grade security, real-time ledger systems, and blockchain protocols to ensure secure and instant transactions.',
        features: ['Plaid & Stripe Integration', 'Smart Contracts & Web3', 'Real-time Trading Engines']
    },
    {
        id: 'ecommerce',
        icon: ShoppingBag,
        title: 'E-Commerce & Retail',
        headline: 'Headless Commerce & Custom Storefronts',
        desc: 'Break free from rigid templates. We build custom, headless e-commerce solutions combining Shopify APIs with ultra-fast Next.js or React frontends for maximum conversion.',
        features: ['Headless Shopify/Commerce Layer', 'Real-time Inventory Sync', 'Custom Checkout Flows']
    },
    {
        id: 'healthtech',
        icon: Activity,
        title: 'HealthTech',
        headline: 'HIPAA-Compliant Patient Portals',
        desc: 'Build secure, compliant applications for the healthcare space. We handle complex data compliance requirements, EHR integrations, and scalable video-streaming for telehealth.',
        features: ['HIPAA Compliant Infrastructure', 'EHR/EMR API Integrations', 'WebRTC Telehealth']
    }
];

const IndustryExpertise = () => {
    const [activeTab, setActiveTab] = useState(industries[0].id);

    const currentData = industries.find(ind => ind.id === activeTab);

    return (
        <section className="py-24 bg-surface-grey relative" id="expertise">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-accent-teal font-bold tracking-wider uppercase text-sm mb-4 block">Domain Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-corporate-navy tracking-tight">
                        Software Engineered for Your Market
                    </h2>
                    <p className="text-slate-600 text-lg">
                        We don't just write code; we architect custom software products that solve the complex engineering challenges specific to your vertical.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                    {/* Tabs Sidebar */}
                    <div className="lg:w-1/3 flex flex-col gap-2">
                        {industries.map((ind) => (
                            <button
                                key={ind.id}
                                onClick={() => setActiveTab(ind.id)}
                                className={`flex items-center gap-4 text-left p-5 rounded-lg border transition-all duration-300 ${activeTab === ind.id
                                    ? 'bg-white border-accent-teal shadow-md shadow-accent-teal/10 relative z-10'
                                    : 'bg-transparent border-transparent hover:bg-white/50 text-slate-500 hover:text-corporate-navy'
                                    }`}
                            >
                                <div className={`w-10 h-10 rounded shadow-sm flex items-center justify-center transition-colors ${activeTab === ind.id ? 'bg-accent-teal text-white' : 'bg-white border border-border-grey text-slate-400'
                                    }`}>
                                    <ind.icon size={20} />
                                </div>
                                <span className={`font-semibold ${activeTab === ind.id ? 'text-corporate-navy' : ''}`}>
                                    {ind.title}
                                </span>
                                {activeTab === ind.id && (
                                    <ArrowRight size={18} className="ml-auto text-accent-teal" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content Display */}
                    <div className="lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white rounded-xl border border-border-grey shadow-lg p-8 md:p-12 h-full flex flex-col justify-center"
                            >
                                <div className="w-16 h-16 bg-surface-grey border border-border-grey rounded-xl flex items-center justify-center text-accent-teal mb-8">
                                    <currentData.icon size={32} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-3xl font-heading font-bold text-corporate-navy mb-4">
                                    {currentData.headline}
                                </h3>

                                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                    {currentData.desc}
                                </p>

                                <div className="mb-10">
                                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-border-grey pb-2">Technical Focus</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {currentData.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                                                <div className="w-2 h-2 rounded-full bg-accent-orange" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto pt-6">
                                    <Button variant="outline" className="text-accent-teal border-accent-teal hover:bg-accent-teal hover:text-white" to="/portfolio">
                                        View {currentData.title} Case Studies
                                    </Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default IndustryExpertise;
