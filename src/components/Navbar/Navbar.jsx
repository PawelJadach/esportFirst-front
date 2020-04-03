import React from 'react'
import styles from './Navbar.module.scss';
import clsx from 'clsx';

const Navbar = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.logo}>LOGO</div>
      <ul>
        <li><a className={styles.link} href="#">O nas</a></li>
        <li><a className={styles.link} href="#">Ogłoszenia</a></li>
        <li><a className={styles.link} href="#">Współpraca</a></li>
        <li><a className={styles.link} href="#">Turnieje  </a></li>
        <li><a className={clsx(styles.link, styles.special)} href="#">Wingman Master</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;