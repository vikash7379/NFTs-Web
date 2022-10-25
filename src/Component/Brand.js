import React from 'react'
import './brand.css'

const Brand = () => {
  return (
    <>
    <div className='brands'>
    <figure>
    <i class="fa-brands fa-amazon"></i>
      <figcaption>Amazon</figcaption>
    </figure>
    <figure>
      {/* <i class="fa-solid fa-shield"></i> */}
      <i class="fa-solid fa-shield-halved"></i>
      <figcaption>Trust Wallet</figcaption>
    </figure>
    <figure>
      <i class="fa-brands fa-google-wallet"></i>
      <figcaption>Google Wallet</figcaption>
    </figure>
    <figure>
    <i class="fa-brands fa-meta"></i>
    <figcaption>META</figcaption>
    </figure>
    <figure>
    <i class="fa-brands fa-discord"></i>
    <figcaption>Discord</figcaption>
    </figure>
    <figure>
    <i class="fa-brands fa-cc-visa"></i>
    <figcaption>Visa</figcaption>
    </figure>
    <figure>
    <i class="fa-brands fa-airbnb"></i>
    <figcaption>Airbnb</figcaption>
    </figure>
    </div>
    </>
  )
}

export default Brand