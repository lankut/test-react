import React from "react";
import s from './Mypost.module.css';
import Post from './Post/Post.jsx';

const Mypost = () => {
  return <div className={s.content}>
    <div>
      <textarea> </textarea>
      <button>Add post</button>
    </div>
    <div className={s.item}>
      <Post messeges='Hi! This is VampiRe' like='15' />
      <Post messeges='Thisi is my first post' like='8' />
    </div>
  </div>
}

export default Mypost;