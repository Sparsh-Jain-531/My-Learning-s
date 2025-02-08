import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

const Axios_06 = () => {

    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const data=async()=>{
            try {
                setLoading(true);
                const response=await axios.get("https://fakestoreapi.com/products")
                setDatas(response.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        data()
    },[])
    useEffect(() => {
        console.log(datas);
    }, [datas]); // Logs the data after it updates
  return (
    <div>
        {loading ? (
            <div>Loading...</div>
        ):(
            datas.map((i,index)=>{
                return (
                    <div key={index} className="m-5">
                        <div><span className="font-bold">S.No. </span>{i.id}</div>
                        <div><span className="font-bold">Category: </span>{i.category}</div>
                        <div><span className="font-bold">Description: </span>{i.description}</div>
                        <div><span className="font-bold">Price: </span>{i.price}</div>
                        <div><span className="font-bold">Title: </span>{i.title}</div>
                        <div><span className="font-bold">Rating: </span>{i.rating.rate}</div>
                        <div><span className="font-bold">Count: </span>{i.rating.count}</div>
                    </div>
                )
            })
        )}
    </div>
  )
}

export default Axios_06
