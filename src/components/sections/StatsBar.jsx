import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, BarChart3, ShieldCheck, Clock } from 'lucide-react';

const stats = [
    { icon: Globe2, value: '15+', label: 'Apps Deployed' },
    { icon: BarChart3, value: '100%', label: 'Client Retention' },
    { icon: ShieldCheck, value: '100%', label: 'Secure Baselines' },
    { icon: Clock, value: '24/7', label: 'Global Support' },
];

const StatsBar = () => {
    return (
        <section className="bg-corporate-navy py-8 border-y border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                            className="flex items-center gap-4 justify-center md:justify-start"
                        >
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent-teal shrink-0">
                                <stat.icon size={20} strokeWidth={1.5} />
                            </div>
                            <div>
                                <div className="text-white font-heading font-black text-2xl leading-none">{stat.value}</div>
                                <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mt-0.5">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBar;
