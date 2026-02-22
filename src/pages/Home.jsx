import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import IndustryExpertise from '../components/sections/IndustryExpertise';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Automation from '../components/sections/Automation';
import Process from '../components/sections/Process';
import Portfolio from '../components/sections/Portfolio';
import Pricing from '../components/sections/Pricing';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <Layout>
            <Hero />
            <IndustryExpertise />
            <About />
            <Services />
            <Automation />
            <Process />
            <Portfolio />
            <Pricing />
            <Testimonials />
            <Contact />


        </Layout>
    );
};

export default Home;
