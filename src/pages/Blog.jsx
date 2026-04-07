import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Smartphone, Shield } from 'lucide-react';
import SEO from '../components/utils/SEO';
import Layout from '../components/layout/Layout';

const blogPosts = [
    {
        slug: '/blog/campus-buddy-app',
        category: 'Educational Tech',
        categoryColor: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20',
        icon: <Smartphone size={16} />,
        title: 'Building Campus Buddy: A Cross-Platform Mobile Solution for Smart Education',
        excerpt: 'How VibeX Technologies engineered a React Native + Java mobile app to digitize student form management, event registrations, and real-time attendance tracking across iOS and Android.',
        date: 'March 2025',
        readTime: '6 min read',
        tags: ['React Native', 'Java', 'Supabase', 'FCM'],
        gradient: 'from-corporate-navy to-corporate-navy-dark',
        iconBg: 'bg-accent-teal/20',
        accentLine: 'bg-accent-teal',
    },
    {
        slug: '/blog/xcrypt-payment-gateway',
        category: 'FinTech · Blockchain',
        categoryColor: 'bg-accent-orange/10 text-accent-orange border-accent-orange/20',
        icon: <Shield size={16} />,
        title: 'Xcrypt: Engineering a Secure Cryptocurrency Payment Gateway from the Ground Up',
        excerpt: 'A deep dive into how we built Xcrypt — a non-custodial crypto payment platform using Solidity smart contracts and React, featuring QR-code transactions and on-chain immutable settlement.',
        date: 'February 2025',
        readTime: '7 min read',
        tags: ['Solidity', 'React', 'Ethereum', 'Web3'],
        gradient: 'from-[#001A38] to-[#0F4C5C]',
        iconBg: 'bg-accent-orange/20',
        accentLine: 'bg-accent-orange',
    },
];

const Blog = () => {
    return (
        <Layout>
            <SEO path="/blog" />

            {/* Page Header */}
            <div className="bg-slate-50 border-b border-slate-100 py-20">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <p className="text-accent-teal font-semibold text-sm uppercase tracking-widest mb-4 font-heading">Our Insights</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-corporate-navy font-heading tracking-tight mb-5">
                        Ideas, Deep Dives & Engineering Stories
                    </h1>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        We write about the projects we build, the engineering decisions we make, and the lessons we learn along the way.
                    </p>
                </div>
            </div>

            {/* Blog Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {blogPosts.map((post, i) => (
                            <Link
                                key={i}
                                to={post.slug}
                                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                            >
                                {/* Card gradient header */}
                                <div className={`h-40 bg-gradient-to-br ${post.gradient} relative flex items-end p-6 overflow-hidden`}>
                                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                                    <span className={`inline-flex items-center gap-2 text-xs font-semibold border px-3 py-1.5 rounded-full relative z-10 ${post.categoryColor}`}>
                                        {post.icon}
                                        {post.category}
                                    </span>
                                </div>

                                {/* Accent line */}
                                <div className={`h-0.5 ${post.accentLine}`} />

                                {/* Content */}
                                <div className="p-7 flex flex-col flex-grow">
                                    <h2 className="text-lg font-bold text-corporate-navy font-heading leading-snug mb-3 group-hover:text-accent-teal transition-colors duration-200">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {post.tags.map((tag, j) => (
                                            <span key={j} className="bg-slate-100 text-slate-500 text-xs px-2.5 py-1 rounded-md font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                                        <div className="flex items-center gap-4 text-slate-400 text-xs">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={12} />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Clock size={12} />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <span className="inline-flex items-center gap-1 text-accent-teal text-xs font-semibold group-hover:gap-2 transition-all duration-200">
                                            Read more <ArrowRight size={12} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-14 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-slate-500 text-sm mb-4">More articles coming soon. Have a project idea?</p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-corporate-navy text-white font-semibold px-6 py-3 rounded-lg hover:bg-corporate-navy-light transition-colors duration-200 text-sm"
                    >
                        Start a conversation <ArrowRight size={14} />
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default Blog;
