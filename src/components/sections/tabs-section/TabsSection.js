import React from 'react';
import './tabs-section.scss';
import tabsImage1 from '../../../images/tabs/tabs-image-1.png';
import Button from '../../button/Button';

const TabsSection = () => {
  return (
    <section className="tabs-section">
      <div className="tabs-section__container wrapper">
        <div className="tabs-section__controllers">
          <button className="button tabs-section__controllers-item tabs-section__controllers-item--active" type="button">
            Tab 1
          </button>
          <button className="button tabs-section__controllers-item" type="button">
            Tab 2
          </button>
          <button className="button tabs-section__controllers-item" type="button">
            Tab 3
          </button>
        </div>

        <div className="tabs-section__content">
          <h3 className="tabs-section__content-title">
            Tabs with soft transitioning effect.
          </h3>
          <p className="tabs-section__content-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis voluptate architecto totam saepe obcaecati hic. Animi qui hic soluta exercitationem reprehenderit distinctio natus. Iste suscipit et est expedita consequuntur?
          </p>
          <Button
            className="button__color tabs-section__button"
            value={"Download"}
          />

          <img className="tabs-section__image" src={tabsImage1} alt="Tabs section image" />
        </div>

      </div>
    </section>
  );
};

export default TabsSection;
