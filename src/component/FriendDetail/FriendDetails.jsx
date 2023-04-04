import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function FriendDetails() {
  const friends = useLoaderData()
  console.log(friends)
  return (
    <div>
      <h1>{friends.name}</h1>
      
    </div>
  )
}
