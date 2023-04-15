import { Link } from "react-router-dom";
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <Link to ='/'>Home</Link>
        <Link to='/todo'>Todo</Link>
        <Link to='/logout'>Logout</Link>
    </div>
  )
}