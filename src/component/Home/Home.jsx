import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

export default function Home() {
  return (
    <>
    <Header />
    <div>Home</div>
    
    <Outlet />

    </>
  )
}
