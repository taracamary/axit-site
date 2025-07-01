import React from 'react';
import './portfolio-section.scss';
import SectionTitle from '../../section-title/SectionTitle';
import DecorativeLine from '../../decorative-line/DecorativeLine';
import SectionSubtitle from '../../section-subtitle/SectionSubtitle';
import Button from '../../button/Button';

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-section__container wrapper">
        <SectionTitle
          className="portfolio-section__title"
          value={"STYLISH AXURE DESIGN"}
        />
        <DecorativeLine className="decorative-line--coral" />
        <SectionSubtitle
          className="portfolio-section__subtitle"
          value={"Use the sections you need, remove the ones you don't. Create gorgeous prototypes faster than ever!"}
        />
        <Button
          className="button__transparent portfolio-section__button"
          value={"Download"}
        />
      </div>
    </section>
  );
};

export default PortfolioSection;
