import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

const Contact = () => {
    const [status, setStatus] = useState(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        setStatus("sending");
        const formData = new FormData(event.target);

        formData.append("access_key", "e451a4d4-e17b-47bc-8663-6276e00f9f22");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            setStatus("success");
            event.target.reset();
        } else {
            setStatus("error");
        }
    };

    return (
        <section className="py-24 bg-white relative" id="contact">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-accent-orange font-bold tracking-wider uppercase text-sm mb-4 block">Global Reach</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-corporate-navy tracking-tight">
                        Initiate Your Transformation
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Connect with our dedicated development and support team to discuss your technological requirements.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">

                    {/* Contact Information Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 flex flex-col gap-6"
                    >
                        <div className="bg-corporate-navy p-8 md:p-10 rounded-xl text-white shadow-xl h-full flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/20 rounded-full blur-[80px] -z-0"></div>

                            <h3 className="text-2xl font-heading font-bold mb-8 relative z-10">Direct Channels</h3>

                            <div className="space-y-8 relative z-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center border border-white/20 shrink-0">
                                        <MapPin className="text-accent-teal" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">Corporate Headquarters</h4>
                                        <p className="text-slate-300 text-sm">Mumbai, Maharashtra<br />India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center border border-white/20 shrink-0">
                                        <Phone className="text-accent-orange" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">Global Support line</h4>
                                        <p className="text-slate-300 text-sm">+91 9004575835<br />Mon-Fri, 9am - 6pm EST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center border border-white/20 shrink-0">
                                        <Mail className="text-accent-teal" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">General Inquiries</h4>
                                        <p className="text-slate-300 text-sm">vibextechnologies.business@gmail.com<br />technologiesvibex@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <form onSubmit={onSubmit} className="bg-surface-grey p-8 md:p-10 rounded-xl border border-border-grey shadow-md flex flex-col gap-6 h-full justify-center">
                            <h3 className="text-2xl font-heading font-bold text-corporate-navy mb-2">Request Development Support</h3>
                            <p className="text-slate-500 text-sm mb-4">A solutions engineer will respond within 24 hours.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-corporate-navy uppercase tracking-wider">First Name</label>
                                    <input
                                        type="text"
                                        name="First Name"
                                        required
                                        className="w-full bg-white border border-border-grey rounded px-4 py-3 text-slate-900 focus:outline-none focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20 transition-all font-medium"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-corporate-navy uppercase tracking-wider">Last Name</label>
                                    <input
                                        type="text"
                                        name="Last Name"
                                        required
                                        className="w-full bg-white border border-border-grey rounded px-4 py-3 text-slate-900 focus:outline-none focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20 transition-all font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-corporate-navy uppercase tracking-wider">Corporate Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-white border border-border-grey rounded px-4 py-3 text-slate-900 focus:outline-none focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20 transition-all font-medium"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-corporate-navy uppercase tracking-wider">Department / Inquiry Type</label>
                                <select name="Department" required className="w-full bg-white border border-border-grey rounded px-4 py-3 text-slate-900 focus:outline-none focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20 transition-all font-medium appearance-none">
                                    <option value="sales">Sales & Solutions</option>
                                    <option value="support">Technical Support</option>
                                    <option value="press">Press & Media</option>
                                    <option value="other">Other / General</option>
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-corporate-navy uppercase tracking-wider">Project Details</label>
                                <textarea
                                    name="Project Details"
                                    rows="3"
                                    required
                                    className="w-full bg-white border border-border-grey rounded px-4 py-3 text-slate-900 focus:outline-none focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20 transition-all font-medium resize-none"
                                ></textarea>
                            </div>

                            <Button
                                variant="accent"
                                className={`w-full mt-4 group ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                disabled={status === 'sending'}
                                type="submit"
                            >
                                {status === 'sending' ? 'Sending...' : 'Submit Request'}
                                {status !== 'sending' && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                            </Button>

                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-3 bg-green-50 text-green-700 text-sm font-medium rounded flex items-center gap-2 mt-2"
                                >
                                    <CheckCircle2 size={16} /> Request submitted successfully. We will be in touch!
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <div className="p-3 bg-red-50 text-red-700 text-sm font-medium rounded mt-2">
                                    Something went wrong. Please try again later.
                                </div>
                            )}

                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
