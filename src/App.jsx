import React, { lazy, Suspense, useContext , useState , useEffect} from 'react'
import Navbar from './Components/Navbar/Navbar'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Shop from './Components/Shop/Shop'
import Contact from './Components/Contact/Contact'
import FakeApi from './Components/Api/FakeApi'
import DummyApi from './Components/Api/DummyApi'
import Cart from './Components/Cart/Cart'
import Wishlist from './Components/Wishlist/Wishlist'
import { apicontext } from './Context/ApiContext'
import loading from './lottie-files/loading.json'
import Lottie from 'lottie-react'
import error from './lottie-files/error.json'
import FakeDetails from './Components/FakeDetails/FakeDetails'
import DummyDetails from './Components/DummyDetails/DummyDetails'
// import Layout from './Layout'

const Layout = lazy( ()=> import('./Layout')  )
function App() {
  const load = <div className='vh-100 d-flex align-items-center justify-content-center'>
    <Lottie style={{width : '300px'}}animationData={loading}/>
  </div>
  const errorlotti = <div className='vh-100 d-flex align-items-center justify-content-center'>
    <Lottie style={{width : '300px'}}animationData={error}/>
    </div>
  const {dark} = useContext(apicontext)

  



  const routes = createBrowserRouter([
    {
      path : '' ,
      element : <Suspense fallback={load} > <Layout/> </Suspense>, 
      children : [
        {index : true , element : <Home/>} ,
        {path : 'about' , element : <About/>},
        {path : 'shop' , element : <Shop/>},
        {path : 'contact' , element : <Contact/>},
        {path : 'fakeapi' , element : <FakeApi/>},
        {path : 'dummyapi' , element : <DummyApi/>},
        {path : 'cart' , element : <Cart/>},
        {path : 'wishlist' , element : <Wishlist/>},
        {path : 'fakeapi/:id' , element : <FakeDetails/>},
        {path : 'dummyapi/:id' , element : <DummyDetails/>},
      ],
      errorElement : errorlotti
    }
  ])
  return (
    <main className={dark ? 'dark' : ''}>
      <RouterProvider router={routes}/>
    </main>
  )
}

export default App
