import React from 'react';
import { motion } from 'framer-motion';
import { Search, Code2, ShieldCheck, Rocket, GitBranch, Terminal } from 'lucide-react';

const buildSteps = [
    {
        number: "01",
        title: "Discovery & Architecture Blueprinting",
        desc: "We start by deeply understanding your business goals and technical constraints.",
        icon: Search,
        details: [
            "Comprehensive requirements gathering",
            "Technical feasibility assessment",
            "Scalable system architecture design",
            "Technology stack selection"
        ]
    },
    {
        number: "02",
        title: "Agile Development Sprints",
        desc: "Transforming architectures into reliable, high-performing code through iterative cycles.",
        icon: Code2,
        details: [
            "Two-week agile sprint methodologies",
            "Daily standups and client reporting",
            "Component-driven UI development",
            "Robust API & backend integration"
        ]
    },
    {
        number: "03",
        title: "Continuous Integration & Testing",
        desc: "Automated pipelines ensuring that every commit meets our enterprise standards.",
        icon: GitBranch,
        details: [
            "Automated unit & integration testing",
            "CI/CD pipeline configuration",
            "Code quality and linting checks",
            "Peer code review workflows"
        ]
    },
    {
        number: "04",
        title: "Security & QA Assurance",
        desc: "Rigorous quality checks prior to deployment to guarantee zero-downtime releases.",
        icon: ShieldCheck,
        details: [
            "Vulnerability and penetration testing",
            "Load balancing and stress tests",
            "Cross-browser & device compatibility",
            "User acceptance testing (UAT)"
        ]
    },
    {
        number: "05",
        title: "Deployment & Scaling",
        desc: "Seamless rollout to production and ongoing monitoring for optimal performance.",
        icon: Rocket,
        details: [
            "Zero-downtime production deployment",
            "Cloud infrastructure provisioning",
            "Database migration management",
            "Real-time performance metrics"
        ]
    },
    {
        number: "06",
        title: "Maintenance & Evolution",
        desc: "Providing long-term support to adapt and grow your software solutions.",
        icon: Terminal,
        details: [
            "24/7 technical support and SLA",
            "Regular dependency security updates",
            "Feature enhancements & upgrades",
            "Proactive system health analytics"
        ]
    }
];

const Process = ({ isPage = false }) => {
    const HeadingTag = isPage ? 'h1' : 'h2';
    return (
        <section className="py-24 bg-slate-50 text-corporate-navy relative overflow-hidden" id="process">

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-slate-200/50 to-transparent -skew-x-12 transform origin-top-right -z-10 blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-accent-teal/10 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <span className="text-accent-teal font-bold tracking-wider uppercase text-sm mb-4 block flex items-center justify-center gap-2">
                        <Terminal size={16} /> Engineering Process
                    </span>
                    <HeadingTag className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 tracking-tight leading-tight">
                        How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-blue-600">Build</span>
                    </HeadingTag>
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                        A transparent, robust, and scalable engineering lifecycle engineered to mitigate risk, accelerate delivery, and ensure enterprise-grade quality from day one.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {buildSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-accent-teal/30 transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Step Number Background */}
                            <span className="absolute top-4 right-4 text-7xl font-black text-slate-100 select-none pointer-events-none group-hover:text-accent-teal/5 transition-colors">
                                {step.number}
                            </span>

                            <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-accent-teal mb-6 group-hover:scale-110 group-hover:bg-accent-teal group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md relative z-10">
                                <step.icon size={28} />
                            </div>

                            <h3 className="text-2xl font-heading font-bold mb-4 pr-10 text-corporate-navy relative z-10">{step.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium relative z-10">
                                {step.desc}
                            </p>

                            <div className="w-full h-[1px] bg-slate-200 mb-6 group-hover:bg-accent-teal/20 transition-colors relative z-10"></div>

                            <ul className="space-y-3 relative z-10">
                                {step.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium group-hover:text-corporate-navy transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-1.5 shrink-0 opacity-80 group-hover:opacity-100 shadow-[0_0_8px_rgba(32,201,151,0.4)]"></div>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
