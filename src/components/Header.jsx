import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div  className="flex gap-4 justify-between p-4 bg-gray-900 text-white">
        <h2 className='font-bold text-2xl'>React TanStack Query</h2>
    <nav className='flex gap-4'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Project</NavLink>
        <NavLink to="/fetchRQ">FetchRQ</NavLink>
        <NavLink to="/inf-scroll">Infinite Scroll</NavLink>
      </nav>
      </div>
  )
}

export default Header