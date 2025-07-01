import React from 'react';
import './decorative-line.scss';

const DecorativeLine = ({ className }) => {
  return (
    <hr className={`decorative-line ${className}`} />
  );
};

export default DecorativeLine;
