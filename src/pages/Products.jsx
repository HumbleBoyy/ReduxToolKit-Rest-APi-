import React from 'react'
import getRequest from '../service/getRequest'
import ProductCard from '../components/ProductCard'

const Products = () => {
    const {products} = getRequest("/products")
    console.log(products)
  return (
    <div>
      {products?.map(item => <ProductCard key={item.id} item={item}/>)}
    </div>
  )
}

export default Products
