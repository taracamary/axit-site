import React from 'react';
import './social-items.scss';

import facebook from '../../../../images/socials/facebook.svg';
import twitter from '../../../../images/socials/twitter.svg';
import googlePlus from '../../../../images/socials/google-plus.svg';
import pinterest from '../../../../images/socials/pinterest.svg';
import instagram from '../../../../images/socials/instagram.svg';
import stumbleupon from '../../../../images/socials/stumbleupon.svg';
import rss from '../../../../images/socials/rss.svg';

const SocialItems = () => {
  return (
    <article className="social-items">
      <a href="#">
        <img src={facebook} alt="Facebook icon" />
      </a>
      <a href="#">
        <img src={twitter} alt="Twitter icon" />
      </a>
      <a href="#">
        <img src={googlePlus} alt="Google Plus icon" />
      </a>
      <a href="#">
        <img src={pinterest} alt="Pinterest icon" />
      </a>
      <a href="#">
        <img src={instagram} alt="Instagram icon" />
      </a>
      <a href="#">
        <img src={stumbleupon} alt="Stumbleupon icon" />
      </a>
      <a href="#">
        <img src={rss} alt="Rss icon" />
      </a>
    </article>
  );
};

export default SocialItems;
