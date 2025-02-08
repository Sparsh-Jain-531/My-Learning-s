import React, { useState } from 'react'

const Form_Handling_02 = () => {

    const [username, setUsername] = useState("")
    
      const submitHandler=(e)=>{
        e.preventDefault()
        console.log(username) 
        setUsername("")
      }
    
      const inputChangeHandler=(e)=>{
        setUsername(e.target.value)
      }

  return (
    <>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input
        type="text"
        value={username}
        onChange={(e)=>{
          inputChangeHandler(e)
        }}
        placeholder="Enter Name"
        className='border-2 border-black m-2'
         />
        <button className='bg-green-500 text-white px-2 py-1 rounded-md'type="submit">Submit</button>
      </form>
    </>
  )
}

export default Form_Handling_02
