import React from 'react';
import './footer.scss';
import SocialItems from '../sections/social-section/social-items/SocialItems';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container wrapper">
        <SocialItems/>
        <p className="footer__privacy">&copy; 2015 Axure Themes</p>
      </div>
    </footer>
  );
};

export default Footer;
