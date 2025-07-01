import React from 'react';
import './section-title.scss';

const SectionTitle = ({ value, className }) => {
  return (
    <h2 className={`section-title ${className}`}>{value}</h2>
  );
};

export default SectionTitle;
