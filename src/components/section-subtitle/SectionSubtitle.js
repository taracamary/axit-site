import './section-subtitle.scss';

const SectionSubtitle = ({ value, className = '' }) => {
  return (
    <p className={`section-subtitle ${className}`.trim()}>{value}</p>
  );
};

export default SectionSubtitle;
