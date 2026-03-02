import React from 'react';
import SEO from '../components/utils/SEO';
import Layout from '../components/layout/Layout';
import AutomationSection from '../components/sections/Automation';
import Process from '../components/sections/Process';

const Automation = () => {
    return (
        <Layout>
            <SEO title="Automation Services" description="Hyper-automate your enterprise with intelligent RPA and process orchestration." path="/automation" />
            <div className="pt-10">
                <AutomationSection isPage={true} />
                <Process />
            </div>
        </Layout>
    );
};

export default Automation;
