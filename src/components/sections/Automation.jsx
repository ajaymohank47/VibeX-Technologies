import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Network, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Automation = () => {
    const features = [
        {
            icon: Bot,
            title: "RPA Integration",
            desc: "Deploy software bots to execute high-volume, rule-based tasks with 100% accuracy, freeing human capital for strategic initiatives."
        },
        {
            icon: Network,
            title: "Process Orchestration",
            desc: "Implement dynamic workflows and decisioning engines directly into your operational pipelines to anticipate market changes."
        },
        {
            icon: Zap,
            title: "API Ecosystems",
            desc: "Seamlessly connect disparate legacy systems, SaaS platforms, and custom applications into a unified, automated architecture."
        }
    ];

    return (
        <section className="py-24 relative bg-corporate-navy overflow-hidden" id="automation">
            {/* Tech grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-1"
                    >
                        <span className="text-accent-teal font-bold tracking-wider uppercase text-sm mb-4 block">Intelligent Automation</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight text-white tracking-tight">
                            Hyper-Automate Your Enterprise
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            We design and implement autonomous systems that drastically reduce operational overhead. By combining advanced scripting, RPA, and seamless integrations, we build infrastructures that run faster, smarter, and continuous.
                        </p>

                        <ul className="space-y-5 mb-10">
                            {[
                                "Reduce manual processing costs by up to 75%",
                                "Create zero-touch administrative workflows",
                                "Enhance cross-departmental data synchronization",
                                "Scale operations infinitely without proportional headcount"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-white font-medium">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-accent-orange shrink-0 border border-white/20">
                                        <ArrowRight size={16} strokeWidth={2.5} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Button variant="accent" className="group py-4 px-8" to="/services">
                            Explore Automation Strategies
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>

                    {/* Visual/Cards Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-2"
                    >
                        <div className="flex flex-col gap-6 relative">
                            {/* Connection lines running behind items */}
                            <div className="absolute left-[39px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-accent-teal via-accent-teal/20 to-transparent -z-10" />

                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (idx * 0.2) }}
                                    className="flex items-start gap-6 bg-corporate-navy-dark p-6 rounded-xl border border-slate-700 hover:border-accent-teal shadow-xl transition-all"
                                >
                                    <div className="w-14 h-14 rounded-lg bg-corporate-navy border border-slate-600 flex items-center justify-center text-accent-teal shrink-0 shadow-inner">
                                        <feature.icon size={26} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-heading font-bold text-xl mb-2">{feature.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Automation;
