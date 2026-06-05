import './prices-section.scss';
import SectionTitle from '../../section-title/SectionTitle';
import DecorativeLine from '../../decorative-line/DecorativeLine';
import SectionSubtitle from '../../section-subtitle/SectionSubtitle';
import PriceCard from './price-card/PriceCard';

const PLANS = [
  {
    plan: 'Basic',
    cost: '$0',
    period: 'Free for life',
    features: [
      '1 GB of storage',
      '1 active project',
      'Email support',
      'Basic analytics',
      'Community access',
      'Monthly updates',
    ],
  },
  {
    plan: 'Pro',
    cost: '$100',
    period: 'Per month',
    features: [
      '20 GB of storage',
      '10 active projects',
      'Priority email support',
      'Advanced analytics',
      'Team collaboration',
      'Weekly updates',
    ],
  },
  {
    plan: 'VIP',
    cost: '$200',
    period: 'Per month',
    features: [
      'Unlimited storage',
      'Unlimited projects',
      '24/7 phone support',
      'Full analytics suite',
      'Dedicated account manager',
      'Daily updates',
    ],
  },
];

const PricesSection = () => {
  return (
    <section className="prices-section">
      <div className="prices-section__container wrapper">
        <SectionTitle
          className="prices-section__title"
          value="Pricing Options"
        />
        <DecorativeLine className="decorative-line--coral" />
        <SectionSubtitle
          className="prices-section__subtitle"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        {PLANS.map((plan) => (
          <PriceCard key={plan.plan} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default PricesSection;
