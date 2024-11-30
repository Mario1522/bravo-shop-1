import React, { useContext } from 'react'
import './Cart.css'
import test from '../../assets/images/product-1-Eqx8spQ9-Eqx8spQ9.jpg'
import { cartcontext } from '../../Context/CartContext'

function Cart() {
  const {cart , increment , decrement , removeCart} = useContext(cartcontext)
  let totallprice = 0
  return (
    <div className='Cart'>
      <div className="container my-5">
        <b className='h1 d-block text-center mb-5'>CART</b>
        <div className="row g-4 justify-content-center">
        {cart.length > 0 ? 
            <>
          {cart.map((val , index)=>{
            totallprice += val.amount * val.price 
            return(
              <div className="col-xl-12" key={index}>
            <div className="urpro">
                <img src={val.img || val.image || val.thumbnail} alt="" />
                <div className="price">
                  <p>Price : ${val.price.toFixed(1)}</p>
                  <b>Total Price : ${val.price * val.amount.toFixed(1)}</b>
                </div>
                <div className="count">
                  <button className='btn btn-dark btn-sm' onClick={()=> increment(val)}>+</button>
                  <span className='mx-3'>{val.amount}</span>
                  <button className='btn btn-dark btn-sm' onClick={()=> decrement(val)}>-</button>
                </div>
                <button className='btn btn-danger' onClick={()=> removeCart(val)}>Remove From Cart</button>
            </div>
          </div>
            )
          })}
          <div className="col-xl-8">
            <div className="total">
            <b>Totall Cart</b>
            <span className='text-primary h3'>${totallprice.toFixed(3)}</span>
            </div>
          </div>
          </>:
          <div className='text-danger text-center h2 fs-1'>Your Cart Is Empty</div>
        }
        </div>
      </div>
    </div>
  )
}

export default Cart
