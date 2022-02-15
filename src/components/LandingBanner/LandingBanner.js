import React from 'react';

// import Bus1 from './bannerImages/bus1.jpeg'
// import Bus2 from './bannerImages/bus2.jpeg'
import img1 from './bannerImages/news-4.jpg'
import img2 from './bannerImages/news-5.jpg'
import img3 from './bannerImages/news-6.jpg'

import './LandingBanner.css'
export default function LandingBanner(props) {
    const images = [img1, img2, img3];
    
    const bannerInfo = [
        {
            // image: images[Math.floor(Math.random()*images.length)],
            image: images[0],
            header: 'solutions for Modern Business',
            since: 'Since 2018'
        }
    ];

    const style={
        container: {
            background: `url(${bannerInfo[0].image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            repeat: 'no-repeat ',
        },
        imageContainer: {
            height: props.height
        }
        
    }
  return (
    <div className='landingBanner_container' style={style.container}>
        <section className='image_container' style={style.imageContainer}>
            <aside className='banner_text container'>
                <h1 className='banner_header'>{props.header}</h1>
                <p className='banner_subtext'>{props.since}</p>
            </aside>
        </section>
    </div>
  )
}
