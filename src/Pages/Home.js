import React from 'react'
import LandingBanner from '../components/LandingBanner/LandingBanner'
import OurServices from '../components/OurServices/OurService'

export default function Home() {
  return (
    <div className='home'>
        <LandingBanner header={'Home'} height={'500px'}/>
        <OurServices/>
    </div>
  )
}
