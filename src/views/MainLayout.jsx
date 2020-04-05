import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import About from '../components/About/About';

const  MainLayout = ({children}) => {
  return (
    <>
    <Navbar />
    <Header />
    <About />
      {children}
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout

