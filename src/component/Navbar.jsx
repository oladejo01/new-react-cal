import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li> <Link a = "/Home">Home</Link> </li>
            <li><Link a = "/About">About</Link></li>
            <li></li>
        </ul>
    </div>
  )
}

export default Navbar