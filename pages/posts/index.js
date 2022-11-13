import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';
import Head from 'next/head';
import { Fragment } from 'react';

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All of my posts</title>
        <meta
          name="description"
          content="A list of all programming related blog posts"
        />
      </Head>
      <AllPosts posts={props.allPosts} />
    </Fragment>
  );
}

export function getStaticProps() {
  return {
    props: {
      allPosts: getAllPosts(),
    },
  };
}

export default AllPostsPage;
