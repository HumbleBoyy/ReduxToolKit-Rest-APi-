import React from 'react'
import Navbar from '../modules/Navbar'
import Products from '../pages/Products'
import { Routes, Route } from 'react-router-dom'
import Likes from '../pages/Likes'

const Layout = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/likes' element={<Likes/>}/>
      </Routes>
    </div>
  )
}

export default Layout
