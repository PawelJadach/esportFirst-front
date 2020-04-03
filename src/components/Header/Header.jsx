import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.scss';

const Header = () => {
  return (
    <section className={styles.root}>
      <h2>Otwarci na współpracę</h2>
      <a href="#">kontakt</a>
    </section>
  )
}

// Header.propTypes = {

// }

export default Header
