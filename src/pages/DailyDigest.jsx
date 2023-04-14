import React from 'react'
import Header from '../components/Header'
import DailyBanner from '../components/Dailydigest/DailyBanner'
import Dailys from '../components/Dailydigest/Dailys'
import Footer from '../components/Footer'
const DailyDigest = () => {
  return (
      <>
      <Header /> 
      <DailyBanner />
      <Dailys />
      <Footer/>
    </>
  )
}

export default DailyDigest