import React from 'react';
import style from './style.scss';
import cx from 'classnames';

export const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbarLeft}>
        <a className={style.link}>Lessons</a>
        <a className={style.link}>Tutorials</a>
        <a className={style.link}>Scores</a>
        <a className={style.link}>Trophies</a>
      </div>
      <div className={style.navbarRight}>
        <a className={style.link}>Login</a>
        <a className={style.link}>Sign Up</a>
      </div>
    </div>
  )
}
