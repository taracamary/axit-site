import { useState } from 'react';
import './tabs-section.scss';
import tabsImage1 from '../../../images/tabs/tabs-image-1.svg';
import Button from '../../button/Button';

const TABS = [
  {
    label: 'Tab 1',
    title: 'Tabs with soft transitioning effect.',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis voluptate architecto totam saepe obcaecati hic. Animi qui hic soluta exercitationem reprehenderit distinctio natus. Iste suscipit et est expedita consequuntur?',
  },
  {
    label: 'Tab 2',
    title: 'Clean and minimal layout.',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    label: 'Tab 3',
    title: 'Easy customization for any project.',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
  },
];

const TabsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = TABS[activeIndex];

  return (
    <section className="tabs-section" aria-label="Features">
      <div className="tabs-section__container wrapper">
        <div
          className="tabs-section__controllers"
          role="tablist"
          aria-label="Feature tabs"
        >
          {TABS.map((tab, index) => (
            <button
              key={tab.label}
              id={`tab-${index}`}
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls="tabs-panel"
              className={`button tabs-section__controllers-item${activeIndex === index ? ' tabs-section__controllers-item--active' : ''}`}
              type="button"
              onClick={() => setActiveIndex(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          id="tabs-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeIndex}`}
          className="tabs-section__content"
        >
          <h3 className="tabs-section__content-title">{activeTab.title}</h3>
          <p className="tabs-section__content-description">
            {activeTab.description}
          </p>
          <Button
            className="button--color tabs-section__button"
            value="Download"
          />
          <img
            className="tabs-section__image"
            src={tabsImage1}
            alt="Feature illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
