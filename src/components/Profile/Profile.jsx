import React from "react";
import s from './Profile.module.css';
import Mypost from "./My posts/Mypost.jsx";

const Profile = () => {
    return <div className={s.content}>
    <div>
      <img src='https://klike.net/uploads/posts/2019-01/1547367999_1.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <div>
      <Mypost />
    </div>
  </div>
}

export default Profile;