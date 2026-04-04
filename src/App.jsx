import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/utils/ScrollToTop';
import ScrollToTopButton from './components/ui/ScrollToTopButton';
import MobileStickyCTA from './components/ui/MobileStickyCTA';
import FloatingCallButton from './components/ui/FloatingCallButton';
import ChatBot from './components/ui/ChatBot';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogCampusBuddy from './pages/BlogCampusBuddy';
import BlogXcrypt from './pages/BlogXcrypt';
import Careers from './pages/Careers';
import Automation from './pages/Automation';
import Process from './pages/Process';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Sitemap from './pages/Sitemap';
import Leadership from './pages/Leadership';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <ScrollToTopButton />
        <MobileStickyCTA />
        <FloatingCallButton />
        <ChatBot />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/campus-buddy-app" element={<BlogCampusBuddy />} />
          <Route path="/blog/xcrypt-payment-gateway" element={<BlogXcrypt />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/process" element={<Process />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
