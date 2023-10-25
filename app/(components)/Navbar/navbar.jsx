import React from 'react'
import "../Navbar/navbar.css"
import Link from 'next/link'
import {BiUserCircle} from 'react-icons/bi'
const Navbar = () => {
  return (
    <div>
    <nav>
        <h1 className='logo'>Camper</h1>
        <ul>
            <li><Link className='a' href={"https://www.pinterest.com/homefeed/"} target='_blank'>Travel Map</Link></li>
            <li><Link className='a' href={"/"}>About us</Link></li>
            <li><Link className='a'href={"/"}>Blog</Link></li>
        </ul>
        <div className='account'>
            <span><BiUserCircle/></span>
            <Link className='a' href={"/"}>Account</Link>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
