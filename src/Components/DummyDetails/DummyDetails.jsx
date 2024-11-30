import React, { useEffect, useState } from 'react'
import './DummyDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function DummyDetails() {
  const {id} = useParams()
  const [singledummy , setSingledummy] = useState({})
  const singledummylink = `https://dummyjson.com/products/${id}`
  async function getSinledummy(params) {
    const {data} = await axios.get(singledummylink)
    setSingledummy(data)
  }
  useEffect(()=>{
    getSinledummy()
  },[])
  return (
    <div className='FakeDetails my-5'>
      <div className="container my-5">
          <div className="row g-3">
            <div className="col-xl-6 col-md-12">
              <div className="contain-img d-flex justify-content-center">
                <img src={singledummy.thumbnail} alt="" style={{height : '350px'}} className='w-75'/>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="details">
                <b className='h2 text-center d-block text-primary'>{singledummy.category}</b>
                <i className='text-secondary'>Product Name : {singledummy.title?.split(' ').slice(0 , 2).join(' ')}</i>
                <p className='text-info my-3'>{singledummy.description}.</p>
                <span className='text-success'>Product Price : ${singledummy.price}</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default DummyDetails
