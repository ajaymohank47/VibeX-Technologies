import React from 'react';
import Layout from '../components/layout/Layout';
import PricingSection from '../components/sections/Pricing';

const Pricing = () => {
    return (
        <Layout>
            <div className="pt-10">
                <PricingSection />
            </div>
        </Layout>
    );
};

export default Pricing;
