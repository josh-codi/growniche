import React from 'react'


import team1 from './TeamImages/team-1.jpg'
import team2 from './TeamImages/team-2.jpg'
import team3 from './TeamImages/team-3.jpg'

import './Team.css'
export default function Team() {
    const team = [
        {
            name: 'Atta Amoh Frimpong',
            title: 'Executive Director',
            image: team1,
            key: 0
        },
        {
            name: 'Daniel Antwi',
            title: 'Director',
            image: team2,
            key: 1
        },
        {
            name: 'Priscilla Anane',
            title: ' Director',
            image: team3,
            key: 2
        },

    ]
  return (
    <div className='Team row'>
        <h2>Our Team</h2>
        <p>Our caregivers are trained specifically to provide in-home care.</p><br/>
        <section className='teamImages row col-lg-10 col-md-8 col-sm-11'>
            {team.map((val)=>{
                const style={
                    background: `url(${val.image})`,
                    backgroundPosition: 'center', 
                    backgroundSize: 'cover',
                    borderRadius: '50%'
                }
                return(
                    <div className='teamMember col-lg-4 col-md-5 col-sm-7' key={val.key}>
                        <aside className='image' style={style}/>
                        <div>
                            <h4>{val.name}</h4>
                            <p>{val.title}</p>
                        </div>
                    </div>
                )
            })}
        </section>
    </div>
  )
}
