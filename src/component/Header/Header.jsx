import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}
