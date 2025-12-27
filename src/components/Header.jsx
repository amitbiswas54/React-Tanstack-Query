import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {

   const linkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-all
     ${
       isActive
         ? "bg-orange-600 text-white shadow"
         : "text-orange-600 hover:bg-orange-100 hover:text-orange-900"
     }`;


  return (
    <div  className="flex gap-4 justify-between p-4 bg-gray-900 text-white">
        <h2 className='font-bold text-2xl'>React TanStack Query</h2>
    <nav className='flex gap-4'>
                 <NavLink to="/" className={linkClasses}>
            Project Overview
          </NavLink>

          <NavLink to="/fetchRQ" className={linkClasses}>
            FetchRQ
          </NavLink>

          <NavLink to="/inf-scroll" className={linkClasses}>
            Infinite Scroll
          </NavLink>

          <NavLink to="/intersection-observer" className={linkClasses}>
            Intersection Observer
          </NavLink>
      

      </nav>
      </div>
  )
}

export default Header