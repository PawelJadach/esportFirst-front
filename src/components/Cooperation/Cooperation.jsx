import React from 'react'
import styles from './Coopoeration.module.scss';

const Cooperation = () => {
  return (
    <div className={styles.root}>
      <div className={styles.buttons}>
        <button className={styles.checked}>Współpraca</button>
        <button>Co oferujemy</button>
        <button>Warunki</button>
        <button>Partnerzy</button>
      </div>
      <div className={styles.content}>
        <h2>Współpraca</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. 
          <br/><br/>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button>Skontaktuj się z nami</button>
      </div>
    </div>
  )
}

export default Cooperation;
