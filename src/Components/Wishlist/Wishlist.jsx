import React, { useContext } from 'react'
import './Wishlist.css'
import { TbTrashX } from "react-icons/tb";
import { FaCartShopping } from 'react-icons/fa6';
import { cartcontext } from '../../Context/CartContext';
import { Wishlistcontext } from '../../Context/WishlistContext';
function Wishlist() {
  const {setOnCart} = useContext(cartcontext)
  const {wishlist , removeWishlist} = useContext(Wishlistcontext)
  return (
    <div className='Wishlist'>
      <div className="container my-5">
        <b className='h1 d-block text-center mb-5'>WISH LIST</b>
        <div className="row">
          {wishlist.length > 0 ?
          <>
          {wishlist.map((val , index)=>{
            return(
          <div className="col-xl-3 col md-6 col-12" key={index}>
          <div className="card">
            <div className="contain-img">
              <img src={val.img || val.image || val.thumbnail} alt="" className='card-img' style={{hieght : '250px'}}/>
            </div>
            <div className="card-body">
              <b className='d-block text-center fs-3' style={{color : 'var(--main-color)'}}>{val.title?.split(' ').slice(0 , 2).join(' ')}</b>
              <p className='text-center fw-bold fs-5'>price : ${val.price}</p>
              <div className="add">
                    <FaCartShopping onClick={()=> setOnCart(val)}/>
                    <TbTrashX style={{backgroundColor : 'red'}} onClick={()=> removeWishlist(val)}/>
                </div>
            </div>
            </div>
          </div>
            )
          })}
          </>:
             <div className='text-danger text-center h2 fs-1'>Your Wishlist Is Empty</div>
          }
        </div>
      </div>
    </div>
  )
}

export default Wishlist
