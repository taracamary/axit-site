import React from 'react';
import './logo.scss';

const Logo = ({ className }) => {
  return (
    <span className={`logo ${className}`}>
      AX<span className="logo--accent">IT</span>
    </span>
  );
};

export default Logo;
