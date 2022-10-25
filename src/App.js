import React from 'react'
import './App.css';
import './Component/component.css';
import Brand from './Component/Brand'
import Footer from './Component/Footer'
import Header from './Component/Header'
import InfoSection from './Component/InfoSection'
import TopFold from './Component/TopFold'
import TrendingNft from './Component/TrendingNft'

const App = () => {
  return (
    <>
      <Header/>
      <TopFold/>
      <Brand/>
      <TrendingNft/>
      <InfoSection/>
      <Footer/>
    </>
  )
}

export default App
