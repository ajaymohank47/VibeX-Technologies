import React from 'react';
import Layout from '../components/layout/Layout';
import AboutSection from '../components/sections/About';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';

const About = () => {
    return (
        <Layout>
            <div className="pt-10">
                <AboutSection />
                <Process />
                <Testimonials />
            </div>
        </Layout>
    );
};

export default About;
