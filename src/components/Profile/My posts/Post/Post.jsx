import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.content}>
      <div className='posts'>
        <div className={s.item}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/FDF_Skjold_Natblaa_Med_Outline_RGB.png/750px-FDF_Skjold_Natblaa_Med_Outline_RGB.png?20190522103013'/>
          {props.messeges}
          <div>
          <span>Like {props.like}</span>
          </div>
        </div>        
      </div>
    </div>
}

export default Post;