import React from 'react'
import Header from '../Headers/Header'
import '../Hero/Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='left__hero'><Header/></div>
      <div className='right__hero'>left hero</div>
    </div>
  )
}

export default Hero
