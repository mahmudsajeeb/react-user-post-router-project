import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Friend from '../Friend/Friend'
import './Friends.css'
export default function Friends() {

  const friends = useLoaderData()
  
  return (
    <div className='friends'>
      {
        friends.map(friend => <Friend key={friend.id} friend={friend} />)
      }
    </div>
  )
}
