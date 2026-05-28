import React from 'react';
import SEO from '../components/utils/SEO';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import IndustryExpertise from '../components/sections/IndustryExpertise';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Automation from '../components/sections/Automation';
import Portfolio from '../components/sections/Portfolio';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <Layout>
            <SEO path="/" />
            <Hero />
            <IndustryExpertise />
            <About />
            <Services featuredOnly={true} />
            <Automation />
            <Portfolio featuredOnly={true} />
            <Testimonials />
            <Contact />
        </Layout>
    );
};

export default Home;
