import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

export default function PostDetails() {
  const post = useLoaderData()
  const {id,title,body}=post
  const navigate = useNavigate()
  const goBackBtn =()=>{
    navigate(-1)
  }
  return (
    <div>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <button onClick={goBackBtn}>Go Bact</button>
    </div>
  )
}
