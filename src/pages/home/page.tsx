
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import FloatingHearts from '../../components/base/FloatingHearts';
import GlowingText from '../../components/base/GlowingText';
import HeroSection from './components/HeroSection';
import QuoteCarousel from './components/QuoteCarousel';
import LatestSession from './components/LatestSession';
import QuickLinks from './components/QuickLinks';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <QuoteCarousel />
      <LatestSession />
      <QuickLinks />
      <Footer />
    </div>
  );
};

export default HomePage;
