import React from 'react'
import './Services.css'
import { FaCheck } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
function Services() {
  return (
    <div className='Services'>
      <div className="container my-3">
        <div className="row g-3">
          <div className="col-xl-3 col-md-6 col-12">
            <div className="one">
             <FaCheck/>
             <p>Quality Product</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-12">
            <div className="one">
             <FaTruck className='truck'/>
             <p>Free Shiping</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-12">
            <div className="one">
             <FaCheck/>
             <p>14-Day Return</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-12">
            <div className="one">
            <FaTruck className='truck'/>
             <p>24/7 Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
