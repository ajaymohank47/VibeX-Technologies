import React from 'react';
import Layout from '../components/layout/Layout';
import PortfolioSection from '../components/sections/Portfolio';

const Portfolio = () => {
    return (
        <Layout>
            <div className="pt-10">
                <PortfolioSection />
            </div>
        </Layout>
    );
};

export default Portfolio;
