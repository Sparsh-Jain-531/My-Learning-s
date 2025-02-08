import React, { useState } from 'react'

const State_01 = () => {

    const [num, setNum] = useState(0)
    
      const add=()=>{
        setNum(num+1)
      }

  return (
    <>
      <div className="text-red-500">Number is: {num}</div>
      <button className="border-2 border-black px-2" onClick={add}>Add</button>
    </>
  )
}

export default State_01
