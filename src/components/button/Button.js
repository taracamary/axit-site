import React from 'react';
import './button.scss';

const Button = ({ value, className }) => {
  return (
    <a href="#" className={`button button__download ${className}`}>{value}</a>
  );
};

export default Button;
