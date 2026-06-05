import './section-title.scss';

const SectionTitle = ({ value, className = '' }) => {
  return (
    <h2 className={`section-title ${className}`.trim()}>{value}</h2>
  );
};

export default SectionTitle;
