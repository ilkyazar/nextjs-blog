import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';
import classes from '../../../styles/post-content.module.css';
import React from 'react';

const DUMMY_POST = {
  slug: 'react-18',
  title: 'What\u2019s New in React 18',
  image: 'react-18.png',
  date: '2022-06-29',
  content: '# This is a first post',
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
