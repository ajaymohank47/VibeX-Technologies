import React from 'react';
import Layout from '../components/layout/Layout';
import AutomationSection from '../components/sections/Automation';
import Process from '../components/sections/Process';

const Automation = () => {
    return (
        <Layout>
            <div className="pt-10">
                <AutomationSection />
                <Process />
            </div>
        </Layout>
    );
};

export default Automation;
