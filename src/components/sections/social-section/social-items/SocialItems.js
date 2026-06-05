import './social-items.scss';

import facebook from '../../../../images/socials/facebook.svg';
import twitter from '../../../../images/socials/twitter.svg';
import googlePlus from '../../../../images/socials/google-plus.svg';
import pinterest from '../../../../images/socials/pinterest.svg';
import instagram from '../../../../images/socials/instagram.svg';
import stumbleupon from '../../../../images/socials/stumbleupon.svg';
import rss from '../../../../images/socials/rss.svg';

const SOCIAL_LINKS = [
  { href: '#!', src: facebook,    alt: 'Facebook' },
  { href: '#!', src: twitter,     alt: 'Twitter' },
  { href: '#!', src: googlePlus,  alt: 'Google Plus' },
  { href: '#!', src: pinterest,   alt: 'Pinterest' },
  { href: '#!', src: instagram,   alt: 'Instagram' },
  { href: '#!', src: stumbleupon, alt: 'Stumbleupon' },
  { href: '#!', src: rss,         alt: 'RSS' },
];

const SocialItems = () => {
  return (
    <ul className="social-items">
      {SOCIAL_LINKS.map(({ href, src, alt }) => (
        <li key={alt} className="social-items__item">
          <a href={href} aria-label={alt} className="social-items__link">
            <img src={src} alt="" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialItems;
