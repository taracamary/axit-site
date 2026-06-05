import './comments-section.scss';
import SectionTitle from '../../section-title/SectionTitle';
import DecorativeLine from '../../decorative-line/DecorativeLine';
import SectionSubtitle from '../../section-subtitle/SectionSubtitle';
import CommentCard from './comment-card/CommentCard';
import authorImage from '../../../images/avatar.png';

const COMMENTS = [
  {
    authorImage,
    authorName: 'Jeremy H.',
    authorProfession: 'Product Manager',
  },
  {
    authorImage,
    authorName: 'Sarah K.',
    authorProfession: 'UX Designer',
  },
  {
    authorImage,
    authorName: 'Michael T.',
    authorProfession: 'Frontend Developer',
  },
];

const CommentsSection = () => {
  return (
    <section className="comments-section">
      <div className="comments-section__container wrapper">
        <SectionTitle
          className="comments-section__title"
          value="What Our Customers Are Saying"
        />
        <DecorativeLine className="decorative-line--coral" />
        <SectionSubtitle
          className="comments-section__subtitle"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        {COMMENTS.map((comment) => (
          <CommentCard key={comment.authorName} {...comment} />
        ))}
      </div>
    </section>
  );
};

export default CommentsSection;
