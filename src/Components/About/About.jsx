import React from 'react'
import './About.css'
import aboutimg from '../../assets/images/about.jpg'
function About() {
  return (
    <div className='About'>
      <div className="container my-5 py-5">
        <b className='h1 d-block text-center mb-5'>ABOUT US</b>
        <div className="row p-5">
          <div className="col-xl-5 col-md-12">
            <div className="contain-img">
              <img src={aboutimg} alt="" className='w-100'/>
            </div>
          </div>
          <div className="col-xl-7 col-md-12">
            <div className="about">
            <b className='fs-3'>Welcome To <span style={{color : "var(--main-color)"}}>Bravo Shop</span></b>
            <p className='fw-bold' style={{ opacity : '0.5'}}><span style={{color : "var(--main-color)"}}>Bravo Shop</span> is Best online Shopping Company Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita dolore omnis cumque ipsa vel nam non necessitatibus eius, molestiae officiis, rem et distinctio? Nisi voluptates amet in aliquam sapiente.</p>
            <button className='btn btn-outline-warning'> Shop Now </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
