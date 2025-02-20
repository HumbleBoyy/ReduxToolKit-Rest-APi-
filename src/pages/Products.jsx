import React from 'react'
import getRequest from '../service/getRequest'
import ProductCard from '../components/ProductCard'

const Products = () => {
    const {products} = getRequest("/products")
  return (
    <div className='flex flex-wrap justify-center gap-2 py-5'>
      {products?.map(item => <ProductCard key={item.id} item={item}/>)}
    </div>
  )
}

export default Products
