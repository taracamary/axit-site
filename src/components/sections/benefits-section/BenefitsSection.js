import './benefits-section.scss';
import SectionTitle from '../../section-title/SectionTitle';
import DecorativeLine from '../../decorative-line/DecorativeLine';
import SectionSubtitle from '../../section-subtitle/SectionSubtitle';
import BenefitCard from './benefit-card/BenefitCard';
import benefitCard1 from '../../../images/benefits/benefit-card-1.svg';
import benefitCard2 from '../../../images/benefits/benefit-card-2.svg';
import benefitCard3 from '../../../images/benefits/benefit-card-3.svg';

const CARDS = [
  {
    image: benefitCard1,
    title: 'Thoughtful Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.',
  },
  {
    image: benefitCard2,
    title: 'Well Crafted',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.',
  },
  {
    image: benefitCard3,
    title: 'Easy to Customize',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.',
  },
];

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-section__container wrapper">
        <SectionTitle
          className="benefits-section__title"
          value="WHY THIS IS AWESOME"
        />
        <DecorativeLine className="decorative-line--coral" />
        <SectionSubtitle
          className="benefits-section__subtitle"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        {CARDS.map((card) => (
          <BenefitCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
