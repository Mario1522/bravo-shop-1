import React, { useContext } from 'react'
import './Api.css'
import { FaHeart } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { apicontext } from '../../Context/ApiContext'
import { cartcontext } from '../../Context/CartContext'
import { Wishlistcontext } from '../../Context/WishlistContext'
import { Link } from 'react-router-dom'

function FakeApi() {
    const {fakeprods} = useContext(apicontext)
    const {setOnCart} = useContext(cartcontext)
    const {setOnWishlist} = useContext(Wishlistcontext)
  return (
    <div className='api fake'>
      <div className="container my-5 d-flex flex-column align-items-center">
        <b className='h1 d-block text-center'>FAKE PRODUCTS</b>
        <p className='my-3 text-center w-75'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sint dicta provident corporis hic esse porro accusantium ullam. Consectetur id mollitia ipsa tenetur sequi exercitationem facere rem itaque error! Velit!</p>
        <div className="row g-3">
            {fakeprods.map((val , id)=>{
                return(
            <div className="col-xl-3 col-md-6 col-12" key={id}>
                <div className="card">
                    <Link to={`${val.id}`} className="contain-img">
                        <img src={val.image} alt="" className='card-img w-75'/>
                    </Link>
                    <div className="card-body">
                        <b>{val.title?.split(' ').slice(0 , 2).join(' ')}</b>
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

export default FakeApi
