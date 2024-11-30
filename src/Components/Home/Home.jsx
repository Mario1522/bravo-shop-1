import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import Services from '../Services/Services'
import Categories from '../Categories/Categories'
import Products from '../Products/Products'
import Companies from '../Companies/Companies'

function Home() {
  return (
    <div className='Home'>
      <Header/>
      <Services/>
      <Categories/>
      <Products/>
      <Companies/>
    </div>
  )
}

export default Home
