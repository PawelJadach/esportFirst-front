import React from 'react';
import MainLayout from './views/MainLayout';
import './styles/global.scss';
import Socials from './components/Socials/Socials';

const App = () => {
  return (
    <MainLayout>
      <Socials />
    </MainLayout>
  );
}

export default App;
