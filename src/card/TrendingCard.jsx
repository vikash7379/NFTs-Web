import React from 'react'
import './trendingCard.css'

const TrendingCard = (props) => {

  const {data}  = props;

  return (
    <>
      <div className='trendingCard absolute-center'>
        <div className='tc-wrapper'>
          <div className='tc-content'>
            <img src={data.banner} alt="nftbanner" className='bannerImg' />
            <div className='tc-info'>
              <div className='tc-info-left'>
                <img src={data.userLogo} alt="userLogo" className='logoImg' />
                <div className='tc-textInfo'>
                <div className='tc-username'>{data.userHandle}</div>
                <div className='tc-userhandle'>{data.userName}</div>
                </div>
                <img src="https://openseauserdata.com/files/265128aa51521c90f7905e5a43dcb456_new.svg" alt="etheriumImg" className='ethiriumImg'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TrendingCard