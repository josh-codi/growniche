import React from 'react'
import { NavLink } from 'react-router-dom'

import './Footer.css'
export default function Footer() {
  return (
    <div className='footer'>
        <section className='footer_inner row'>

            <div className='footer_sec col-lg-3 col-md-6 col-sm-10 footer_media'>
                <p>We use expert knowledge and innovation to manage huge Agricultural Portfolios using in-depth project management skills in Agriculture.</p>
                <ul>
                    <li><i className='fab fa-facebook'></i></li>
                    <li><i className='fab fa-linkedin'></i></li>
                    <li><i className='fab fa-twitter'></i></li>
                    <li><i className='fab fa-envelop'></i></li>
                </ul>
            </div>

            <div className='footer_sec col-lg-3 col-md-6 col-sm-10 quick_links'>
                <h4>Quick Links</h4>
                <ul>
                    <li><NavLink to='/'>About</NavLink></li>
                    <li><NavLink to='/'>Privacy Policy</NavLink></li>
                    <li><NavLink to='/'>{'Terms & Conditions'}</NavLink></li>
                    <li><NavLink to='/'>Faq</NavLink></li>
                </ul>
            </div>

            <div className='footer_sec col-lg-3 col-md-6 col-sm-10'>
                <h4>Contact Info</h4>
                <ul>
                    <li><p>+233 548 522 914</p></li>
                    <li><p>16 Okantey, Accra</p></li>
                    <li>Email :<p>attafrimpong@growniche.com</p></li>
                    <li>Email :<p>attafrimpong@growniche.com</p></li>
                    <li>Email :<p>attafrimpong@growniche.com</p></li>
                </ul>
            </div>

            <div className='footer_sec col-lg-3 col-md-6 col-sm-10'>
                <h4>Newsletter</h4>
                <form>
                    <p>{'Get Special offers & Discounts'}</p>
                    <ul>
                        <input type={'email'} placeholder={'Enter your email address'}/><br/><br/>
                        <button type='submit'>SUBSCRIBE</button>
                    </ul>
                </form>
            </div>
        </section>
    </div>
  )
}
