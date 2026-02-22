import React from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

const Careers = () => {
    return (
        <Layout>
            <div className="min-h-[70vh] flex items-center justify-center px-6">
                <div className="text-center max-w-2xl">
                    <div className="inline-block px-4 py-1 rounded-full bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-sm mb-6 font-semibold uppercase tracking-wider">
                        We're Hiring
                    </div>
                    <h1 className="text-5xl font-bold mb-6 text-corporate-navy tracking-tight font-heading">
                        Join the <span className="text-accent-teal">VibeX</span> Team
                    </h1>
                    <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                        We’re always looking for talented individuals to help us build the future of digital technology.
                    </p>
                    <Button variant="accent" className="mx-auto">
                        View Open Positions
                    </Button>
                </div>
            </div>
        </Layout>
    );
};

export default Careers;
