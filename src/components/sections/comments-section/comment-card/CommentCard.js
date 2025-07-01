import React from 'react';
import './comment-card.scss';

const CommentCard = ({ authorImage, authorName, authorProfession }) => {
  return (
    <article className="comment-card">
      <p className="comment-card__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, molestiae quo commodi cupiditate, repudiandae debitis harum libero corrupti enim fugit eius inventore officia optio itaque possimus odio, quis officiis similique?
      </p>
      <div className="comment-card__author">
        <img className="comment-card__author-img" src={authorImage} alt="Author image" />
        <h3 className="comment-card__author-name">{authorName}</h3>
        <span className="comment-card__author-profession">{authorProfession}</span>
      </div>
    </article>
  );
};

export default CommentCard;
