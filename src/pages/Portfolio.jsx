import React from 'react';
import SEO from '../components/utils/SEO';
import Layout from '../components/layout/Layout';
import PortfolioSection from '../components/sections/Portfolio';

const Portfolio = () => {
    return (
        <Layout>
            <SEO title="Portfolio" description="See how we've partnered with industry leaders to solve complex technological challenges." path="/portfolio" />
            <div className="pt-10">
                <PortfolioSection isPage={true} />
            </div>
        </Layout>
    );
};

export default Portfolio;
