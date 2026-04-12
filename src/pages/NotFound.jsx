import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/utils/SEO';
import Layout from '../components/layout/Layout';

const NotFound = () => {
    return (
        <Layout>
            <SEO title="404 | Page Not Found" description="The page you are looking for does not exist." noIndex={true} />
            <section className="min-h-[80vh] flex items-center justify-center bg-white text-center px-6">
                <div className="max-w-lg mx-auto">
                    {/* 404 Visual */}
                    <div className="relative mb-10 inline-block">
                        <div className="text-[140px] md:text-[180px] font-heading font-black text-surface-grey leading-none select-none">
                            404
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-corporate-navy text-white px-6 py-3 rounded-xl shadow-xl">
                                <span className="font-heading font-bold text-lg tracking-tight">Page Not Found</span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-heading font-bold text-corporate-navy mb-4 tracking-tight">
                        Oops! This page doesn't exist.
                    </h1>
                    <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                        The page you're looking for may have been moved, deleted, or never existed. Let's get you back on track.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2 bg-corporate-navy text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-teal transition-colors duration-300 shadow-md"
                        >
                            <Home size={18} /> Go Home
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 border-2 border-corporate-navy text-corporate-navy font-bold px-8 py-4 rounded-lg hover:bg-corporate-navy hover:text-white transition-colors duration-300"
                        >
                            <ArrowLeft size={18} /> Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default NotFound;
