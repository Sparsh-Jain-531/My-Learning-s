import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const passwordRef = useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz"

    if(numberAllowed) str+= "0123456789";
    if(charAllowed) str+= "!@#$%^&*+_)(}{|?";

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length, numberAllowed, charAllowed, setPassword])

  const copyPassword=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,5) // range to select
    window.navigator.clipboard.writeText(password)
  },[password]) 

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <h1 className='text-4xl text-center m-10'>Password Generator</h1>
      <div>
        <div>
          <input ref={passwordRef} type="text" value={password} readOnly placeholder='Password' className='border border-black'/>
          <button onClick={copyPassword}>copy</button>
        </div>
        <div>
          <div>
            <input type="range" min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}} />
            <label htmlFor="">Lenght: {length}</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
            <label htmlFor="">Number Allowed</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked={charAllowed} onChange={()=>{setCharAllowed((prev)=>!prev)}} />
            <label htmlFor="">Character Allowed</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
