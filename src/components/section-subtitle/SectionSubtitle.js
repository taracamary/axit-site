import React from 'react';
import './section-subtitle.scss';

const SectionSubtitle = ({ className, value }) => {
  return (
    <p className={`section-subtitle ${className}`}>{value}</p>
  );
};

export default SectionSubtitle;
