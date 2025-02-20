import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const Likes = () => {
    const likeList = useSelector(state => state.likeList)
  return (
    <div className='flex flex-wrap gap-3 mx-auto py-5'>
      {likeList.map(item => <ProductCard key={item.id} item={item}/>)}
    </div>
  )
}

export default Likes
