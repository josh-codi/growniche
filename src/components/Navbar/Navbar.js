import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css'
export default function Navbar() {

  return (
    <div className='Navbar_container'>
        <section className="nav_sec_one">
            <div className='n_s_o_1'>
              <i className="fas fa-phone"></i>
              <p>Need help? Call us Now: {'+233 054 852 2914'}</p>
            </div>

            <div className='n_s_o_2'>
              <p>Our Story</p>
              <p>|</p>
              <p>Inspiration</p>
            </div>
        </section>

        <section className='nav_sec_two'>
          <ul>
            <li><NavLink to="/" className={'navlink'}>Home</NavLink></li>
            <li><NavLink to="/about" className={'navlink'}>About Us</NavLink></li>
            <li><NavLink to="/services" className={'navlink'}>Services</NavLink></li>
            <li><NavLink to="/projects" className={'navlink'}>Projects</NavLink></li>
            <li><NavLink to="/blog" className={'navlink'}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={'navlink'}>Contact</NavLink></li>
            <li><p>|</p></li>
            <li><i className='fas fa-search'/></li>
          </ul>
        </section>
        
    </div>
  )
}
