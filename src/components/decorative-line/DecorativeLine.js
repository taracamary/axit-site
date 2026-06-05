import './decorative-line.scss';

const DecorativeLine = ({ className = '' }) => {
  return (
    <hr className={`decorative-line ${className}`.trim()} />
  );
};

export default DecorativeLine;
