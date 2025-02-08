import React from 'react'
import { Link } from 'react-router-dom'

const Navbar_03 = () => {
  return (
    <>
    <nav className="flex justify-between items-center p-5 bg-emerald-700 text-white">
        <h2 className="ml-12"><Link to={"/"}>Learn React</Link></h2>
        <div className="mr-8 flex justify-center items-center gap-20">
            <Link to={"/"}>Home</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar_03
