import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export const Products = () => {
  return (
    <>
        <input type='search' placeholder='Search Products'/>
        <nav>
            <Link to='features'>Features</Link>
            <Link to='new'>New</Link>
            <Outlet />
        </nav>
    </>
  )
}
