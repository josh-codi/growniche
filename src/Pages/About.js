import React from 'react'
import LandingBanner from '../components/LandingBanner/LandingBanner'
import OurMission from '../components/OurMission/OurMission'
import Team from '../components/Team/Team'
import Vission from '../components/Vission/Vission'

export default function About() {
  return (
    <div className='About'>
        <LandingBanner header={'About Us'} height={'450px'}/><br/>
        <OurMission height={'500px'}/><br/><br/>
        <Vission height={'600px'}/><br/><br/>
        <Team/>
    </div>
  )
}
