import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Globe2, Users2, ShieldCheck } from 'lucide-react';


const stats = [
    { icon: Globe2, value: "15+", label: "Apps Deployed" },
    { icon: BarChart3, value: "100%", label: "Uptime Guaranteed" },
    { icon: Users2, value: "20+", label: "Expert Developers" },
    { icon: ShieldCheck, value: "100%", label: "Secure Baselines" },
];

const About = () => {
    return (
        <section className="py-24 relative bg-white overflow-hidden" id="about">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Data Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="bg-surface-grey border border-border-grey rounded-xl p-8 flex flex-col items-center text-center hover:border-accent-teal hover:shadow-lg transition-all duration-300 group">
                                    <stat.icon size={32} strokeWidth={1.5} className="text-corporate-navy mb-4 group-hover:text-accent-teal transition-colors" />
                                    <h3 className="text-4xl font-heading font-black text-corporate-navy tracking-tighter mb-2">{stat.value}</h3>
                                    <p className="text-slate-500 font-medium text-sm uppercase tracking-wide">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-teal/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-orange/10 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:pl-8"
                    >
                        <span className="text-accent-orange font-bold tracking-wider uppercase text-sm mb-4 block">Who We Are</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-corporate-navy tracking-tight">
                            Engineers Building Digital Futures
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            VibeX Technologies is a premier software development agency dedicated to building high-performance web and mobile applications from the ground up.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed mb-10">
                            We act as your dedicated engineering arm. From architecting scalable databases and writing clean frontend code to managing cloud deployments, we deliver fully functional software products that perfectly match your technical requirements.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <div className="flex items-center gap-3 bg-corporate-navy text-white px-6 py-4 rounded-lg font-semibold shadow-md">
                                <span className="text-accent-teal font-black text-2xl">3+</span>
                                <span className="text-sm leading-tight">Years<br />Experience</span>
                            </div>
                            <div className="flex items-center gap-3 bg-surface-grey text-corporate-navy border border-border-grey px-6 py-4 rounded-lg font-semibold shadow-sm">
                                <span className="text-accent-orange font-black text-2xl">24/7</span>
                                <span className="text-sm leading-tight line-clamp-2">Global<br />Support</span>
                            </div>
                        </div>


                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
