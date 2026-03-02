import React from 'react';
import SEO from '../components/utils/SEO';
import Layout from '../components/layout/Layout';
import AboutSection from '../components/sections/About';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';

const About = () => {
    return (
        <Layout>
            <SEO title="About Us" description="Learn about VibeX Technologies, a premier software development agency building high-performance web and mobile applications." path="/about" />
            <div className="pt-10">
                <AboutSection isPage={true} />
                <Process />
                <Testimonials />
            </div>
        </Layout>
    );
};

export default About;
