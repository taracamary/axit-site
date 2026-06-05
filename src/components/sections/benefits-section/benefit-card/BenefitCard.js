import './benefit-card.scss';

const BenefitCard = ({ image, title, description }) => {
  return (
    <article className="benefit-card">
      <span className="benefit-card__image">
        <img src={image} alt="" />
      </span>
      <h3 className="benefit-card__title">{title}</h3>
      <p className="benefit-card__description">{description}</p>
    </article>
  );
};

export default BenefitCard;
