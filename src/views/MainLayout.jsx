import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import News from '../components/News/News';
import Cooperation from '../components/Cooperation/Cooperation';

const  MainLayout = ({children}) => {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <News />
    <Cooperation />
      {children}
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout

