import React from 'react';
import './button.scss';

const Button = ({ value, className, onClick }) => {
  return (
    <button
      type="button"
      className={`button button__download ${className}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
