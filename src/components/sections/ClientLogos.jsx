import React from 'react';
import { motion } from 'framer-motion';

const clients = [
    { name: 'Campus Buddy', initials: 'CB', color: 'bg-blue-600' },
    { name: 'MAQ Services', initials: 'MAQ', color: 'bg-slate-700' },
    { name: 'JRE Services LLC', initials: 'JRE', color: 'bg-orange-600' },
    { name: 'DMCT Healthcare', initials: 'DMC', color: 'bg-teal-600' },
    { name: 'Xcrypt Platform', initials: 'XCR', color: 'bg-indigo-600' },
    { name: 'Recipe Hub', initials: 'RH', color: 'bg-rose-600' },
];

const ClientLogos = () => {
    return (
        <section className="py-14 bg-white border-b border-border-grey">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10">
                    <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest">
                        Trusted by businesses across industries
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {clients.map((client, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08, duration: 0.4 }}
                            className="flex items-center gap-3 group cursor-default"
                        >
                            <div className={`w-10 h-10 rounded-xl ${client.color} flex items-center justify-center text-white text-xs font-black font-heading shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                {client.initials}
                            </div>
                            <span className="text-slate-500 font-semibold text-sm group-hover:text-corporate-navy transition-colors duration-300">
                                {client.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
