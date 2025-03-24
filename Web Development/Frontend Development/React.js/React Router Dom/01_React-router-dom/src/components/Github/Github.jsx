import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {

  const data=useLoaderData();  //call api on hover before calling

  // const [data, setData]=useState([])
  // useEffect(()=>{
  //   fetch("https://api.github.com/users/Sparsh-Jain-531")
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     console.log(data)
  //     setData(data)
  //   })
  // },[])

  return (
    <div>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github;



{/* The purpose of this is that when you hover on this route it start calling the api so that when you click on this route the ui does not lag. */}
export const githubInfoLoader=async ()=>{
  const response=await fetch("https://api.github.com/users/Sparsh-Jain-531");
  return response.json()
}
