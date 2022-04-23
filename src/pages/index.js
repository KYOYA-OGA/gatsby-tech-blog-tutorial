import React from 'react';
import FeaturedBlocks from '../components/homepage/FeaturedBlocks';
import HeroSection from '../components/homepage/HeroSection';
import TopCategories from '../components/homepage/TopCategories';
import SEO from '../components/SEO';

const IndexPage = () => (
  <>
    <SEO />
    <HeroSection />
    <div className="container">
      <FeaturedBlocks />
      <TopCategories />
    </div>
  </>
);

export default IndexPage;
