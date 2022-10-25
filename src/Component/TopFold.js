import React from 'react'
import Button from '../common/styles/button/Button'

const TopFold = () => {
  return (
    <div className="topfold absolute-center">
      <div className="tf-left">
        <div className="tf-heading">
          Discover collect, & sell <span className='heading-gradient'>Extraordinary</span> NFTs
        </div>
        <div className="tf-description">
          Please make sure that you are buying and selling the most
          trending NFTs out there.
          Discover the Most Premium, Unique and Exclusive NFT Collections
        </div>
        <div className="tf-left-btns">
          <Button btnType = "PRIMARY" btnText = "Explore"/>
          <Button btnType = "SECONDARY" btnText = "Create" customClass ="tf-left-secondry-btn"/>
        </div>
        <div className="tf-left-info">
          <div className="info-items">
            <div className="count"> 200K+
            </div>
            <div className="label">
              Collection
            </div>
          </div>
          <div className="info-items">
            <div className="count"> 10k+
            </div>
            <div className="label">
              Artists
            </div>
          </div>
          <div className="info-items">
            <div className="count"> 423k+
            </div>
            <div className="label">
              Community
            </div>
          </div>
        </div>
      </div>
      <div className="tf-right absolute-center">
        <div className='tf-right-blob'></div>
        <div className="tf-right-diamond">
          <div className="tf-right-diamond-item">
            <img className='tf-right-image' src="https://i.seadn.io/gae/oyEO1RajjrJuCYtbXX9Oa3FhoRvX5BO_TkFc8PTUkN5egJwFG2mlM0lRl7zuOvBj_HciCY35D4exJm0b3DZya6qxpyhk0aBN7oCH?auto=format&w=128" alt="right image" />
          </div>
        </div>
        <div className="tf-right-diamond">
          <div className="tf-right-diamond-item">
            <img className='tf-right-image' src="https://i.seadn.io/gcs/files/7f3cd1b5f71225f4aab4efab5542f253.gif?auto=format&w=128" alt="right image" />
          </div>
        </div>
        <div className="tf-right-diamond">
          <div className="tf-right-diamond-item">
            <img className='tf-right-image' src="https://i.seadn.io/gcs/files/8e7edd735c5c1e426f7d89d6b1d8309d.gif?auto=format&w=128" alt="right image" />
          </div>
        </div>
        <div className="tf-right-diamond">
          <div className="tf-right-diamond-item">
            <img className='tf-right-image' src="https://i.seadn.io/gae/jsfhye5yrhOSusDCKXquKoMQbYs-B8Nm3V2B5fZB-Hee9ag9MXwm8scvd8wuSpp8TE49oXBcWr4XMCRfzq1OA3p59s59hn_9bCzURA?auto=format&w=128" alt="right image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopFold