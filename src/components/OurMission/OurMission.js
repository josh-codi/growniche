import React from 'react'

import './Mission.css'
import sideImage from './missionsImages/story.jpg'
export default function OurMission(props) {

    const style={
        secOne:{
            background: `url(${sideImage})`,
            backgroundPosition: 'center', 
            backgroundSize: 'cover',
        },
    }
  return (
    <section className='container m-auto mission row'>
    <div className='row m-auto col-lg-10 col-md-11 col-sm-12'>
        <section className='mision_sec_one col-lg-7 col-md-5 col-sm-10' style={style.inner}>
            <p>Growniche is a Business Development service provider that partners startups and running businesses and provides them with business development and professional services.</p>
            <h3>Our Mission</h3>
            <p>Our mission is to build sustainable business across Africa</p>
        </section>
        <section className='mision_sec_two col-lg-5 col-md-6 col-sm-11'>
        <img src={sideImage} className={'missionSideImage col-lg-10 col-md-11 col-sm-11'}/>
        {/* <section style={style} className='mision_sec_two col-lg-5 col-md-5 col-sm-10'></section> */}
        </section>
    </div>
    </section>
  )
}
