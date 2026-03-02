import React from 'react';
import SEO from '../components/utils/SEO';
import Layout from '../components/layout/Layout';
import ProcessSection from '../components/sections/Process';

const Process = () => {
    return (
        <Layout>
            <SEO title="Our Process" description="A transparent, robust, and scalable engineering lifecycle engineered to mitigate risk." path="/process" />
            <ProcessSection isPage={true} />
        </Layout>
    );
};

export default Process;
