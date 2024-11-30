import React, { useContext } from 'react'
import './Products.css'
import { FaStar } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import { myproducts } from './myproducts'
import { cartcontext } from '../../Context/CartContext'
import { Wishlistcontext } from '../../Context/WishlistContext'
function Products() {
  const {setOnCart} = useContext(cartcontext)
  const {setOnWishlist} = useContext(Wishlistcontext)
  return (
    <div className='Products mb-5'>
      <div className="container">
        <b className='h1 d-block text-center mb-5'>PRODUCTS</b>
        <div className="row g-2">
          {myproducts.map((val , id)=>{
            return(
          <div className="col-xl-3 col-md-6 col-12" key={id}>
              <div className="card">
                <div className="contain-img py-3">
                  <img src={val.img} alt="" className='card-img'/>
                </div>
                <div className="card-body">
                  <b>{val.title}</b>
                  <div className="price">
                    <span>${val.price}</span>
                    <del>${val.sale}</del>
                  </div>
                  <div className="stars">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </div>
                  <div className="add">
                  <FaHeart onClick={()=> setOnWishlist(val)}/>
                    <FaCartShopping onClick={()=> setOnCart(val)}/>
                  </div>
                </div>
              </div>
          </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Products
