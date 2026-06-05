import './price-card.scss';

const PriceCard = ({ plan, cost, period, features }) => {
  return (
    <article className="price-card">
      <header className="price-card__heading">
        <span className="price-card__plan">{plan}</span>
        <span className="price-card__cost">{cost}</span>
        <span className="price-card__period">{period}</span>
      </header>
      <div className="price-card__benefits">
        <ul className="price-card__benefits-list">
          {features.map((feature) => (
            <li key={feature} className="price-card__benefits-item">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default PriceCard;
