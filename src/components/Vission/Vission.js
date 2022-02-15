import React from 'react'

import './Vission.css'
import sideImage from './vissionImage/interior.jpg'
export default function Vission(props) {
    const style={
        secOne:{
            background: `url(${sideImage})`,
            backgroundPosition: 'center', 
            backgroundSize: 'cover',
            height: props.height
        },
        inner: {
            // height: props.height
        }
    }
  return (
    <section className='row'>
    <div className='vission row col-lg-8 col-md-10 col-sm-10' style={style.inner}>
        <section className='vission_sec_one col-lg-5 col-md-5 col-sm-10' style={style.secOne}></section>
        <section className='vission_sec_two col-lg-7 col-md-7 col-sm-10'>
            <h2>Our Vision</h2>
            <p>To be a pioneer of innovative and sustainable business models across Africa.</p>


            <br/>
            <span>
            <i className='fab fa-docker'><br/><p>Someone</p></i>
            <i className='fab fa-java'><br/><p>Sponsor</p></i>
            </span>
        </section>
    </div>
    </section>
  )
}
