import React, { useState } from 'react'
import { useUser } from '../context/UserContext'

const Login = () => {
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const {setUser}=useUser()
    const submitHandler=(e)=>{
        e.preventDefault();
        setUser({name,password})
    }
  return (
    <div>
      <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} />
      <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
      <button type="submit" onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Login
