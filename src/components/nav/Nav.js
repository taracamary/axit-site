import './nav.scss';

const Nav = ({ className = '' }) => {
  return (
    <nav>
      <ul className={`nav ${className}`.trim()}>
        <li className="nav__item">
          <a className="nav__link" href="/#">Features</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/#">About</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/#">Pricing</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/#">Reviews</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
