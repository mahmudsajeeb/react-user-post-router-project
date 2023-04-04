import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Post from '../Post/Post'
import './Posts.css'
export default function Posts() {
  const posts = useLoaderData()
  console.log(posts)
  return (
    <div className='posts'>
      {
        posts.map(post =><Post key={post.id} post={post} />)
      }
    </div>
  )
}
