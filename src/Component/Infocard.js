import React from 'react'
import './infosection.css'

const Infocard = (props) => {

    const {item} = props

  return (
    <>
        <div className='infoItem absolute-center'>
            {item.logo}
            <div className='info-title'>
            {item.title}
        </div>
        <div className='info-desc'>
            {item.description}
        </div>
        </div>
    </>
  )
}

export default Infocard