import React from 'react';
import SEO from '../components/utils/SEO';
import Layout from '../components/layout/Layout';
import ContactSection from '../components/sections/Contact';

const Contact = () => {
    return (
        <Layout>
            <SEO path="/contact" />
            <div className="pt-10">
                <ContactSection isPage={true} />
            </div>
        </Layout>
    );
};

export default Contact;
