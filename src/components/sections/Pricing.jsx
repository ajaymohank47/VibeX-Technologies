import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

const plans = [
    {
        name: "MVP Development",
        desc: "For startups and small teams needing a rapid launch.",
        price: "Scope-Based Pricing",
        priceNote: "Depends on project size & scalability",
        features: [
            "Custom Web & Mobile App MVP",
            "Frontend & Backend Architecture",
            "UI/UX Prototyping",
            "24x7 Technical Support",
        ],
        highlight: false,
    },
    {
        name: "Custom Software",
        desc: "For growing businesses needing robust, scalable platforms.",
        price: "Custom Quote",
        priceNote: "Based on project scope",
        features: [
            "Full-Stack Web & Mobile Builds",
            "Scalable Cloud Architecture",
            "Custom API Development",
            "Third-Party Integrations",
            "24x7 Support & Maintenance",
        ],
        highlight: true,
    },
    {
        name: "Dedicated Team",
        desc: "For enterprises needing ongoing, full-scale engineering.",
        price: "Custom Quote",
        priceNote: "Monthly retainer model",
        features: [
            "Dedicated Developer & QA Team",
            "Enterprise-Grade Security Setup",
            "Legacy System Migration",
            "Complex Data Engineering",
            "24x7 Priority SLA",
        ],
        highlight: false,
    },
];

const Pricing = () => {
    return (
        <section className="py-24 relative bg-surface-grey border-t border-border-grey" id="pricing">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-accent-teal font-bold tracking-wider uppercase text-sm mb-4 block">Development Models</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-corporate-navy tracking-tight">
                        Software Development Solutions
                    </h2>
                    <p className="text-slate-600 text-lg">
                        From rapid MVPs to dedicated engineering teams, we provide scalable development models tailored to your project's scope and velocity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col p-8 rounded-xl border ${plan.highlight ? 'border-accent-teal bg-white shadow-xl shadow-accent-teal/10 transform md:-translate-y-4 z-10' : 'border-border-grey bg-white shadow-sm hover:shadow-md transition-shadow'}`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent-teal text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md border border-teal-400">
                                    Recommended Model
                                </div>
                            )}

                            <h3 className="text-2xl font-heading font-bold text-corporate-navy mb-3">{plan.name}</h3>
                            <p className="text-slate-500 mb-8 text-sm leading-relaxed border-b border-border-grey pb-6">{plan.desc}</p>

                            <div className="mb-4">
                                <h4 className="text-sm font-bold text-corporate-navy uppercase tracking-wider mb-6">Included Capabilities:</h4>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                                        <CheckCircle2 size={18} className="text-accent-orange shrink-0 mt-0.5" />
                                        <span className="leading-snug">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <Button variant={plan.highlight ? 'primary' : 'outline'} className="w-full" to="/contact">
                                    Discuss Requirements
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
