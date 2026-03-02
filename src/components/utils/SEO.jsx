import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, path = "" }) => {
    const defaultTitle = "VibeX Technologies — Custom Software Development Agency";
    const defaultDescription = "VibeX Technologies is a premier software development agency building high-performance web apps, mobile apps, and cloud solutions. Based in Mumbai, India.";
    const siteUrl = "https://vibextechnologies.com";

    const seoTitle = title ? `${title} | VibeX Technologies` : defaultTitle;
    const seoDescription = description || defaultDescription;
    const canonicalUrl = `${siteUrl}${path}`;

    return (
        <Helmet>
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={seoDescription} />
        </Helmet>
    );
};

export default SEO;
