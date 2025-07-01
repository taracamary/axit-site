import React from 'react';
import './header.scss';
import Logo from '../logo/Logo';
import Nav from '../nav/Nav';
import Sidebar from '../sidebar/Sidebar';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container wrapper">
        <Logo className="logo__small" />
        <Nav />
      </div>
      <Sidebar />
    </header>
  );
};

export default Header;
