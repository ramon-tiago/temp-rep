import './styles.css';
import { PostCard } from '../PostCard';
export const Post = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />

      ))}
    </div>
  )
};