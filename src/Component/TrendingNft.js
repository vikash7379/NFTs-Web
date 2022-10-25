import React from 'react'
import Slider from 'react-slick/lib/slider'
import TrendingCard from '../card/TrendingCard'
import  {TrendingData}  from '../data/TrendingData'
import './trending.css'
import Button from '../common/styles/button/Button'

var settings = {
  autoPlay : true,
  arrow :false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};
const TrendingNft = () => {
  return (
    <>
      <div className='trending-nfts'>
        <div className='trending-nfts-title'>
          <span className='heading-gradient'>TRENDING NFTs</span>
        </div>
        <div className='tn-bg-blop'></div>
        <Slider {...settings}>
          {TrendingData.map((_nftData) => (
            <TrendingCard data = {_nftData} key="id"/>
          ))}
        </Slider>
        <div className='tn-btn absolute-center'>
          <Button btnText = "SEE MORE" type = 'secondary' customClass="seeMoreBtn"/>
        </div>
      </div>
    </>
  )
}

export default TrendingNft