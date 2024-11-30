import React from 'react'
import './Header.css'
import Slider from "react-slick";

function Header() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 1500 ,
    arrows : false ,
  };
  return (
   <header>
    <div className="container my-3">
      <div className="row g-5">
        <div className="col-xl-8 col-md-12">
          <Slider { ...settings } className="slider">
            <div className="men">
              <article>

              <b>Men Fashion</b>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perspiciatis similique aliquid maiores cupiditate voluptas voluptates tempora reprehenderit non quod necessitatibus, sint officia hic sunt nemo repellat qui. Dolore, quae?</p>
              <button className='mybtn'>Shop Now</button>
              </article>
            </div>
            <div className="women">
              <article>

              <b>Women Fashion</b>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perspiciatis similique aliquid maiores cupiditate voluptas voluptates tempora reprehenderit non quod necessitatibus, sint officia hic sunt nemo repellat qui. Dolore, quae?</p>
              <button className='mybtn'>Shop Now</button>
              </article>
            </div>
            <div className="kids">
              <article>
             <b>Kids Fashion</b>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perspiciatis similique aliquid maiores cupiditate voluptas voluptates tempora reprehenderit non quod necessitatibus, sint officia hic sunt nemo repellat qui. Dolore, quae?</p>
              <button className='mybtn'>Shop Now</button>
              </article>
            </div>
          </Slider >
        </div>
        <div className="col-xl-4 col-md-12">
          <div className="offers my-5">
            <div className="offer-1">
              <span>Save 20%</span>
              <b>Special Offer</b>
              <button className='mybtn'>Shop Now</button>
            </div>
            <div className="offer-2">
              <span>Save 20%</span>
              <b>Special Offer</b>
              <button className='mybtn'>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </header>
  )
}

export default Header
