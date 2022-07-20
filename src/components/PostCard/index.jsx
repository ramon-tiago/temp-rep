import './styles.css';
import PropTypes from 'prop-types';

export const PostCard = ({ post }) => {
  return (
    <div className="post">
      <img src={post.cover} alt={post.title} className="cover" />

      <div key={post.id} className="post-content">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};
