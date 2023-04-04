import React from 'react'
import './Friend.css'
import { Link } from 'react-router-dom'
export default function Friend({friend}) {
  
  const {email,id,phone,name} =friend
  return (
    <div className='friend'>
      <h1>{name}</h1>
      <p>Email:{email}</p>
      <p>Phone: {phone}</p>
       <p><Link to={`/friend/${id}`}>Show Me Details</Link></p>
    </div>
  )
}
