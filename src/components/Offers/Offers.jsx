import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Trending for You</h1>
            <h1>Exclusive</h1>
            <button>Check Now</button>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers