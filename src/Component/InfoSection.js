import React from 'react'
import Infocard from './Infocard'
import { INFO_ITEMS } from './InfoItem'
import './infosection.css'

const InfoSection = () => {
  return (
    <>
    <div className='info-section'>
      <div className='is-heading'>
        <span className='heading-gradient'>Create and sell your NFTs</span>
      </div>
      <div className='info-item-container'>
        {INFO_ITEMS.map((_infoItem) => (
          <Infocard item = {_infoItem }/>
        ))}
      </div>
    </div>
    </>
  )
}

export default InfoSection