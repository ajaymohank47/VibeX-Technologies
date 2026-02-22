import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-700 font-sans overflow-x-hidden">
            <Navbar />
            <main className="flex-grow pt-[84px]"> {/* Adjusted pt to account for navbar height */}
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
