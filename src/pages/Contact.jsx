import React from 'react';
import Layout from '../components/layout/Layout';
import ContactSection from '../components/sections/Contact';

const Contact = () => {
    return (
        <Layout>
            <div className="pt-10">
                <ContactSection />
            </div>
        </Layout>
    );
};

export default Contact;
