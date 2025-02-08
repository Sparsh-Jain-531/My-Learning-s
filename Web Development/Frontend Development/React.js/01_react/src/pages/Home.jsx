import React, { useContext } from 'react'
import { DataContext } from '../Context/UserContext'

const Home = () => {
    const data=useContext(DataContext)
    console.log(data)
  return (
    <>
    <div className="text-center font-bold text-2xl m-10">
      Home Page
    </div>
    <div className="flex flex-col justify-center items-center">
        <div>{data.name}</div>
        <div>{data.age}</div>
        <div>{data.occupation}</div>
    </div>
    </>
  )
}

export default Home
