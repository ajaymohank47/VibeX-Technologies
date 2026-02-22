import React from 'react';
import Layout from '../components/layout/Layout';
import ServicesSection from '../components/sections/Services';
import Pricing from '../components/sections/Pricing';

const Services = () => {
    return (
        <Layout>
            <div className="pt-10">
                <ServicesSection />
                <Pricing />
            </div>
        </Layout>
    );
};

export default Services;
