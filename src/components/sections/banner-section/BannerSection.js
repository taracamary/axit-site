import React from 'react';
import './banner-section.scss';
import Logo from '../../logo/Logo';
import Form from '../../form/Form';
import Button from '../../button/Button';
import DecorativeLine from '../../decorative-line/DecorativeLine';

const BannerSection = () => {
  return (
    <section className="banner">
      <div className="banner__container wrapper">
        <Logo className="logo__large" />
        <h1 className="banner__title">MODERN AXURE TEMPLATE FOR BEAUTIFUL PROTOTYPES</h1>
        <DecorativeLine className="decorative-line--white" />
        <p className="banner__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean</p>
        <Button
          className="button__transparent banner__button"
          value={"Download"}
        />
        <article className="banner__form">
          <h2 className="banner__form-title">Try Your <span>FREE</span> Trial Today</h2>
          <Form />
        </article>
      </div>
    </section>
  );
};

export default BannerSection;
