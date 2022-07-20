import './styles.css';
import p from 'prop-types';
import { PostCard } from '../PostCard';
export const Post = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post = []) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

Post.propTypes = {
  posts: p.arrayOf(p.object).isRequired,
};
