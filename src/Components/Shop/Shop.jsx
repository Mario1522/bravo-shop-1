import React from 'react'
import './Shop.css'
import Products from '../Products/Products'
import DummyApi from '../Api/DummyApi'
import FakeApi from '../Api/FakeApi'

function Shop() {
  return (
    <div className='Shop my-5'>
      <Products/>
      <FakeApi/>
      <DummyApi/>
    </div>
  )
}

export default Shop
