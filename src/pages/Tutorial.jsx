/** @format */

import React from 'react';
import Header from '../components/Header';
import TutorialBanner from '../components/Tutorials/TutorialBanner';
import Tutor from '../components/Tutorials/Tutor';
import Footer from '../components/Footer'
const Tutorial = () => {
  return (
    <>
      <Header />
      <TutorialBanner />
      <Tutor />
      <Footer/>
    </>
  );
};

export default Tutorial;
