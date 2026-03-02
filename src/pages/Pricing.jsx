import React from 'react';
import SEO from '../components/utils/SEO';
import Layout from '../components/layout/Layout';
import PricingSection from '../components/sections/Pricing';

const Pricing = () => {
    return (
        <Layout>
            <SEO title="Pricing" description="Scalable development models tailored to your project's scope and velocity." path="/pricing" />
            <div className="pt-10">
                <PricingSection isPage={true} />
            </div>
        </Layout>
    );
};

export default Pricing;
