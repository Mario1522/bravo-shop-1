import React from 'react'
import './Companies.css'
import Slider from "react-slick";
import comp1 from '../../assets/images/vendor-3.jpg'
import comp2 from '../../assets/images/vendor-4.jpg'
import comp3 from '../../assets/images/vendor-5.jpg'
import comp4 from '../../assets/images/vendor-6-CmmiMxIm-CmmiMxIm.jpg'
import comp5 from '../../assets/images/vendor-7-BBAmhwW7 (1)-BBAmhwW7.jpg'

function Companies() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 500 ,
    arrows : false ,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <div className='Companies mb-5'>
      <div className="container">
        <Slider {...settings} className="slider">
          <img src={comp1} alt="" />
          <img src={comp2} alt="" />
          <img src={comp3} alt="" />
          <img src={comp4} alt="" />
          <img src={comp5} alt="" />
        </Slider>
      </div>
    </div>
  )
}

export default Companies
