import AllPosts from '../../components/posts/all-posts';
import { DUMMY_POSTS } from '../../lib/dummy-data';

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
