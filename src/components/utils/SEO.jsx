import React from 'react';
import { Helmet } from 'react-helmet-async';

// ─────────────────────────────────────────────────────────────────────────────
// PAGE-LEVEL SEO DATA MAP
// Each entry provides a distinct, action-oriented title + description
// designed to encourage Sitelink generation and high CTR.
// ─────────────────────────────────────────────────────────────────────────────
const PAGE_SEO = {
    '/': {
        title: 'VibeX Technologies — Custom Software Development Agency | Mumbai, India',
        description:
            'VibeX Technologies builds high-performance web apps, native mobile apps, cloud solutions & enterprise ERP systems. Trusted by startups and enterprises. Get a free quote today.',
    },
    '/about': {
        title: 'About VibeX Technologies — Our Story, Mission & Vision',
        description:
            'Discover how VibeX Technologies — founded in Mumbai — is transforming businesses with scalable software. Meet our team, explore our values, and learn why 50+ clients trust us.',
    },
    '/services': {
        title: 'Software Development Services — Web, Mobile, Cloud & ERP | VibeX Technologies',
        description:
            'From custom web applications and native Android/iOS apps to cloud architecture and enterprise ERP solutions — explore the full range of development services at VibeX Technologies.',
    },
    '/portfolio': {
        title: 'Our Work & Case Studies — Software Portfolio | VibeX Technologies',
        description:
            'See how VibeX Technologies has built impactful products including Campus Buddy (EdTech ERP), Xcrypt Payment Gateway, and more. Explore our case studies and client success stories.',
    },
    '/pricing': {
        title: 'Transparent Software Development Pricing | VibeX Technologies',
        description:
            'Flexible, transparent pricing for web app, mobile app, and enterprise software projects. Find the right plan for your startup or business with VibeX Technologies.',
    },
    '/contact': {
        title: 'Contact VibeX Technologies — Start Your Project Today',
        description:
            'Ready to build your next product? Contact the VibeX Technologies team in Mumbai. Call, email, or fill in our form — our engineers respond within 24 hours.',
    },
    '/leadership': {
        title: 'Leadership Team — Founders & Executives | VibeX Technologies',
        description:
            'Meet Ajaymohan Kanojia (Founder & Lead Developer), Harshit Upadhyay (Co-Founder & CTO), and Shreyas Gaikwad (Co-Founder & COO) — the visionaries behind VibeX Technologies.',
    },
    '/blog': {
        title: 'Tech Insights & Engineering Blog | VibeX Technologies',
        description:
            'Deep-dive technical articles on software development, EdTech, FinTech, and startup engineering from the VibeX Technologies team. Read, learn, and build better.',
    },
    '/blog/campus-buddy-app': {
        title: 'Campus Buddy: Building a Mobile ERP for Education | VibeX Blog',
        description:
            'An in-depth look at how VibeX Technologies designed and built Campus Buddy — a full-stack mobile ERP & admission portal that powers thousands of students and educators.',
    },
    '/blog/xcrypt-payment-gateway': {
        title: 'Xcrypt: Building a Blockchain Payment Gateway | VibeX Blog',
        description:
            'A technical deep-dive into Xcrypt, a decentralised blockchain payment gateway built by VibeX Technologies — covering architecture, smart contracts, and fintech compliance.',
    },
    '/careers': {
        title: 'Join Our Team — Careers at VibeX Technologies | Mumbai',
        description:
            'We are hiring passionate developers, designers, and growth hackers! Explore open roles at VibeX Technologies and build world-class software products from Mumbai, India.',
    },
    '/automation': {
        title: 'Business Workflow Automation Services | VibeX Technologies',
        description:
            'Automate repetitive business workflows with custom-built tools from VibeX Technologies. Save time, eliminate errors, and scale faster with intelligent process automation.',
    },
    '/process': {
        title: 'Our Development Process — How We Build Products | VibeX Technologies',
        description:
            'Discover the agile, milestone-driven development process at VibeX Technologies — from discovery and architecture to deployment and ongoing support.',
    },
};

const SITE_URL = 'https://vibex-technologies.com';
const DEFAULT_IMAGE = `${SITE_URL}/favicon.png`;

const SEO = ({ title, description, path = '', ogImage, noIndex = false }) => {
    // Use the page data map as the priority source, then fall back to props
    const pageData = PAGE_SEO[path];
    const seoTitle = pageData?.title || (title ? `${title} | VibeX Technologies` : PAGE_SEO['/'].title);
    const seoDescription = pageData?.description || description || PAGE_SEO['/'].description;
    const canonicalUrl = `${SITE_URL}${path}`;
    const resolvedImage = ogImage || DEFAULT_IMAGE;

    // Build BreadcrumbList for all non-home pages (strong Sitelinks signal)
    const breadcrumbItems = [{ name: 'Home', url: SITE_URL }];
    if (path && path !== '/') {
        const pathSegments = path.split('/').filter(Boolean);
        let accumulatedPath = '';
        pathSegments.forEach((segment) => {
            accumulatedPath += `/${segment}`;
            const label = segment
                .split('-')
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(' ');
            breadcrumbItems.push({ name: label, url: `${SITE_URL}${accumulatedPath}` });
        });
    }

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <Helmet>
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />
            <link rel="canonical" href={canonicalUrl} />
            {noIndex
                ? <meta name="robots" content="noindex, nofollow" />
                : <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            }

            {/* Open Graph */}
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={resolvedImage} />
            <meta property="og:site_name" content="VibeX Technologies" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={seoDescription} />
            <meta name="twitter:image" content={resolvedImage} />

            {/* BreadcrumbList structured data */}
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
