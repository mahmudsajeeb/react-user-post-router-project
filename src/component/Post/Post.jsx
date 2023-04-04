import React from 'react'
import './Post.css'
import { Link, useNavigate } from 'react-router-dom'
export default function Post({post}) {
// console.log(post)
  const {id, title,body} = post
   const navigate = useNavigate()
  const handleNavigation = ()=>{
      navigate(`/post/${id}`)
  }
  return (
    <div className='post'>
        <h1>{title}</h1>
        <p>{body}</p>
         
        <p><Link to={`/post/${id}`}>Show Details</Link></p>
        <button onClick={handleNavigation}>With Button Handler</button>
    </div>
  )
}
