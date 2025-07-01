import React from 'react';
import './price-card.scss';

const PriceCard = ({ plan, cost, period }) => {
  return (
    <article className="price-card">
      <header className="price-card__heading">
        <span className="price-card__plan">{plan}</span>
        <span className="price-card__cost">{cost}</span>
        <span className="price-card__period">{period}</span>
      </header>
      <div className="price-card__benefits">
        <ul className="price-card__benefits-list">
          <li className="price-card__benefits-item">
            1 gb of space
          </li>
          <li className="price-card__benefits-item">
            1 gb of space
          </li>
          <li className="price-card__benefits-item">
            1 gb of space
          </li>
          <li className="price-card__benefits-item">
            1 gb of space
          </li>
          <li className="price-card__benefits-item">
            1 gb of space
          </li>
          <li className="price-card__benefits-item">
            1 gb of space
          </li>
        </ul>
      </div>
    </article>
  );
};

export default PriceCard;
