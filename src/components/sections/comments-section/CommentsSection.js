import React from 'react';
import './comments-section.scss';
import SectionTitle from '../../section-title/SectionTitle';
import DecorativeLine from '../../decorative-line/DecorativeLine';
import SectionSubtitle from '../../section-subtitle/SectionSubtitle';
import CommentCard from './comment-card/CommentCard';
import authorImage from '../../../images/avatar.png';

const CommentsSection = () => {
  return (
    <section className="comments-section">
      <div className="comments-section__container wrapper">
        <SectionTitle
          className="comments-section__title"
          value={"what our customers are saying"}
        />
        <DecorativeLine className="decorative-line--coral" />
        <SectionSubtitle
          className="comments-section__subtitle"
          value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
        <CommentCard
          authorImage={authorImage}
          authorName={"Jeremy H."}
          authorProfession={"Manager"}
        />
        <CommentCard
          authorImage={authorImage}
          authorName={"Jeremy H."}
          authorProfession={"Manager"}
        />
        <CommentCard
          authorImage={authorImage}
          authorName={"Jeremy H."}
          authorProfession={"Manager"}
        />
      </div>
    </section>
  );
};

export default CommentsSection;
