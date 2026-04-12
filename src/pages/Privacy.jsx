import React from 'react';
import SEO from '../components/utils/SEO';
import Layout from '../components/layout/Layout';

const Privacy = () => {
    return (
        <Layout>
            <SEO title="Privacy Policy" description="Read the VibeX Technologies Privacy Policy." path="/privacy" noIndex={true} />
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
                <div className="text-center max-w-2xl">
                    <h1 className="text-5xl font-bold mb-6 text-corporate-navy tracking-tight font-heading">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                        This page is currently under construction. Please check back later for our full privacy policy.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Privacy;
