import React from 'react';
import SEO from '../components/utils/SEO';
import Layout from '../components/layout/Layout';
import ServicesSection from '../components/sections/Services';
import Pricing from '../components/sections/Pricing';

const Services = () => {
    return (
        <Layout>
            <SEO title="Services" description="End-to-end software development services tailored to your scalable business needs." path="/services" />
            <div className="pt-10">
                <ServicesSection isPage={true} />
                <Pricing />
            </div>
        </Layout>
    );
};

export default Services;
