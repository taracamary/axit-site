import React from 'react';
import './prices-section.scss';
import SectionTitle from '../../section-title/SectionTitle';
import DecorativeLine from '../../decorative-line/DecorativeLine';
import SectionSubtitle from '../../section-subtitle/SectionSubtitle';
import PriceCard from './price-card/PriceCard';

const PricesSection = () => {
  return (
    <section className="prices-section">
      <div className="prices-section__container wrapper">
        <SectionTitle
          className="prices-section__title"
          value={"pricing options"}
        />
        <DecorativeLine className="decorative-line--coral" />
        <SectionSubtitle
          className="prices-section__subtitle"
          value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <PriceCard
          plan={"Basic"}
          cost={"$0"}
          period={"Free for life"}
        />
        <PriceCard
          plan={"Pro"}
          cost={"$100"}
          period={"Free for life"}
        />
        <PriceCard
          plan={"Vip"}
          cost={"$200"}
          period={"Free for life"}
        />
      </div>
    </section>
  );
};

export default PricesSection;
