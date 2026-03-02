import React from 'react';
import SEO from '../components/utils/SEO';
import Layout from '../components/layout/Layout';

const Terms = () => {
    return (
        <Layout>
            <SEO title="Terms of Use" description="Read the VibeX Technologies Terms of Use." path="/terms" />
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
                <div className="text-center max-w-2xl">
                    <h1 className="text-5xl font-bold mb-6 text-corporate-navy tracking-tight font-heading">
                        Terms of Use
                    </h1>
                    <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                        This page is currently under construction. Please check back later for our full terms of use.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Terms;
