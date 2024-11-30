import React, { useContext } from 'react'
import './Navbar.css'
import { FaHeart } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { cartcontext } from '../../Context/CartContext';
import { Wishlistcontext } from '../../Context/WishlistContext';
import { FaMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import { apicontext } from '../../Context/ApiContext';

function Navbar() {
  const {cart} = useContext(cartcontext)
  const {wishlist} = useContext(Wishlistcontext)
  const {changeMode , dark} = useContext(apicontext)
  return (
    <div className='Navbar sticky-top'>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Bravo <span>Shop</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-lg-0 align-items-center">
        <li className="nav-item">
          <Link tp={''} className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'about'} className="nav-link" href="#">About</Link>
        </li>
        <li className="nav-item">
          <Link to={'shop'} className="nav-link" href="#">Shop</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu">
            <li><Link to={'fakeapi'}className="dropdown-item" href="#">Fake Api</Link></li>
            <li><Link to={'dummyapi'} className="dropdown-item" href="#">Dummy Api</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to={'contact'} className="nav-link" href="#">Contact</Link>
        </li>
        <li>
          {!dark ?
          <FaMoon className='mood mx-1 d-block text-dark' onClick={changeMode}/>
          :
          <CiSun className='mood mx-1 d-block text-warning fs-1' onClick={changeMode}/>
          }
        </li>
      </ul>
      <div className="shopping">
        <div>
          <Link to={'wishlist'}><FaHeart className='heart'/></Link>
          <sub>({wishlist.length})</sub>
        </div>
          <div>
          <Link to={'cart'}><FaCartShopping className='cart'/></Link>
          <sub>({cart.length})</sub>
          </div>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
