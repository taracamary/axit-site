import './button.scss';

const Button = ({ value, className = '', onClick }) => {
  return (
    <button
      type="button"
      className={`button ${className}`.trim()}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
