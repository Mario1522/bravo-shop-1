import React, { createContext, useEffect, useState } from "react";
import  axios from 'axios'
export const apicontext = createContext()
export const ApiContextProvider = (props)=>{
    const [fakeprods , setFakeProds] = useState([])
    const [dummyprods , setDummyProds] = useState([])
    const [dark , setdark] = useState(false)
    
    const fakelink = 'https://fakestoreapi.com/products'
    const dummylink = 'https://dummyjson.com/products'

    async function getFake() {
        const {data} = await axios.get(fakelink)
        setFakeProds(data)
    }
    async function getDummy() {
        const {data} = await axios.get(dummylink)
        setDummyProds(data.products)
    }
    function changeMode(){
        setdark(!dark)
    }
    useEffect(()=>{
        getFake()
        getDummy()
    },[])
    useEffect(()=>{
        setdark(JSON.parse(localStorage.getItem('dark')))
    },[])
    useEffect(()=>{
        localStorage.setItem('dark' , dark)
    },[dark])

    return(
        <apicontext.Provider value={{fakeprods , dummyprods , dark , changeMode}}>
            {props.children}
        </apicontext.Provider>
    )
}