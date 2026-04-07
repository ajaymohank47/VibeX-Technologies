import React from 'react';
import { Linkedin } from 'lucide-react';
import SEO from '../components/utils/SEO';
import Layout from '../components/layout/Layout';
import AjayImage from '../assets/Ajaymohan.webp';
import HarshitImage from '../assets/harshit.png';

const teamMembers = [
    {
        name: "Ajaymohan Kanojia",
        role: "Founder & CEO",
        image: AjayImage,
        bio: "Visionary leader driving VibeX's global strategy and enterprise solutions.",
        linkedin: "https://www.linkedin.com/in/ajaymohank",
    },
    {
        name: "Harshit Upadhyay",
        role: "Co-Founder & CTO",
        image: HarshitImage,
        bio: "Technology expert heading our scalable software architecture and engineering teams.",
        linkedin: "https://www.linkedin.com/in/harshit580/",
    },
    {
        name: "Shreyas Gaikwad",
        role: "Co-Founder & COO",
        image: "https://ui-avatars.com/api/?name=Shreyas+Gaikwad&background=020617&color=fff&size=200",
        bio: "Operations specialist ensuring seamless project delivery and client satisfaction.",
        linkedin: "https://www.linkedin.com/in/shreyas-gaikwad-a1b410319/",
    }
];

const Leadership = () => {
    return (
        <Layout>
            <SEO path="/leadership" />
            <div className="py-24 bg-slate-50 min-h-[70vh]">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-corporate-navy tracking-tight font-heading">
                            Our Leadership Team
                        </h1>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Meet the visionaries driving VibeX Technologies forward with innovation, expertise, and a commitment to excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                                <div className="h-40 bg-corporate-navy relative flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-accent-teal via-corporate-navy to-corporate-navy-dark"></div>
                                </div>
                                <div className="px-8 pb-8 text-center relative -mt-20">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="h-32 w-32 object-cover rounded-full border-4 border-white mb-6 mx-auto relative z-10 shadow-md group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <h3 className="text-2xl font-bold text-corporate-navy mb-2">{member.name}</h3>
                                    <p className="text-accent-teal font-medium mb-4">{member.role}</p>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-8">
                                        {member.bio}
                                    </p>
                                    <div className="flex justify-center">
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-accent-teal hover:text-white hover:border-accent-teal transition-colors duration-300"
                                            aria-label={`${member.name} LinkedIn`}
                                        >
                                            <Linkedin size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Leadership;
