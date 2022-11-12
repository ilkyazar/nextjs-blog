import PostItem from './post-item';
import classes from '../../styles/posts-grid.module.css';

function PostGrid(props) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
}

export default PostGrid;
