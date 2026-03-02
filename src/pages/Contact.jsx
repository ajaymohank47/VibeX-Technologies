import React from 'react';
import SEO from '../components/utils/SEO';
import Layout from '../components/layout/Layout';
import ContactSection from '../components/sections/Contact';

const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact Us" description="Connect with our dedicated development and support team to discuss your technological requirements." path="/contact" />
            <div className="pt-10">
                <ContactSection isPage={true} />
            </div>
        </Layout>
    );
};

export default Contact;
