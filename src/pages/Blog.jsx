import React from 'react';
import Layout from '../components/layout/Layout';

const Blog = () => {
    return (
        <Layout>
            <div className="min-h-[70vh] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-corporate-navy mb-4 font-heading">
                        Our Insights
                    </h1>
                    <p className="text-slate-500 text-lg uppercase tracking-wider text-sm font-semibold">Coming Soon</p>
                </div>
            </div>
        </Layout>
    );
};

export default Blog;
