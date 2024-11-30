import React, { useEffect, useState } from 'react'
import './FakeDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function FakeDetails() {
  const {id} = useParams()
  const [singlefake , setSinglefake] = useState({})
  const singlefakelink = `https://fakestoreapi.com/products/${id}`
  async function getSinglefake(params) {
    const {data} = await axios.get(singlefakelink)
    setSinglefake(data)
  }
  useEffect(()=>{
    getSinglefake()
  },[])
  return (
    <div className='FakeDetails my-5'>
      <div className="container my-5">
          <div className="row g-3">
            <div className="col-xl-6 col-md-12">
              <div className="contain-img d-flex justify-content-center">
                <img src={singlefake.image} alt="" style={{height : '350px'}} className='w-75'/>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="details">
                <b className='h2 text-center d-block text-primary'>{singlefake.category}</b>
                <i className='text-secondary'>Product Name : {singlefake.title?.split(' ').slice(0 , 2).join(' ')}</i>
                <p className='text-info my-3'>{singlefake.description}.</p>
                <span className='text-success'>Product Price : ${singlefake.price}</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FakeDetails
