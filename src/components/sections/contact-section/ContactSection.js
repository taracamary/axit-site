import React from 'react';
import './contact-section.scss';
import SectionTitle from '../../section-title/SectionTitle';
import DecorativeLine from '../../decorative-line/DecorativeLine';
import SectionSubtitle from '../../section-subtitle/SectionSubtitle';
import Form from '../../form/Form';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-section__container wrapper">
        <SectionTitle
          className="contact-section__title"
          value={"contact us"}
        />
        <DecorativeLine className="decorative-line--coral" />
        <SectionSubtitle
          className="contact-section__subtitle"
          value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <Form />
      </div>
    </section>
  );
};

export default ContactSection;
