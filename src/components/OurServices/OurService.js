import React from 'react'

import './OurService.css'
export default function OurService() {
    const services = [
        {
            header: 'Business Registration',
            subText: 'We provide consultancy and lead to persons and organizations seeking to register their businesses. We are...',
            key: 0
        },
        {
            header: 'Business Registration',
            subText: 'We provide consultancy and lead to persons and organizations seeking to register their businesses. We are...',
            key: 1
        },
        {
            header: 'Business Registration',
            subText: 'We provide consultancy and lead to persons and organizations seeking to register their businesses. We are...',
            key: 2
        },
        {
            header: 'Business Registration',
            subText: 'We provide consultancy and lead to persons and organizations seeking to register their businesses. We are...',
            key: 3
        },
        {
            header: 'Business Registration',
            subText: 'We provide consultancy and lead to persons and organizations seeking to register their businesses. We are...',
            key: 4
        },
        {
            header: 'Business Registration',
            subText: 'We provide consultancy and lead to persons and organizations seeking to register their businesses. We are...',
            key: 5
        },

    ]

  return (
    <div className='ourService_container'>
        <section className='ourServices_header'>
            <h1>Our Services</h1>
            <p>We Specialize In All Aspects Of Business Consulting and Development</p>
        </section><br/>

        <section className='grid_services row'>
            {services.map(val=>{
                return(
                    <div key={val.key} className='a_service col-sm-10 col-md-5 col-lg-4' key={val.key}>
                        <section className='a_service_inner'>
                            <aside></aside>
                            <aside>
                                <h4>{val.header}</h4>
                                <p>{val.subText}</p>
                            </aside>
                        </section>
                    </div>
                )
            })}
        </section>
    </div>
  )
}