import React from 'react';
import './nav.scss';

const Nav = ({ className }) => {
  return (
    <nav>
      <ul className={`nav ${className}`}>
        <li className="nav__item">
          <a className="nav__link" href="/#">Feautures</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/#">About</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/#">Pricing</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/#">Reviews</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
