import './logo.scss';

const Logo = ({ className = '' }) => {
  return (
    <span className={`logo ${className}`.trim()}>
      AX<span className="logo__accent">IT</span>
    </span>
  );
};

export default Logo;
