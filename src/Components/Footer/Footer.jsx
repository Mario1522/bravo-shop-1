import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import pay from '../../assets/images/visa.png'

function Footer() {
  return (
    <div className='Footer'>
      <div className="row">
        <div className="col-xl-3 col-md-6 col-12">
          <div className="three">
            <b>Get In Touch</b>
            <p>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <div className="three">
            <b>Quick Shop</b>
            <ul>
              <li><Link to={''}>Home</Link></li>
              <li><Link to={'about'}>About</Link></li>
              <li><Link to={'shop'}>Shop</Link></li>
              <li><Link to={'contact'}>Contact</Link></li>
              <li><Link to={'cart'}>Cart</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <div className="three">
            <b>Shop Media</b>
            <ul>
              <li><a href="#"><FaFacebook/></a></li>
              <li><a href="#"><FaTwitter/></a></li>
              <li><a href="#"><FaInstagram/></a></li>
              <li><a href="#"><FaLinkedin/></a></li>
              <li><a href="#"><FaGithub/></a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-12">
          <div className="three">
            <b>NEWSLETTER</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, esse?</p>
            <div className="email">
              <input type="email" placeholder='Email' />
              <button className='btn btn-warning'>Button</button>
            </div>
          </div>
        </div>
      </div>
      <div className="pay">
        <p>@ copywrite By Bravo Team , All Right Reserved</p>
        <img src={pay} alt="" />
      </div>
    </div>
  )
}

export default Footer
