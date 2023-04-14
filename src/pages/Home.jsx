/** @format */

import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Home/Banner';
import Daily from '../components/Home/Daily';
import Design from '../components/Home/Design';
import Tutorials from '../components/Home/Tutorials';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Daily />
      <Design />
      <Tutorials />
      <Footer/>
    </div>
  );
};

export default Home;
