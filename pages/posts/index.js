import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

function AllPostsPage(props) {
  return <AllPosts posts={props.allPosts} />;
}

export function getStaticProps() {
  return {
    props: {
      allPosts: getAllPosts(),
    },
  };
}

export default AllPostsPage;
