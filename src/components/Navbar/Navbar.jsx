import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';

const Navbar = () => {
    return < nav className = {classes.navbar} >
    <div className={classes.item}>
      <NavLink to="/profile" className={({isActive})=>isActive ? 
        classes.activLink : undefined} >Profile</NavLink>
    </div>
    <div className={`${classes.item} ${classes.activ}`}>
      <NavLink to='/dialogs' className={({isActive})=>isActive ? 
        classes.activLink : undefined}>Messeges</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/news' className={({isActive})=> isActive ? 
      classes.activLink: undefined} >News</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/music' className={({isActive}) => isActive ?
      classes.activLink : undefined} >Music</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/settings' className={({isActive}) => isActive ?
      classes.activLink: undefined} >Settings</NavLink>
    </div>
  </nav >
}

export default Navbar;