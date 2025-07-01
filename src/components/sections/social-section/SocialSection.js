import React from 'react';
import './social-section.scss';
import SocialItems from './social-items/SocialItems';
import SectionSubtitle from '../../section-subtitle/SectionSubtitle';

const SocialSection = () => {
  return (
    <section className="social-section">
      <div className="social-section__container wrapper">
        <h2 className="social-section__title">Social Media</h2>
        <SectionSubtitle
          value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."}
        />
        <SocialItems className="social-section__socials" />
      </div>
    </section>
  );
};

export default SocialSection;
