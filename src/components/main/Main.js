import React from 'react';
import './main.scss';
import BannerSection from '../sections/banner-section/BannerSection';
import SocialSection from '../sections/social-section/SocialSection';
import TabsSection from '../sections/tabs-section/TabsSection';
import BenefitsSection from '../sections/benefits-section/BenefitsSection';
import PricesSection from '../sections/prices-section/PricesSection';
import CommentsSection from '../sections/comments-section/CommentsSection';
import PortfolioSection from '../sections/portfolio-section/PortfolioSection';
import ContactSection from '../sections/contact-section/ContactSection';

const Main = () => {
  return (
    <main className="main">
      <BannerSection />
      <SocialSection />
      <TabsSection />
      <BenefitsSection />
      <PricesSection />
      <CommentsSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
};

export default Main;
