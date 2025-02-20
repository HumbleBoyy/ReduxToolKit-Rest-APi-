import React from 'react'
import getRequest from './service/getRequest'

const App = () => {
  const products = getRequest("/products")
  console.log(products)
  return (
    <div className='flex justify-center h-[100vh] items-center'>
      App
    </div>
  )
}

export default App
