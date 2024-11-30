import React, { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'

export const Wishlistcontext = createContext()
export const WishlistContextProvider = (props)=>{
    const [wishlist , setWishlist] = useState([])



    function setOnWishlist(pro){
        const selected = wishlist.find((el)=> el.title === pro.title)
        if (!selected){
            Swal.fire({
                title: `This Product <br> <span class='text-success'>${pro.title?.split(' ').slice(0 , 2).join(' ')}</span> <br> Added Successfully`,
                icon: "success",
                showConfirmButton : false ,
                timer : 1500
              });
              setWishlist([...wishlist , pro])
        }else{
            Swal.fire({
                title: `This Product <br> <span class='text-warning'>${pro.title?.split(' ').slice(0 , 2).join(' ')}</span> <br> Added Before`,
                icon: "info",
                showConfirmButton : false ,
                timer : 1500
              });
        }
    }

    
    
    
    
    function removeWishlist(pro){
        const newarr = wishlist.filter((el)=> el.title !== pro.title)
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
              setWishlist([...newarr])
            }
          });
    }









    useEffect(()=>{
        if(localStorage.getItem('wishlist') == null){
            setWishlist([])
        }else{
            setWishlist(JSON.parse(localStorage.getItem('wishlist')))
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('wishlist' , JSON.stringify(wishlist))
    },[wishlist])
    return(
        <Wishlistcontext.Provider value={{wishlist , setOnWishlist , removeWishlist}}>
            {props.children}
        </Wishlistcontext.Provider>
    )
}