import React, { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'

export const cartcontext = createContext()
export const CartContextProvider = (props)=>{
    const [cart , setCart] = useState([])



    function setOnCart(pro){
        const selected = cart.find((el)=> el.title === pro.title)
        if (!selected){
            Swal.fire({
                title: `This Product <br> <span class='text-success'>${pro.title?.split(' ').slice(0 , 2).join(' ')}</span> <br> Added Successfully`,
                icon: "success",
                showConfirmButton : false ,
                timer : 1500
              });
              setCart([...cart , {...pro , amount : 1}])
        }else{
            Swal.fire({
                title: `This Product <br> <span class='text-warning'>${pro.title?.split(' ').slice(0 , 2).join(' ')}</span> <br> Added Before`,
                icon: "info",
                showConfirmButton : false ,
                timer : 1500
              });
        }
    }

    
    
    
    
    function removeCart(pro){
        const newarr = cart.filter((el)=> el.title !== pro.title)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                showConfirmButton : false ,
                timer : 1000
              });
              setCart([...newarr])
            }
          });
    }

    
    
    
    
    function increment(pro){
        pro.amount++
        setCart([...cart])
    }
    function decrement(pro){
        if(pro.amount > 1){
            pro.amount--
            setCart([...cart])
        }else{
            removeCart(pro)
        }
    }










    useEffect(()=>{
        if(localStorage.getItem('cart') == null){
            setCart([])
        }else{
            setCart(JSON.parse(localStorage.getItem('cart')))
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('cart' , JSON.stringify(cart))
    },[cart])
    return(
        <cartcontext.Provider value={{setOnCart , cart , increment , decrement , removeCart }}>
            {props.children}
        </cartcontext.Provider>
    )
}