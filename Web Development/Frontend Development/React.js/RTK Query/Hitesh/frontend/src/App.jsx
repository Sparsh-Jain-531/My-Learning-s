import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  // const [products,error,loading]=customReactQuery("/api/products")

  const [products, setProducts]=useState([])
  const [error, setError]=useState(false)
  const [loading, setLoading]=useState(false)
  const [search, setSearch]=useState("")
  useEffect(()=>{
    const controller=new AbortController();
    ;(
      async()=>{
        try {
          setError(false)
          setLoading(true)
          const response =await axios.get("/api/products?search="+search,{
            signal: controller.signal
          })
          setProducts(response.data)
          console.log(response.data)
        } catch (error) {
          if(axios.isCancel(error)){
            console.log("Request Canceled",error.message)
            return;
          }
          setError(true)
        } finally {
          setLoading(false)
        }
      }
    )()
    return()=>{
      controller.abort()
    }
  },[search])

  if(error){
    return(
      <h1>Something went wrong!</h1>
    )
  }
  if(loading){
    return(
      <h1>Loading Data...</h1>
    )
  }
  return (
    <>
    <h1>Products</h1>
    <input type="text"
    placeholder='Search Products..'
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    />
    <div>Number of products: {products.length}</div>
    </>
  )
}

export default App

const customReactQuery=(urlPath)=>{
  const [products, setProducts]=useState([])
  const [error, setError]=useState(false)
  const [loading, setLoading]=useState(false)
  useEffect(()=>{
    (
      async()=>{
        try {
          setError(false)
          setLoading(true)
          const response =await axios.get(urlPath)
          setProducts(response.data)
          console.log(response.data)
        } catch (error) {
          setError(true)
        } finally {
          setLoading(false)
        }
      }
    )()
  },[])

  return [products,error,loading]
}
